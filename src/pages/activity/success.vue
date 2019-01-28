<template>
  <div class="success">
    <div class="success-div">
      <div class="success-pannel">
        <img class="icon" src="../../assets/images/success-icon.png">
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
          name: "index"
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
      .icon {
        margin-top: 100px;
        width: 290px;
        height: 200px;
      }
      .btn {
        margin-top: 100px;
        width: 412px;
        height: 69px;
      }
    }
  }
}
</style>
