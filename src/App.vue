<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <router-view/>
  </div>
</template>

<script>
  import jquery from '@/assets/js/jquery-3.2.1.min.js';
  export default {
    name: 'App'
  }
</script>

<style>
  @import "/assets/css/base.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
