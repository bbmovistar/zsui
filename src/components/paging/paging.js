export default {
    name: 'zs-paging',
    props: {
        current: {
            type: Number,
            required: true
        },
        all: {
            type: Number,
            required: true
        }
    },
    computed: {
        numberAble() {
            let { current, all } = this
            let limit = 7
            if (all <= limit) {
                return {
                    start: false,
                    end: false,
                    able: all
                }
            } else {
                let start,
                    end,
                    list
                if (current >= limit && current <= all - limit + 1) {
                    start = true
                    end = true
                    list = [
                        current - 2,
                        current - 1,
                        current,
                        current + 1,
                        current + 2
                    ]
                } else if (current < limit) {
                    start = false
                    end = true
                    list = limit
                } else if (current > all - limit) {
                    start = true
                    end = false
                    list = []
                    for (let i = all; i > all - limit; i--) {
                        list.unshift(i)
                    }
                }
                return {
                    start: start,
                    end: end,
                    able: list
                }
            }
        }
    },
    methods: {
        paging(current) {
            this.$emit('paging', current)
        },
        prev() {
            if (this.current === 1) {
                return false
            } else {
                this.$emit('paging', this.current - 1)
            }
        },
        next() {
            if (this.current === this.all) {
                return false
            } else {
                this.$emit('paging', this.current + 1)
            }
        },
        start() {
            this.$emit('paging', 1)
        },
        end() {
            this.$emit('paging', this.all)
        }
    }
}