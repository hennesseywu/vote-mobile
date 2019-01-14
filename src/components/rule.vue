<template>
  <mt-popup class="rule"  v-model="popupVisible"
  popup-transition="popup-fade" closeOnClickModal >
    <div class="content"></div>
    <div class="close-bag" @click="close"></div>
  </mt-popup>
</template>

<script>
  import Vue from 'vue'
  import {
    Popup
  } from "mint-ui";
  Vue.component(Popup.name, Popup);
  export default {
    name: 'rule',
    props: {
      showRule:Boolean
    },
    data() {
      return {
        popupVisible:false
      }
    },
    created() {
      this.popupVisible=this.showRule
    },
    methods: {
      close: function () {
        this.emit("close")
      }
    }
  };

</script>
