<template>
  <div class="hello">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <link href="/static/CSS/upnewresult.css" rel="stylesheet">
    <p class="text-center"  style="margin-left:25%">注：用户类型不可更改，请谨慎选择。</p>
    <form class="info" role="form" action="">
    <div class="form-group" id="button">
        <button type="submit" class="btn btn-default" v-on:click.prevent="sellerCenter" Style="color:white ;background-color: darkorange">
          我要成为卖家</button>
          <br>
          <br>
    </div>
    </form>
    <br>
    <br>
    <br>
      <form class="info" role="form" action="">
      <div class="form-group" id="button2">
           <button type="submit" class="btn btn-default" v-on:click.prevent="buyerCenter" Style="color:white ;background-color: darkorange">
            我要成为买家</button>
        <br>
        <br>
  </div>
      </form>
  </div>
</template>

<script>
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
        url: 'http://localhost:8080/user/type?userType=seller',
        type: 'PUT',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': 15
        },
        success: function () {
          alert('成功！')
          window.location.href = '#/sellercenter'
        }
      })
    },
    buyerCenter: function () {
      $.ajax({
        url: 'http://localhost:8080/user/type?userType=buyer',
        type: 'PUT',
        header: 'http://localhost:8081',
        headers: {
          'Authorization': 15
        },
        success: function () {
          window.location.href = '#/buyercenter'
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
