
export default {
    name: 'zs-picshow',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        imgUrl :{
            type:String,
            default : 'g'
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
    },
    mounted(){
        let vm = this
        window.onmousewheel = function (e) {
            if (e.wheelDelta < 0) {
                if (vm.$refs.imgSrc.height>50){
                    vm.$refs.imgSrc.height -= 10
                }
            } else {
                vm.$refs.imgSrc.height = vm.$refs.imgSrc.clientHeight
                vm.$refs.imgSrc.height += 10
            }
        }
    }
}
