import button from '@/components/button/button.vue'
import Velocity from 'velocity-animate'

export default {
    data() {
        return {
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
                this.destroy()
            }
        },
        close() {
            if (typeof this.resolve === 'function') {
                this.resolve(false)
                this.destroy()
            }
        },
        destroy() {
            const mask = () => {
                return new Promise((resolve, reject) => {
                    Velocity(this.$el,
                        {
                            opacity: 0
                        },
                        {
                            duration: 300,
                            complete() {
                                resolve(true)
                            }
                        })
                })
            }
            const confirm = () => {
                return new Promise((resolve, reject) => {
                    Velocity(this.$refs.confirm,
                        {
                            top: '49%',
                            opacity: 0
                        }, {
                            duration: 300,
                            complete() {
                                resolve(true)
                            }
                        })
                })
            }
            Promise.all([mask(), confirm()])
                .then(res => {
                    if (res) {
                        this.$el.parentNode.removeChild(this.$el)
                    }
                })
        }
    },
    components: {
        'zs-button': button
    }
}