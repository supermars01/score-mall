<template>
  <div>
    <br>
    <input type="text" v-model="myMsg" @keyup="telP">
    <br>
    <span>直接绑定prop: {{msg}}</span>
    <br>
    <span>赋值到data:{{myMsg}}</span>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'child',
    data () {
      return {
        myMsg: this.msg
      }
    },
    props: ['msg'],
    methods: {
      telP () {
        var newV = this.myMsg
        this.$emit('communi', newV)
      }
    }
  }
</script>
<style>
</style>
