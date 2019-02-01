<template>
  <div class="rule">
    <div class="rule-icon-div">
      <img class="rule-icon" src="../../assets/images/rule-logo.png">
    </div>
    <div class="rule-pannel">
      <div class="rule-content">
        <p class="rule-desc-title">一、 活动介绍：</p>
        <p class="rule-desc-content">
          《闪耀之星——少儿选拔赛》（男生版）是面向所有热爱舞台、才华横溢的男孩子来到我们的节目中，我们将在全成都进行开放式海选，选拔出最优秀的十九名少年组成“SJS组合”，打造成都首个少年团体。
          节目将于3月份在成都电视台和全网进行播出。
          我们期待带着梦想的你们来到我们的舞台崭露头角！
        </p>
        <p class="rule-desc-title">二、 参与方法：</p>
        <p class="rule-desc-content">1． 进入耀强音传媒官方微信公众平台；</p>
        <p class="rule-desc-content">2． 点击立即报名；</p>
        <p class="rule-desc-content">
          3．
          填写基本资料，如姓名、年龄，身份证号，联系手机等，并上传一段选手一分钟的才艺视频和三至五张选手照片。个人资料请一定保证真实，主办方有权取消个人信息不真实的报名选手资格；未满十八周岁参与必须在个人简介中填写其监护人真实联系方式和身份证号码。
        </p>
        <p class="rule-desc-title">三、注意事项 ：</p>
        <p class="rule-desc-content">1．参与用户必须在线签订电子协议，凭借身份证及参赛券参加现场活动。</p>
        <p class="rule-desc-content">2．未满十八周岁参与用户必须填写其监护人真实联系方式和身份证号码，并由其监护人陪同到达现场。</p>
        <p class="rule-desc-content">3．入选者将会收到短信通知、微信提醒或电话通知，官方媒体将公布每一阶段入围情况，请密切关注。更换预留电话的选手请及时通过微信咨询功能告知导演组或重新报名。</p>
        <p class="rule-desc-title">四、赛程时间 ：</p>
        <p class="rule-desc-content">1．比赛时间：2—5月份</p>
        <p class="rule-desc-content">2．入选者将会收到短信通知、微信提醒或电话通知，到导演组指定地点进行复试。</p>
        <p class="rule-desc-content">3．复试通过者会有导演组进行电话通知，并确定拍摄时间。</p>
        <p class="rule-desc-content">本协议以及其修改权、更新权及最终解释权均属主办方所有。</p>
      </div>
      <div class="btn-div">
        <img class="btn" src="../../assets/images/success-btn.png" @click="toIndex">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toIndex() {
        this.$router.push({
          name: "activity"
        });
      }
    },
  }

</script>

<style lang="less" scoped>
  .rule {
    width: 750px;
    background: #ffde9e;

    .rule-icon-div {
      width: 710px;
      height: 514px;

      .rule-icon {
        width: 100%;
        height: 100%;
      }
    }


    .rule-pannel {
      margin: -20px 40px;
      padding-bottom: 20px;

      .rule-title {
        text-align: center;
        color: #380078;
        font-size: 44px;
      }

      .rule-desc-title {
        color: #404040;
        font-size: 34px;
        font-weight: bold;
      }

      .rule-desc-content {
        color: #404040;
        font-size: 25px;
        line-height: 38px;
      }

      .btn-div {
        margin: 40px 130px 20px 130px;
        width: 412px;
        height: 69px;

        .btn {
          width: 100%;
          height: 100%;
        }
      }


    }
  }

</style>
