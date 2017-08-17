<template>
  <div>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
   <p>对于这些在 enter/leave 过渡中切换的类名，v- 是这些类名的前缀。</p>
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
