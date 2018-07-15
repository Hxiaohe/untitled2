<template>
  <div class="Interiordetail">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="/static/CSS/interiordetail.css" rel="stylesheet">
    <div style="width: 100%; height: 30vh;">
      <img id="imageUrl" src="" width="900" height="300" class="img-responsive" alt="内饰">
    </div>

    <div class="panel panel-default" style="height: 7vh; margin-bottom: 0px; background-color: rgba(240,248,255,0.43)">
      <div class="panel-body">
        <p id="brand" class="text-left col-xs-6 col-sm-6">{{this.$store.state.interiorlist[GetQueryString()]['name']}}</p><p id="price" class="text-right col-xs-6 col-sm-6" >
        <a href="#" style="color: crimson">${{this.$store.state.interiorlist[GetQueryString()]['price']}}</a></p></div>
    </div>
    <div style="padding: 20px">
      <table class="table table-striped">
        <caption style="font-size: 20px;margin-bottom: 5px">商品详情</caption>
        <tbody>
        <tr>
          <td>品牌:</td>

        </tr>
        <tr>
          <td>商品名称:{{this.$store.state.interiorlist[GetQueryString()]['name']}}</td>

        </tr>
        <tr>
          <td>库存:{{this.$store.state.interiorlist[GetQueryString()]['amount']}}</td>

        </tr>
        <tr>
          <td>类型</td>

        </tr>
        <tr>
          <td>规格</td>

        </tr>
        <tr>
          <td>材质</td>

        </tr>

        </tbody>
      </table>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation"  style="color: darkblue">
      <div>
        <ul class="nav nav-pills">
          <li><a href="#" ><span class="glyphicon glyphicon-headphones"></span>客服</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span>查看购物车</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></li>
          <li><a href="#">购买</a></li>
        </ul>
      </div></nav>
  </div>
</template>

<script>
export default {
  name: 'Interiordetail',
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
