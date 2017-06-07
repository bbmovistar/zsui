<template>
  <div id="app">
    <zs-button></zs-button>
    <zs-button color='white' type='mini'></zs-button>
    <zs-button color='disable'></zs-button>
    <div v-for='item in 10'>
      <zs-button></zs-button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/button/button.vue'

  export default {
    name: 'app',
    components: {
      'zs-button': Button
    },
    methods() { }
  }

</script>
<style>
  #app {
    padding: 20px;
  }
</style>