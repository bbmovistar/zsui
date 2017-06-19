import Velocity from 'velocity-animate'

export default {
    data() {
        return {
            msg: '',
            type: 'success',
            duration: 3000
        }
    },

    computed: {
        typeClass() {
            return {
                'icon-success': this.type === 'success',
                'icon-error': this.type === 'error',
                'icon-warn': this.type === 'warn'
            }
        }
    },

    methods: {
        startTimer() {
            let self = this
            window.setTimeout(() => {
                Velocity(this.$el,
                    {
                        top: 0,
                        opacity: 0,
                    },
                    {
                        complete() {
                            self.$el.parentNode.removeChild(self.$el)
                        }
                    })

            }, this.duration)
        }
    },

    mounted() {
        this.startTimer()
    }
}