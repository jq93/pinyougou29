<template>
  <div>
    <!-- 搜索 -->
    <div class="search">
      <div class="search_input">
        <input type="text">
        <div class="word">
          <icon type="search" size="20"></icon>
          <span>搜索</span>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular class="slideshow">
      <block v-for="(item,index) in imgList" :key="index">
        <swiper-item>
          <image :src="item.image_src" mode="aspectFill"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 导航 -->
    <!-- 楼层 -->
    <div class="topbar">
      <!-- 标题 -->
      <div class="title">
        <image src="https://img.alicdn.com/tfs/TB1qd8zQmzqK1RjSZPxXXc4tVXa-160-280.jpg_290x290q90.jpg_.webp"></image>
      </div>
      <!-- 主体 -->
      <div class="content">
        <div class="left">
          <image src="https://img.alicdn.com/imgextra/i4/6000000002624/TB2QYtubk7OyuJjSsplXXXqdpXa_!!0-tbCommonAudio.jpg_180x180q90.jpg_.webp"></image>
        </div>
        <div class="right">
          <image src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
           <image src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
            <image src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
            <image src="https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入request方法
import request from "../../utils/request.js";
export default {
  data() {
    return {
      imgList: []
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
    console.log(this.imgList);
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
