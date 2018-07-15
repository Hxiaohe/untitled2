<template>
  <div class="searchcar">
    <link href="static/CSS/upnew.css" rel="stylesheet">
    <br>
    快速找车
    <hr>
    <br>
    <div class="panel panel-default">
      <div class="panel-body">
        <form method="get" action="" style="margin:0px;display:inline;">
          <button type="button" class=" btn btn-default " id="s1" v-on:click="get5wdowm">
            <a href="#">5w以下</a>   </button></form>
        <form method="get" action="" style="margin:0px;display:inline;">
          <button type="button" class="btn btn-default" id="s2" v-on:click="get5to8">
            <a href="#"> 5-8w</a>   </button></form>
        <form method="get" action="" style="margin:0px;display:inline;">
          <button type="button" class="btn btn-default" id="s3" v-on:click="get10to15">10-15w</button></form>
      </div>
    </div>
      <br>
      <br>
      <div class="panel panel-default">
        <div class="panel-body">
          <form method="get" action="" style="margin:0px;display:inline;">
            <button type="button" class=" btn btn-default " id="s4" v-on:click="getSUV">
              <a href="#">SUV</a>   </button></form>
          <form method="get" action="" style="margin:0px;display:inline;">
            <button type="button" class="btn btn-default" id="s5" v-on:click="getjc">
              <a href="#"> 紧凑型</a>   </button></form>
          <form method="get" action="" style="margin:0px;display:inline;">
            <button type="button" class="btn btn-default" id="s6" v-on:click="getzd">
              <a href="#"> 自动 </a>  </button></form>
        </div>
      </div>
        <br>
        <br>
        <hr>
        <br>
        <br>
        <form class="form-horizontal" role="form" action="">
          <div class="form-group">
            <label for="brand" class="col-xs-3 control-label text-center" style="padding-top: 8px">品牌&nbsp;&nbsp;</label>
            <select class="form-control" id="brand">
              <option>宝马</option>
              <option>奔驰</option>
              <option>劳斯莱斯</option>
              <option>奥迪</option>
              <option>大众</option>
            </select>
          </div>
          <br>
          <div class="form-group">
            <label for="grade" class="col-xs-3 control-label text-center" style="padding-top: 8px">级别&nbsp;&nbsp;</label>
            <select class="form-control" id="grade">
              <option>小型</option>
              <option>紧凑型</option>
              <option>中型</option>
              <option>跑车</option>
              <option>SUV</option>
            </select>
          </div>
          <br>
          <div class="form-group">
            <label for="lPrice" class="col-xs-3 control-label text-center" style="padding-top: 8px">价格下限</label>
            <input type="text" class="form-control" id="lPrice">
          </div>
          <br>
          <div class="form-group">
            <label for="hPrice" class="col-xs-3 control-label text-center" style="padding-top: 8px">价格上限</label>
            <input type="text" class="form-control" id="hPrice">
          </div>
          <br>
          <div class="form-group">
            <label for="struct" class="col-xs-3 control-label text-center" style="padding-top: 8px">结构&nbsp;&nbsp;</label>
            <select class="form-control" id="struct">
              <option>两厢</option>
              <option>三厢</option>
              <option>敞篷</option>
            </select>
          </div>
          <br>
          <div class="form-group">
            <label for="gearbox" class="col-xs-3 control-label text-center" style="padding-top: 8px">变速箱&nbsp;</label>
            <select class="form-control" id="gearbox">
              <option>手动</option>
              <option>自动</option>
              <option>无级变速</option>
            </select>
          </div>
          <br>
          <br>
          <div class="form-group">
            <button type="submit" class="btn btn-default" id="button" v-on:click="getcarlist">查看结果</button>
          </div>
        </form>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {name: 'searchcar',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    // this.getcarlist()
  },
  methods: {
    get5wdowm: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?lPrice=1&hPrice=50000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    get5to8: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?lPrice=50000&hPrice=80000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    get10to15: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?lPrice=100000&hPrice=150000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    getSUV: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?grade=SUV&lPrice=1&hPrice=10000000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    getjc: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?grade=紧凑型&lPrice=1&hPrice=10000000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    getzd: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?gearbox=自动&lPrice=1&hPrice=10000000',
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
    },
    getcarlist: function () {
      // 实例化XMLHttpRequest
      // var xmlhttp
      // if (window.XMLHttpRequest) {
      //   // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      //   xmlhttp = new XMLHttpRequest()
      // }
      // 发送表单ajax请求(Json)格式，对应mapping("/buy")
      // $.ajax({
      //   type: 'GET',
      //   dataType: 'json',
      //   header: 'http://localhost:8081',
      //   url: 'http://localhost:8080/api/car/search?brand=劳斯莱斯&lPrice=10.0&hPrice=700.0',
      //   cache: true,
      //   success: (data) => {
      //     this.$store.commit('writecarlist', {data: data})
      //     alert(this.$store.state.carlist[0]['price'])
      //     // alert(data[0]['brand'] + data[0]['price'] + data[0]['carKind'])
      //   }
      // })
      $.ajax({
        url: 'http://localhost:8080/car/shelf?brand=' + $('#brand').val() + '&grade=' + $('#grade').val() + '&lPrice=' + $('#lPrice').val() + '&hPrice=' + $('#hPrice').val() +
        '&struct=' + $('#struct').val() + '&gearbox=' + $('#gearbox').val(),
        type: 'GET',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '7'
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
          }
          store.commit('writecarlist', {data: data})
          window.location.href = '#/carlist'
        }
      })
      // 处理响应
      // xmlhttp.onreadystatechange = function () {
      //   if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      //     // 获取Json数据中的第一个name并打印
      //     var json = xmlhttp.responseText.pauseJson
      //     this.$store.commit('writecarlist', json)
      //   }
      // }
    }

  }
}

</script>

<style scoped>

</style>
