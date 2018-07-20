<template>
  <div class="interiorhandle">
    <link rel="stylesheet" type="text/css" href="/static/CSS/appointhandle.css">
    <div v-for="(carorder,index) in this.$store.state.carorderlist" :key="index">
      <form class="form-horizontal" role="form" action="">
        <div>
          名字：<label class="type">{{carorder['name']}}</label>
          <br>
          类型：<label class="type">{{carorder['type']}}</label>
          <br>
          价格：<label class="need">{{carorder['price']}}</label>
          <br>
          预约人：<label class="contact">{{carorder['buyerName']}}</label></div>
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
  name: 'Interiorhandle',
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
        url: 'http://localhost:8080/api/interior/order',
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
