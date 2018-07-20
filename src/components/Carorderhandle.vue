<template>
  <div class="fixhandle">
    <link rel="stylesheet" type="text/css" href="/static/CSS/appointhandle.css">
    <div v-for="(carorder,index) in this.$store.state.carorderlist" :key="index">
      <form class="form-horizontal" role="form" action="">
        <div>
          车型：<label class="type">{{carorder['category']}}</label>
          <br>
          价格：<label class="need">{{carorder['price']}}</label>
          <br>
          预约人：<label class="contact">{{carorder['userName']}}</label></div>
        </form>
      <br>
      <hr>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'carorderhandle',
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
        url: 'https://zscg.enderqiu.cn/api/car/order',
        type: 'GET',

        headers: {
          'Authorization': store.state.token
        },
        data: {
        },
        success: function (data) {
          store.commit('writecarorderlist', {data: data})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
