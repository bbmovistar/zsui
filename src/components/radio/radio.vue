<template>
    <div class="zs-radio">
        <span
            class="zs-radio_dot"
            :class="{
                'disabled': isDisabled,
                'actived': model === label,
            }"
        >
            <i></i>
            <input
                :value="label"
                type="radio"
                class="zs-radio_original"
                v-model="model"
                @focus="focus = true"
                @blur="focus = false"
                :name="name"
                :disabled="isDisabled"
            >
        </span>
        <span class="zs-radio_label" :class="isDisabled ? 'disabled' : ''">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </div>
</template>
<style lang="less" scoped>
    @import "radio";
</style>
<script>
   import radio from './radio.js'
    export default radio
</script>
