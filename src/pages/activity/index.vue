<template>
  <div class="activity">
    <div class="logo"></div>
    <div class="title">闪耀之星活动</div>
    <p
      class="introduction"
    >这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。</p>
    <div class="bottom">
      <x-button type="primary" @click.native="toEnter">立即报名</x-button>
      <x-button type="primary" @click.native="toRule">活动规则</x-button>
    </div>
    <div v-transfer-dom>
      <popup
        v-model="showRule"
        class="rule-modal"
        :popup-style="{background:'#ffffff'}"
        position="top"
        height="100%"
      >
        <div class="content">
          <p class="rule-title">活动说明：</p>
          <p
            class="rule-content"
          >这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。</p>
          <p class="rule-title">活动规则：</p>
          <p
            class="rule-content"
          >这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求。这里是闪耀之星活动介绍，如果没有介绍的话，也可以点进来就直接是填写内容的地方，这个可以自行定义的，看具体需求的呀哈哈。</p>
          <p class="rule-title">活动时间：</p>
          <p class="rule-content">2019-02-17</p>
        </div>
        <div class="bottom">
          <div class="vux-close" @click="closeRule()"></div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TransferDom, XButton, Popup } from "vux";
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

  .logo {
    background: url("../../assets/images/logo.png");
    background-size: cover;
    margin: 10px 218px 50px 219px;
    width: 313px;
    height: 173px;
  }

  .title {
    font-size: 48px;
  }

  .introduction {
    text-align: left;
    font-size: 28px;
    padding: 50px;
  }

  .bottom {
    padding: 50px;
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
