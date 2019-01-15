<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @font-face {
    font-family: 'iconfont';
    src: url('assets/fonts/iconfont.eot');
    src: url('assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/iconfont.woff') format('woff'),
    url('assets/fonts/iconfont.ttf') format('truetype'),
    url('assets/fonts/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  @import '~vux/src/styles/reset.less';
  .router-view {
    width: 100%;
    top: 0;
  }
</style>

