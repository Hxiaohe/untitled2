<template>
  <div class="cardetail">
  <img id="imageUrl" src="../assets/car.png" width="900" height="300" class="img-responsive" alt="car">

  <div class="panel panel-default">
    <div class="panel-body">
      <p id="brand" class="text-left col-xs-6 col-sm-6">{{this.$store.state.carlist[GetQueryString()]['carKind']}}</p><p id="price" class="text-right col-xs-6 col-sm-6" >
      <a href="#" style="color: crimson">${{this.$store.state.carlist[GetQueryString()]['price']}}W</a></p></div>
  </div>
  <p >车辆详情</p>
  <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation"  style="color: darkblue">
    <div>
      <ul class="nav nav-pills">
        <li><a href="#" ><span class="glyphicon glyphicon-headphones"></span>客服</a></li>
        <li><a href="#" >预约试车</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></li>
        <li><a href="#">立即购买</a></li>
      </ul>
    </div></nav>
  </div>
</template>
<script>
export default {
  name: 'cardetail',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return parseInt(r); return null
    }
  }
}
</script>

<style scoped>

</style>
