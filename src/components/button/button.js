export default {
    props: {
        text: {
            type: String,
            default: '点击'
        },
        color: {
            type: String,
            default: 'blue'
        },
        type: {
            type: String,
            default: 'normal'
        }
    },

    computed: {
        computedClass() {
            return {
                'blue': this.color === 'blue',
                'white': this.color === 'white',
                'disable': this.color === 'disable',
                'normal': this.type === 'normal',
                'mini': this.type === 'mini'
            }
        }
    },

    methods: {
        click() {
            if (this.color === 'disable') {
                return false
            }
            this.$emit('click')
        }
    }
}