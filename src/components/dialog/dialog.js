import button from '@/components/button/button.vue'
import Velocity from 'velocity-animate'

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
        },
        enterText: {
            type: String,
            default: '确定'
        },
        closeText: {
            type: String,
            default: '取消'
        }
    },
    watch: {
        show(newval) {
            if (newval) {
                this.$nextTick(() => {
                    Velocity(this.$el,
                        {
                            opacity: 1
                        },
                        {
                            duration: 300
                        })

                    Velocity(this.$refs.dialog,
                        {
                            top: '50%',
                            opacity: 1
                        }, {
                            duration: 300
                        })
                })
            }
        }
    },
    methods: {
        enter() {
            this.destroy()
                .then(res => {
                    if (res) {
                        this.$emit('enter')
                    }
                })
        },
        close() {
            this.destroy()
                .then(res => {
                    if (res) {
                        this.$emit('close')
                    }
                })
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
            const dialog = () => {
                return new Promise((resolve, reject) => {
                    Velocity(this.$refs.dialog,
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
            return Promise.all([mask(), dialog()])
        }
    },
    components: {
        'zs-button': button
    }
}