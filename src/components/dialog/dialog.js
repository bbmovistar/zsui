import button from '@/components/button/button.vue'

export default {
    name: 'zs-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '这是一个对话框'
        }
    },
    data() {
        return {
            visible: this.show
        }
    },
    watch: {
        show(newval) {
            this.visible = newval ? true : false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}