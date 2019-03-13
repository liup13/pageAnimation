//全局公共方法
export default {
  typing:function(objId,msg){//打字效果
    let divTyping = document.getElementById(objId)
    let j = 0,
      timer = 0,
      str = msg;

    function typing(){
      if (j <= str.length) {
        divTyping.innerHTML = str.slice(0, j++) + '_'
        timer = setTimeout(function () {
          typing();
        }, 200)
      }
      else {
        divTyping.innerHTML = str//结束打字,移除 _ 光标
        clearTimeout(timer)
      }
    }
    typing();
  },

  getLoading: function () {
    console.log('加载中...');
  }
}
