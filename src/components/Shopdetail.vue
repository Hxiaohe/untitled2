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
        <input type="file" id="bgimageurl" v-on:change="upavatar">
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
        <label for="phoneNumber" class="col-xs-3 control-label text-center">联系电话</label>
        <input type="text" class="form-control" id="phoneNumber">
      </div>
      <br>
      <div class="form-group">
        <label for="number" class="col-xs-3 control-label text-center">营业证号</label>
        <input type="text" class="form-control" id="number">
      </div>
      <br>
      <div class="form-group">
        <label for="imageurl" class="col-xs-3 control-label text-center">执证凭证</label>
        <input type="file" id="imageurl" v-on:change="uplicense">
      </div>
      <br>
      <br>
      <br>
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default" v-on:click.prevent="shopdetail">确定提交</button>
        <br>
        <br>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Shopdetail',
  methods: {
    shopdetail: function () {
      $.ajax({
        url: 'http://localhost:8080/user/profile',
        type: 'POST',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': store.state.token
        },
        data: {
          'userAvatarUrl': store.state.avatarimage,
          'businessLicenseUrl': store.state.licenseimage,
          'storeName': $('#shopname').val(),
          'address': $('#address').val(),
          'businessCode': $('#number').val(),
          'ownerName': $('#owner').val(),
          'ownerIdCardNumber': $('#IDcard').val(),
          'phoneNumber': $('#phoneNumber').val()
        },
        success: function (data) {
          store.commit('addtointeriorlist', {data: data})
          window.location.href = '#/submitresult'
        }
      })
    },
    upavatar: function () {
      var formData = new FormData()
      formData.append('avatar', $('#bgimageurl')[0].files[0])

      $.ajax({
        url: 'http://localhost:8080/user/avatar',
        type: 'POST',
        cache: false,
        header: 'http://localhost:8081',
        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writeavatarimage', {data: data['userAvatarUrl']})
        }
      })
    },
    uplicense: function () {
      var formData = new FormData()
      formData.append('license', $('#imageurl')[0].files[0])

      $.ajax({
        url: 'http://localhost:8080/user/license',
        type: 'POST',
        cache: false,
        header: 'http://localhost:8081',
        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writelicenseimage', {data: data['businessLicenseUrl']})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
