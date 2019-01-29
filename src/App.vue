<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
<script>

  export default {
    name: 'App',
    data() {
      return {
        transitionName: ""
      }
    },
    watch: {
      '$route'(to, from) {
        let toName = to.name
        const toIndex = to.meta.index
        const fromIndex = from.meta.index
        this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
      }
    }

  }

</script>
<style lang="less">
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 250ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }


  @font-face {
    font-family: 'iconfont';
    src: url('assets/fonts/iconfont.eot');
    src: url('assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/iconfont.woff') format('woff'),
      url('assets/fonts/iconfont.ttf') format('truetype'),
      url('assets/fonts/iconfont.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  @import '~vux/src/styles/close.less';
  @import '~vux/src/styles/reset.less';

  .router-view {
    width: 100%;
    top: 0;
  }

</style>
