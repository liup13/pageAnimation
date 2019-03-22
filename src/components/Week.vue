<template>
  <div id="week">
    <h1>EXPERIENCE</h1>
    <section id="cd-timeline" class="cd-container">
        <div v-for="item in weeks" class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"> </div>
          <div class="cd-timeline-content">
            <h2>{{item.name}}</h2>
            <div>
              <div>{{item.text}}</div>
              <div>{{item.text2}}</div>
            </div>
            <span class="cd-date">{{item.time}}</span>
          </div>
        </div>
    </section> <!-- cd-timeline -->
  </div>
</template>
<style>
  @import "../assets/css/timeline.css";
</style>
<script>
    export default {
        name: "Week",
        data(){
            return {
              weeks:[
                {name:"违法犯罪人员信息系统",time:"2018-09 至 今",text:"项目主要负责 看拘戒、监管总、支队业务管理系统  （功能模块 200个以上）主要使用jQuery 、websocket 、ajax、javaScript 、css3......",text2:"在该项目承担前端架构、公共组件的研发、主要功能的研发在该项目中属于前端组负责人（总人数：4人）" },
                {name:"感知监管",time:"2017-11 至 2018-02",text:"项目主要负责 看拘戒、监管总、支队业务管理系统  （功能模块 200个以上）主要使用jQuery 、websocket 、ajax、javaScript 、css3......",text2:"在该项目承担前端架构、公共组件的研发、主要功能的研发在该项目中属于前端组负责人（总人数：4人）" },
                {name:"广西实战平台",time:"2017-05 至 2017-08",text:"项目主要负责 看拘戒、监管总、支队业务管理系统  （功能模块 200个以上）主要使用jQuery 、websocket 、ajax、javaScript 、css3......",text2:"在该项目承担前端架构、公共组件的研发、主要功能的研发在该项目中属于前端组负责人（总人数：4人）" },
                {name:"提讯会见",text:"该项目主要功能包括权限设置、登录、房间分配、叫号、录入数据、搜索、打印等功能。可通过叫号条打开对应的数据采集区域，采集数据时可以实现条码打印、小票打印、套打，并且可以对采集的数据增/删/改/查（可通过扫描条码/二维码搜索数据）等操作；项目主要采用了Ajax请求数据，通过websocket推送消息刷新列表，该项目前端主要使用Html5+css3+jquery+ajax+Jsp+websocket等技术",text2:"1、负责UI设计；2、负责静态页面的开发；3、负责调用后台接口填充数据；4、负责后台接口的设计和文档编写；5、负责打印机的实现；6、参与项目的需求整理；7、参与功能测试；"}
              ]
            }
        },
      mounted:function(){
        var $timeline_block = $('.cd-timeline-block');
        //hide timeline blocks which are outside the viewport
        $timeline_block.each(function(){
          if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
          }
        });
        // //on scolling, show/animate timeline blocks when enter the viewport
        // $("#app").on('scroll', function(){
        //   if($(this).scrollTop()>500){ $(".navs").addClass("float") }
        //   else{ $(".navs").removeClass("float") }
        //   $timeline_block.each(function(){
        //     if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        //       $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        //     }
        //   });
        // });
      }
    }
</script>

<style scoped>
  /*#week { background:#eee; position: absolute; top:0px; bottom: 0px; left: 0px; right: 0px; }*/
</style>
