import button from '@/components/button/button.vue'
import Velocity from 'velocity-animate'

export default {
    data() {
        return {
            show: false,
            msg: '这是提示信息',
            title: '提示',
            enterText: '确定',
            closeText: '取消',
            resolve: null
        }
    },
    methods: {
        enter() {
            if (typeof this.resolve === 'function') {
                this.resolve(true)
                this.show = false
            }
        },
        close() {
            if (typeof this.resolve === 'function') {
                this.resolve(false)
                this.show = false
            }
        },
        afterleave() {
            this.$el.parentNode.removeChild(this.$el)
        }
    },
    components: {
        'zs-button': button
    }
}