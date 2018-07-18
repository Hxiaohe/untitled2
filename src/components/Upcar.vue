<template>
    <div class="upcar">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link href="/static/CSS/UpdateCar.css" type="text/css" rel="stylesheet">
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
              车辆型号
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="category">
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
              <input type="file" name="" class="button sub_hidefileupload" id="carImage" v-on:change="upcarimage">
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
              级别
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="grade">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              最大功率
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="maxPower">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              发动机
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="engine">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              变速箱
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="gearbox">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              长宽高
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="size">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              车身结构
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="struct">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              最高车速
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="highestSpeed">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              整车质保
            </div>
            <div class="right">
              <input type="text" name="" class="input1" id="warranty">
            </div>
          </div>
          <br>
          <div class="layer" align="center">
            <input type="submit" value="确认上新" id="submit1" v-on:click.prevent="upcar">
          </div>

        </form>
      </div>
    </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'upcar',
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
    upcar: function () {
      $.ajax({
        url: 'http://localhost:8080/car/shelf?brand=' + $('#brand').val() + '&category=' + $('#category').val() + '&sellerProfileId=' + 2 +
        '&price=' + $('#price').val() + '&amount=' + $('#amount').val() +
        '&grade=' + $('#grade').val() + '&maxPower=' + $('#maxPower').val() + '&engine=' + $('#engine').val() + '&gearbox=' + $('#gearbox').val() +
        '&size=' + $('#size').val() + '&struct=' + $('#struct').val() + '&highestSpeed=' + $('#highestSpeed').val() + '&warranty=' + $('#warranty').val(),
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'carImageUrl': store.state.carimage
        },
        success: function (data) {
          data.url = '#/cardetail?index=0'
          data.appointurl = '#/appointcar?index=0'
          data.buyurl = '#/orderhandle?index=0'
          store.commit('addtocarlist', {data: data})
          if (data['message'] === 'ok') { window.location.href = '#/upcarsuccess' } else { alert('上架失败') }
        }
      })
    },
    upcarimage: function () {
      var formData = new FormData()
      formData.append('carImage', $('#carImage')[0].files[0])

      $.ajax({
        url: 'http://localhost:8080/car/image',
        type: 'POST',
        cache: false,

        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
          store.commit('writecarimage', {data: data['carImageUrl']})
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
