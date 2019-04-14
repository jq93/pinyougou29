<template>
  <div>
    <div class="mytop">
 <!-- 头部搜索 -->
    <topheader />
    </div>
   
    <!-- 内容区域 -->
    <div class="content">
      <div class="nav">
        <div class="nav-item" @click="setRightData(index)" :class="{active : selectedIndex==index}" v-for="(item,index) in dataList" :key="index"> {{item.cat_name}} </div>
       
      </div>
      <div class="goods">
        <image class="topimg" src="https://img.alicdn.com/simba/img/TB1WhQTO7voK1RjSZPfSutPKFXa.jpg" mode="aspectFill"></image>
        <div class="list" v-for="(item,index) in rightList" :key="index">
          <div class="title">
            <span>/</span> {{item.cat_name}}
            <span>/</span>
          </div>
          <div class="item-list">
            <div class="item" v-for="(subitem, subindex) in item.children" :key="subindex">
              <image :src=" 'https://itjustfun.cn/' + subitem.cat_icon" mode="aspectFill"></image>
              <span>{{subitem.cat_name}} </span>
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
// 导入自己的request
import request from '../../utils/request.js'
export default {
  data(){
    return{
      //左边分类列表
      dataList:[],
      selectedIndex:0,
      rightList:[]
    }
  },
  components: {
    topheader
  },
  methods: {
   setRightData(index){
     this.selectedIndex =index;
     //根据index得到当前点击的右侧菜单
     this.rightList =this.dataList[index].children
     console.log(this.rightList);
     
   }
  },
  // 获取左侧菜单
  async  mounted() {
    let res =await request("https://itjustfun.cn/api/public/v1/categories")
    this.dataList =res.data.data;
    console.log(this.dataList);
    
  },
}
</script>

<style lang="less">
@import "./index.less";
</style>
