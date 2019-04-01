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
                {
                  name:"违法犯罪人员信息系统",
                  time:"2018-09 至 今",
                  text:"该项目涉及多功能、复杂、多变，因此没有选择现在比较主流的vue和react，而是采用原生js和jQuery封装的框架加组件的形式。实现看守所、拘戒所、戒毒所、支队、总队的业务管理。 包含20多个岗位500多个功能。现实新增、修改、删除、导出、打印、报表",
                  text2:"前端组负责人（5人）主要负责编写组件、功能部分封装、技术支持、复杂功能开发、后台接口沟通、项目发布"
                },
                {
                  name:"感知监管",
                  time:"2017-11 至 2018-02",
                  text:"主要使用echarts实现大数据图形显示，websocket实现数据实时刷新，ajax调用数据",
                  text2:"负责公共部分的代码封装完成该项目80%的功能页面开发、接口调用数据填充"
                },
                {
                  name:"广西实战平台",
                  time:"2017-05 至 2017-08",
                  text:"主要使用echarts实现大数据图形显示，websocket实现数据实时刷新，ajax调用数据",
                  text2:"在该项目承担前端架构、公共组件的研发、主要功能的研发在该项目中属于前端组负责人（总人数：4人）"
                },
                {
                  name:"提讯会见",
                  time:"2017-05 至 2017-08",
                  text:"该项目主要功能包括权限设置、登录、房间分配、叫号、录入数据、搜索、打印等功能。可通过叫号条打开对应的数据采集区域，采集数据时可以实现条码打印、小票打印、套打，并且可以对采集的数据增/删/改/查（可通过扫描条码/二维码搜索数据）等操作；项目主要采用了Ajax请求数据，通过websocket推送消息刷新列表，该项目前端主要使用Html5+css3+jquery+ajax+Jsp+websocket等技术",
                  text2:"1、负责UI设计；2、负责静态页面的开发；3、负责调用后台接口填充数据；4、负责后台接口的设计和文档编写；5、负责打印机的实现；6、参与项目的需求整理；7、参与功能测试；"
                },
                {
                  name:"监仓一体机终端应用",
                  time:"2017-05 至 2017-08",
                  text:"该项目主要实现了权限分配，登录，点名，作息时间设置，消费物品配置、购买、结算、导出消费Excel、统计、现金卡打印、等操作；项目主要采用了Ajax请求数据，避免刷新整个页面，通过websocket发送消息到android端，页面主要用jQuery、jsp完成",
                  text2:"Html5、css3、jquery、ajax、Jsp、websocket"
                },
                {
                  name:"离线应急数据查询系统",
                  time:"2015-08 至 2015-11",
                  text:"项目主要实现在断网时，对本地数据的查询。项目主要嵌套在webkit C#框中，通过记录浏览的足迹，实现逐步的“返回”",
                  text2:"Html5、css3、jquery、ajax、Jsp"
                },
                {
                  name:"中钢物流后台管理",
                  time:"2014-08 至 2015-01",
                  text:"该项目主要对物流信息的增、删、改、查等；前端主要用Bootstrsap框架实现；后台采用 SpringMVC，hibernate等技术",
                  text2:"Jsp、SpringMVC、hibernate、jQuery、bootstrap"
                },
                {
                  name:"三网一库信息化平台",
                  time:"2012-06 至 2013-08",
                  text:"1．项目填报；2．市、省级审核；3．后续资金填报；4．后续资金审核；5．导出项目、资金汇总；6．查看资金的历史记录；7．名片的管理；8．权限分配等； 项目基于J2EE平台，B/S模式开发。采用SpringMVC该项目主要对物流信息的增、删、改、查等；前端主要用Bootstrsap框架实现；后台采用 Spring, controller，hibernate等技术对物流信息的增、删、改、查等对物流信息的增、删、改、查等对物流信息的增、删、改、查等，guzz，jQuery UI，jqGrid等技术。",
                  text2:"Jsp、SpringMVC、guzz、jQuery UI、jqGrid"
                }

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
