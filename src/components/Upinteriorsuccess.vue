<template>
  <div class="upinteriorsuccess">
    <link rel="stylesheet" href="static/CSS/upnewresult.css">
    <meta name="renderer" content="webkit">
    <br>
    <br>

    <img  v-bind:src="this.$store.state.interiorlist['interiorImageUrl']" alt="商品图片"/>

    <p align='center' style="color: rgba(16, 16, 16, 1);font-size: 14px;font-family: Arial">商品上架成功！</p>
    <br>
    <form class="return" role="form" action="">
      <div class="form-group" id="button2">
        <button type="submit" class="btn btn-default" onclick="javascript:window.location.href='#/sellercenter';">确定</button>
        <br>
        <br>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Upinteriorsuccess'
}
</script>

<style scoped>

</style>
