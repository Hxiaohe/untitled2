<template>
<div class="submitresult">
  <link rel="stylesheet" href="/static/CSS/submitresult.css">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <br>
  <br>
  <br>
  <div class="tickicon" >
    <img src="/static/img/tickicon.png" alt="icon">
  </div>
  <br>
  <br>
  <div class="resultinfo">您的信息已经成功提交。管理员会尽快审核您的信息，请您耐心等待。</div>
  <br>

  <form class="info" role="form" action="">
    <div class="form-group" id="button">
      <button type="submit" class="btn btn-default" v-on:click.prevent="tosellercenter">确 &nbsp; &nbsp; &nbsp;认</button>
      <br>
      <br>
    </div>
  </form>
  <br>
  <br>
  <br>
</div>
</template>

<script>
import store from '../store'

export default {
  name: 'Submitresult',
  methods: {
    tosellercenter: function () {
      window.location.href = '#/sellercenter?token=' + store.state.token
    }
  }
}
</script>

<style scoped>

</style>
