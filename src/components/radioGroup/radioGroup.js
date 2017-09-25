import Emitter from '../../mixins/emitter'
export default{
    name: 'zs-radio-group',
    mixinx:[Emitter],
    props: {
        value: {},
        disabled: Boolean,
    },
    watch: {
        value(newVal) {
            this.$emit('change', newVal)
        }
    }
}
