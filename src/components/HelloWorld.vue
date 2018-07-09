<template>
  <div class="hello">
    <p class="text-center">注：用户类型不可更改，请谨慎选择。</p>
    <div class="form-group">
      <div class="col-xs-offset-1 col-xs-10">
        <h3> <button type="submit" class="btn btn-default" v-on:click="sellerCenter" Style="color:white ;background-color: darkorange">
          我要成为卖家</button></h3>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-1 col-xs-10">
          <h3> <button type="submit" class="btn btn-default" v-on:click="buyerCenter" Style="color:white ;background-color: darkorange">
            我要成为买家</button></h3>
        </div>
  </div>
    </div>
  </div>
</template>

<script>
// import store from '../store'
var $ = require('jquery')
export default {
  name: 'HelloWorld',
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
        url: 'http://localhost:8080/api/user/type?userType=buyer',
        type: 'PUT',
        // header: 'http://localhost:8081',
        headers: {
          'Authorization': '8'
        },
        data: {
        },
        success: function () {
          // store.commit('writecarlist', {data: data})
          alert('成功！')
          window.location.href = '#/sellercenter'
        }
      })
    },
    buyerCenter: function () {
      $.ajax({
        // url: 'http://localhost:8080/api/car/search?brand=' + $('#brand').val() + '&grade=' + $('#grade').val() + '&lPrice=' + $('#lPrice').val() + '&hPrice=' + $('#hPrice').val() +
        // '&struct=' + $('#struct').val() + '&gearbox=' + $('#gearbox').val(),
        url: 'http://localhost:8080/api/user/type?userType=seller',
        type: 'PUT',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': '8'
        },
        data: {
        },
        success: function () {
          // store.commit('writecarlist', {data: data})
          alert('成功！')
          window.location.href = '#/buyercenter'
          // alert(data[0]['brand'] + data[0]['price'] + data[0]['carKind'])
          // alert('http://localhost:8080/api/car/search?brand=' + $('#brand').val() + '&lPrice=' + $('#lPrice').val() + '&hPrice=' + $('#hPrice').val())
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
