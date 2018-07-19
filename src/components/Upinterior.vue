<template>
<div class="upinterior">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="/static/CSS/UpdateInterior.css" type="text/css" rel="stylesheet">
  <div class="template">
    <form>
      <div class="layer" >
        <div class="left">
          品牌
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="brand">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          商品名称
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="name">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          售价
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="price">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          库存
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="amount">
        </div>
      </div>

      <div class="layer5" >
        <div class="left">
          上传图片
        </div>
        <div class="right">
          <input type="file" name="" class="button sub_hidefileupload" id="interiorImage" v-on:change="upinteriorimage">
          <img src="/static/img/上传图片.png">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          图片URL
        </div>
        <div class="right">
          <input type="text" id="txt_autorssfeed" class="input1" readonly="readonly" value="选择图片后自动导入">
        </div>
      </div>

      <div class="layer" >
        <div class="left">
          类型
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="type">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          规格
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="size">
        </div>
      </div>
      <div class="layer" >
        <div class="left">
          材质
        </div>
        <div class="right">
          <input type="text" name="" class="input1" id="material">
        </div>
      </div>

      <div class="layer" align="center" id="footer">
        <input type="submit" value="确认上新" id="submit1" v-on:click.prevent="upinterior">
      </div>

    </form>
  </div>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Upinterior',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
  },
  methods: {
    upinterior: function () {
      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/interior/shelf',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'amount': $('#amount').val(),
          'interiorImageUrl': store.state.interiorimage,
          'brand': $('#brand').val(),
          'name': $('#name').val(),
          'price': $('#price').val(),
          'type': $('#type').val(),
          'size': $('#size').val(),
          'material': $('#material').val()
        },
        success: function (data) {
          store.commit('addtointeriorlist', {data: data})
          if (data['message'] === 'ok') { window.location.href = '#/upinteriorsuccess' } else { alert('上架失败') }
        }
      })
    },
    upinteriorimage: function () {
      var formData = new FormData()
      formData.append('interiorImage', $('#interiorImage')[0].files[0])

      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/interior/image',
        type: 'POST',
        cache: false,

        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writeinteriorimage', {data: data['interiorImageUrl']})
          $('#txt_autorssfeed').val($('.sub_hidefileupload').val())
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
