import button from '@/components/button/button.vue'
import Velocity from 'velocity-animate'

export default {
    data() {
        return {
            title: '提示',
            enterText: '确定',
            enterAlign: 'center',
            msgTitle: '标题',
            msg: '信息',
            type: 'success',
            resolve: null
        }
    },
    computed: {
        colorAndClass() {
            if (this.type === 'success') {
                return {
                    color: 'success',
                    class: 'icon-success'
                }
            }
            if (this.type === 'error') {
                return {
                    color: 'error',
                    class: 'icon-error'
                }
            }
            if (this.type === 'warn') {
                return {
                    color: 'warn',
                    class: 'icon-warn'
                }
            }
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
            const alert = () => {
                return new Promise((resolve, reject) => {
                    Velocity(this.$refs.alert,
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
            Promise.all([mask(), alert()])
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