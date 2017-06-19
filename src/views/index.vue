<template>
    <div>
        index
        <zs-paging :current='current' :all='15' @paging='paging'></zs-paging>
        <zs-button @click='aaa=true'>111</zs-button>
        <zs-button type='white' @click='confirm' text='success'></zs-button>
        <zs-dialog :show='aaa' @enter='aaa=false' @close='aaa=false'>
            <div slot='main'>111</div>
        </zs-dialog>
        <zs-button @click='$toast.error("error")' text='error' icon='icon-export'></zs-button>
        <zs-button @click='$toast.warn("warn")' text='warn'></zs-button>
        <zs-button @click='zeff' text='反反复复' icon='icon-edit'></zs-button>
        <zs-button @click='zeff' text='反反复复' icon='icon-export'></zs-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                aaa: false,
                current: 1
            }
        },
        methods: {
            paging($event) {
                this.current = $event
            },
            confirm() {
                this.$confirm('确定删除吗?')
                    .then(res => {
                        if (res) {
                            this.$toast.success('点击了确定')
                        }
                    })
            },
            zeff() {
                this.$alert.success({
                    title: '这是啊',
                    msgTitle: '删除',
                    msg: '法大师傅大师傅的撒大网大王德瓦达'
                })
            }

        }
    }

</script>