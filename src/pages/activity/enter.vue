<template>
  <div class="enter">
    <div v-if="ruleShow" class="rule">
      <img class="rule-logo" src="../../assets/images/rule-logo.png">
      <div class="rule-pannel">
        <p class="rule-title">报名规则</p>
        <div class="rule-content">
          <p class="rule-desc-title">一、 活动介绍：</p>
          <p class="rule-desc-content">
            《闪耀之星——少儿选拔赛》（男生版）是面向所有热爱舞台、才华横溢的男孩子来到我们的节目中，我们将在全成都进行开放式海选，选拔出最优秀的十九名少年组成“SJS组合”，打造成都首个少年团体。
            节目将于3月2日在成都电视台和全网进行播出。
            我们期待带着梦想的你们来到我们的舞台崭露头角！
          </p>
          <p class="rule-desc-title">二、 参与方法：</p>
          <p class="rule-desc-content">1． 进入耀强音传媒官方微信公众平台；</p>
          <p class="rule-desc-content">2． 点击立即报名；</p>
          <p class="rule-desc-content">3．
            填写基本资料，如姓名、年龄，身份证号，联系手机等，并上传一段选手一分钟的才艺视频和一张选手照片。个人资料请一定保证真实，主办方有权取消个人信息不真实的报名选手资格；未满十八周岁参与必须在个人简介中填写其监护人真实联系方式和身份证号码。</p>

          <p class="rule-desc-title">三、注意事项 ：</p>
          <p class="rule-desc-content">1．参与用户必须在线签订电子协议，凭借身份证及参赛券参加现场活动。</p>
          <p class="rule-desc-content">2．未满十八周岁参与用户必须填写其监护人真实联系方式和身份证号码，并由其监护人陪同到达现场。</p>
          <p class="rule-desc-content">3．入选者将会收到短信通知、微信提醒或电话通知，官方媒体将公布每一阶段入围情况，请密切关注。更换预留电话的选手请及时通过微信咨询功能告知导演组或重新报名。</p>
          <p class="rule-desc-title">四、赛程时间 ：</p>
          <p class="rule-desc-content">《闪耀之星》是由四川耀强音文化传媒有限公司作为承办方与成都广播电视台、谢家班明星舞蹈培训机构以及闪耀之星儿童艺术团联合主办的一档少儿选拔类节目。</p>
          <p class="rule-desc-content">(1) 参与者行为约定：</p>
          <p class="rule-desc-content">1．《闪耀之星》选手报名活动是主办方唯一官方网络报名通道。</p>
          <p class="rule-desc-content">2．为了保证活动顺利进行，请填写真实有效的个人信息，活动主办方有权因活动参与者填写的信息与真实信息不符取消其现场参赛资格。</p>
          <p class="rule-desc-content">3．参与用户必须在线签订电子协议，凭借身份证和入选成功短信参加复试。不能提供有效证件或证件信息无法核实选手的，主办方有权取消其现场参赛资格。</p>
          <p class="rule-desc-content">4．参与本次活动，请活动参与者自行安排交通、住宿、饮食等消费行为，主办方不承担任何费用。</p>
          <p class="rule-desc-content">5．参与本次活动，最终复试通过的选手，可根据自身情况自愿参加。</p>
          <p class="rule-desc-content">6．参与本次活动，请活动参与者注意保证人身安全和财产安全，参与途中遇到的任何意外事故，均与主办方无关。</p>
          <p class="rule-desc-content">
            7．参与本次活动涉及的消费，本公司只提供参与者在本公司的消费票据
            。如有需要，可电话联系本公司。解释权归四川耀强音文化传媒有限公司所有。
          </p>
          <p class="rule-desc-content">8．参与本次活动，请自觉遵纪守法，活动参与者途中如发生扰乱社会治安或危害他人利益的行为，均与主办方无关。</p>
          <p class="rule-desc-content">9．参与本次活动，须遵守现场秩序、活动规则和工作人员的指挥，活动参与者出现任何扰乱秩序和比赛公正性的行为，活动主办方有权剥夺其入场资格。</p>
          <p class="rule-desc-content">(2) 主办方免责条款 ：</p>
          <p class="rule-desc-content">．主办方开发H5页面作为此次活动的移动互联网平台。除耀强音传媒官方微信平台报名渠道外，任何以《闪耀之星》名义组织同类报名活动，均与主办方无关。请活动参与者注意识别，活动参与者在其他渠道如遭遇诈骗、欺诈等行为，请向司法机关举报，主办方均不承担任何责任。</p>
          <p class="rule-desc-content">2．本次活动期间如发生不可抗力导致活动不能正常进行的，主办方不承担任何责任。不可抗力是指不能控制不可预见或不能避免，
            即使预见亦无法避免的事件，该事件使任何一方根据本协议履行其全部或部分义务已不可能。包括社会异常事件、自然灾害或政府管制行为而造成的网络关闭等非基于主办方过错的行为。</p>
          <p class="rule-desc-content">3．鉴于互联网之特殊性质，活动期间若发生黑客攻击、电信部技术调整导致重大影响、病毒侵袭、网络故障、带宽、域名解析故障或其他网络设备或技术提供商的服务延迟、服务障碍或任何其他类似事件，致使活动无法正常进行，主办方因此免责。</p>
          <p class="rule-desc-content">4．用户自身主观过错或恶意，如不按正常流程操作、填写信息不真实、不完整等类似情形致使此次申请无效、无法核验用户真实信息而不能正常参赛的，主办方不承担任何责任。</p>
          <p class="rule-desc-content">5．由于第三方网站通过技术手段恶意攻击或篡改致使申请发生错误，主办方不负任何法律或经济责任，信息数据主办方公示为准。</p>
          <p class="rule-desc-content">6．主办方节目官方网站如因系统维护或升级而需暂停服务时，将事先公告。若因线路及硬件故障或其它不可抗力(含黑客攻击)而导致暂停服务，于暂停服务期间造成的一切不便与损失，主办方不承担任何责任。</p>
          <p class="rule-desc-content">(3) 用户隐私约定 ：</p>
          <p class="rule-desc-content">1．本次活动要求活动参与者提供真实的个人资料，如:姓名、性别、身份证号码、手机号码、居住地点等，在未经活动参与者同意的情况下，主办方不会将参与者的个人信息提供给任何第三方。</p>
          <p class="rule-desc-content">2．当政府司法机关依照法定程序要求主办方披露参与者个人资料时，我们将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，主办方均得免责。</p>
          <p class="rule-desc-content">3．由于用户将个人资料、证件转借或告知他人或与他人共享注册账户，由此导致的任何个人资料泄露，主办方不承担任何责任。</p>
          <p class="rule-desc-content">4．任何由于网络问题、黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常运行的不可抗力而造成的个人资料泄露、丢失、被盗用或被篡改等，主办方均得免责。</p>
          <p class="rule-desc-content">5．由于与节目官网链接的其它网站采用非正常的技术手段所造成之个人资料泄露及由此而导致的任何法律争议和后果，主办方均得免责。</p>
          <p class="rule-desc-content">(4) 法律责任条款 ：</p>
          <p class="rule-desc-content">1．活动主办方拥护和遵守中华人民共和国一切法规和制度。本协议所涉及的“法律”、“法规”条款，均指中华人民共和国法律法规。</p>
          <p class="rule-desc-content">2．活动参与者因为违反本协议的规定而触犯中华人民共和国法律的，一切后果由本人承担，与主办方无关。</p>
          <p class="rule-desc-content">3．凡以任何方式登陆本网站或直接、间接使用本网站而参加本次活动的行为，视为自愿接受本协议的约束。</p>
          <p class="rule-desc-content">4．本协议未涉及的问题参见国家有关法律法规，当本协议与国家法律法规冲突时，以国家法律法规为准。</p>
          <p class="rule-desc-content">解释权约定 ：</p>
          <p class="rule-desc-content">本协议以及其修改权、更新权及最终解释权均属主办方所有。</p>
        </div>
        <div class="rule-button" @click="closeRule"></div>
      </div>
    </div>
    <form ref="form">
      <div class="logo"></div>
      <group class="form-content">
        <x-input title="姓名" required name="name" ref="name" v-model="name" placeholder="请输入参赛者姓名" is-type="china-name"></x-input>
        <x-input title="年龄" :max="2" required name="age" ref="age" placeholder="请输入参赛者年龄" v-model="age"></x-input>
        <cell title="性别" is-link v-model="sexLabel" @click.native="showRadio"></cell>
        <input type="hidden" name="sex" v-model="sex">
        <x-input title="身份证号" :max="18" required name="idCard" ref="idCard" v-model="idCard" placeholder="请输入参赛者身份证号"
          keyboard="number"></x-input>
        <x-input title="手机号码" :max="11" required name="phone" ref="phone" v-model="phone" placeholder="请输入手机号码"
          keyboard="number" is-type="china-mobile"></x-input>
        <x-input title="验证码" placeholder="请输入验证码" v-model="smsCode" name="smsCode" ref="smsCode" required class="weui-vcode">
          <x-button :gradients="['#d157fa', '#b60ef0']" slot="right" @click.native="sendCode" action-type="button" mini>{{sendCodeText}}</x-button>
        </x-input>
        <cell value-align="left">
          <label class="photo-desc">提醒：请先填写完基本信息后再上传照片和视频</label>
          <div class="photo-group">
            <div class="photo">
              <form ref="imageForm1">
                <img class="photo-image" ref="photo1" src="../../assets/images/add-image.png">
                <input type="file" accept="image/*" class="file" name="photo1" @change="onFile($event,'photo1','imageForm1')">
              </form>
            </div>
            <div class="photo">
              <form ref="imageForm2">
                <img class="photo-image" ref="photo2" src="../../assets/images/add-image.png">
                <input type="file" accept="image/*" class="file" name="photo2" @change="onFile($event,'photo2','imageForm2')">
              </form>
            </div>
            <div class="photo">
              <form ref="imageForm3">
                <img class="photo-image" ref="photo3" src="../../assets/images/add-image.png">
                <input type="file" accept="image/*" class="file" name="photo3" @change="onFile($event,'photo3','imageForm3')">
              </form>
            </div>
            <div class="photo">
              <form ref="imageForm4">
                <img class="photo-image" ref="photo4" src="../../assets/images/add-image.png">
                <input type="file" accept="image/*" class="file" name="photo4" @change="onFile($event,'photo4','imageForm4')">
              </form>
            </div>
            <div class="photo">
              <form ref="imageForm5">
                <img class="photo-image" ref="photo5" src="../../assets/images/add-image.png">
                <input type="file" accept="image/*" class="file" name="photo5" @change="onFile($event,'photo5','imageForm5')">
              </form>
            </div>
          </div>
          <label class="photo-desc">注:上传3-5张您家孩子的照片,每张大小不超过2M</label>
        </cell>
        <cell value-align="left">
          <div class="video">
            <form ref="videoForm">
              <video v-show="selectedVideo" controls ref="realVideo" :src="videoUrl" class="video-image">
              </video>
              <img class="video-image" v-show="!selectedVideo" ref="videoImg" src="../../assets/images/add-video.png">
              <input type="hidden" name="videoFileName" v-model="videoFileName">
              <input type="file" accept="video/mp4" class="file" ref="video" name="video" @change="onFile($event,'video','videoForm')">
            </form>
          </div>
          <label class="photo-desc">注:上传一段您家孩子的才艺展示视频,时长不超过1分钟,大小不超过10M</label>
        </cell>
        <x-textarea required v-model="remark" name="remark" inline-desc="简介" ref="remark" class="remark" :max="200"
          :height="100" :rows="6" :autosize="true" :show-counter="true" placeholder="请对您家宝贝做个简单的介绍(如：姓名、年龄就读几年级、才艺特长、爱好、性格特点等方面)"></x-textarea>
      </group>
      <div></div>
    </form>
    <div class="bottom">
      <img src="../../assets/images/add-btn.png" @click="submitForm" class="add-button">
    </div>
    <div v-transfer-dom>
      <popup v-model="sexShow" position="bottom" max-height="50%">
        <group title="选择性别">
          <radio :options="radioOption" @on-change="radioChange"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import config from "../../config"

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

  Vue.use(ToastPlugin);
  Vue.use(LoadingPlugin);

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
        ruleShow: true,
        selectedImageCount: 0,
        selectedVideo: false,
        sexLabel: "请选择性别",
        sexShow: false,
        wechatId: "",
        uuid: "",
        sendCodeText: "获取验证码",
        smsCode: "",
        count: 60,
        videoUrl: "",
        radioOption: [{
            key: "1",
            value: "男"
          },
          {
            key: "2",
            value: "女"
          }
        ]
      };
    },
    created() {
      if (config.isDebug) {
        return;
      }
      if (localStorage.getItem("wechatId")) {
        this.wechatId = localStorage.getItem("wechatId");
      } else {
        window.location.href =
          `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=${encodeURIComponent(config.wxUrl)}/vote-mobile/enter&response_type=code&scope=snsapi_base#wechat_redirect`;
      }
    },
    methods: {
      closeRule() {
        this.ruleShow = false;
      },
      sendCode() {
        if (this.phone == "" || !this.$refs.phone.valid) {
          this.$vux.toast.text("请填写正确的手机号");
          return;
        }
        this.$ajax.post("/syzxEnterInfo/sendSms", {
            phone: this.phone,
            wechatId: this.wechatId
          })
          .then(result => {
            if (result.data && result.data.success) {
              this.$vux.toast.text("验证码发送成功");
            }
            this.countDown();
          })
        //发送验证码
      },
      countDown() {
        //倒计时
        this.sendCodeText = this.count + "秒后重发";
        let countInterval = setInterval(() => {
          this.sendCodeText = --this.count + "秒后重发";
          if (this.count === 0) {
            clearInterval(countInterval);
            this.count = 60;
            this.sendCodeText = "重发验证码";
          }
        }, 1000);
      },
      showRadio() {
        this.sexShow = true;
      },
      radioChange(value, label) {
        this.sexLabel = label;
        this.sex = value;
        this.sexShow = false;
      },
      onFile(e, displayName, formName) {
        let checkResult = this.checkFileSize(e.target.files, displayName); //表单验证统一处理
        if (checkResult) {
          if (displayName == "video") {
            this.uploadFile(e, displayName, formName);
          } else {
            this.uploadFile(e, displayName, formName);
          }
        }
      },
      getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      },
      uploadFile(e, displayName, formName) {
        console.log("target", e.target.files)
        //文件上传统一处理
        let form = new FormData(this.$refs[formName]);
        form.append("wechatId", this.wechatId);
        this.$vux.loading.show({
          text: "上传中"
        });
        this.$ajax({
            method: "post",
            url: "/syzxEnterInfo/upload",
            data: form,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(result => {
            this.$vux.loading.hide();
            if (result.data && result.data.success && result.data.msg) {
              if (displayName == "video") {
                this.selectedVideo = true;
                this.$refs.realVideo.src = result.data.msg; //file格式转url
                this.$vux.toast.text("视频上传成功");
              } else {
                this.$vux.toast.text("照片上传成功");
                this.selectedImageCount++;
                this.$refs[displayName].src = result.data.msg;
              }
            } else {
              this.$vux.toast.text("网络开小差啦，请稍后重试");
            }

          })
          .catch(e => {
            this.$vux.loading.hide();
            this.$vux.toast.text("网络开小差啦，请稍后重试");
            console.error("upload file", e);
          });
      },
      checkFileSize(files, type) {
        if (type == "video" && files && files[0].size > 1024 * 1024 * 10) {
          this.$vux.toast.text("视频大小不能超过10M");
          return false;
        } else {
          if (type.indexOf("photo") > -1 && files && files[0].size > 1024 * 1024 * 2) {
            this.$vux.toast.text("照片大小不能超过2M");
            return false;
          }
        }
        return true;
      },
      submitForm() {
        if (!this.checkForm()) return;
        var form = new FormData(this.$refs.form);
        form.append("wechatId", this.wechatId);
        this.$vux.loading.show({
          text: "提交中"
        });
        this.$ajax({
          method: "post",
          url: "/syzxEnterInfo/add",
          data: form,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(result => {
          this.$vux.loading.hide();
          if (result.data && result.data.success) {
            localStorage.setItem("submitForm", true);
            this.$router.push({
              name: "activityEnterSuccess"
            });
          } else {
            this.$vux.toast.text("网络开小差啦，请稍后重试");
          }
        });
        return;
      },
      checkForm() {
        let namePattern = /^[\u4E00-\u9FA5]{1,5}$/; //中文
        let agePattern = /^\d{1,2}$/; //数字
        let idPattern = /^\d{15}|\d{}18$ /; //身份证
        let phonePattern = /^1\d{10}$/; //手机号
        if (!this.$refs.name.valid) {
          this.$vux.toast.text("请正确的输入参赛者姓名");
          return false;
        } else if (
          !this.$refs.age.valid ||
          this.age === 0 ||
          !agePattern.test(this.age)
        ) {
          this.$vux.toast.text("请填写正确的年龄");
          return false;
        } else if (this.sex == "") {
          this.$vux.toast.text("请选择性别");
          return false;
        } else if (!idPattern.test(this.idCard)) {
          this.$vux.toast.text("请填写正确的身份证号");
          return false;
        } else if (this.selectedImageCount < 3) {
          this.$vux.toast.text("请上传3-5张图片");
          return false;
        } else if (!this.selectedVideo) {
          this.$vux.toast.text("请上传视频");
          return false;
        }
        // else if (this.remark == "") {
        //   this.$vux.toast.text("请填写介绍信息");
        //   return false;
        // }
        else if (!this.$refs.phone.valid) {
          this.$vux.toast.text("请填写正确的手机号");
          return false;
        } else if (!this.$refs.smsCode.valid) {
          this.$vux.toast.text("请填写验证码");
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
    .rule {
      position: fixed;
      z-index: 100;
      width: 750px;
      height: 100%;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.6);

      .rule-logo {
        width: 710px;
        height: 514px;
      }

      .rule-pannel {
        padding-top: 180px;
        width: 659px;
        height: 947px;
        background: #ffde9e;
        border-radius: 10px;
        margin: -220px 46px 0 45px;

        .rule-title {
          text-align: center;
          color: #380078;
          font-size: 44px;
        }

        .rule-content {
          margin: 0 30px 0 30px;
          width: 599px;
          height: 600px;
          overflow-x: hidden;
          overflow-y: auto;
        }

        .rule-desc-title {
          color: #404040;
          font-size: 24px;
          font-weight: bold;
        }

        .rule-desc-content {
          color: #404040;
          font-size: 20px;
          line-height: 32px;
        }

        .rule-button {
          width: 412px;
          height: 69px;
          background: url("../../assets/images/rule-btn.png");
          background-size: cover;
          margin: 10px 123px 49px 123px;
        }
      }
    }

    .logo {
      background: url("../../assets/images/add-title.png");
      background-size: cover;
      width: 750px;
      height: 228px;
    }

    .vux-no-group-title {
      margin-top: 0 !important;
    }

    .file {
      opacity: 0;
      width: 130px;
      height: 130px;
      margin: 5px;
    }

    .file-label {
      color: #999;
      font-size: 14px;
      max-width: 300px;
    }

    .file-group {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .photo-group {
      display: flex;

      .photo {
        width: 130px;
        height: 130px;
        margin: 5px;
      }

      .photo-image {
        width: 130px;
        height: 130px;
        position: absolute;
      }
    }

    .photo-desc {
      font-size: 20px;
      color: #999999;
    }

    .video {
      margin-bottom: 10px;
      height: 135px;

      .video-image {
        width: 135px;
        height: 135px;
        position: absolute;
      }
    }
  }

  .weui-textarea {
    font-size: 14px !important;
    padding: 5px !important;
  }

  // }

  .bottom {
    text-align: center;
    margin: 20px 0;

    .add-button {
      // background: url("../../assets/images/add-btn.png");
      // background-size: cover;
      width: 412px;
      height: 69px;
    }
  }

</style>
