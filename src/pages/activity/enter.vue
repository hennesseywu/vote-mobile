<template>
  <div class="enter">
    <div class="logo"></div>
    <mt-field label="姓名" placeholder="请输入参赛者用姓名" type="text" v-model="name"></mt-field>
    <mt-field
      label="年龄"
      placeholder="请输入参赛者年龄"
      type="number"
      :attr="{ maxlength: 10 }"
      v-model="age"
    ></mt-field>
    <mt-radio title="性别" class="sex" v-model="sex" :options="['男', '女']"></mt-radio>
    <mt-field label="身份证号" placeholder="请输入参赛者身份证号" type="text" v-model="idCard"></mt-field>
    <mt-field placeholder="自我介绍" type="textarea" rows="4" v-model="remark"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" :attr="{ maxlength: 11 }" v-model="phone"></mt-field>
    <!-- <mt-field label="验证码" placeholder="请输入验证码" :attr="{ maxlength: 5 }" v-model="verifyCode">
      <img slot="icon" src="" width="24" height="24">
    </mt-field>-->
    <div class="bottom">
      <mt-button type="primary" @click="submitForm">提交报名</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field, Button, Picker, Radio } from "mint-ui";
Vue.component(Radio.name, Radio);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Picker.name, Picker);

export default {
  data() {
    return {
      name: "111",
      age: 12,
      sex: "",
      idCard: "51002112121212",
      phone: "",
      verifyCode: "",
      remark: "时空裂缝几十块家乐福卡死了几十块六角恐龙",
      slots: [
        {
          flex: 1,
          values: ["男", "女"],
          // className: 'slot1',
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    submitForm() {
      this.$router.push({ name: "activityEnterSuccess" });
      return;
      let postData = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        idCard: this.idCard,
        remark: this.remark
      };
      this.$ajax.post("/syzxEnterInfo/add", postData);
    }
  }
};
</script>
<style lang="less">
.enter {
  .logo {
    background: url("../../assets/images/logo-2.jpg");
    background-size: cover;
    margin: 50px 125px 50px 125px;
    width: 500px;
    height: 333px;
  }
  .sex {
    label{
    font: 28px PingFangSC-Regular;
    }
  }
  .bottom {
    margin: 20px 0 50px 0;
    text-align: center;
  }
}
</style>
