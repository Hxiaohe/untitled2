<template>
  <div class="Interiordetail">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/interiorDetail.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="header" id="">
        <img v-bind:src="this.$store.state.interiorlist[GetQueryString()]['interiorImageUrl']" id="SM_img1" >
      </div>
      <div class="layer">
        <div class="left text1">
          {{this.$store.state.interiorlist[GetQueryString()]['name']}}
        </div>
        <div class="right text2">
          ￥{{this.$store.state.interiorlist[GetQueryString()]['price']}}
        </div>
      </div>
      <div class="line1"></div>
      <div class="layer">
        内饰详情
      </div>
      <div class="layer2 text3">
      </div>
      <div class="footer">
        <input type="button" id="button1" >
        <a v-on:click.prevent="buyinterior"><input type="button" id="button3"></a>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Interiordetail',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    }
  },
  buycar: function () {
    $.ajax({
      url: 'https://zscg.enderqiu.cn/api/interior/order',
      type: 'POST',

      headers: {
        'Authorization': store.state.token
      },
      data: {
        'amount': 1,
        'interiorId': this.$store.state.interiorlist[this.GetQueryString()]['interiorId']
      },
      success: function (data) {
        window.location.href = '#/interiorpayresult'
      }
    })
  }
}
</script>

<style scoped>

</style>
