<template>
  <div class="activity">
    <div class="logo"></div>
    <div class="title"></div>
    <div class="introduction"></div>
    <div class="enter-button" @click="toEnter">
    </div>
    <div class="bottom-logo"></div>
    <div class="bottom-desc">
      <p>四川耀强音传媒有限公司对此次活动保留最终解释权</p>
      <p>本次活动与Apple lnc.无关</p>
    </div>
    <!-- <div v-transfer-dom>
      <popup v-model="showRule" class="rule-modal" :popup-style="{background:'#ffffff'}" position="left" width=80%
        height="80%">
        <div class="content">
          <p class="rule-title">活动说明：</p>
          <p class="rule-content">这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。</p>
          <p class="rule-title">活动规则：</p>
          <p class="rule-content">这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。</p>
          <p class="rule-title">活动时间：</p>
          <p class="rule-content">2019-02-17</p>
        </div>
        <div class="bottom">
          <div class="vux-close" @click="closeRule()"></div>
        </div>
      </popup>
    </div> -->
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    TransferDom,
    XButton,
    Popup
  } from "vux";
  export default {
    data() {
      return {
        showRule: false
      };
    },
    components: {
      XButton,
      Popup
    },
    methods: {
      toEnter() {
        this.$router.push({
          name: "activityEnter"
        });
      },
      toRule() {
        this.showRule = true;
      },
      closeRule() {
        this.showRule = false;
      }
    }
  };

</script>
<style lang="less">
  .activity {
    text-align: center;
    background: url("../../assets/images/index-bg.png");
    background-size: cover;
    width: 750px;
    height: 100%;

    .logo {
      background: url("../../assets/images/index-logo.png");
      background-size: cover;
      width: 694px;
      height: 485px;
    }

    .title {
      background: url("../../assets/images/index-title.png");
      background-size: cover;
      width: 492px;
      height: 142px;
      margin: 20px 129px 0 129px;
    }

    .introduction {
      background: url("../../assets/images/index-introduction.png");
      background-size: cover;
      margin: 46px 197px 0 197px;
      width: 356px;
      height: 163px;
    }

    .enter-button {
      background: url("../../assets/images/index-add.png");
      background-size: cover;
      width: 412px;
      height: 70px;
      margin: 50px 169px 0 169px;
    }

    .bottom-logo {
      background: url("../../assets/images/index-icon.png");
      background-size: cover;
      width: 378px;
      height: 62px;
      margin: 99px 186px 0 186px;
    }

    .bottom-desc {
      font-size: 8px;
      color: #ffffff;
      margin: 99px 0 0 34px;
    }
  }

  .rule-modal {
    .content {
      width: 680px;
      border-radius: 20px;
      text-align: left;
      padding: 50px;

      .rule-title {
        font-size: 36px;
        margin: 10px;
      }

      .rule-content {
        padding: 10px;
        font-size: 28px;
      }
    }

    .bottom {
      text-align: center;
    }

    .close {
      width: 88px;
      height: 88px;
      margin-bottom: 20px;
    }
  }

</style>
