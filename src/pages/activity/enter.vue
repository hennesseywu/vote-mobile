<template>
  <div class="enter">
    <form ref="form">
      <div class="logo"></div>
      <group>
        <x-input title="姓名" required name="name" ref="name" v-model="name" placeholder="请输入参赛者姓名" is-type="china-name"></x-input>
        <x-input title='年龄' :max="2" required name="age" ref="age" placeholder="请输入参赛者年龄" v-model="age"></x-input>
        <group>
          <cell title="性别" v-model="sexLabel" @click.native="showRadio">
          </cell>
          <input type="hidden" name="sex" v-model="sex">
        </group>
        <x-input title="身份证号" :max="18" required name="idCard" ref="idCard" v-model="idCard" placeholder="请输入参赛者身份证号"
          keyboard="number"></x-input>
        <div class="form-file">
          <div class="photo" id="photo">
            <input type="file" multiple="multiple" accept="image/*" class="file" ref="images" name="images" @change="onFile($event,'photo')">
          </div>
          <div class="video" id="video">
            <input type="hidden" name="videoFileName" v-model="videoFileName">
            <input type="file" multiple="multiple" accept="video/*" class="file" ref="video" name="video" @change="onFile($event,'video')">
          </div>
        </div>
        <x-textarea title="介绍" required v-model="remark" name="remark" ref="remark" placeholder="请对你的资料做简单介绍~">
        </x-textarea>
        <x-input title="手机号码" :max="11" required name="phone" ref="phone" v-model="phone" placeholder="请输入手机号码"
          keyboard="number" is-type="china-mobile"></x-input>
      </group>
      <div>
      </div>
      <!-- <mt-field label="验证码" placeholder="请输入验证码" :attr="{ maxlength: 5 }" v-model="verifyCode">
      <img slot="icon" src="" width="24" height="24">
      </mt-field>-->
    </form>
    <popup v-model="sexShow" position="bottom" max-height="50%">
      <group>
        <radio :options="radioOption" @on-change="radioChange"></radio>
      </group>
    </popup>
    <div class="bottom">
      <x-button type="primary" @click.native="submitForm">提交报名</x-button>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import {
    XInput,
    Group,
    XButton,
    Radio,
    XTextarea,
    PopupPicker,
    ToastPlugin,
    LoadingPlugin,
    Cell,
    Popup
  } from "vux";

  Vue.use(ToastPlugin)
  Vue.use(LoadingPlugin)

  export default {
    components: {
      Cell,
      XInput,
      Group,
      XButton,
      Radio,
      XTextarea,
      PopupPicker,
      Popup
    },
    data() {
      return {
        name: "",
        age: "",
        sex: "",
        idCard: "",
        phone: "",
        verifyCode: "",
        video: "video",
        videoFileName: "video",
        remark: "",
        selectedImage: false,
        selectedVideo: false,
        sexLabel: "请选择性别",
        sexShow: false,
        radioOption: [{
          key: "1",
          value: "男"
        }, {
          key: "2",
          value: "女"
        }]
      };
    },
    methods: {
      showRadio() {
        this.sexShow = true;
      },
      radioChange(value, label) {
        this.sexLabel = label;
        this.sex = value;
        this.sexShow = false;
      },
      onFile(e, type) {
        let checkResult = this.checkFileSize(e.target.files, type); //表单验证统一处理
        if (checkResult) {
          if (type == "photo") {
            var reads = new FileReader();
            reads.readAsDataURL(e.target.files[0]);
            reads.onload = function (e) {
              document.getElementById(type).style["background-image"] =
                `url(${e.currentTarget.result})`;
            };
            this.selectedImage = true;
          } else {
            this.selectedVideo = true;
          }
        }
      },
      checkFileSize(files, type) {
        for (let i = 0; i < files.length; i++) {
          if (type == "photo" && files[i].size > 1024 * 1024 * 2) {
            this.$vux.toast.text("图片不能超过2M")
            return false;
          } else if (type == "video" && files[i].size > 1024 * 1024 * 10) {
            this.$vux.toast.text("视频不能超过10M")
            return false;
          }
        }
        return true;
      },
      submitForm() {
        if (!this.checkForm()) return;
        var form = new FormData(this.$refs.form);
        this.$vux.loading.show();
        this.$ajax({
          method: "post",
          url: "/syzxEnterInfo/add",
          data: form,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((result) => {
          this.$vux.loading.hide()
          if (result.data.success && result.data.id) {
            localStorage.setItem("userId", result.data.id)
            this.$router.push({
              name: "activityEnterSuccess"
            });
          } else {
            if (result.data.msg) {
              this.$vux.toast.text(result.data.msg)
            }
          }
        });
        return;
      },
      checkForm() {
        let namePattern = /^[\u4E00-\u9FA5]{1,5}$/; //中文
        let agePattern = /^\d{1,2}$/; //数字
        let idPattern = /^\d{15}|\d{}18$ / //身份证
        let phonePattern = /^1\d{10}$/ //手机号
        if (!this.$refs.name.valid) {
          this.$vux.toast.text("请填写名字")
          return false;
        } else if (!this.$refs.age.valid || !agePattern.test(this.age)) {
          this.$vux.toast.text("请填写正确的年龄")
          return false;
        } else if (this.sex == "") {
          this.$vux.toast.text("请选择性别")
          return false;
        } else if (!idPattern.test(this.idCard)) {
          this.$vux.toast.text("请填写正确的身份证号")
          return false;
        } else if (!this.$refs.phone.valid) {
          this.$vux.toast.text("请填写正确的手机号")
          return false;
        } else if (this.remark == "") {
          this.$vux.toast.text("请填写介绍信息")
          return false;
        } else if (!this.selectedImage) {
          this.$vux.toast.text("请上传图片")
          return false;
        } else if (!this.selectedVideo) {
          this.$vux.toast.text("请上传视频")
          return false;
        } else {
          return true;
        }

      }
    }
  };

</script>
<style lang="less">
  .enter {
    .logo {
      background: url("../../assets/images/logo-2.jpg");
      background-size: cover;
      margin: 10px 125px 50px 125px;
      width: 500px;
      height: 333px;
    }

    .form-file {
      display: flex;

      .file {
        opacity: 0;
        width: 200px;
        height: 200px;
      }

      .photo {
        background: url("../../assets/images/upload-icon.jpg") center no-repeat;
        background-size: cover;
        width: 200px;
        height: 200px;
        margin: 20px;
      }

      .video {
        margin: 20px;
        background: url("../../assets/images/upload-icon.jpg") center no-repeat;
        background-size: cover;
        width: 200px;
        height: 200px;
      }
    }
  }

  .bottom {
    padding: 20px;
    text-align: center;
  }

</style>
