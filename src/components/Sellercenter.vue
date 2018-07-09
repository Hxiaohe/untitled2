<template>
  <div class="sellercenter">
    <img src="../assets/haha1.jpg" class="img-responsive" alt="haha">
    <p class="text-center">广州奥迪4s经销商</p>
    <div class="panel panel-default">
      <div class="panel-body">
        <p class="text-left col-xs-6 col-sm-6">全部车辆</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">查看全部车辆></a></p></div> </div>
    <div class="panel panel-default">
        <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">部件/零件</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">查看全部></a></p></div>
        <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">粉丝数量</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">9999</a></p></div>
        <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">试车申请</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">查看全部></a></p></div>
     </div>
    <div class="panel panel-default">
<div class="panel-body"><p class="text-left col-xs-6 col-sm-6">保养/维修预约信息</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">查看全部></a></p></div>
       <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">车辆上新</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#/upcar">></a></p></div>
        <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">部件/零件上新</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">></a></p></div>
    <div class="panel-body"><p class="text-left col-xs-6 col-sm-6">信息验证</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">></a></p><p style="color: gray">&nbsp;&nbsp;注：经后台人员审核通过，你才能上架商品</p></div>
    </div>

    <div class="panel panel-default">
      <div class="panel-body">
        <p class="text-left col-xs-6 col-sm-6">设置</p><p class="text-right col-xs-6 col-sm-6">
          <a href="#">账号管理></a></p></div> </div>
  </div>
</template>

<script>
export default {
  name: 'Sellercenter',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
