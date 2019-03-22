<template>
  <div>
    <div>
      <div class="count-agileits">
        <h1 class="color01">SKILLS</h1>
        <div class="container fn-clear">
          <div v-for="msg in msgs"> <!--:style="{backgroundColor: msg.text === 'jQuery' ? 'red' : 'white'}"-->
            <div class="item fn-left">
              <div class="flex"><span class="item-title">{{ msg.name }}</span> <span class="item-grade">{{ msg.text }}</span></div>
              <div class="item-in">
                <div class="item-z is-hidden" :param=msg.width></div> <!-- :style="{width: msg.width}"-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Skill",
        data(){
          return{
            msgs:[
              {name:"jQuery",width:'90%',text:"精通"},
              {name:"echarts",width:'90%',text:"精通"},
              {name:"node.js",width:'40%',text:"了解"},
              {name:"websocket",width:'60%',text:"熟练"},
              {name:"vue",width:'50%',text:"了解"},
              {name:"react",width:'50%',text:"了解"},
            ]
          }
        }
    }
</script>

<style scoped>
  .count-agileits{
    background: url('../assets/images/stats.jpg') no-repeat 0px 0px;
    background-size: cover;
    background-attachment: fixed;
    padding: 50px 0;
  }
  .item{ width: 38%; min-width: 200px; margin: 10px 6%; }
  .item-title { font-size: 30px; text-align: left; color: #fff; margin-bottom: 10px; }
  .item-grade { text-align: right; flex: 1; margin-top: 10px; color: #c0483b; font-size: 20px; }
  .item-in { position: relative; background: #7b7b7b; width: 100%; height: 15px; }
  .item-z { position: absolute; top:0px; bottom: 0px; left: 0px; background: #C56464 }
</style>
