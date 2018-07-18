<template>
<div class="trycarhandle">
  <link rel="stylesheet" type="text/css" href="/static/CSS/appointhandle.css">
  <div v-for="(trycar,index) in this.$store.state.trycarlist" :key="index">
    <form class="form-horizontal" role="form" action="">
      <div>
        车型：<label class="type">{{trycar['category']}}</label>
        <br>
        预约信息：<label class="day">{{trycar['message']}}</label>
        <br>
        预约人Id：<label class="contact">{{trycar['buyerId']}}</label></div>
      <div>
        <button type="submit" class="btn btn-default" v-if="trycar['state']=='unapplied'" v-on:click.prevent="trycarhandle(index)">确认处理</button>
        <label  class="result" v-if="trycar['state']!='unapplied'">已处理</label></div></form>
    <br>
    <hr>
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
        url: 'http://localhost:8080/reservation/',
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
        url: 'http://localhost:8080/reservation/',
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
