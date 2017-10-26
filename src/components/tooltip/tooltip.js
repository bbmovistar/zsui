import Popper from '../../mixins/popper'
function on(element, event, handler) {
    if (element && event && handler) {
        document.addEventListener ? element.addEventListener(event, handler, false) : element.attachEvent('on' + event, handler);
    }
}
function off(element, event, handler) {
    if (element && event) {
        document.removeEventListener ? element.removeEventListener(event, handler, false) : element.detachEvent('on' + event, handler)
    }
}
export default{
    name: 'zs-tooltip',
    mixins: [Popper],
    props: {
        placement: {
            default: 'bottom'
        },
        content: {
            type: [String, Number],
            default: ''
        },
        delay: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showArrow: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleShowPopper() {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, this.delay);
        },
        handleClosePopper() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 100);
            }
        },
        handleToggle() {
            this.visible = !this.visible
        },
        handleDocumentClick(e) {
            if (!this.$el || !this.referenceElm ||
                this.$el.contains(e.target) ||
                this.referenceElm.contains(e.target) ||
                !this.popperElm || this.popperElm.contains(e.target)
            ) {
                return;
            }
            this.$emit('documentClick');

            this.visible = false;
        },
        destroyPopper() {
            off(this.referenceElm, 'mouseenter', this.handleShowPopper)
            off(this.popperElm, 'mouseenter', this.handleShowPopper)
            off(this.referenceElm, 'mouseleave', this.handleClosePopper)
            off(this.popperElm, 'mouseleave', this.handleClosePopper)
            off(this.referenceElm, 'click', this.handleToggle)
            off(document, 'click', this.handleDocumentClick)
        }
    },
    mounted() {
        if(this.trigger === 'hover') {
            on(this.referenceElm, 'mouseenter', this.handleShowPopper)
            on(this.popperElm, 'mouseenter', this.handleShowPopper)
            on(this.referenceElm, 'mouseleave', this.handleClosePopper)
            on(this.popperElm, 'mouseleave', this.handleClosePopper)
        }else{
            on(this.referenceElm, 'click', this.handleToggle)
            on(document, 'click', this.handleDocumentClick)
        }
    },
    destroyed() {
        this.destroyPopper()
    }
}
