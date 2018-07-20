<template>
  <div class="buytrycar">
    <link rel="stylesheet" type="text/css" href="/static/CSS/appointhandle.css">
    <div v-for="(trycar,index) in this.$store.state.trycarlist" :key="index">
      <form class="form-horizontal" role="form" action="">
        <div>
          车型：<label class="type">{{trycar['category']}}</label>
          <br>
          预约信息：<label class="day">{{trycar['message']}}</label>
          <br>
          卖家：<label class="contact">{{trycar['storeName']}}</label></div>
        <div>
          <label  class="result" v-if="trycar['state']=='unapplied'">待处理</label>
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
  name: 'Buytrycar',
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
    }
  }
}
</script>

<style scoped>

</style>
