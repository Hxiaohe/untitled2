<template>
    <div class="upcar">
      <link href="static/CSS/upnew.css" rel="stylesheet">
      <br>
      <div class="container">
        <form class="form-horizontal" role="form" action="">
          <div class="form-group">
            <label for="brand" class="col-xs-3 control-label text-center" >品牌 &nbsp; </label>
            <input type="text" class="form-control" id="brand">
          </div>
          <br>
          <div class="form-group">
            <label for="category" class="col-xs-3 control-label text-center" >车辆类型</label>
            <input type="text" class="form-control" id="category">
          </div>
          <br>
          <div class="form-group">
            <label for="price" class="col-xs-3 control-label text-center" >售价 &nbsp; </label>
            <input type="text" class="form-control" id="price">
          </div>
          <br>
          <div class="form-group">
            <label for="amount" class="col-xs-3 control-label text-center">库存 &nbsp; </label>
            <input type="text" class="form-control" id="amount">
          </div>
          <br>
          <div class="form-group">
            <label for="carImageUrl" class="col-xs-3 control-label text-center">选择图片</label>
            <input type="file" id="carImageUrl" >
          </div>
          <br>
          <div class="form-group">
            <label for="grade" class="col-xs-3 control-label text-center">级别 &nbsp; </label>
            <input type="text" class="form-control" id="grade">
          </div>
      <br>
      <div class="form-group">
        <label for="maxPower" class="col-xs-3 control-label text-center">最大功率</label>
        <input type="text" class="form-control" id="maxPower">
      </div>
      <br>
      <div class="form-group">
        <label for="engine" class="col-xs-3 control-label text-center">发动机&nbsp;</label>
        <input type="text" class="form-control" id="engine">
      </div>
      <br>
      <div class="form-group">
        <label for="gearbox" class="col-xs-3 control-label text-center">变速箱&nbsp;</label>
        <input type="text" class="form-control" id="gearbox">
      </div>
      <br>
      <div class="form-group">
        <label for="size" class="col-xs-3 control-label text-center">长宽高&nbsp;</label>
        <input type="text" class="form-control" id="size">
      </div>
      <br>
      <div class="form-group">
        <label for="struct" class="col-xs-3 control-label text-center">车身结构</label>
        <input type="text" class="form-control" id="struct">
      </div>
      <br>
      <div class="form-group">
        <label for="highestSpeed" class="col-xs-3 control-label text-center" >最大车速</label>
        <input type="text" class="form-control" id="highestSpeed">
      </div>
      <br>
      <div class="form-group ">
        <label for="warranty" class="col-xs-3 control-label text-center" >整车质保</label>
        <input type="text" class="form-control" id="warranty">
      </div>
      <br>
      <br>
      <br>
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default"  v-on:click.prevent="upcar">确定上新</button>
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
  name: 'upcar',
  methods: {
    upcar: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?brand=' + $('#brand').val() + '&category=' + $('#category').val() + '&sellerProfileId=' + 2 +
        '&price=' + $('#price').val() + '&amount=' + $('#amount').val() +
        '&grade=' + $('#grade').val() + '&maxPower=' + $('#maxPower').val() + '&engine=' + $('#engine').val() + '&gearbox=' + $('#gearbox').val() +
        '&size=' + $('#size').val() + '&struct=' + $('#struct').val() + '&highestSpeed=' + $('#highestSpeed').val() + '&warranty=' + $('#warranty').val(),
        type: 'POST',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': store.state.token
        },
        data: {
          'carImageUrl': $('#carImageUrl').val()
        },
        success: function (data) {
          store.commit('addtocarlist', {data: data})
          if (data['message'] === 'ok') { window.location.href = '#/upcarsuccess' } else { alert('上架失败') }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
