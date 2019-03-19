<template>
  <div id="note">

    <h1>ABOUT ME</h1>
    <div class="flex">
      <div class="basic">
        <div><i class="iconfont">&#xe65e;</i>：刘萍</div>
        <div>电话：18375943315</div>
        <div>邮箱：liuping_love@yeah.net</div>
        <div>求职意向：WEB前端工程师</div>
        <div id="message">{{message}}</div>
      </div>
      <div class=""><img src="../assets/images/photo.jpg"/></div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Note",
        data(){
          return {
            isscroll:true,
            message:"对IT领域的软件开发和设计工作有浓厚的兴趣，能承受较大的工作压力；自学能力强，善于学习，喜欢钻研新技术，敢于面对和克服困难；有比较强的动手能力，勇于面对困难和挑战，有很好的分析问题与解决问题的能力；工作认真负责，积极上进，能够吃苦耐劳，有良好的职业素质, 具有很强的团队合作精神，有强烈的集体荣誉感；\n" +
            "衷情于互联网技术应用，在五年的工作经验当中，通过自身努力从Java开发工程师转型到web前端工程师，获得了不错的成绩；我正在寻找一个更好的发展平台，希望能够充分发挥己的优势，共同努力成就一番事业。"
          }
        },
       methods:{
         scroll:function(){
           let _this = this;
           // $("#app").scroll(function() {
           //
           //   if(_this.isscroll && ($(this).scrollTop() > 600)){
           //     _this.isscroll = false;
           //     _this.common.typing("message",_this.message);
           //   }
           // });
         }
       },
        mounted:function () {
          this.scroll()
        }
    }
</script>

<style scoped>
  #note{ padding: 50px; }
  .basic { text-align:left; flex: 1 }
  .basic div{ padding: 10px 0; }
  /*#note { background: #ccc;position: absolute; top:0px; bottom: 0px; left: 0px; right: 0px; }*/
</style>
