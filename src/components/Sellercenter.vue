<template>
  <div class="sellercenter">
    <link href="/static/CSS/StoreManage.css" type="text/css" rel="stylesheet">
    <div class="template">
      <div class="header" id="">
        <img v-bind:src="this.$store.state.user['userAvatarUrl']" id="SM_img1" >
      </div>
      <div class="layer1" id="storeName">
        {{this.$store.state.user['storeName']}}
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          全部车辆
        </div>
        <a href="#/allcar" class="right">
          查看全部车辆>
        </a>
      </div>
      <div class="line2"></div>
      <div class="layer" >
        <div class="left">
          汽车内饰
        </div>
        <button class="right">
          查看全部>
        </button>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          粉丝数量
        </div>
        <button class="right">
          9999
        </button>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          购车订单
        </div>
        <a href="#/carorderhandle" class="right">
          查看全部>
        </a>
      </div>
      <div class="line2"></div>
      <div class="layer" >
        <div class="left">
          保养/预约维修信息
        </div>
        <a href="#/fixhandle" class="right">
          >
        </a>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          预约试车信息
        </div>
        <a href="#/trycarhandle" class="right">
          >
        </a>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          车辆上新
        </div>
        <a href="/#/upcar" class="right">
          >
        </a>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          汽车内饰上新
        </div>
        <a href="/#/upinterior" class="right">
          >
        </a>
      </div>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          信息验证
        </div>
        <a href="#/shopdetail" class="right">
          >
        </a>
      </div>
      <div class="layer" >
        <div class="text">
          注：经后台人员审核通过，您才能上架商品
        </div>
      </div>
      <div class="line2"></div>
      <div class="layer" >
        <div class="left">
          设置
        </div>
        <button class="right">
          账户管理>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
var $ = require('jquery')
export default {
  name: 'Sellercenter',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    if (this.GetQueryString() != null) { store.commit('writetoken', {data: this.GetQueryString()}) }
    $.ajax({
      url: 'http://localhost:8080/api/user/profile',
      type: 'GET',

      headers: {
        'Authorization': store.state.token
      },
      success: function (data) {
        store.commit('writeuser', {data: data})
      }
    })
  },
  methods: {
    GetQueryString: function () {
      var r = this.$route.fullPath.split('=')[1]
      if (r != null) return (r); return null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
