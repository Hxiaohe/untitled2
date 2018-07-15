<template>
  <div class="alllist">
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Oxygen|Pacifico'>
  <link rel='stylesheet prefetch' href='https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'>
  <link href="/static/CSS/all_list.css" rel="stylesheet">
    <div id="container">

      <div id="search-box">
        <input id="userinput" type="text" placeholder="Search Wikipedia...">
        <a href="#" id="search" target="_self"><i class="fa fa-search"></i></a></div></div>
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade in active" id="attention" >
        <div class="panel panel-default" >
          <div class="panel-body">
            <div class="media">
              <a class="media-left" href="#">
                <img src="images/car.png" height="60" width="80">
              </a>
              <div class="media-body">
                <a href="#" > <p class="p1">朗逸</p>
                  <p>10.66-11.55万
                    <span class="glyphicon glyphicon-chevron-right"></span></p>
                  <p>丰田/紧凑型车<span class="label label-default span1">剩19辆车</span></p>
                </a>
              </div>
            </div>
          </div>
          <hr>
        </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Alllist'
}
</script>

<style scoped>

</style>
