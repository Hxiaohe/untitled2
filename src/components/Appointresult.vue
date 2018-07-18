<template>
  <div class="appointresult">
    <link rel="stylesheet" href="/static/CSS/submitresult.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="renderer" content="webkit">
    <div class="template">
      <div class="layer2">
        <div class="left">
          <img src="/static/img/确认.png" alt="" id="img">
        </div>
        <div class="right">
          您的信息已成功提交，管理员会尽快审核你们的信息，请耐心等待。
        </div>
      </div>
      <div class="layer" align="center">
        <input type="submit" value="确认" id="submit" v-on:click.prevent="tobuyercenter">
      </div>
    </div>
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
