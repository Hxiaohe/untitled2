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
      <a href="#/allcar">
      <div class="layer" >
        <div class="left">
          全部车辆
        </div>
        <div class="right">
          查看全部车辆>
        </div>
      </div>
      </a>
      <div class="line2"></div>
      <a href="#/interiorhandle">
      <div class="layer" >
        <div class="left">
          汽车内饰
        </div>
        <div class="right">
          查看全部>
        </div>
      </div>
      </a>
      <div class="line1"></div>
      <div class="layer" >
        <div class="left">
          粉丝数量
        </div>
        <button class="right">
          104
        </button>
      </div>
      <div class="line1"></div>
      <a  href="#/carorderhandle">
      <div class="layer" >
        <div class="left">
          购车订单
        </div>
        <div class="right">
          查看全部>
        </div>
      </div>
      </a>
      <div class="line2"></div>
      <a  href="#/fixhandle">
      <div class="layer" >
        <div class="left">
          保养/预约维修信息
        </div>
        <div class="right">
          >
        </div>
      </div></a>
      <div class="line1"></div>
      <a  href="#/trycarhandle">
      <div class="layer" >
        <div class="left">
          预约试车信息
        </div>
        <div class="right">
          >
        </div>
      </div></a>
      <div class="line1"></div>
      <a href="/#/upcar">
      <div class="layer" >
        <div class="left">
          车辆上新
        </div>
        <div class="right">
          >
        </div>
      </div></a>
      <div class="line1"></div>
      <a  href="/#/upinterior">
      <div class="layer" >
        <div class="left">
          汽车内饰上新
        </div>
        <div class="right">
          >
        </div>
      </div></a>
      <div class="line1"></div>
      <a  href="#/shopdetail">
      <div class="layer" >
        <div class="left">
          信息验证
        </div>
        <div class="right">
          >
        </div>
      </div></a>
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
      url: 'https://zscg.enderqiu.cn/api/user/profile',
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
