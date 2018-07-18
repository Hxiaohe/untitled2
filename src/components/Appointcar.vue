<template>
  <div class="appointcar">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/DateDrive.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="header" id="">
        <img v-bind:src="this.$store.state.carlist[GetQueryString()]['carImageUrl']" id="SM_img1" >
      </div>
      <div class="layer">
        <div class="left1 text1">
          {{this.$store.state.carlist[GetQueryString()]['category']}}
        </div>
        <div class="right1 text2">
          ￥{{this.$store.state.carlist[GetQueryString()]['price']}}
        </div>
      </div>
      <div class="line1"></div>
      <div class="layer2 text3">
        请填写以下信息申请预约试驾，该4S店会有专门的服务人员与您联系
      </div>

      <div class="layer" >
        <div class="left">
          姓名
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="name">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          电话
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="Tel">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          期望试驾日期
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="Date">
        </div>
      </div>
      <div class="layer" align="center">
        <input type="button" value="申请试驾" id="button1" v-on:click.prevent="appointcar">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Appointcar',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r)
      return null
    },
    appointcar: function () {
      $.ajax({
        url: 'http://localhost:8080/reservation/',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'message': $('#name').val() + $('#Tel').val() + $('#Date').val(),
          'category': this.$store.state.carlist[this.GetQueryString()]['category'],
          'sellerProfileId': this.$store.state.carlist[this.GetQueryString()]['sellerId']
        },
        success: function (data) {
          window.location.href = '#/appointresult'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
