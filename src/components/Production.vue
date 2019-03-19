<template>
  <div class="production-box">
    <h1>作品集</h1>
    <ul class="slides">
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-01.png" />
        </div>
      </li>
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-02.png" />
        </div>
      </li>
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-03.png" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Production",
        methods:{
            prev:function(event){
              console.log(event);
              $(".img-01").addClass("hide");
              $(".img-02").addClass("show");
            }
        }
    }

    $(function(){

    });
</script>

<style scoped>
  .production-box { padding: 50px; }
  .production-box .slide { margin-bottom: 50px; box-shadow: 2px 4px 11px 0px #9a9696; }
  /*.hide{ animation:hide 3s cubic-bezier(0.5,0,0.1,1) forwards;-webkit-animation:hide 3s cubic-bezier(0.5,0,0.1,1) forwards;animation-fill-mode: forwards; }*/
  /*.show{ opacity:1;animation:show 3s cubic-bezier(0.5,0,0.1,1) forwards;-webkit-animation:show 3s cubic-bezier(0.5,0,0.1,1) forwards;}*/
  /*@keyframes hide{ %0{width:80%; opacity:1} 50%{width:40%; opacity: 0.5} %100{width: 0%; opacity:0;} }*/
  /*@keyframes show{ %0,%100{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }*/



</style>
