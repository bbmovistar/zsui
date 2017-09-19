
export default {
    name: 'zs-tabbar',
    props: {
        tabData:{
            type: Array,
            required: true
        }
    },
    data() {
        return {
            tab: this.tabData
        }
    },
    methods: {
        change(item) {
            for(let index of this.tabData){
                index.click = false
            }
            item.click = true
            this.$emit('change',item)
        }
    }
}
