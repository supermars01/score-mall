<template>
  <div id="app">
    <NavHeader :nav="nav"></NavHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import NavHeader from '@/components/NavHeader'
  export default {
    name: 'app',
    components: {
      NavHeader
    },
    props: ['nav'],
    mounted () {
      console.log(this.nav)
    }
  }
</script>

<style>
  @import "assets/scss/index.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 0.91rem;
  box-sizing: border-box;
}
</style>
