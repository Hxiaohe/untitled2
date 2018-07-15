<template>
  <div class="buyercenter">
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/CSS/center.css" rel="stylesheet">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="jumbotron text-center">
            <img src="" alt="用户头像"/>
            <p>{{this.$store.state.user['phoneNumber']}}</p>
          </div>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>我的订单</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>待完成订单</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>我的车辆</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
          </ul>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>已关注店铺</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item">
              <span>店铺会员卡</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
          </ul>
          <br>
          <ul class="list-group">
            <a class="list-group-item">
              <span>客服中心</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item" href="#/feedback">
              <span>意见反馈</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
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
  name: 'Buyercenter',
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
<style scoped>
</style>
