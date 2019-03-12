<template>
  <div class="production-box">
    <div style="white-space: nowrap;">
      <input type="radio" name="radio-btn" id="img-1" checked />
      <img class="img-01" src="../assets/images/production-01.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>
      <input type="radio" name="radio-btn" id="img-2" />
      <img class="img-02" src="../assets/images/production-02.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>
      <input type="radio" name="radio-btn" id="img-3" />
      <img class="img-03" src="../assets/images/production-03.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>
    </div>
    <div class="nav">
      <label class="prev" for="img-2">上一张</label>
      <label class="next" for="img-3">下一张</label>
    </div>
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
  /*.hide{ animation:hide 3s cubic-bezier(0.5,0,0.1,1) forwards;-webkit-animation:hide 3s cubic-bezier(0.5,0,0.1,1) forwards;animation-fill-mode: forwards; }*/
  /*.show{ opacity:1;animation:show 3s cubic-bezier(0.5,0,0.1,1) forwards;-webkit-animation:show 3s cubic-bezier(0.5,0,0.1,1) forwards;}*/
  /*@keyframes hide{ %0{width:80%; opacity:1} 50%{width:40%; opacity: 0.5} %100{width: 0%; opacity:0;} }*/
  /*@keyframes show{ %0,%100{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }*/
  .production-box img {
    top: 0;
    opacity: 0;
    width: 609px;
    height: 420px;
    display: block;
    position: absolute;
    transform: scale(0);
    transition: all .7s ease-in-out;
  }
  .production-box input:checked + img {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
  }
  .nav label {
    width: 200px;
    height: 100%;
    display: none;
    position: absolute;
    opacity: 0;
    z-index: 9;
    cursor: pointer;
    transition: opacity .2s;
    color: #FFF;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    backgrund-color: rgba(255, 255, 255, .3);
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
  }
  .nav label:hover { opacity: 1; }
  .nav .next { right: 0; }
</style>
