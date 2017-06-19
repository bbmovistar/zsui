import Velocity from 'velocity-animate'
export default {
    props: {
        list: {
            type: Array,
            require: true
        },
        propConfig: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            config: Object.assign({
                titleName: 'title',
                iconName: 'icon',
                permissionName: 'isPermissions',
                listItemName: 'items',
                itemName: 'itemName',
                routerName: 'routerName'
            }, this.propConfig)
        }
    },
    watch: {
        '$route': function (newval) {
            this.addClickAndLight()
            this.routerCheck(newval.name)
        }
    },
    methods: {
        //点击第一级菜单展开二级列表，如果二级列表下没有有当前选中的路由,则不显示高亮
        openMenu(item) {
            let itemClickFlag = item.click
            for (let index of this.list) {
                index.click = false
            }
            this.commonLight()
            item.click = !itemClickFlag
        },
        //点击第二级菜单，高亮显示该菜单，并高亮显示该菜单所对应的一级菜单
        clickItem(childItem) {
            for (let index of this.list) {
                index.light = false
            }
            for (let index of this.list) {
                for (let item of index[this.config.listItemName]) {
                    item.light = false
                }
            }
            childItem.light = true
            this.commonLight()
            try {
                this.$router.push({ name: childItem[this.config.routerName] })
            }
            catch (error) {
                console.warn('此路由还没有name属性')
            }
        },
        commonLight() {
            for (let index of this.list) {
                index.light = false
                for (let item of index[this.config.listItemName]) {
                    if (item.light) {
                        index.light = true
                        return true
                    } else {
                        index.light = false
                    }
                }
            }
        },
        addClickAndLight() {
            for (let value of this.list) {
                this.$set(value, 'click', false)
                this.$set(value, 'light', false)
                for (let itemValue of value[this.config.listItemName]) {
                    this.$set(itemValue, 'light', false)
                }
            }
        },
        routerCheck(name) {
            for (let value of this.list) {
                for (let itemValue of value[this.config.listItemName]) {
                    if (name === itemValue[this.config.routerName]) {
                        value.click = true
                        value.light = true
                        itemValue.light = true
                    }
                }
            }
        },
        //以下动画
        itemBeforeEnter(el) {
            el.style.height = 0
        },
        itemEnter(el, done) {
            let itemHeight = 40
            Velocity(el, { height: (el.childNodes.length * itemHeight) + 'px' }, { duration: 300, complete: done })
        },
        itemLeave(el, done) {
            Velocity(el, { height: 0 }, { duration: 300, complete: done })
        }
    },
    //初始化添加click/light参数
    created() {
        this.addClickAndLight()
        if (this.$route.name) {
            this.routerCheck(this.$route.name)
            return false
        }
        if (this.list.length > 0) {
            let firstFlag = false
            this.list.forEach((value, index) => {
                if (value[this.config.permissionName] && !firstFlag) {
                    firstFlag = true
                    value.click = true
                    value.light = true
                }
                if (value[this.config.listItemName].length > 0) {
                    value[this.config.listItemName].forEach((itemValue, itemIndex) => {
                        if (value.click && itemIndex === 0) {
                            itemValue.light = true
                            try {
                                this.$router.push({ name: itemValue[this.config.routerName] })
                            }
                            catch (error) {
                                console.warn('默认使用第一个子菜单路由失败，此路由还没有name属性')
                            }
                        }
                    })
                }
            })
        }
    }
}