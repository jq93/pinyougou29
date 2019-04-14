<template>
  <div>
    <!-- 搜索 -->
   <topheader />
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular class="slideshow">
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <image :src="item.image_src" mode="aspectFill"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 导航 -->
    <div class="main">
      <div class="item" v-for="(item,index) in mainList" :key="index">
        <image :src="item.image_src" mode="aspectFit"></image>
      </div>
    </div>
    <!-- 楼层 -->
    <div class="topbar" v-for="(item,index) in topbarList" :key="index">
      <!-- 标题 -->
      <div class="title">
        <image :src="item.floor_title.image_src" mode="aspectFit"></image>
      </div>
      <!-- 主体 -->
      <div class="content">
        <div class="left">
          <image :src="item.product_list[0].image_src"  mode="aspectFit"></image>
        </div>
        <div class="right">
          <image v-if="subindex !=0" v-for="(subitem,subindex) in item.product_list" :key="subindex" :src="subitem.image_src"></image>
           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topheader from '../../components/topheader'
//导入request方法
import request from "../../utils/request.js";
export default {
  data() {
    return {
      imgList: [],
      //导航区域
      mainList:[],
      //楼层列表
      topbarList:[]
    };
  },
  // 请求页面中的数据
  async mounted() {
    var res = await request(
      "https://itjustfun.cn/api/public/v1/home/swiperdata"
    );
    // 解构赋值
    // var {data} =res.data;
    // this.imgList =data;
    this.imgList = res.data.data;
    // console.log(this.imgList);
    var ress =await request("https://itjustfun.cn/api/public/v1/home/catitems")
    this.mainList =ress.data.data;
    // console.log(this.mainList);
      var restopbarList =await request("https://itjustfun.cn/api/public/v1/home/floordata")
     this.topbarList =restopbarList.data.data;
    console.log(topbarList);
    
    
  },
  components:{
    topheader
  }

};
</script>

<style lang="less">
@import "./index.less";
</style>
