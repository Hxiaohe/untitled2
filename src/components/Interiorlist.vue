<template>
  <div class="interiorlist">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="static/CSS/carlist.css" rel="stylesheet">
    <ul id="myTab" class="nav nav-tabs" style="background-color: rgba(240,248,255,0.48)">
      <li class="col-xs-4 active "><a href="#attention" data-toggle="tab">
        关注高</a>
      </li>
      <li class="col-xs-4"><a href="#sales" data-toggle="tab">销售高</a></li>
      <li class="col-xs-4">
        <a href="#inprice" data-toggle="tab">价格</a>
      </li></ul><div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in active" id="attention" >
      <div class="panel panel-default" style="background-color: rgba(251,244,255,0.09)" >
        <div v-for="(interior,index) in this.$store.state.interiorlist" :key="index" v-if="interior['amount']!=0">
          <div class="panel-body" style="padding: 4px 7px;margin-top: 10px">
            <div class="media">
              <a class="media-left" href="#">
                <img v-bind:src="interior['interiorImageUrl']" height="60" width="80">
              </a>
              <div class="media-body">
                <a  v-bind:href="interior['url']" style="text-decoration: none"> <p  style="font-size: 15px; margin-bottom: 5px;color: #2e2e2e">{{interior['name']}}</p>
                  <p   style="font-size: 10px;color: darkorange; margin-bottom: 7px">{{interior['price']}}
                    <span class="glyphicon glyphicon-chevron-right" style="color: #bdc1ce;float: right;"></span></p>
                  <p  style="font-size: 10px;">{{interior['brand']}}/{{interior['type']}}<span class="label label-default" style="margin-left: 5px; background-color: #d3f1ff; color: #4a6ce2; padding: .2em .6em">{{interior['amount']}}</span></p>
                </a>
              </div>
            </div>
          </div>
          <hr style="margin: 0px 5px">
        </div>

      </div>
    </div>
    <div class="tab-pane fade" id="sales">

      <div v-for="(interior,index) in this.$store.state.interiorlist" :key="index"  v-if="interior['amount']!=0">
        <div class="panel-body" style="padding: 4px 7px;margin-top: 10px">
          <div class="media">
            <a class="media-left" href="#">
              <img v-bind:src="interior['interiorImageUrl']" height="60" width="80">
            </a>
            <div class="media-body">
              <a  v-bind:href="interior['url']" style="text-decoration: none"> <p  style="font-size: 15px; margin-bottom: 5px;color: #2e2e2e">{{interior['name']}}</p>
                <p   style="font-size: 10px;color: darkorange; margin-bottom: 7px">{{interior['price']}}
                  <span class="glyphicon glyphicon-chevron-right" style="color: #bdc1ce;float: right;"></span></p>
                <p  style="font-size: 10px;">{{interior['brand']}}/{{interior['type']}}<span class="label label-default" style="margin-left: 5px; background-color: #d3f1ff; color: #4a6ce2; padding: .2em .6em">{{interior['amount']}}</span></p>
              </a>
            </div>
          </div>
        </div>
        <hr style="margin: 0px 5px">
      </div>

    </div>
    <div class="tab-pane fade" id="inprice">
      <div v-for="(interior,index) in this.$store.state.interiorlist" :key="index"  v-if="interior['amount']!=0">
        <div class="panel-body" style="padding: 4px 7px;margin-top: 10px">
          <div class="media">
            <a class="media-left" href="#">
              <img v-bind:src="interior['interiorImageUrl']" height="60" width="80">
            </a>
            <div class="media-body">
              <a  v-bind:href="interior['url']" style="text-decoration: none"> <p  style="font-size: 15px; margin-bottom: 5px;color: #2e2e2e">{{interior['name']}}</p>
                <p   style="font-size: 10px;color: darkorange; margin-bottom: 7px">{{interior['price']}}
                  <span class="glyphicon glyphicon-chevron-right" style="color: #bdc1ce;float: right;"></span></p>
                <p  style="font-size: 10px;">{{interior['brand']}}/{{interior['type']}}<span class="label label-default" style="margin-left: 5px; background-color: #d3f1ff; color: #4a6ce2; padding: .2em .6em">{{interior['amount']}}</span></p>
              </a>
            </div>
          </div>
        </div>
        <hr style="margin: 0px 5px">
      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'interiorlist',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
