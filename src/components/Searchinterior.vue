<template>
  <div class="searchinterior">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/SelectInterior.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="layer" align="center">
        <input type="button" value="坐垫" class="button1" v-on:click.prevent="carMat">
      </div>
      <div class="layer" align="center">
        <input type="button" value="车内挂件" class="button1" v-on:click.prevent="carPendant">
      </div>
      <div class="layer" align="center">
        <input type="button" value="方向盘套" class="button1" v-on:click.prevent="wheelCover">
      </div>
      <div class="layer" align="center">
        <input type="button" value="其他" class="button1" v-on:click.prevent="others">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Searchinterior',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    store.commit('writetoken', {data: this.GetQueryString()})
  },
  methods: {
    carMat: function () {
      $.ajax({
        url: 'http://localhost:8080/api/interior/search?Type=座垫',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/interiordetail?index=' + i
          }
          store.commit('writeinteriorlist', {data: data})
          window.location.href = '#/interiorlist'
        }
      })
    },
    carPendant: function () {
      $.ajax({
        url: 'http://localhost:8080/api/interior/search?Type=汽车挂件',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/interiordetail?index=' + i
            data[i].buyurl = '#/buyinterior?index=' + i
          }
          store.commit('writeinteriorlist', {data: data})
          window.location.href = '#/interiorlist'
        }
      })
    },
    wheelCover: function () {
      $.ajax({
        url: 'http://localhost:8080/api/interior/search?Type=方向盘套',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/interiordetail?index=' + i
            data[i].buyurl = '#/BuyInterior?index=' + i
          }
          store.commit('writeinteriorlist', {data: data})
          window.location.href = '#/interiorlist'
        }
      })
    },
    others: function () {
      $.ajax({
        url: 'http://localhost:8080/api/interior/search?Type=其他',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        success: function (data) {
          for (var i = 0; i < data.length; i++) {
            data[i].url = '#/interiordetail?index=' + i
            data[i].buyurl = '#/BuyInterior?index=' + i
          }
          store.commit('writeinteriorlist', {data: data})
          window.location.href = '#/interiorlist'
        }
      })
    },
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    }
  }
}
</script>

<style scoped>

</style>
