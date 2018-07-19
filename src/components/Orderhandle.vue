<template>
<div class="orderhandle">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,scale-initial=1.0">
  <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="/static/CSS/OrderSubmit.css" type="text/css">
  <form>
    <div id="carInfo">
      <ul class="list-group">
        <li class="list-group-item car-list">
          <div class="carPic">
            <img src="" class="pic"/>
          </div>
          <div class="describe">
            <p>{{this.$store.state.carlist[GetQueryString()]['category']}} {{this.$store.state.carlist[GetQueryString()]['gearbox']}} {{this.$store.state.carlist[GetQueryString()]['engine']}}</p>
            <span>{{this.$store.state.carlist[GetQueryString()]['category']}} </span><br/>
            <label>{{this.$store.state.carlist[GetQueryString()]['price']}}</label>
          </div>
        </li>
      </ul>
    </div>
    <div id="way">
      <span>配送方式</span>
      <div class="radioStyle">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>快速配送
        </label>
      </div>
      <div class="radioStyle">
        <label>
          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">门店自提
        </label>
      </div>
    </div>
    <div id="other">备注</div>
    <div id="text">
      <textarea class="form-control" rows="3"></textarea>
    </div>
    <ul class="list-group">
      <li class="list-group-item list">
        <div class="name">商品总额</div>
        <div class="value">{{this.$store.state.carlist[GetQueryString()]['price']}}</div>
      </li>
      <li class="list-group-item list">
        <div class="name">优惠券</div>
        <div class="value">-0</div>
      </li>
      <li class="list-group-item list">
        <div class="name">运费</div>
        <div class="value">+0</div>
      </li>
      <li class="list-group-item list">
        <div class="name">实付款：</div>
        <div class="value">{{this.$store.state.carlist[GetQueryString()]['price']}}</div>
      </li>
    </ul>
    <div class="bottom">
      <div id="left">
        <p>
          <span>合计：</span>
          <label id="price">{{this.$store.state.carlist[GetQueryString()]['price']}}</label>
        </p>
      </div>
      <div id="right">
        <button class="btn" id="priceBtn" type="submit" v-on:click.prevent="buycar">
          提交订单
        </button>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Orderhandle',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r)
      return null
    },
    buycar: function () {
      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/car/order',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'amount': 1,
          'category': this.$store.state.carlist[this.GetQueryString()]['category'],
          'sellerProfileId': this.$store.state.carlist[this.GetQueryString()]['sellerId']
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
