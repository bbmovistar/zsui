<template>
    <div>
        签到
        <zs-button text='aa' @click='$router.push({name:"detail"})'></zs-button>
        <zs-button text='aa' @click='$router.push({name:"detail2"})'></zs-button>
        <zs-paging :current='current' :all='all' @paging='paging'></zs-paging>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current: 1,
                all: 10
            }
        },
        methods: {
            paging($event) {
                this.current = $event
            }
        }
    }

</script>