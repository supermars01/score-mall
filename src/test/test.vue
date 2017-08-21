<template>
  <div>
    <ul>
      <li><button @click="change(1)">组件1</button>{{test}}</li>
      <li><button @click="change(2)">组件2</button></li>
    </ul>
    <p>total: {{count}}为</p>
    <transition mode="out-in" enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut" duration="300">
      <component :is="currentView"></component>
    </transition>
  </div>


</template>
<script type="text/ecmascript-6">
  import child from './child.vue'
  import child2 from './child2.vue'
  import {mapState} from 'vuex'
  console.log(mapState)
  export default {
    name: 'hello',
    data () {
      return {
        total: 0,
        bar: 'nothing',
        currentView: 'child'
      }
    },
    components: {
      child,
      child2
    },
    methods: {
      change (index) {
        if (index === 1) {
          this.currentView = 'child'
        } else if (index === 2) {
          console.log(222)
          this.currentView = 'child2'
        }
      }
    },
    computed: {
      count: function () {
        return this.$store.state.count
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  ul{
    overflow: hidden;
    li{
      float: left;
      height:0.68rem;
      line-height: 0.68rem;
    }
  }

</style>
