<template>
  <div class="Interiordetail">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/CSS/interiorDetail.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="header" id="">
        <img v-bind:src="this.$store.state.interiorlist[GetQueryString()]['interiorImageUrl']" id="SM_img1" >
      </div>
      <div class="layer">
        <div class="left text1">
          {{this.$store.state.interiorlist[GetQueryString()]['name']}}
        </div>
        <div class="right text2">
          ￥{{this.$store.state.interiorlist[GetQueryString()]['price']}}
        </div>
      </div>
      <div class="line1"></div>
      <div class="layer">
        车辆详情
      </div>
      <div class="layer2 text3">
      </div>
      <div class="footer">
        <input type="button" id="button1" value="客服">
        <input type="button" id="button2" value=" ">
        <a v-bind:href="this.$store.state.interiorlist[GetQueryString()]['buyurl']"><input type="button" id="button3" value="立即购买"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Interiordetail',
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    }
  }
}
</script>

<style scoped>

</style>
