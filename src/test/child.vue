<template>
  <div>
    第一个组件
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'child',
    data () {
      return {
      }
    },
    props: ['foo'],
    computed: {
      childFoo: {
        get () {
          return this.foo
        },
        set (newValue) {
          this.$emit('update:foo', newValue)
        }
      }
    }
  }
</script>
<style>
</style>
