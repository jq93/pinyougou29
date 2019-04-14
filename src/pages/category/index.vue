<template>
  <div>
    <!-- 头部搜索 -->
    <topheader />
    <!-- 内容区域 -->
    <div class="content">
      <div class="nav">
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
        <div class="nav-item">大家电</div>
      </div>
      <div class="goods">
        <image class="topimg" src="https://img.alicdn.com/simba/img/TB1WhQTO7voK1RjSZPfSutPKFXa.jpg" mode="aspectFill"></image>
        <div class="list">
          <div class="title">
            <span>/</span> 电视
            <span>/</span>
          </div>
          <div class="item-list">
            <div class="item" v-for="(item, index) in [1,1,1,1,1,1,1,1,1]" :key="index">
              <image src="https://img.alicdn.com/tps/i4/TB1PF7LL9zqK1RjSZFpSuukSXXa.jpg_240x240q90.jpg" mode="aspectFill"></image>
              <span>曲面电视</span>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>/</span> 电视
            <span>/</span>
          </div>
          <div class="item-list">
            <div class="item" v-for="(item, index) in [1,1,1,1,1,1,1,1,1]" :key="index">
              <image src="https://img.alicdn.com/tps/i4/TB1PF7LL9zqK1RjSZFpSuukSXXa.jpg_240x240q90.jpg" mode="aspectFill"></image>
              <span>曲面电视</span>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>/</span> 电视
            <span>/</span>
          </div>
          <div class="item-list">
            <div class="item" v-for="(item, index) in [1,1,1,1,1,1,1,1,1]" :key="index">
              <image src="https://img.alicdn.com/tps/i4/TB1PF7LL9zqK1RjSZFpSuukSXXa.jpg_240x240q90.jpg" mode="aspectFill"></image>
              <span>曲面电视</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import topheader from '../../components/topheader.vue'
export default {
  components: {
    topheader
  }
}
</script>

<style lang="less">
@import "./index.less";
</style>
