<template>
    <div class="carlist"><ul id="myTab" class="nav nav-tabs">
      <li class="col-xs-4 active "><a href="#attention" data-toggle="tab">
        关注高</a>
      </li>
      <li class="col-xs-4"><a href="#sales" data-toggle="tab">销售高</a></li>
      <li class="col-xs-4">
        <a href="#inprice" data-toggle="tab">价格</a>
      </li></ul><div id="myTabContent" class="tab-content">
      <div class="tab-pane fade in active" id="attention">
        <div class="panel panel-default">
          <div class="panel-body"  v-for="(car,index) in this.$store.state.carlist" :key="index">
            <div class="media">
              <a class="media-left" href="#">
                <img src="../assets/baoma525Li.jpg" height="60" width="70">
              </a>
              <div class="media-body">
                <a v-bind:href="car['url']" style="text-decoration: none"> <p  style="font-size: 10px">{{car['carKind']}}</p>
                  <p   style="font-size: 10px;color: darkorange">{{car['price']}}
                    <span class="glyphicon glyphicon-chevron-right" style="color: #312E3D;text-align: right"></span></p>
                  <p  style="font-size: 10px">{{car['brand']}}/{{car['struct']}}<span class="label label-default">{{car['storeName']}}</span></p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="sales">

        <div class="panel-body"  v-for="(car,index) in this.$store.state.carlist" :key="index">
          <div class="media">
            <a class="media-left" href="#">
              <img src="../assets/baoma525Li.jpg" height="60" width="70">
            </a>
            <div class="media-body">
              <a v-bind:href="car['url']" style="text-decoration: none"> <p  style="font-size: 10px">{{car['carKind']}}</p>
                <p   style="font-size: 10px;color: darkorange">{{car['price']}}
                  <span class="glyphicon glyphicon-chevron-right" style="color: #312E3D;text-align: right"></span></p>
                <p  style="font-size: 10px">{{car['brand']}}/{{car['struct']}}<span class="label label-default">{{car['storeName']}}</span></p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="inprice">

        <div class="panel-body"  v-for="(car,index) in this.$store.state.carlist" :key="index">
          <div class="media">
            <a class="media-left" href="#">
              <img src="../assets/baoma525Li.jpg" height="60" width="70">
            </a>
            <div class="media-body">
              <a v-bind:href="car['url']" style="text-decoration: none"> <p  style="font-size: 10px">{{car['carKind']}}</p>
                <p   style="font-size: 10px;color: darkorange">{{car['price']}}
                  <span class="glyphicon glyphicon-chevron-right" style="color: #312E3D;text-align: right"></span></p>
                <p  style="font-size: 10px">{{car['brand']}}/{{car['struct']}}<span class="label label-default">{{car['storeName']}}</span></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div></div>
</template>

<script>
export default {
  name: 'carlist',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
