<template>
<div class="orderhandle">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/static/CSS/orderhandle.css" />
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <div id="box">
    <div class="container">
      <form class="form-horizontal" role="form" action="">
        <div class="second_one"><span>店铺：<label id="shopname">广州奥迪</label></span></div>
        <div class="second_two">
          <div class="two_one"><img src="" alt="" /></div>
          <div class="two_two">奥迪Q6 自动挡 2.0T</div>
          <div class="two_three">奥迪</div>
          <div class="two_four"><span>￥</span>250000</div>
          <div class="two_five"></div>
          <div class="two_six">数量：1</div>
          <div class="two_seven"></div>
        </div>
        <span class="way">配送方式</span>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>快速配送
          </label>
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">门店自提
          </label>
        <div class="form-group">
          <label for="name" class="col-xs-3 control-label text-center">姓名 &nbsp; </label>
          <input type="text" class="form-control" id="name">
        </div>
        <div class="form-group">
          <label for="phone" class="col-xs-3 control-label text-center">联系电话 &nbsp; </label>
          <input type="text" class="form-control" id="phone">
        </div>
        <div class="form-group">
          <label for="address" class="col-xs-3 control-label text-center">配送地址 &nbsp; </label>
          <input type="text" class="form-control" id="address">
        </div>
          <span class="qi">实付款</span>
          <span class="ba">￥</span>
          <span class="jiu" id="shu3">2500000</span>
      <div class="diqi"><span>提交订单</span></div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
// var $ = require('jquery')
export default {
  name: 'Orderhandle'
}

</script>

<style scoped>

</style>
