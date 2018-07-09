<template>
  <div class="searchcar">
  快速找车
  <div class="panel panel-default">
    <div class="panel-body">
      <div>
        <form action="">
        <div class="col-xs-3"><button type="submit" class="btn btn-default" style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none">5w以下</a>   </button></div>
        </form>
        <form action="">
        <div class="col-xs-offset-1 col-xs-3"><button type="button" class="btn btn-default" style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none"> 5-8w</a>   </button></div>
        </form>
        <form action="">
        <div class="col-xs-offset-1 col-xs-3"> <button type="button" class="btn btn-default" style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none"> 10-15w </a>  </button></div>
        </form>
      </div>
      <div class="panel-body">
      </div>
      <div>
        <form action="">
        <div class="col-xs-3"><button type="button" class=" btn btn-default " style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none">SUV</a>  </button></div>
        </form>
        <form action="">
        <div class="col-xs-offset-1 col-xs-3"><button type="button" class="btn btn-default" style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none">紧凑型 </a>  </button></div>
        </form>
        <form action="">
        <div class="col-xs-offset-1 col-xs-3"> <button type="button" class="btn btn-default" style="width: 80px; height: 30px">
          <a href="#" style="text-decoration: none">自动</a>   </button></div>
        </form>
      </div></div></div>
  <form id="mainform" class="form-horizontal" role="form" >
    <div class="form-group">
      <label for="brand" class="col-xs-3 control-label text-center" style="padding-top: 8px">品牌</label>
      <div class="col-xs-8">
        <select class="form-control" id="brand">
          <option>宝马</option>
          <option>奔驰</option>
          <option>劳斯莱斯</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="grade" class="col-xs-3 control-label text-center" style="padding-top: 8px">级别</label>
      <div class="col-xs-8">
        <select class="form-control" id="grade">
          <option>中型车</option>
          <option>小型车</option>
          <option>跑车</option>
          <option>SUV</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="hPrice" class="col-xs-3 control-label text-center" style="padding-top: 8px">价格下限</label>
      <div class="col-xs-8">
        <input type="text" class="form-control" id="hPrice"
               placeholder="单行输入">
      </div>
    </div>
    <div class="form-group">
      <label for="lPrice" class="col-xs-3 control-label text-center" style="padding-top: 8px">价格上限</label>
      <div class="col-xs-8">
        <input type="text" class="form-control" id="lPrice"
               placeholder="单行输入">
      </div>
    </div>
    <div class="form-group">
      <label for="struct" class="col-xs-3 control-label text-center" style="padding-top: 8px">结构</label>
      <div class="col-xs-8">
        <select class="form-control" id="struct">
          <option>两厢</option>
          <option>三厢</option>
          <option>敞篷车</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="gearbox" class="col-xs-3 control-label text-center" style="padding-top: 8px">变速箱</label>
      <div class="col-xs-8">
        <select class="form-control" id="gearbox">
          <option>手动</option>
          <option>自动</option>
          <option>无级变速</option>
          <option>3</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="col-xs-offset-1 col-xs-10">
        <button id="ss" type="submit" class="btn btn-default" Style="color:white ;background-color: darkorange" >查看结果</button>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
// import store from '../store'
var $ = require('jquery')
export default {name: 'searchcar',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    this.getcarlist()
  },
  methods: {
    getcarlist: function () {
      // 实例化XMLHttpRequest
      var xmlhttp
      if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest()
      }
      // 发送表单ajax请求(Json)格式，对应mapping("/buy")
      $('#ss').click(function () {
        $('#mainform').ajaxSubmit(
          {
            url: 'http://localhost:8080/api/car/search',
            type: 'GET',
            dataType: 'json',
            beforeSubmit: function () {},
            success: function (data) {
              alert('成功')
            }
          })
      })
      // 处理响应
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          // 获取Json数据中的第一个name并打印
          var json = xmlhttp.responseText.pauseJson
          this.$store.commit('writecarlist', json)
        }
      }
    }

  }
}

</script>

<style scoped>

</style>
