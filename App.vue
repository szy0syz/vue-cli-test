<template>
	<navbar></navbar>
	<div class="container">
		<jumbotron></jumbotron>	
	</div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Jumbotron   from './components/Jumbotron.vue'
  

  export default {
    data: function() {
      return {
      }
    },
    methods: {
    },
    components: {
        'navbar': Navbar,
        'jumbotron': Jumbotron
    }
  }
</script>

<style>
	body {
	  min-height: 2000px;
	  padding-top: 70px;
	}
</style>