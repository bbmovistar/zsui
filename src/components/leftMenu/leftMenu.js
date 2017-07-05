import Velocity from 'velocity-animate'

export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        leftMenuConfig: {
            type: Object,
            required: true
        },
        filterRouteName: {
            type: Object,
            required: true
        }
    },
    data() {
        let config = Object.assign({
            titleName: 'privilegeName',
            iconName: 'icon',
            permissionName: 'isPermissions',
            listItemName: 'items',
            itemName: 'privilegeName',
            routerName: 'routerName',
            key: 'privilegeKey'
        }, this.leftMenuConfig)
        return {
            config: config
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
                for (let index of this.list) {
                    if (index.hasOwnProperty(this.config.listItemName) && index[this.config.listItemName].length > 0) {
                        this.$router.push({
                            name: index[this.config.listItemName][0][this.config.routerName],
                            query: {
                                key: window.btoa ? window.btoa(index[this.config.listItemName][0][this.config.key]) : index[this.config.listItemName][0][this.config.key]
                            }
                        })
                        this.routerCheck(this.$route.name)
                        break
                    }
                }
            }
            return this.list
        },
        'filter': function () {
            let filterObj = {}
            for (let index of this.list) {
                filterObj[index[this.config.routerName]] = []
                if (index.hasOwnProperty(this.config.listItemName)) {
                    for (let item of index[this.config.listItemName]) {
                        filterObj[item[this.config.routerName]] = []
                    }
                }
            }
            let filter = Object.assign(filterObj, this.filterRouteName)
            return filter
        }
    },
    methods: {
        //点击第一级菜单
        openMenu(item) {
            let itemClickFlag = item.click
            let isOnlyOne = item.hasOwnProperty(this.config.listItemName) && item[this.config.listItemName].length === 1
            for (let index of this.list) {
                index.click = false
            }
            item.click = isOnlyOne ? false : !itemClickFlag
            if (isOnlyOne) {
                try {
                    this.$router.push({
                        name: item[this.config.listItemName][0][this.config.routerName],
                        query: {
                            key: window.btoa ? window.btoa(item[this.config.listItemName][0][this.config.key]) : item[this.config.listItemName][0][this.config.key]
                        }
                    })
                }
                catch (error) {
                    console.warn('唯一的子路由还没有name属性')
                }

            }
        },
        //点击第二级菜单
        clickItem(childItem) {
            try {
                this.$router.push({
                    name: childItem[this.config.routerName],
                    query: {
                        key: window.btoa ? window.btoa(childItem[this.config.key]) : childItem[this.config.key]
                    }
                })
            }
            catch (error) {
                console.warn('此子路由还没有name属性')
            }
        },
        addClickAndLight() {
            if (this.list.length > 0) {
                for (let value of this.list) {
                    this.$set(value, 'click', false)
                    this.$set(value, 'light', false)
                    if (value.hasOwnProperty(this.config.listItemName) && value[this.config.listItemName].length > 0) {
                        for (let itemValue of value[this.config.listItemName]) {
                            this.$set(itemValue, 'light', false)
                        }
                    }
                }
            }
        },
        routerCheck(name) {
            for (let value of this.list) {
                if (value.hasOwnProperty(this.config.listItemName) && value[this.config.listItemName].length > 0) {
                    for (let itemValue of value[this.config.listItemName]) {
                        if (name === itemValue[this.config.routerName] || this.filter[itemValue[this.config.routerName]].includes(name)) {
                            value.click = value[this.config.listItemName].length === 1 ? false : true
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