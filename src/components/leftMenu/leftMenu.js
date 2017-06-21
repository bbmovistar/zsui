import Velocity from 'velocity-animate'

export default {
    props: {
        list: {
            type: Array,
            require: true
        },
        leftMenuConfig: {
            type: Object,
            require: true
        },
        filterRouteName: {
            type: Object,
            require: true
        }
    },
    data() {
        let filterObj = {}
        let config = Object.assign({
            titleName: 'title',
            iconName: 'icon',
            permissionName: 'isPermissions',
            listItemName: 'items',
            itemName: 'itemName',
            routerName: 'routerName'
        }, this.leftMenuConfig)

        for (let index of this.list) {
            filterObj[index[config.routerName]] = []
            if (index.hasOwnProperty(config.listItemName)) {
                for (let item of index[config.listItemName]) {
                    filterObj[item[config.routerName]] = []
                }
            }
        }
        let filter = Object.assign(filterObj, this.filterRouteName)
        return {
            config: config,
            filter: filter
        }
    },
    watch: {
        '$route': function (newval) {
            this.addClickAndLight()
            this.routerCheck(newval.name)
        }
    },
    computed: {
        'computedList': function () {
            this.addClickAndLight()
            if (this.$route.name) {
                this.routerCheck(this.$route.name)
                return this.list
            }
            if (this.list.length > 0) {
                try {
                    if (this.list[0].hasOwnProperty(this.config.listItemName)) {
                        this.$router.push({ name: this.list[0][this.config.listItemName][0][this.config.routerName] })
                    } else {
                        this.$router.push({ name: this.list[0][this.config.routerName] })
                    }
                } catch (error) {
                    console.warn('默认使用第一个子菜单路由失败，此路由还没有name属性')
                }
                return this.list
            }
        }
    },
    methods: {
        //点击第一级菜单
        openMenu(item) {
            let itemClickFlag = item.click
            for (let index of this.list) {
                index.click = false
            }
            item.click = !itemClickFlag
            if (!item.hasOwnProperty(this.config.listItemName)) {
                this.$router.push({ name: item[this.config.routerName] })
            }
        },
        //点击第二级菜单
        clickItem(childItem) {
            try {
                this.$router.push({ name: childItem[this.config.routerName] })
            }
            catch (error) {
                console.warn('此路由还没有name属性')
            }
        },
        addClickAndLight() {
            if (this.list.length > 0) {
                for (let value of this.list) {
                    this.$set(value, 'click', false)
                    this.$set(value, 'light', false)
                    if (value.hasOwnProperty(this.config.listItemName)) {
                        for (let itemValue of value[this.config.listItemName]) {
                            this.$set(itemValue, 'light', false)
                        }
                    }
                }
            }
        },
        routerCheck(name) {
            for (let value of this.list) {
                if (name === value[this.config.routerName] || this.filter[value[this.config.routerName]].includes(name)) {
                    value.click = true
                    value.light = true
                    return false
                }
                if (value.hasOwnProperty(this.config.listItemName)) {
                    for (let itemValue of value[this.config.listItemName]) {
                        if (name === itemValue[this.config.routerName]|| this.filter[itemValue[this.config.routerName]].includes(name)) {
                            value.click = true
                            value.light = true
                            itemValue.light = true
                        }
                    }
                }
            }
        },
        //动画
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
    }
}