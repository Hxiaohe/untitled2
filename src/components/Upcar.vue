<template>
    <div class="upcar"><div class="container">
      <form class="form-horizontal" role="form" action="">

        <div class="form-group">
          <label for="brand" class="col-xs-3 control-label text-center" style="padding-top: 8px">品牌</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="brand"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="carKind" class="col-xs-3 control-label text-center" style="padding-top: 8px">车辆类型</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="carKind"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="price" class="col-xs-3 control-label text-center" style="padding-top: 8px">售价</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="price"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="inventory" class="col-xs-3 control-label text-center" style="padding-top: 8px">库存</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="inventory"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="carImageUrl" class="col-xs-3 control-label text-center" style="padding-top: 8px">选择图片</label>
          <div class="col-xs-8">
            <input type="file" id="carImageUrl" >
          </div>
        </div>
        <div class="form-group">
          <label for="grade" class="col-xs-3 control-label text-center" style="padding-top: 8px">级别</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="grade"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="maxPower" class="col-xs-3 control-label text-center" style="padding-top: 8px">最大功率</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="maxPower"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="engine" class="col-xs-3 control-label text-center" style="padding-top: 8px">发动机</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="engine"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="gearbox" class="col-xs-3 control-label text-center" style="padding-top: 8px">变速箱</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="gearbox"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="size" class="col-xs-3 control-label text-center" style="padding-top: 8px">长宽高</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="size"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="struct" class="col-xs-3 control-label text-center" style="padding-top: 8px">车身结构</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="struct"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="highestSpeed" class="col-xs-3 control-label text-center" style="padding-top: 8px">最大车速</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="highestSpeed"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group ">
          <label for="warranty" class="col-xs-3 control-label text-center" style="padding-top: 8px">整车质保</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="warranty"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-offset-1 col-xs-10">
            <button type="submit" class="btn btn-default" Style="color:white ;background-color: darkorange" v-on:click="upcar">确定上新</button>
          </div>
        </div></form>
    </div></div>
</template>

<script>
// import store from '../store'
var $ = require('jquery')
export default {
  name: 'upcar',
  methods: {
    upcar: function () {
      $.ajax({
        url: 'http://localhost:8080/api/car/new?brand=' + $('#brand').val() + '&carKind=' + $('#carKind').val() + '&sellerProfileId=' + 2 +
        '&price=' + $('#price').val() + '&inventory=' + $('#inventory').val() +
        '&grade=' + $('#grade').val() + '&maxPower=' + $('#maxPower').val() + '&engine=' + $('#engine').val() + '&gearbox=' + $('#gearbox').val() +
        '&size=' + $('#size').val() + '&struct=' + $('#struct').val() + '&highestSpeed=' + $('#highestSpeed').val() + '&warranty=' + $('#warranty').val(),
        type: 'PUT',
        header: 'http://localhost:8081',
        data: {
          'carImageUrl': $('#carImageUrl').val()
        },
        success: function (data) {
          if (data['message'] === 'ok') { window.location.href = '#/upcarsuccess' } else { alert('上架失败') }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
