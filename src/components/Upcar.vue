<template>
    <div class="upcar"><div class="container">
      <form class="form-horizontal" role="form" action="upcar success.html">

        <div class="form-group">
          <label for="brand" class="col-xs-3 control-label text-center" style="padding-top: 8px">品牌</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="brand"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="Type" class="col-xs-3 control-label text-center" style="padding-top: 8px">车辆类型</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="Type"
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
          <label for="number" class="col-xs-3 control-label text-center" style="padding-top: 8px">库存</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="number"
                   placeholder="单行输入">
          </div>
        </div>
        <div class="form-group">
          <label for="imageurl" class="col-xs-3 control-label text-center" style="padding-top: 8px">选择图片</label>
          <div class="col-xs-8">
            <input type="file" id="imageurl" >
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
          <label for="maxpower" class="col-xs-3 control-label text-center" style="padding-top: 8px">最大功率</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="maxpower"
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
          <label for="lwh" class="col-xs-3 control-label text-center" style="padding-top: 8px">长宽高</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="lwh"
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
          <label for="highestspeed" class="col-xs-3 control-label text-center" style="padding-top: 8px">最大车速</label>
          <div class="col-xs-8">
            <input type="text" class="form-control" id="highestspeed"
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
            <button type="submit" class="btn btn-default" Style="color:white ;background-color: darkorange">确定上新</button>
          </div>
        </div></form>
    </div></div>
</template>

<script>
export default {
  name: 'Upcar'
}
</script>

<style scoped>

</style>
