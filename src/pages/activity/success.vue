<template>
  <div class="success">
    <div class="success-div">
      <div class="success-pannel">
        <div class="icon-div">
          <img class="icon" src="../../assets/images/success-icon.png">
        </div>
        <div class="btn-div">
          <img class="btn" src="../../assets/images/success-btn.png" @click="toIndex">
        </div>
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
      },
    },
  };

</script>

<style lang="less">
  .success {
    text-align: center;
    background: url("../../assets/images/index-bg.png");
    background-size: cover;
    width: 750px;
    height: 100%;
    text-align: center;

    .success-div {
      position: fixed;
      z-index: 100;
      width: 750px;
      height: 100%;
      left: 0;
      top: 0;
      padding-top: 200px;
      background: rgba(110, 73, 73, 0.6);

      .success-pannel {
        margin: 0 46px 361px 45px;
        width: 659px;
        height: 510px;
        background: #ffde9e;
        border-radius: 10px;

        .icon-div {
          width: 290px;
          height: 250px;
          margin: 20px 180px;
          padding-top: 30px;
          .icon {
            width: 100%;
            height: 100%;
          }
        }

        .btn-div {
          width: 412px;
          height: 69px;
          margin: 80px 120px;

          .btn {
            width: 100%;
            height: 100%;
            margin-top: 20%;

          }
        }

      }
    }
  }

</style>
