<template>
  <div class="sellercenter">
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/CSS/center.css" rel="stylesheet">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="jumbotron text-center">
            <img src="" alt="店铺图片"/>

          </div>
          <p align='center' style="color:rgba(16, 16, 16, 1);font-size:14px; font-family: Arial">{{this.$store.state.user['storeName']}}</p>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>全部车辆</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>待完成汽车内饰订单</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>粉丝数量</span>
              <span class="glyphicon glyphicon-chevron-right pull-right">999</span>
            </a>
          </ul>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>试车申请</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>保养/维修预约信息</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
          </ul>
          <br>
          <ul class="list-group ">
            <a class="list-group-item" href="/#/upcar">
              <span>车辆上新</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item"  href="/#/upinterior">
              <span>汽车内饰上新</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
          </ul>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>信息验证</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <p style="color:rgba(170, 170, 170,1);left: 16px " >注：经后台人员审核通过，您才能上架商品</p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Sellercenter',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    store.commit('writetoken', {data: this.GetQueryString()})
    $.ajax({
      url: 'http://localhost:8080/user/profile',
      type: 'GET',
      header: 'http://localhost:8081',
      headers: {
        'Authorization': store.state.token
      },
      success: function (data) {
        store.commit('writeuser', {data: data})
      }
    })
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return parseInt(r); return null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
