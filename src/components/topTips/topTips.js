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
        imgSrc() {
            return require(`../../assets/icons/${this.type}.png`)
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