<template>
  <header class="top_header">
    <div class="header_title">
      <span>{{title}}</span>
    </div>
  </header>
</template>

<script>
export default {
    name:'HeaderTop',
    props:{
        title: String
    }

};
</script>

<style scoped>
.top_header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  border-bottom:1px solid #f0f0f0;
  background-color: bisque;
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #000;
  text-align: center;
}
</style>
