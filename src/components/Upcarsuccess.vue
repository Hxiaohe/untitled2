<template>
    <div class="upcarsuccess">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link href="/static/CSS/UpdateResult.css" type="text/css" rel="stylesheet">
      <div class="layer2 sizeImg" >
        <img v-bind:src="this.$store.state.carlist['carImageUrl']" id="carImg1">
      </div>
      <div class="layer text1" align="center">
        车辆上成功
      </div>
      <div class="layer footer" align="center" >
        <a href="#/allcar"><input type="submit" value="查看详情" class="submit1"></a>
      </div>
      <div class="layer footer" align="center" >
        <a href="#/sellercenter"><input type="submit" value="确定" class="submit1"></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Upcarsuccess'
}
</script>

<style scoped>

</style>
