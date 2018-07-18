<template>
    <div class="upcar">
      <link href="/static/CSS/UpdateCar.css" type="text/css" rel="stylesheet">
      <div class="template">
        <form>
          <div class="layer" >
            <div class="left">
              车辆型号
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              车辆型号
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              售价
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              库存
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>

          <div class="layer" >
            <div class="left">
              级别
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              最大功率
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              发动机
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              变速箱
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              长宽高
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              车身结构
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              最高车速
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <div class="layer" >
            <div class="left">
              整车质保
            </div>
            <div class="right">
              <input type="text" name="" class="input1">
            </div>
          </div>
          <br>
          <div class="layer" align="center">
            <input type="submit" value="确认上新" id="submit1">
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
