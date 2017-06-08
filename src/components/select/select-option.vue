<template>
  <ul class="zs-select_dropDown_menu">
    <li v-for="item in list" @click="select(item)" :class="{isSelected: item.isSelected}">
      <span>{{item.label}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      optionList: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data() {
      return {
        list: this.optionList
      }
    },
    watch: {
      optionList: 'watchProps'
    },
    methods: {
      select(item) {
        this.list.forEach((item) => {
          item.isSelected = false;
        })
        item.isSelected = true;
        this.$emit('select', item)
      },
      setSelected() {
        this.list.forEach((item) => {
          this.$set(item, 'isSelected', false)
        })
      },
      watchProps() {
        this.list = this.optionList;
        this.setSelected()
      }
    },
    created() {
      this.setSelected()
    }
  }

</script>