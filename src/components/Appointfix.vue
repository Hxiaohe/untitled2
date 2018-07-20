<template>
  <div class="appointfix">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/OrderMaintain.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="layer2 text3">
        请填写以下信息申请维修保养，该4S店会有专门的服务人员与您联系
      </div>
      <div class="layer" >
        <div class="left">
          选择店铺
        </div>
        <div class="right">
          <select type="text" name="" class="input2">
            <option v-for="(shop,index) in this.$store.state.shoplist" :key="index" v-bind:value="shop['id']">{{shop['storeName']}}</option>
          </select>
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          处理车型
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="category">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          期望时间
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="date">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          联系人姓名
        </div>
        <div class="right">
          <input type="text" name="" class="input1">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          联系电话
        </div>
        <div class="right">
          <input type="text" name="" class="input1">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          需求说明
        </div>
        <div class="right">
          <textarea type="text" name="" class="input3" id="description"></textarea>
        </div>
      </div>
      <div class="layer" align="center">
        <input type="button" value="确认预约" id="button1" v-on:click="appointfix">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Appointfix',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    store.commit('writetoken', {data: this.GetQueryString()})
    $.ajax({
      url: 'https://zscg.enderqiu.cn/api/user/profiles',
      type: 'GET',

      headers: {
        'Authorization': store.state.token
      },
      success: function (data) {
        store.commit('writeshoplist', {data: data})
      }
    })
  },
  methods: {
    appointfix: function () {
      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/maintenance/order',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'sellerId': $('#sellerId').val(),
          'category': $('#category').val(),
          'description': $('#description').val(),
          'date': $('#date').val()
        },
        success: function (data) {
          window.location.href = '#/appointresult'
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
