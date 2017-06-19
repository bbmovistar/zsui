<template>
    <div>
        <zs-breadcrumb>
            <zs-breadcrumb-item :to='{name:"bbb"}'>aaa</zs-breadcrumb-item>
            <zs-breadcrumb-item>bbb</zs-breadcrumb-item>
            <span slot='right-option'>
                <zs-button @click='$toast.error("error")' text='error' icon='icon-export'></zs-button>
                <zs-button @click='$toast.warn("warn")' text='warn'></zs-button>
                <zs-button @click='zeff' text='反反复复' icon='icon-edit'></zs-button>
                <zs-button @click='zeff' text='反反复复' icon='icon-export'></zs-button>
            </span>
        </zs-breadcrumb>
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
        <zs-cascader :data="data1" v-model="testVal"></zs-cascader>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                aaa: false,
                current: 1,
                data1: [{
                    value: 'beijing',
                    label: '人文系',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '信息系',
                    children: [
                        {
                            value: 'nanjing',
                            label: '电子技术',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '电气自动化',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林狮子',
                                }
                            ]
                        }
                    ],
                }],
                testVal: ['jiangsu', 'nanjing', 'fuzimiao']

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