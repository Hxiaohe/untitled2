<template>
    <div class="index">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link href="/static/CSS/SelectType.css" rel="stylesheet">
      <div class="template">
        <div class="layer text">
          注：用户类型不可更改，请用户认真选择
        </div>
        <div class="layer" align="center">
          <input type="button" class="button" value="我要成为买家" v-on:click.prevent="buyerCenter">
        </div>
        <div class="layer" align="center">
          <input type="button" class="button" value="我要成为卖家" v-on:click.prevent="sellerCenter">
        </div>
      </div>
      <input id="token" type="hidden" v-bind:value="GetQueryString()">
    </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    sellerCenter: function () {
      $.ajax({
        url: 'http://localhost:8080/api/user/type?userType=seller',
        type: 'PUT',
        headers: {
          'Authorization': $('#token').val()
        },
        success: function () {
          store.commit('writetoken', {data: $('#token').val()})
          window.location.href = '#/sellercenter?token=' + store.state.token
        }
      })
    },
    buyerCenter: function () {
      $.ajax({
        url: 'http://localhost:8080/api/user/type?userType=buyer',
        type: 'PUT',
        headers: {
          'Authorization': $('#token').val()
        },
        success: function () {
          store.commit('writetoken', {data: $('#token').val()})
          window.location.href = '#/buyercenter?token=' + store.state.token
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
