<template>
  <div class="cardetail">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/CSS/cardetail.css" rel="stylesheet">
    <div style="width: 100%; height: 30vh;">
      <img id="imageUrl"  v-bind:src="this.$store.state.carlist[GetQueryString()]['carImageUrl']" width="900" height="300" class="img-responsive" alt="car">
    </div>

    <div class="panel panel-default" style="height: 7vh; margin-bottom: 0px; background-color: rgba(240,248,255,0.43)">
      <div class="panel-body">
        <p id="brand" class="text-left col-xs-6 col-sm-6">{{this.$store.state.carlist[GetQueryString()]['category']}}</p><p id="price" class="text-right col-xs-6 col-sm-6" >
        <a href="#" style="color: crimson">${{this.$store.state.carlist[GetQueryString()]['price']}}</a></p></div>
    </div>
    <div style="padding: 20px">
      <table class="table table-striped">
        <caption style="font-size: 20px;margin-bottom: 5px">车辆详情</caption>
        <tbody>
        <tr>
          <td>车辆型号:{{this.$store.state.carlist[GetQueryString()]['category']}}</td>

        </tr>
        <tr>
          <td>库存:{{this.$store.state.carlist[GetQueryString()]['amount']}}</td>

        </tr>
        <tr>
          <td>级别:{{this.$store.state.carlist[GetQueryString()]['grade']}}</td>

        </tr>
        <tr>
          <td>最大功率:{{this.$store.state.carlist[GetQueryString()]['maxPower']}}</td>

        </tr>
        <tr>
          <td>发动机:{{this.$store.state.carlist[GetQueryString()]['engine']}}</td>

        </tr>
        <tr>
          <td>变速箱:{{this.$store.state.carlist[GetQueryString()]['gearbox']}}</td>

        </tr>
        <tr>
          <td>长宽高:{{this.$store.state.carlist[GetQueryString()]['size']}}</td>

        </tr>
        <tr>
          <td>车身结构:{{this.$store.state.carlist[GetQueryString()]['struct']}}</td>

        </tr>
        <tr>
          <td>最高车速:{{this.$store.state.carlist[GetQueryString()]['highestSpeed']}}</td>

        </tr>
        <tr>
          <td>整车质保:{{this.$store.state.carlist[GetQueryString()]['warranty']}}</td>

        </tr>
        </tbody>
      </table>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation"  style="color: darkblue">
      <div>
        <ul class="nav nav-pills">
          <li><a href="#" ><span class="glyphicon glyphicon-headphones"></span>客服</a></li>
          <li><a href="/#/appointcar?index=0" >预约试车</a></li>
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
