<template>
  <div class="appointresult">
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
    <div class="resultinfo">恭喜你，预约成功！服务人员会尽快跟你联系请保持电话畅通。</div>
    <br>

    <form class="info" role="form" action="">
      <div class="form-group" id="button">
        <button type="submit" class="btn btn-default" v-on:click.prevent="tobuyercenter">确 &nbsp; &nbsp; &nbsp;认</button>
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
  name: 'Appointresult',
  methods: {
    tobuyercenter: function () {
      window.location.href = '#/buyercenter?token=' + store.state.token
    }
  }
}
</script>

<style scoped>

</style>
