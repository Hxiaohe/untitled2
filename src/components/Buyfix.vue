<template>
  <div class="fixhandle">
    <link rel="stylesheet" type="text/css" href="/static/CSS/appointhandle.css">
    <div v-for="(fix,index) in this.$store.state.fixlist" :key="index">
      <form class="form-horizontal" role="form" action="">
        <div>
          车型：<label class="type">{{fix['category']}}</label>
          <br>
          需求说明：<label class="need">{{fix['description']}}</label>
          <br>
          期望日期：<label class="day">{{fix['date']}}</label></div>
        <div>
          <label  class="result" v-if="fix['status']=='unapplied'">待处理</label>
          <label  class="result" v-if="fix['status']!='unapplied'">已处理</label></div></form>
      <br>
      <hr>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Buyfix',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
    this.getfixlist()
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    },
    getfixlist: function () {
      $.ajax({
        url: 'http://localhost:8080/api/maintenance/order',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          store.commit('writefixlist', {data: data})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
