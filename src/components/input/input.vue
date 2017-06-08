<template>
    <div class="zs-input" :class="[
         {
            'is-disabled': disabled
         }
         ]">
        <template>
            <!--<slot name="icon">-->
            <!--<i class="zs-input_icon"-->
            <!--:class="[-->
            <!--'zs-icon-' + icon,-->
            <!--onIconClick ? 'is-clickable' : ''-->
            <!--]"-->
            <!--v-if="icon"-->
            <!--@click="handleIconClick">-->
            <!--</i>-->
            <!--</slot>-->
            <input class="zs-input_inner" :type="type" :name="name" :placeholder="disabled? '' : placeholder" :disabled="disabled" :readonly="readonly"
                :maxlength="maxlength" :minlength="minlength" :value="currentValue" ref="input" @input="handleInput" @focus="handleFocus"
                @blur="handleBlur">
        </template>
    </div>
</template>
<script>
    export default {
        name: 'zs-input',
        componentName: 'zs-input',
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            type: {
                type: String,
                default: 'text'
            },
            name: String,
            placeholder: {
                type: String,
                default: '请输入'
            },
            readonly: Boolean,
            maxlength: Number,
            minlength: Number,
            value: [String, Number],
            onIconClick: Function
        },
        data() {
            return {
                currentValue: this.value
            }
        },
        watch: {
            'value'(val, oldval) {
                this.setCurrentValue(val)
            }
        },
        methods: {
            handleBlur(event) {
                this.$emit('blur', event)
            },
            handleFocus(event) {
                this.$emit('focus', event)
            },
            handleInput(event) {
                this.setCurrentValue(event.target.value)
            },
            setCurrentValue(val) {
                if (val === this.currentValue) {
                    return;
                }
                this.currentValue = val;
                this.$emit('input', val);
                this.$emit('change', val);
            },
            inputSelect() {
                this.$refs.input.select();
            }
        },
        created() {
            this.$on('inputSelect', this.inputSelect)
        }
    }

</script>
<style lang="less" scoped>
    @import 'input.less';
</style>