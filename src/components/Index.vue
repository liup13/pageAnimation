<template>
    <div class="box">
      <div class="section-1 p-relative">
        <div style="height: 100%"><img src="../assets/images/bj.jpg" style="width: 100%;height: 100%;"/></div>
        <div class="p-absolute note" style="top:45%; text-align: center; left: 10%; right: 10%">
          <div>简历</div>
          <div class="fontSE60">RESUME</div>
          <div>
            <span class="nav" param="self"><a href="#self">个人</a></span>&nbsp;
            <span class="nav" param="weekBox"><a href="#weekBox">工作</a></span>
          </div>
          <div v-for="msg in msgs">
            {{ msg.text }}
          </div>

          <div id="text"></div>
        </div>
      </div>
      <div class="section-2">
        <Note></Note>
      </div>
      <div class="section section-3">
        <Production></Production>
      </div>
      <div class="section section-4">
          <Week></Week>
      </div>

      <div class="section section-5">
      </div>

        <!--<div class="arrow" v-on:click="bottomClick">&laquo;</div>-->

      <!--<Note></Note>-->
    </div>
</template>

<script>
  import Week from '@/components/Week.vue';
  import Note from '@/components/Note.vue';
  import Production from '@/components/Production.vue';
    export default {
        name: "Index",
        components: {
          Week,
          Note,
          Production
        },
        data () {
          return {
            message:'用JS实现动态打字效果',
            msgs:[
              {text:"姓名"},
              {text:"QQ"},
              {text:"邮箱"},
            ]
          }
        },
        methods:{
            init:function(){
              $(".section-1").css("height",document.documentElement.clientHeight);

              function heightToTop(ele){
                //ele为指定跳转到该位置的DOM节点
                let bridge = ele;
                let root = document.body;
                let height = 0;
                do{
                  height += bridge.offsetTop;
                  bridge = bridge.offsetParent;
                }while(bridge !== root)

                return height;
              }
              //按钮点击时
              $(".nav").addEventListener('click',function() {
                var targetEle = $("."+$(this).attr("param"));
                window.scrollTo({
                  top: heightToTop(targetEle),
                  behavior: 'smooth'
                })
              });
            },
            bottomClick:function(){
              this.common.getLoading();
            }
        },
        beforeCreate:function(){

        },
        created:function(){},
        beforeMount:function(){},
        mounted:function(){ //已完成模板渲染或el对应HTML渲染后
          this.init();
          this.common.typing("text",this.message);

        }

    }


  // !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});


</script>

<style scoped>
  .section-1 .nav{ display: inline-block; width: 100px; height: 100px; line-height: 100px; border: 1px solid #fff; border-radius: 50%;vertical-align: middle; }
  .section-1 .nav:hover{ font-size: 24px;transition: all .4s ease-in-out; }

  /*.section-wrap{ width:100%;height:100%;overflow:visible;transition:transform 1s cubic-bezier(0.86,0,0.03,1);-webkit-transition:-webkit-transform 1s cubic-bezier(0.86,0,0.03,1);}*/

  /*.section-wrap .section{ position:relative; width:100%; height:100%; background-position:center center; background-repeat:no-repeat;}*/

  /*.section-wrap .section .title{width:100%;position:absolute;color:#fff;font-size:2.4em;text-align:center;}*/

  /*.section-wrap .section .title p{ padding:0 4%;opacity:0}*/

  /*.section-wrap .section .title.active .tit{ opacity:1;transform:translateY(-25px);-webkit-transform:translateY(-25px);transition:all 2s cubic-bezier(0.86,0,0.8,1);-webkit-transition:all 2s cubic-bezier(0.86,0,0.8,1);}*/

  /*!*.section-wrap .section-1{ background-color:#337ab7}*!*/
  /*.section-wrap .section-2{ background-color:#5cb85c}*/
  /*.section-wrap .section-3{ background-color:#5bc0de}*/
  /*.section-wrap .section-4{ background-color:#f0ad4e}*/
  /*.section-wrap .section-5{ background-color:#efefef}*/

  /*.put-section-0{ transform:translateY(0);-webkit-transform:translateY(0);}*/
  /*.put-section-1{ transform:translateY(-100%);-webkit-transform:translateY(-100%);}*/
  /*.put-section-2{ transform:translateY(-200%);-webkit-transform:translateY(-200%);}*/
  /*.put-section-3{ transform:translateY(-300%);-webkit-transform:translateY(-300%);}*/
  /*.put-section-4{ transform:translateY(-400%);-webkit-transform:translateY(-400%);}*/

  /*.section-btn{ width:14px;position:fixed;right:4%;top:50%;}*/
  /*.section-btn li{ width:14px;height:14px;cursor:pointer;text-indent:-9999px;border-radius:50%;-webkit-border-radius:50%;margin-bottom:12px; background:#BD362F;text-align:center; color:#fff; onsor:pointer;}*/
  /*.section-btn li.on{ background:#fff}*/

  /*.arrow{ opacity:1;animation:arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;-webkit-animation:arrow 3s cubic-bezier(0.5,0,0.1,1) infinite;transform:rotate(-90deg);-webkit-transform:rotate(-90deg); position:absolute;bottom:10px;left:50%;margin-left:-30px;width:60px;height:60px;border-radius:100%;-webkit-border-radius:100%;line-height:60px;text-align:center;font-size:20px;color:#fff;border:1px solid #fff;cursor:pointer;overflow:hidden;}*/
  /*.arrow:hover{ animation-play-state:paused;-webkit-animation-play-state:paused;}*/

  /*@keyframes arrow{ %0,%100{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }*/
  /*@-webkit-keyframes arrow{ %0,%100{bottom:10px; opacity:1;} 50%{bottom:50px; opacity:.5} }*/
</style>
