export default {
    name: 'zs-button',
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
                'zs-button-blue': this.color === 'blue',
                'zs-button-white': this.color === 'white',
                'zs-button-disable': this.color === 'disable',
                'zs-button-normal': this.type === 'normal',
                'zs-button-mini': this.type === 'mini'
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