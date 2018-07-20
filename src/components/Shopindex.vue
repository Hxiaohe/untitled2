<template>
<div class="shopindex">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/static/CSS/youlike.css">
  <link rel="stylesheet" href="/static/CSS/shopindex.css"><div class="head">
  <br>
  <br>
  <br>
  <div class="jumbotron text-center">
    <img v-bind:src="this.$store.state.shoplist[GetQueryString()]['userAvatarUrl']" alt="店铺图片"/>
  </div>
  <h3>{{this.$store.state.shoplist[GetQueryString()]['storeName']}}</h3>
  <div class="label" >
    <label id="num">856</label><label>粉丝</label></div>
</div>

  <ul id="myTab" class="nav nav-tabs">
    <li class="col-xs-4 active "><a href="#attention" data-toggle="tab">
      关注高</a>
    </li>
    <li class="col-xs-4"><a href="#sales" data-toggle="tab">销售高</a></li>
    <li class="col-xs-4">
      <a href="#inprice" data-toggle="tab">价格</a>
    </li>
  </ul>

  <div id="section1">
    <div class="grid" id="grid">
      <div class="grid-sizer"></div>
      <div class="element-item exchange col-xs-6" v-for="(shopcar,index) in this.$store.state.carlist" :key="index">
        <div class="thumbnail">
          <a v-bind:href="shopcar['url']" class="noselect">
            <img v-bind:src="shopcar['carImageUrl']">
          <div class="caption">
            <h4 class="pull-right"></h4>
            <h4>{{shopcar['category']}}</h4>
          </div>
          </a>
        </div>
      </div>
    </div>

  </div>
  <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation" >
    <div>
      <ul class="nav nav-pills">
        <li id="buttom"><a href="#">&nbsp;分&nbsp;类&nbsp;</a></li>
        <li id="buttom1"><a href="#" >关注店铺</a></li>
        <li id="buttom2"><a href="#" ><span class="glyphicon glyphicon-headphones"></span>客服</a></li>

      </ul>
    </div></nav>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Shopindex',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    this.Getshopcarlist()
  },
  methods: {
    Getshopcarlist: function () {
      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/car/shelf',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          sellerId: store.state.shoplist[this.GetQueryString()]['id']
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/cardetail?index=' + i
            data[i].appointurl = '#/appointcar?index=' + i
            data[i].buyurl = '#/orderhandle?index=' + i
          }
          store.commit('writecarlist', {data: data})
        }
      })
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
