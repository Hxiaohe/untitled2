<template>
<div class="feedback">
  <link rel="stylesheet" type="text/css" href="/static/CSS/upnew.css">
  <br>
  <hr>
  <p id="mark">有 什 么 问 题 或 者 建 议 请 写 下 来 告 诉 我 们 哦
  </p>
  <textarea name="txt" clos="10" rows="5" warp="virtual"></textarea>
  <br>
  <p id="mark1">填写联系方式，就有可能会被选中为幸运反馈用户哦</p>
  <br>
  <div class="container">
    <form class="form-horizontal" role="form" action="">
      <div class="form-group">
        <label for="phone" class="col-xs-3 control-label text-center" >电话号码</label>
        <input type="text" class="form-control" id="phone">
      </div>
      <br>
      <div class="form-group">
        <label for="QQ" class="col-xs-3 control-label text-center" >QQ号码&nbsp;</label>
        <input type="text" class="form-control" id="QQ">
      </div>
      <br>
      <div class="form-group">
        <label for="email" class="col-xs-3 control-label text-center" >电子邮箱</label>
        <input type="text" class="form-control" id="email">
      </div>
      <br>

      <br>
      <br>
      <br>
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default">确定提交</button>
        <br>
        <br>
      </div></form>
  </div>
</div>
</template>

<script>
export default {
  name: 'feedback'
}
</script>

<style scoped>

</style>
