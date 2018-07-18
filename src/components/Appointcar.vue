<template>
  <div class="appointcar">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/static/CSS/upnewresult.css">
    <link rel="stylesheet" href="/static/CSS/appointcar.css">
    <div style="width: 100%; height: 30vh;">
      <img id="imageUrl" v-bind:src="this.$store.state.carlist[GetQueryString()]['carImageUrl']" width="900" height="300" class="img-responsive" alt="car">
    </div>

    <div class="panel panel-default" style="height: 7vh; margin-bottom: 0px; background-color: rgba(240,248,255,0.43)">
      <div class="panel-body">
        <p id="brand" class="text-left col-xs-6 col-sm-6">{{this.$store.state.carlist[GetQueryString()]['category']}}</p><p id="price" class="text-right col-xs-6 col-sm-6" >
        <a href="#" style="color: crimson">${{this.$store.state.carlist[GetQueryString()]['price']}}</a></p></div>
    </div>
    <br>
    <p style="width: 329px;margin-left:10%;">请填写以下信息申请预约试驾，该4S店会有专门的服务人员与您联系。
    </p>
    <br>
    <form class="return" role="form" action="">
    <div class="form-group ">
      <label for="name" class="col-xs-3 control-label text-center" style="
            background-color: rgba(255, 255, 255, 0);
            color: rgba(0, 0, 0, 0.54);
            font-size: 14px;
            text-align: center;
            font-family: Serif;"
      >姓名</label>
      <input type="text" class="form-control" id="name" style=" left: 200px;
                    width: 250px;
                    height: 30px;
                    border-radius: 10px 10px 10px 10px;
                    background-color: rgba(255, 255, 255, 0);
                    text-align: left;
                    border: 1px solid rgba(187, 187, 187, 1);">
      <br>
      <label for="Tel" class="col-xs-3 control-label text-center" style="
                    background-color: rgba(255, 255, 255, 0);
                    color: rgba(0, 0, 0, 0.54);
                    font-size: 14px;
                    text-align: center;
                    font-family: Serif;"
      >联系电话</label>
      <input type="text" class="form-control" id="Tel" style=" left: 200px;
                            width: 250px;
                            height: 30px;
                            border-radius: 10px 10px 10px 10px;
                            background-color: rgba(255, 255, 255, 0);
                            text-align: left;
                            border: 1px solid rgba(187, 187, 187, 1);">
      <br>
      <label for="Date" class="col-xs-3 control-label text-center" style="
                            background-color: rgba(255, 255, 255, 0);
                            color: rgba(0, 0, 0, 0.54);
                            font-size: 14px;
                            text-align: center;
                            font-family: Serif;"
      >期望试驾日期</label>
      <input type="text" class="form-control" id="Date" style=" left: 200px;
                                    width: 250px;
                                    height: 30px;
                                    border-radius: 10px 10px 10px 10px;
                                    background-color: rgba(255, 255, 255, 0);
                                    text-align: left;
                                    border: 1px solid rgba(187, 187, 187, 1);">
    </div>
    <br>
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default" v-on:click.prevent="appointcar">申请试驾</button>
        <br>
        <br>
      </div>
    </form>
    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation"  style="color: darkblue">
      <div>
        <ul class="nav nav-pills">
          <li><a href="#" ><span class="glyphicon glyphicon-headphones"></span>客服</a></li>
          <li><a v-bind:href="this.$store.state.carlist[GetQueryString()]['appointurl']">预约试车</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></li>
          <li><a v-bind:href="this.$store.state.carlist[GetQueryString()]['buyurl']">立即购买</a></li>
        </ul>
      </div></nav>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Appointcar',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r)
      return null
    },
    appointcar: function () {
      $.ajax({
        url: 'http://localhost:8080/reservation/',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'message': $('#name').val() + $('#Tel').val() + $('#Date').val(),
          'category': this.$store.state.carlist[this.GetQueryString()]['category'],
          'sellerProfileId': this.$store.state.carlist[this.GetQueryString()]['sellerId']
        },
        success: function (data) {
          window.location.href = '#/appointresult'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
