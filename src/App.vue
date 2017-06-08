<template>
  <div id="app">
    <div class='button'>
      <zs-button @click='click'></zs-button>
      <zs-button color='white' type='mini' @click='clickaa'></zs-button>
      <zs-button color='disable'></zs-button>
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
    methods: {
      click() {
        this.$toast.success('11')
      },
      clickaa() {
        this.$confirm({ title: '删除提示', msg: '真的确定删除？' })
          .then(res => {
            if (res) {
              this.$toast.success('删除成功')
            }
          })
      }
    },
    created() {

    }
  }

</script>
<style>
  .button {
    padding: 20px;
    font-size: 0;
  }
</style>