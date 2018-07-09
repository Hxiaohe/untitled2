<template>
  <div class="hello">
    <p class="text-center">注：用户类型不可更改，请谨慎选择。</p>
    <div class="form-group">
      <div class="col-xs-offset-1 col-xs-10">
        <h3> <button type="submit" class="btn btn-default" onclick="javascript:window.location.href='#/sellercenter';" Style="color:white ;background-color: darkorange">
          我要成为卖家</button></h3>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-1 col-xs-10">
          <h3> <button type="submit" class="btn btn-default" onclick="javascript:window.location.href='#/buyercenter';" Style="color:white ;background-color: darkorange">
            我要成为买家</button></h3>
        </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
