<template>
  <div id="app">
    <div class='buttons'>
      <zs-button @click='click'></zs-button>
      <zs-button color='white' type='mini' @click='dialogFlag=true'></zs-button>
      <zs-button color='disable'></zs-button>
      <zs-dialog :show='dialogFlag' @enter='enter' @close='close'></zs-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        dialogFlag: false
      }
    },
    methods: {
      click() {
        this.$confirm({ title: '删除提示', msg: '真的确定删除？' })
          .then(res => {
            if (res) {
              this.$toast.success('删除成功')
            }
          })
      },
      enter() {
        this.dialogFlag = false
      },
      close() {
        this.dialogFlag = false
      }
    }
  }

</script>
<style>
  .buttons {
    padding: 20px;
    font-size: 0;
  }
</style>