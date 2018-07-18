<template>
  <div class="searchinterior">
    <link rel="stylesheet" href="/static/CSS/searchinterior.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <br>
    <br>
    <br>
    <br>
    <form class="chair" role="form" action="">
      <input name="chair" type="image" value="车垫" src="/static/img/zuodian.jpg" v-on:click.prevent="carMat"/>
    </form>
    <p>座垫</p>
    <br>
    <form class="pendant" role="form" action="">
      <input name="pendant" type="image" value="车内挂件" src="/static/img/guajian.jpg" v-on:click.prevent="carPendant"/>
    </form>
    <p>车内挂件</p>
    <br>
    <form class="cover" role="form" action="">
      <input name="cover" type="image" value="方向盘套" src="/static/img/pantao.jpg" v-on:click.prevent="wheelCover"/>
    </form>
    <p>方向盘套</p>
    <br>
    <form class="other" role="form" action="">
      <input name="other" type="image" value="其他" src="/static/img/baozhen.jpg" v-on:click.prevent="others"/>
    </form>
    <p>其它</p>
    <br>
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
        url: 'http://localhost:8080/interior/search?Type=座垫',
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
        url: 'http://localhost:8080/interior/search?Type=汽车挂件',
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
        url: 'http://localhost:8080/interior/search?Type=方向盘套',
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
        url: 'http://localhost:8080/interior/search?Type=其他',
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
