<template>
<div class="allcar">
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link href="static/CSS/carlist.css" rel="stylesheet">
  <div class="panel panel-default" style="background-color: rgba(251,244,255,0.09)" >
    <div v-for="(car,index) in this.$store.state.carlist" :key="index">
      <div class="panel-body" style="padding: 4px 7px;margin-top: 10px">
        <div class="media">
          <a class="media-left" href="#">
            <img v-bind:src="car['carImageUrl']" height="60" width="80">
          </a>
          <div class="media-body">
            <a  style="text-decoration: none"> <p  style="font-size: 15px; margin-bottom: 5px;color: #2e2e2e">{{car['category']}}</p>
              <p   style="font-size: 10px;color: darkorange; margin-bottom: 7px">{{car['price']}}
                <span class="glyphicon glyphicon-chevron-right" style="color: #bdc1ce;float: right;"></span></p>
              <p  style="font-size: 10px;">{{car['brand']}}/{{car['struct']}}<span class="label label-default" style="margin-left: 5px; background-color: #d3f1ff; color: #4a6ce2; padding: .2em .6em">{{car['storeName']}}</span></p>
            </a>
          </div>
        </div>
      </div>
      <hr style="margin: 0px 5px">
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Allcar',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
    this.getallcar()
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    },
    getallcar: function () {
      $.ajax({
        url: 'http://localhost:8080/car/order',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          store.commit('writecarlist', {data: data})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
