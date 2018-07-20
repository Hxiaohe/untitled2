<template>
<div class="submitresult">
  <link rel="stylesheet" href="/static/CSS/SubmitResult.css">
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
      <input type="submit" value="确认" id="submit" v-on:click="tosellercenter">
    </div>
  </div>
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
