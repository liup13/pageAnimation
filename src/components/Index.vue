<template>
    <div class="box">
      <div class="section-1 p-relative">
        <div><img src="../assets/images/bj.jpg" style="width: 100%;height: 100%;margin-top: -15%;"/></div>
        <div class="p-absolute note" style="top:0; text-align: center; left: 0; right: 0;bottom: 0;background: rgba(0, 0, 0, 0.5); padding-top: 8%;">
          <div class="ch-name">简历</div>
          <div class="en-name">RESUME</div>
          <div class="navs">
            <span class="nav" v-on:click="bottomClick('section-2')"><a href="#">个人</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="nav" v-on:click="bottomClick('section-3')"><a href="#">技能特长</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="nav" v-on:click="bottomClick('section-4')"><a href="#">作品集</a></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="nav" v-on:click="bottomClick('section-5')"><a href="#">工作</a></span>
          </div>

        </div>
      </div>
      <div class="section section-2">
        <Note></Note>
      </div>
      <div class="section section-3">
        <Skill></Skill>
      </div>
      <div class="section section-4">
        <Production></Production>
      </div>

      <div class="section section-5">
        <Week></Week>
      </div>

        <!--<div class="arrow" v-on:click="bottomClick">&laquo;</div>-->

      <footer>

      </footer>
    </div>
</template>

<script>
  import Week from '@/components/Week.vue';
  import Note from '@/components/Note.vue';
  import Production from '@/components/Production.vue';
  import Skill from '@/components/Skill.vue';
    export default {
        name: "Index",
        components: {
          Week,
          Note,
          Production,
          Skill
        },
        data () {
          return {
            clientHeight:document.documentElement.clientHeight,
            // message:'用JS实现动态打字效果'
          }
        },
        methods:{
            init:function(){
              console.log(this.clientHeight);
              // $(".section-1").css("height",this.clientHeight);

              // function heightToTop(ele){
              //   //ele为指定跳转到该位置的DOM节点
              //   let bridge = ele;
              //   let root = document.body;
              //   let height = 0;
              //   do{
              //     height += bridge.offsetTop;
              //     bridge = bridge.offsetParent;
              //   }while(bridge !== root)
              //
              //   return height;
              // }
              //按钮点击时
              // $(".nav").addEventListener('click',function() {
              //   var targetEle = $("."+$(this).attr("param"));
              //   window.scrollTo({
              //     top: heightToTop(targetEle),
              //     behavior: 'smooth'
              //   })
              // });
            },
            bottomClick:function(lab){
              let top = $("."+lab).offset().top;
              let scrollTop = $("#app").scrollTop();
              top = top + scrollTop;
              $("#app").animate({scrollTop:top},top);
              // $("#app").(top);
              // this.common.getLoading();
            },
            // scroll:function(){
            //   $("#app").scroll(function() {
            //     console.log($(this).scrollTop());
            //     console.log(this.clientHeight);
            //   });
            // }
        },
        beforeCreate:function(){

        },
        created:function(){},
        beforeMount:function(){},
        mounted:function(){ //已完成模板渲染或el对应HTML渲染后
          this.init();
          // this.common.typing("text",this.message);
          // this.scroll();

          // $("app").scroll(function(event){
          //   console.log("====");
          // });
        }

    }

</script>

<style scoped>
  .section-1 { height: 600px; overflow: hidden }
  .section-1 .nav{ display: inline-block; font-size: 20px; width: 100px; height: 100px; line-height: 100px; border: 1px solid #bdb6b6; border-radius: 50%;vertical-align: middle;animation: bs linear 2s 0s infinite; }
  .section-1 .nav:hover{ font-size: 24px;transition: all .4s ease-in-out; }
  .section-1 .nav a{ color: #fff; }
  .section-1 .navs.float{ position: fixed; top:0px; left: 0px; right: 0px;background: rgba(0, 0, 0,0.6);z-index: 10; }
  .section-1 .navs.float .nav{ border: none; border-radius: 50%;height: 50px;line-height: 50px; color: #fff; animation: none;}
  .section-1 .navs.float .nav:hover{ font-size: 24px; }

  .en-name{ color: #fff; font-family: monospace; font-weight: bold; font-size: 60pt; margin-bottom: 30px;}

  footer{ background: #222222; height: 100px; width: 100%; }


  @-webkit-keyframes bs {
    0% {
      box-shadow:  0 0 0px 0 #FFF; background: rgba(0,0,0,0);
    }

    50% {
      box-shadow: 0 0 20px 0 #FFF; background: rgba(0,0,0,0.5);
    }

    100% {
      box-shadow: 0 0 0px 0 #FFF; background: rgba(0,0,0,0);
    }
  }
</style>
