<template>
  <div class="searchcar">
    <link href="/static/CSS/SelectCar.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="header">
        快速找车
      </div>
      <div class="line1"></div>
      <div class="layer">
        <input type="button" class="button1" value="5W以下" v-on:click.prevent="get5wdowm">
        <input type="button" class="button1" value="5-10W" v-on:click.prevent="get5to8">
        <input type="button" class="button1" value="10-15W" v-on:click.prevent="get10to15">
      </div>
      <div class="layer">
        <input type="button" class="button1" value="SUV" v-on:click.prevent="getSUV">
        <input type="button" class="button1" value="紧凑型" v-on:click.prevent="getjc">
        <input type="button" class="button1" value="自动" v-on:click.prevent="getzd">
      </div>
      <div class="line3"></div>
      <div class="layer">
        <div class="left">
          品牌
        </div>
        <div class="right">
          <input type="text" name="brand" class="input1" id="brand">
        </div>
      </div>
      <div class="layer">
        <div class="left">
          级别
        </div>
        <div class="right">
          <select type="text" name="grade" class="input2" id="grade">
            <option value=""></option>
            <option value="小型车">小型车</option>
            <option value="中型车">中型车</option>
            <option value="大型车">大型车</option>
            <option value="紧凑型车">紧凑型车</option>
            <option value="中大型车">中大型车</option>
            <option value="微型车">微型车</option>
            <option value="跑车">跑车</option>
            <option value="MPV">MPV</option>
            <option value="SUV">SUV</option>

          </select>
        </div>
      </div>
      <div class="layer">
        <div class="left">
          价格下限
        </div>
        <div class="right">
          <input type="text" name="lprice" class="input1" id="lPrice">
        </div>
      </div>
      <div class="layer">
        <div class="left">
          价格上限
        </div>
        <div class="right">
          <input type="text" name="hprice" class="input1" id="hPrice">
        </div>
      </div>
      <div class="layer">
        <div class="left">
          结构
        </div>
        <div class="right">
          <select type="text" name="struct" class="input2" id="struct">
            <option value=""></option>
            <option value="两厢">两厢</option>
            <option value="三厢">三厢</option>
            <option value="掀背">掀背</option>
            <option value="旅行版">旅行版</option>
            <option value="硬顶敞篷车">硬顶敞篷车</option>
            <option value="软顶敞篷车">软顶敞篷车</option>
            <option value="硬顶跑车">硬顶跑车</option>
            <option value="客车">客车</option>
            <option value="货车">货车</option>

          </select>
        </div>
      </div>
      <div class="layer">
        <div class="left">
          变速箱
        </div>
        <div class="right">
          <select type="text" name="gearbox" class="input2" id="gearbox">
            <option value=""></option>
            <option value="手动">手动</option>
            <option value="自动">自动</option>
            <option value="手动一体">手动一体</option>
            <option value="无级变速">无级变速</option>
            <option value="双离合">双离合</option>

          </select>
        </div>
      </div>
      <div class="layer" align="center">
        <input type="submit" value="查看结果" id="submit1" v-on:click.prevent="getcarlist">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'searchcar',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    store.commit('writetoken', {data: this.GetQueryString()})
  },
  methods: {
    get5wdowm: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?lPrice=1&hPrice=50000',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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
      //
      //   url: 'http://localhost:8080/api/car/search?brand=劳斯莱斯&lPrice=10.0&hPrice=700.0',
      //   cache: true,
      //   success: (data) => {
      //     this.$store.commit('writecarlist', {data: data})
      //     alert(this.$store.state.carlist[0]['price'])
      //     // alert(data[0]['brand'] + data[0]['price'] + data[0]['carKind'])
      //   }
      // })
      $.ajax({
        url: 'http://localhost:8080/car/shelf',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'brand': $('#brand').val(),
          'grade': $('#grade').val(),
          'lPrice': $('#lPrice').val(),
          'hPrice': $('#hPrice').val(),
          'struct': $('#struct').val(),
          'gearbox': $('#gearbox').val()
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
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
    },
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    }

  }
}

</script>

<style scoped>

</style>
