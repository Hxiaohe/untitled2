<template>
  <div class="shoplist">
  <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
  <link rel="stylesheet" href="/static/CSS/youlike.css">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <div id="section1">
    <div class="grid" id="grid">
      <div class="grid-sizer"></div>
      <div class="element-item merchandise col-xs-6" v-for="(shop,index) in this.$store.state.shoplist" :key="index">
        <div class="thumbnail">
          <a v-bind:href="shop['url']" class="noselect">
            <img src="http://placehold.it/220x220">
          </a>
          <div class="caption">
            <h4 class="name">{{shop['storeName']}}</h4><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Appointfix',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    store.commit('writetoken', {data: this.GetQueryString()})
    $.ajax({
      url: 'http://localhost:8080/user/profiles',
      type: 'GET',
      header: 'http://localhost:8081',
      headers: {
        'Authorization': store.state.token
      },
      success: function (data) {
        for (var i = 0; i < data.length; i++) {
          data[i].url = '#/shopindex?index=' + i
        }
        store.commit('writeshoplist', {data: data})
      }
    })
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return parseInt(r); return null
    }
  }
}
</script>

<style scoped>

</style>
