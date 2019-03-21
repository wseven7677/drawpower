<template>
  <div id="app">
    <div class="nav">
      <el-menu :default-active="activeItem" @select="gotoPath">
        <el-menu-item index="/">
          <i class="el-icon-caret-left"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/svg">
          <i class="el-icon-menu"></i>
          <span slot="title">svg</span>
        </el-menu-item>
        <el-menu-item index="/canvas">
          <i class="el-icon-menu"></i>
          <span slot="title">canvas</span>
        </el-menu-item>
        <el-menu-item index="/mapv">
          <i class="el-icon-menu"></i>
          <span slot="title">mapv</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App',
    computed: {
      activeItem() {
        return this.$route.path;
      }
    },
    methods: {
      gotoPath(index) {
        this.$router.push(index);
      }
    }
  }
</script>

<style lang="less">
@import './assets/drawframe.less';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;

    display: flex;
  }

  .nav {
    flex: 0 0 200px;
  }

  .view {
    flex: 1;
    padding: 10px;
  }
</style>