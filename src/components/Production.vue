<template>
  <div class="production-box">
    <ul class="slides">
      <input type="radio" name="radio-btn" id="img-1" checked />
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-01.png" />
        </div>
        <div class="nav">
          <label for="img-3" class="prev">&#x2039;</label>
          <label for="img-2" class="next">&#x203a;</label>
        </div>
      </li>
      <input type="radio" name="radio-btn" id="img-2" />
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-02.png" />
        </div>
        <div class="nav">
          <label for="img-1" class="prev">&#x2039;</label>
          <label for="img-3" class="next">&#x203a;</label>
        </div>
      </li>
      <input type="radio" name="radio-btn" id="img-3" />
      <li class="slide-container">
        <div class="slide">
          <img src="../assets/images/production-03.png" />
        </div>
        <div class="nav">
          <label for="img-2" class="prev">&#x2039;</label>
          <label for="img-1" class="next">&#x203a;</label>
        </div>
      </li>

      <!--<li class="nav-dots">-->
      <!--<label for="img-1" class="nav-dot" id="img-dot-1"></label>-->
      <!--<label for="img-2" class="nav-dot" id="img-dot-2"></label>-->
      <!--<label for="img-3" class="nav-dot" id="img-dot-3"></label>-->
      <!--<label for="img-4" class="nav-dot" id="img-dot-4"></label>-->
      <!--<label for="img-5" class="nav-dot" id="img-dot-5"></label>-->
      <!--<label for="img-6" class="nav-dot" id="img-dot-6"></label>-->
      <!--</li>-->
    </ul>
    <!--<div style="white-space: nowrap;">-->

      <!--<input type="radio" name="radio-btn" id="img-1" checked />-->
      <!--<img class="img-01" src="../assets/images/production-01.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>-->
      <!--<input type="radio" name="radio-btn" id="img-2" />-->
      <!--<img class="img-02" src="../assets/images/production-02.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>-->
      <!--<input type="radio" name="radio-btn" id="img-3" />-->
      <!--<img class="img-03" src="../assets/images/production-03.png" style=" width: 80%; box-shadow: 3px 3px 8px 0px #888484;"/>-->
    <!--</div>-->
    <!--<div class="nav">-->
      <!--<label class="prev" for="img-2">上一张</label>-->
      <!--<label class="next" for="img-3">下一张</label>-->
    <!--</div>-->
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
  .slides {
    padding: 0;
    width: 80%;
    display: block;
    margin: 0 auto;
    position: relative;
  }
  .slides * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
  }
  .slides input { display: none; }
  .slide-container { display: block; }
  .slide {
    top: 0;
    opacity: 0;
    width: 100%;
    display: block;
    position: absolute;
    transform: scale(0);
    transition: all .7s ease-in-out;
    box-shadow: 3px 4px 3px 0px #8a8686;
  }
  .slide img {
    width: 100%;
    height: 100%;
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
  .slide:hover + .nav label { opacity: 0.5; }
  .nav label:hover { opacity: 1; }
  .nav .next { right: 0; }
  input:checked + .slide-container  .slide {
    opacity: 1;
    transform: scale(1);
    transition: opacity 1s ease-in-out;
  }
  input:checked + .slide-container .nav label { display: block; }
</style>
