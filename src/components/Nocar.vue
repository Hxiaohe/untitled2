<template>
  <div class="nocar">
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
    <link rel="stylesheet" href="/static/CSS/payresult.css" type="text/css">
    <div id="border">
      <div id="top">
        <div id="pic">
          <div id="circle">
                <span class="glyphicon glyphicon-ok"
                      style="font-size: 40px;color: red;margin-top: 10px;margin-left: 10px"></span>
          </div>
        </div>
        <div id="tip">
          <p>购买失败</p>
          <p>没有存货了</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nocar'
}
</script>

<style scoped>

</style>
