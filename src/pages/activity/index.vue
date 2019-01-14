<template>
  <div class="activity">
    <div class="logo">
    </div>
    <div class="title">闪耀之星活动</div>
    <p class="introduction">
      这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。
    </p>
    <div class="enter">
      <mt-button type="primary" @click="toEnter">立即报名</mt-button>
    </div>
    <div class="rule">
      <mt-button type="primary" @click="toRule">
        活动规则
      </mt-button>
    </div>
    <mt-popup class="rule-modal" v-model="showRule" popup-transition="popup-fade">
      <div class="content">
        <p class="rule-title">活动说明：</p>
        <p class="rule-content">
          这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。
        </p>
        <p class="rule-title">活动规则：</p>
        <p class="rule-content">
          这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。
        </p>
        <p class="rule-title">活动时间：</p>
        <p class="rule-content">
          2019-02-17 </p>
      </div>
      <img src="../../assets/images/close-bag.png" class="close" @click="closeRule">
    </mt-popup>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Popup,
    Button
  } from "mint-ui";
  Vue.component(Button.name, Button);
  Vue.component(Popup.name, Popup);

  export default {
    data() {
      return {
        showRule: false
      }
    },
    components: {},
    methods: {
      toEnter() {
        this.$router.push({
          name: "activityEnter"
        })
      },
      toRule() {
        this.showRule = true;
      },
      closeRule() {
        this.showRule = false;
      }
    },
  }

</script>
<style lang="less">
  .activity {
    text-align: center;

    .logo {
      background: url("../../assets/images/logo.jpg");
      background-size: cover;
      margin: 50px 125px 50px 125px;
      width: 500px;
      height: 333px;
    }

    .title {
      font-size: 48px;
    }

    .introduction {
      font-size: 20px;
      padding: 50px;
    }

    .button {
      background: #3498db;
      width: 260px;
      height: 90px;
      padding: 4px 0;
      border-radius: 10px;
      color: #ffffff;
      font-size: 32px;
    }

    .enter {
      margin-top: 20px;
    }

    .rule {
      margin-top: 50px;
    }

    .rule-modal {
      width: 680px;
      border-radius: 20px;

      .content {
        text-align: left;
        padding: 50px;

        .rule-title {
          font-size: 36px;
          margin: 10px;
        }

        .rule-content {
          padding: 10px;
          font-size: 20px
        }
      }

      .close {
        width: 88px;
        height: 88px;
        margin-bottom: 20px;
      }
    }
  }

</style>
