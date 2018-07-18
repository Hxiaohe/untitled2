<template>
  <div class="appointfix">
    <link href="/static/CSS/upnew.css" rel="stylesheet">
    <br>
    <br>
    <p id="explain">请填写以下信息申请维修，该4S店会有专门的服务人员与您联系。
    </p>
    <br>
    <div class="container">
      <form class="form-horizontal" role="form" action="">
        <div class="form-group">
          <label for="sellerId" class="col-xs-3 control-label text-center" >选择店铺</label>
          <select class="form-control" id="sellerId">
            <option v-for="(shop,index) in this.$store.state.shoplist" :key="index" v-bind:value="shop['id']">{{shop['storeName']}}</option>
          </select>
        </div>
        <br>
        <br>
        <div class="form-group">
          <label for="category" class="col-xs-3 control-label text-center" >处理车型</label>
          <input type="text" class="form-control" id="category">
        </div>
        <br>
        <br>
        <div class="form-group">
          <label for="description" class="col-xs-3 control-label text-center" >需求说明</label>
          <input type="text" class="form-control" id="description">
        </div>
        <br>
        <br>
        <div class="form-group">
          <label for="date" class="col-xs-3 control-label text-center">期望时间</label>
          <input type="text" class="form-control" id="date">
        </div>
        <br>
        <br>
        <br>
        <div class="form-group" id="button">
          <button type="submit" class="btn btn-default" v-on:click="appointfix">确定预约</button>
          <br>
          <br>
        </div></form>
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
      url: 'http://localhost:8080/user/profiles',
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
        url: 'http://localhost:8080/maintenance/order',
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
