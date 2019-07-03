<template>
  <footer class="footer_guider">
    <ul class="footer_wrap">
      <li class="footer_item" :class="{active:this.$route.path==='/home'}" @click="goTo('/home')"><span>首页</span></li>
      <li class="footer_item" :class="{active:this.$route.path==='/shop'}" @click="goTo('/shop')"><span>商城</span></li>
      <li class="footer_item" :class="{active:this.$route.path==='/profile'}" @click="goTo('/profile')"><span>我的</span></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuider',
  data () {
    return {
     
    }
  },
  methods:{
    // 因为路由已经在main.js注册过所以全局组件存在$router 和 $route
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .footer_guider{
   position: fixed;
   bottom: 0;
   height: 40px;
   width: 100%;
   border-top: 1px solid #f0f0f0
 }
 .footer_wrap{
   display: -webkit-box;
   display: -webkit-flex;
   display: flex;
 }
 .footer_item{
   margin: 5px;
   width: 33.3%;
 }
 .active{
   color: brown
 }
</style>
