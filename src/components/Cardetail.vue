<template>
  <div class="cardetail">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/CarDetail.css" type="text/css" rel="stylesheet">

    <div class="template">
      <div class="header" id="">
        <img v-bind:src="this.$store.state.carlist[GetQueryString()]['carImageUrl']" id="SM_img1" >
      </div>
      <div class="layer">
        <div class="left text1">
          {{this.$store.state.carlist[GetQueryString()]['category']}}
        </div>
        <div class="right text2">
          ￥{{this.$store.state.carlist[GetQueryString()]['price']}}
        </div>
      </div>
      <div class="line1"></div>
      <div class="layer">
        车辆详情
      </div>
      <div class="layer2 text3">
        {{this.$store.state.carlist[GetQueryString()]['description']}}
      </div>
      <div class="footer">
        <input type="button" id="button1" >
        <a v-bind:href="this.$store.state.carlist[GetQueryString()]['appointurl']"><input type="button" id="button2" ></a>
        <a v-on:click.prevent="buycar"><input type="button" id="button3"></a>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'cardetail',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
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
