import Emitter from '../../mixins/emitter'
export default{
    name: 'zs-radio',
    mixins: [Emitter],
    props: {
        value: {},
        label: {},
        disabled: Boolean,
        name: String,
    },
    data() {
        return {
            focus: false,
        }
    },
    computed: {
        isGroup() {
            let parent = this.$parent
            while(parent) {
                if(parent.$options.name !== 'zs-radio-group'){
                    parent = parent.$parent
                }else {
                    this._radioGroup = parent
                    return true
                }
                return false
            }
        },
        model: {
            get() {
                return this.isGroup ? this._radioGroup.value: this.value
            },
            set(val) {
                if(this.isGroup){
                    this.dispatch('zs-radio-group', 'input', [val])
                }else{
                    this.$emit('input', val)
                }
            }
        },
        isDisabled() {
            return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled
        },
    }
}
