<template>
  <div id="app">
    <zs-main :leftMenuList='leftMenuData'></zs-main>
  </div>
</template>

<script>
  import main from '@/components/main/main.vue'
  import data from './data.js'

  export default {
    name: 'app',
    data() {
      return {
        leftMenuData: data
      }
    },
    components: {
      'zs-main': main
    }
  }

</script>
