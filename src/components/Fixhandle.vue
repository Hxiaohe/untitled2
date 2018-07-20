<template>
<div class="fixhandle">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="/static/CSS/HandleMaintain.css" type="text/css" rel="stylesheet">
  <div class="template">
    <div v-for="(fix,index) in this.$store.state.fixlist" :key="index">
    <div class="layer">
      <div class="left">
        <div class="text1">  车型：{{fix['category']}}</div>
        <div class="text1"> 期望日期：{{fix['date']}}</div>
        <div class="text1"> 申请人：{{fix['userName']}}</div>
        <div class="text1"> 需求说明：{{fix['description']}}</div>
      </div>
      <div class="right">
        <button type="submit" class="btn btn-default submit1" v-if="fix['status']=='unapplied'" v-on:click.prevent="fixhandle(index)">确认处理</button>
        <label  class="result text2" v-if="fix['status']!='unapplied'">已处理</label>
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
  name: 'Fixhandle',
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
        url: 'https://zscg.enderqiu.cn/api/maintenance/order',
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
    },
    fixhandle: function (index) {
      $.ajax({
        url: 'https://zscg.enderqiu.cn/api/maintenance/process',
        type: 'POST',

        headers: {
          'Authorization': store.state.token
        },
        data: {
          'Id': store.state.fixlist[index]['maintenanceId']
        },
        success: function (data) {
          window.location.href = '#/fixsuccess'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
