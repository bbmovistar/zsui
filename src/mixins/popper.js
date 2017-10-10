import Popper from 'popper.js'

export default {
    props: {
        trigger: {
            type: String,
            default: 'hover',
            validator: value => ['click', 'hover'].indexOf(value) > -1
        },
        placement: {
            type: String,
            default: 'bottom',
            validator: value => ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(value) > -1
        },
        boundariesPadding: {
            type: Number,
            default: 5
        },
        reference: Object,
        popper:Object,
        offset: {
            default: 0
        },
        value: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default() {
                return {
                    gpuAcceleration: false,
                }
            }
        }
    },
    data() {
        return{
            visible: this.value
        }
    },
    computed: {
        popperElm() {
            return this.popper || this.$refs.popper
        },
        referenceElm() {
            return this.reference || this.$refs.reference
        }
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.visible = val
                this.$emit('input', val)
            }
        },
        visible(val) {
            if(val) {
                this.updatePopper()
                this.$emit('show')
            }else{
                this.$emit('hide')
            }
            this.$emit('input', val)
        }
    },
    methods: {
        createPopper() {
            const options = this.options

            if(!this.popperElm || !this.referenceElm) return
            if(this.popperJS && this.popperJS.hasOwnProperty('destroy')){
                this.popperJS.destroy()
            }
            options.placement = this.placement
            options.offset = this.offset
            options.onCreate = () => {
                this.$emit('created', this);
                this.$nextTick(this.updatePopper);
            }
            this.popperJS = new Popper(this.referenceElm, this.popperElm, options)
        },
        updatePopper() {
             this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper()
        },
    },
    beforeDestroy() {
        if(this.popperJS) {
            this.popperJS.destroy()
        }
    }
}
