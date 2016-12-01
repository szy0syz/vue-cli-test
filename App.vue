<template>
  <h1>welcome app</h1>
  <hr>
  <h2 @click="change">{{msg}}</hr>
</template>

<script>

  export default {
    data: function() {
      return {
        msg: 'webpack...'
      }
    },
    methods: {
    change: function() {
        this.msg = 'changed!!!'  
      }
    }
  }

</script>

<style>
  body{
		background: #fff
  }
</style>