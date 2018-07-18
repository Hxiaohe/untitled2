<template>
<div class="payresult">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,scale-initial=1.0">
  <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="/static/CSS/Result.css" type="text/css">
  <div id="border">
    <div id="top">
      <div id="pic">
        <div id="circle">
                <span class="glyphicon glyphicon-ok"
                      style="font-size: 40px;color: red;margin-top: 10px;margin-left: 10px"></span>
        </div>
      </div>
      <div id="tip">
        <p>付款成功</p>
        <p>即刻可以到门店自提</p>
      </div>
    </div>
    <div id="bottom">
      <div id="submit">
        <button class="btn btn-default myBtn"><a href="#/buyercenter">查看订单</a></button>
      </div>
      <div id="words">
        <p>下单后，给您发送链接办理退款的都是骗子！
          掌上车管不存在系统升级，订单异常等问题，
          谨防假冒客服电话诈骗</p>
        <p>--------------------<span>猜你喜欢</span>--------------------</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Payresult'
}
</script>

<style scoped>

</style>
