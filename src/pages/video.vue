<template>

  <!-- <video class="video"  controls="controls" preload="auto" poster="" x5-video-player-fullscreen="true" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true" x5-playsinline>
   <source src="http://player.youku.com/embed/XNDAwNzE1MDY2NA=="
      type="video/mp4">
      <p>你的浏览器不支持HTML5 video标签。</p>
  </video> -->
<div id="youkuplayer" class="video"></div>

</template>
<script>

var player = new YKU.Player('youkuplayer',{

styleid: '0',

client_id: 'a47c2c82687a45ee',

vid: 'XNDAwNzE2MjIyOA==',

newPlayer: true
});

  export default {

  }

</script>
<style lang="less" scoped>
  .video{
    width: 750px;
  }
</style>

