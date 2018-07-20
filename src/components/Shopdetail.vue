<template>
<div class="shopdetail">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="/static/CSS/StoreDetail.css" type="text/css" rel="stylesheet">
  <div class="template">
    <form>
      <div class="layer" >
        <div class="left">
          店铺名称
        </div>
        <div class="right">
          <input type="text" name="" class="input1">
        </div>
      </div>

      <div class="layer5" >
        <div class="left">
          店铺背景图
        </div>
        <div class="right">
          <input type="file" name="" class="button sub_hidefileupload" id="bgimageurl" v-on:change="upavatar">
          <img src="/static/img/上传图片.png">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          背景图URL
        </div>
        <div class="right">
          <input type="text"  class="input1 txt_autorssfeed" readonly="readonly" value="选择图片后自动导入">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          店铺地址
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="address">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          店主姓名
        </div>
        <div class="right">
          <input type="text" name="" class="input1" value="必须输入真实姓名" id="owner">
        </div>
      </div>

      <div class="layer" >
        <div class="left">
          身份证号
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="IDcard">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          营业执证照注册号
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="number">
        </div>
      </div>

      <div class="layer5" >
        <div class="left">
          营业执照凭证
        </div>
        <div class="right">
          <input type="file" name="" class="button sub_hidefileupload2" id="imageurl" v-on:change="uplicense">
          <img src="/static/img/上传图片.png">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          上传凭证URL
        </div>
        <div class="right">
          <input type="text" class="input1 txt_autorssfeed2" readonly="readonly" value="选择图片后自动导入">
        </div>
      </div>
      <br>
      <div class="layer" align="center">
        <input type="submit" value="确认提交" id="submit1" v-on:click.prevent="shopdetail">
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
        url: 'https://zscg.enderqiu.cn/api/user/profile',
        type: 'POST',

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
        url: 'https://zscg.enderqiu.cn/api/user/avatar',
        type: 'POST',
        cache: false,

        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writeavatarimage', {data: data['userAvatarUrl']})
          $('.txt_autorssfeed').val($('.sub_hidefileupload').val())
        }
      })
    },
    uplicense: function () {
      var formData = new FormData()
      formData.append('license', $('#imageurl')[0].files[0])

      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/user/license',
        type: 'POST',
        cache: false,

        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writelicenseimage', {data: data['businessLicenseUrl']})
          $('.txt_autorssfeed2').val($('.sub_hidefileupload2').val())
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
