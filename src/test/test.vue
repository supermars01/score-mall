<template>
  <div>
    父：{{bar}}
    <child :foo.sync="bar"></child>
  </div>


</template>
<script type="text/ecmascript-6">
  import child from './child.vue'
  export default {
    name: 'hello',
    data () {
      return {
        total: 0,
        bar: 'nothing'
      }
    },
    components: {
      child
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
