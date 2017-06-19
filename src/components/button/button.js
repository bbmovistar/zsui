export default {
    name: 'zs-button',
    props: {
        text: {
            type: String,
            default: '点击'
        },
        type: {
            type: String,
            default: 'blue'
        },
        widthType: {
            type: String,
            default: 'normal'
        },
        icon: {
            type: String,
            default: ''
        }
    },

    computed: {
        computedClass() {
            return {
                'zs-button-blue': this.type === 'blue',
                'zs-button-white': this.type === 'white',
                'zs-button-disable': this.type === 'disable',
                'zs-button-normal': this.widthType === 'normal',
                'zs-button-mini': this.widthType === 'mini'
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