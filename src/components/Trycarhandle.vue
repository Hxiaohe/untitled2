<template>
<div class="trycarhandle">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="/static/CSS/HandleTestCar.css" type="text/css" rel="stylesheet">
  <div class="template">
    <div v-for="(trycar,index) in this.$store.state.trycarlist" :key="index">
    <div class="layer">
      <div class="left">
        <div class="text1">  车型：{{trycar['category']}}</div>
        <div class="text1"> 申请信息：{{trycar['message']}}</div>
        <div class="text1"> 申请人：{{trycar['buyerId']}}</div>
      </div>
      <div class="right">
        <button type="submit" class="btn btn-default" v-if="trycar['state']=='unapplied'" v-on:click.prevent="trycarhandle(index)">确认处理</button>
        <label  class="result" v-if="trycar['state']!='unapplied'">已处理</label>
      </div>
    </div>
    <div class="line1"></div>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Trycarhandle',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
    this.gettrycarlist()
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    },
    gettrycarlist: function () {
      $.ajax({
        url: 'http://localhost:8080/api/reservation/',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          store.commit('writetrycarlist', {data: data})
        }
      })
    },
    trycarhandle: function (index) {
      $.ajax({
        url: 'http://localhost:8080/api/reservation/',
        type: 'PUT',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'reservationId': store.state.trycarlist[index]['reservationId']
        },
        success: function (data) {
          window.location.href = '#/trycarsuccess'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
