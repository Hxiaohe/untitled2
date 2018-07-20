<template>

  <div class="buyinterior">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/static/CSS/orderhandle.css" />
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <div id="box">
      <div class="container">
        <form class="form-horizontal" role="form" action="">
          <div class="second_two">
            <div class="two_one"><img src="" alt="" /></div>
            <div class="two_two">{{this.$store.state.interiorlist[GetQueryString()]['type']}} {{this.$store.state.interiorlist[GetQueryString()]['size']}} {{this.$store.state.interiorlist[GetQueryString()]['material']}}</div>
            <div class="two_three">{{this.$store.state.interiorlist[GetQueryString()]['brand']}}</div>
            <div class="two_four"><span>$</span>{{this.$store.state.interiorlist[GetQueryString()]['price']}}</div>
            <div class="two_five"></div>
            <div class="two_six">数量：1</div>
            <div class="two_seven"></div>
          </div>
          <span class="way">配送方式</span>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>快速配送
          </label>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">门店自提
          </label>
          <div class="form-group">
            <label for="name" class="col-xs-3 control-label text-center">姓名 &nbsp; </label>
            <input type="text" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="phone" class="col-xs-3 control-label text-center">联系电话 &nbsp; </label>
            <input type="text" class="form-control" id="phone">
          </div>
          <div class="form-group">
            <label for="address" class="col-xs-3 control-label text-center">配送地址 &nbsp; </label>
            <input type="text" class="form-control" id="address">
          </div>
          <span class="qi">实付款</span>
          <span class="ba">$</span>
          <span class="jiu" id="shu3">{{this.$store.state.interiorlist[GetQueryString()]['price']}}</span>
          <div class="diqi" v-on:click.prevent="buycar"><span>提交订单</span></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Buyinterior',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r)
      return null
    },
    buycar: function () {
      $.ajax({
        url: 'http://localhost:8080/api/interior/order',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'amount': 1,
          'interiorId': this.$store.state.interiorlist[this.GetQueryString()]['interiorId']
        },
        success: function (data) {
          window.location.href = '#/payresult'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
