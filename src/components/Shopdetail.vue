<template>
<div class="shopdetail">
  <link rel="stylesheet" type="text/css" href="/static/CSS/upnew.css">
  <br>
  <br>
  <br>
  <div class="container">
    <form class="form-horizontal" role="form" action="">
      <div class="form-group">
        <label for="shopname" class="col-xs-3 control-label text-center" >店铺名称</label>
        <input type="text" class="form-control" id="shopname">
      </div>
      <br>
      <div class="form-group">
        <label for="bgimageurl" class="col-xs-3 control-label text-center">背景图片</label>
        <input type="file" id="bgimageurl" >
      </div>
      <br>
      <div class="form-group">
        <label for="address" class="col-xs-3 control-label text-center" >店铺地址</label>
        <input type="text" class="form-control" id="address">
      </div>
      <br>
      <div class="form-group">
        <label for="owner" class="col-xs-3 control-label text-center" >店主姓名</label>
        <input type="text" class="form-control" id="owner">
      </div>
      <br>
      <div class="form-group">
        <label for="IDcard" class="col-xs-3 control-label text-center">身份证号</label>
        <input type="text" class="form-control" id="IDcard">
      </div>
      <br>
      <div class="form-group">
        <label for="number" class="col-xs-3 control-label text-center">营业证号</label>
        <input type="text" class="form-control" id="number">
      </div>
      <br>
      <div class="form-group">
        <label for="imageurl" class="col-xs-3 control-label text-center">执证凭证</label>
        <input type="file" id="imageurl" >
      </div>
      <br>
      <br>
      <br>
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default">确定提交</button>
        <br>
        <br>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Shopdetail'
}
</script>

<style scoped>

</style>
