<template>
    <div class="zs-select">
        <div class="zs-select_box" @click.stop="isDown = !isDown">
            <input type="text" class="zs-select_input" :placeholder="disabled? '' : placeholder" :disabled="disabled" :readonly="readonly"
                v-model="selectItem" @blur="handleBlur">
            <i class="zs-select_icon" :class="{opened: isDown}" v-if="!disabled"></i>
        </div>
        <div class="zs-select_dropDown_box" v-show="isDown && !disabled" :class="{isDown: isDown}">
            <ul v-if="list.length <= 0" class="zs-select-_dropDown_menu">
                <li>暂无数据</li>
            </ul>
            <zs-options v-if="list.length > 0" @select="select" :optionList="list"></zs-options>
        </div>
    </div>
</template>
<script>
    import options from './select-option.vue'
    export default {
        name: 'zs-select',
        components: {
            'zs-options': options
        },
        props: {
            value: {
                //                type: Number,
                default: null
            },
            optionList: {
                type: Array,
                default: function () {
                    return []
                }
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: true
            },
            filterable: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            //            selectItem(){
            //                if(value){
            //                    return value
            //                }
            //            }
        },
        watch: {
            optionList: 'watchOptionList',
            value: 'watchValue',
            selectItem: 'watchSelectItem'
        },
        data() {
            return {
                selectItem: '',
                list: this.optionList,
                isDown: false
            }
        },
        methods: {
            select(item) {
                this.selectItem = item.label;
                if (this.readonly) {
                    this.$emit('input', item.value)
                }
                this.isDown = false;
            },
            watchOptionList() {
                this.selectItem = '';
                this.list = this.optionList;
                if (this.value !== null) {
                    for (let index of this.list) {
                        if (this.value === index.value) {
                            this.selectItem = index.label
                            return
                        } else {
                            this.selectItem = ''
                        }
                    }
                }
            },
            watchValue(newVal) {
                this.$emit('change', newVal)
                if (this.readonly) {
                    if (newVal === null) {
                        this.selectItem = ''
                    } else {
                        //                        this.list.forEach((item) => {
                        //                            if(this.value === item.value){
                        //                                this.selectItem = item.label
                        //                            }
                        //                        })
                        for (let index of this.list) {
                            if (this.value === index.value) {
                                this.selectItem = index.label
                                return
                            } else {
                                this.selectItem = ''
                            }
                        }
                    }
                } else {
                    if (newVal === '') {
                        this.selectItem = ''
                    } else {
                        this.selectItem = newVal
                    }

                }

            },
            watchSelectItem(newVal) {
                if (this.readonly === false) {
                    if (this.filterable) {
                        this.list = this.optionList
                        if (newVal !== '') {
                            this.list = this.list.filter(function (i) {
                                if (i.label.indexOf(newVal) > -1) {
                                    return true
                                } else {
                                    return false
                                }
                            })
                        }
                    }
                    this.$emit('input', newVal)
                }
            },
            handleBlur() {
                //
            }
        },
        created() {
            //点击其他位置收起
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) this.isDown = false
            })
        },
        mounted() {
            if (this.value) {
                this.$nextTick(function () {
                    if (this.readonly) {
                        this.optionList.forEach((item) => {
                            if (item.value === this.value) {
                                this.selectItem = item.label;
                            }
                        })
                    } else {
                        this.selectItem = this.value
                    }

                })
            }
        }
    }

</script>
<style lang="less">
    @import "select.less";
</style>