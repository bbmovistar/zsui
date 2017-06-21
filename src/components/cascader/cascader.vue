<template>
    <div class="zs-cascader">
        <input type="text" :placeholder="label? '' : placeholder" class="zs-cascader-input" value=""
               readonly="!filterable" autocomplete="off"
               @click="toggleMenu">
        <span class="zs-cascader-label">{{label}}</span>
        <i v-if="allowClear && defaultValue.length" class="iconfont icon-clean" @click.stop="clear">
        </i>
        <i class="zs-cascader-select-icon iconfont icon-select-arrow-down"
           :class="open?'zs-cascader-select-icon-opened' : '' ">
        </i>
        <div ref="menu" v-show="open" :style="style" class="zs-cascader-dropDown">
            <div>
                <casmenu v-for="(item, index) in path" v-model="path[index]" :data="getMenuData(index)" :_key="index"
                         @change="changeMenuValue"
                         :key="item.index">
                </casmenu>
            </div>
        </div>
    </div>
</template>
<script>
    import casmenu from './menu.vue'
    import emitter from '../../mixins/emitter'

    export default {
        name: 'zs-cascader',
        mixins: [emitter],
        components: {casmenu},
        data: () => ({
            defaultValue: [],
            container: null,
            style: {},
            open: false,
            label: '',
            path: [-1]
        }),
        props: {
            popupContainer: {
                type: Function,
                default: () => document.body
            },
            position: {
                type: String,
                default: 'absolute'
            },
            data: Array,
            value: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            allowClear: {
                type: Boolean,
                default: true
            },
            filterable: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            path(val) {
                let value = [], label = [], opt = this.data;
                for (let i of val) {
                    if (i < 0) break;
                    value.push(opt[i].value);
                    label.push(opt[i].label);
                    //下一次遍历以上一次的children为数据源
                    opt = opt[i].children;
                }
                this.defaultValue = value;
                this.$emit('input', value);
                this.$emit('change', value);
                this.label = label.join('/');
            }
        },
        methods: {
            getScroll(top) {
                var ret = window['page' + (top ? 'Y' : 'X') + 'Offset']
                var method = 'scroll' + (top ? 'Top' : 'Left')
                if (typeof ret !== 'number') {
                    var d = window.document
                    // ie6,7,8 standard mode
                    ret = d.documentElement[method]
                    if (typeof ret !== 'number') {
                        // quirks mode
                        ret = d.body[method]
                    }
                }
                return ret
            },
            getOffset(element, container = document.body) {
                const el_rect = element.getBoundingClientRect();
                const container_rect = container.getBoundingClientRect();
                const clientTop = element.clientTop || container.clientTop || 0;
                const clientLeft = element.clientLeft || container.clientLeft || 0;
                let top, left;

                if (container === document.body) {
                    top = this.getScroll(true);
                    left = this.getScroll();
                } else {
                    top = container.scrollTop - container_rect.top;
                    left = container.scrollLeft - container_rect.left;
                }

                return {
                    top: el_rect.top + top - clientTop,
                    left: el_rect.left + left - clientLeft,
                    right: el_rect.right + left - clientLeft,
                    bottom: el_rect.bottom + top - clientTop
                }
            },
            init() {
                this.defaultValue = JSON.parse(JSON.stringify(this.value))
                let res = [], opt = this.data;
                for (let val of this.value) {
                    for (let [i, item] of opt.entries()) {
                        if (item.value == val) {
                            res.push(i)
                            opt = opt[i].children;
                            break;
                        }
                    }
                }
                if (opt) res.push(-1)
                this.path = res;
            },
            clear() {
                this.path = [-1];
            },
            setPosition() {
                if (!this.$el) {
                    return
                }
                let p = this.getOffset(this.$el, this.container);
                this.style = {
                    top: p.bottom + 'px',
                    left: p.left + 'px'
                }
            },
            getMenuData(index) {
                let menu = this.data;
                for (let i = 0; i < index; i++) {
                    const s = this.path[i];
                    if (menu[s].children) {
                        menu = menu[s].children;
                    } else {
                        menu = null;
                        break;
                    }
                }
                return menu;
            },
            toggleMenu() {
                if (this.disabled) return;
                this.open = !this.open;
                if (this.open) {
                    this.$nextTick(() => {
                        this.setPosition();
                    })
                }
            },
            changeMenuValue(key, i) {
                this.$set(this.path, key, i)
                if (this.getMenuData(key + 1)) {
                    this.$set(this.path, key + 1, -1)
                    this.path.splice(key + 2, this.path.length - 1 - key - 1);
                } else {
                    this.path.splice(key + 1, this.path.length - 1 - key);
                    this.open = false;
                }
            },
            clickFunc(e) {
                if(this.$refs.menu){
                    let clickOnMenu = this.$refs.menu.contains(e.target)
                    if ((!this.$el.contains(e.target)) && !clickOnMenu) this.open = false
                }
            },
            resizeFunc() {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(() => {
                    this.setPosition();
                }, 200)
            }
        },
        created() {
            //点击其他位置收起
            document.addEventListener('click', this.clickFunc)
        },
        mounted() {
            this.init();
            this.container = this.popupContainer()
            this.$refs.menu.style.position = this.position;
            this.container.appendChild(this.$refs.menu);

            this.$nextTick(() => {
                this.setPosition();
            })
            window.addEventListener('resize', this.resizeFunc)
        },
        beforeDestroy() {
            this.container.removeChild(this.$refs.menu);
            document.removeEventListener('click', this.clickFunc)
            window.removeEventListener('resize', this.resizeFunc)
        }
    }

</script>
<style lang="less">
    @import "cascader.less";
</style>
