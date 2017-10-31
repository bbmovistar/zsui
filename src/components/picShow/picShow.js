
export default {
    name: 'zs-picshow',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        imgUrl :{
            type:String,
            default : ''
        }
    },
    data() {
        return {
            visible: this.show
        }
    },
    watch: {
        show(newval) {
            this.visible = newval ? true : false
        }
    },
    methods: {
        close() {
            this.$emit('close')
        } 
    }
}