<template>
    <ul class="zs-cascader-menu">
        <li v-for="(item, index) in data" :class="[
                'zs-cascader-menu-item',
                {['zs-cascader-menu-item-expand']: item.children},
                {['zs-cascader-menu-item-disabled']: item.disabled},
                {['zs-cascader-menu-item-active']: value == index}
                ]" @click.stope="select(index, item.disabled)">
            <i class="iconfont icon-select-arrow-right" v-if="item.children"></i>
            <span>{{item.label}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'casmenu',
        props: {
            _key: Number,
            value: {
                type: Number,
                default: -1,
            },
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            select(i, disabled) {
                if (disabled) return
                this.$emit('input', i)
                this.$emit('change', this._key, i)
            }
        }
    }

</script>