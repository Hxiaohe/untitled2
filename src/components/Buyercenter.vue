<template>
  <div class="buyercenter">
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/CSS/center.css" rel="stylesheet">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="jumbotron text-center">
            <img v-bind:src="this.$store.state.user['userAvatarUrl']" alt="用户头像"/>
            <p>{{this.$store.state.user['phoneNumber']}}</p>
          </div>
          <br>
          <ul class="list-group">
            <a class="list-group-item" href="#/buyfix">
              <span>保养维修信息</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item" href="#/buytrycar">
              <span>预约试车订单</span>
              <span class="glyphicon glyphicon-chevron-right pull-right"></span>
            </a>
            <a class="list-group-item" href="#/carorderhandle">
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
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
    $.ajax({
      url: 'https://zscg.enderqiu.cn/api/user/profile',
      type: 'GET',
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
      if (r != null) return (r); return null
    }
  }
}
</script>
<style scoped>
</style>
