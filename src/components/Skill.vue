<template>
  <div>
    <h1>技能特长</h1>
    <h1>SKILLS</h1>
    <div>
      <div class="count-agileits">
        <div class="container">
          <div v-for="msg in msgs" :style="{width: msg.width}"> <!--:style="{backgroundColor: msg.text === 'jQuery' ? 'red' : 'white'}"-->
            <div ></div>
            <div>{{ msg.text }}</div>
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
              {text:"jQuery",width:300},{text:"node.js",width:300},{text:"echarts",width:300},{text:"websocket",width:300}
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
  }
</style>
