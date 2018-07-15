<template>
<div class="upinterior">
  <link rel="stylesheet" type="text/css" href="/static/CSS/upnew.css">
  <br>
  <br>
  <div class="container">
    <form class="form-horizontal" role="form" action="">
      <div class="form-group">
        <label for="brand" class="col-xs-3 control-label text-center" >品牌 &nbsp; </label>
        <input type="text" class="form-control" id="brand">
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="name" class="col-xs-3 control-label text-center" >商品名称</label>
        <input type="text" class="form-control" id="name">
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="price" class="col-xs-3 control-label text-center" >售价 &nbsp; </label>
        <input type="text" class="form-control" id="price">
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="amount" class="col-xs-3 control-label text-center">库存 &nbsp; </label>
        <input type="text" class="form-control" id="amount">
      </div>
      <br>
      <div class="form-group">
        <label for="interiorImageUrl" class="col-xs-3 control-label text-center">选择图片</label>
        <input type="file" id="interiorImageUrl" >
      </div>
      <br>
      <br>
      <div class="form-group">
        <label for="type" class="col-xs-3 control-label text-center">类型 &nbsp; </label>
        <input type="text" class="form-control" id="type">
      </div>
  <br>
  <br>
  <div class="form-group">
    <label for="specification" class="col-xs-3 control-label text-center">规格 &nbsp;</label>
    <input type="text" class="form-control" id="specification">
  </div>
  <br>
  <br>
  <div class="form-group">
    <label for="texture" class="col-xs-3 control-label text-center">材质 &nbsp;</label>
    <input type="text" class="form-control" id="texture">
  </div>

  <br>
  <br>
  <br>
  <div class="form-group" id="button">
    <button type="submit" class="btn btn-default" v-on:click="upinterior">确定上新</button>
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
  name: 'Upinterior',
  methods: {
    upinterior: function () {
      $.ajax({
        url: 'http://localhost:8080/interior/shelf',
        type: 'POST',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '8'
        },
        data: {
          'amount': $('#amount').val(),
          'interiorImageUrl': $('#interiorImageUrl').val(),
          'name': $('#name').val(),
          'price': $('#price').val(),
          'sellerProfiledId': '18'
        },
        success: function (data) {
          store.commit('addtointeriorlist', {data: data})
          alert(data['price'])
          if (data['message'] === 'ok') { window.location.href = '#/upinteriorsuccess' } else { alert('上架失败') }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
