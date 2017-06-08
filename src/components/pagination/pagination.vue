<template>
    <div class="zs-pagination">
        <span class="zs-pagination_total">共{{totalPage}}页</span>
        <span class="zs-pagination_size">
            <zs-select :optionList="defaultSize" v-model="pageSize"></zs-select>
        </span>
        <button type="button" class="quick-prev" :disabled="currentPage === 1" @click="pageChange(1)"> <<
        </button>
        <button type="button" class="btn-prev" @click="pageChange('prev')" :disabled="currentPage === 1"> <</button>
        <template v-if="notEnoughPages">
            <ul class="zs-pagination_pager">
                <li v-for="n in totalPage" @click="pageChange(n)" :class="{active: currentPage === n}">
                    {{n}}
                </li>
            </ul>
        </template>
        <template v-if="!notEnoughPages">
            <ul class="zs-pagination_pager">
                <li v-for="n in windowSize" @click="pageChange(windowStart + n -1)" :class="{active : currentPage === windowStart + n - 1}">
                    {{windowStart + n - 1}}
                </li>
            </ul>
        </template>
        <button type="button" class="btn-next" :disabled="currentPage === totalPage" @click="pageChange('next')">
            >
        </button>
        <button type="button" class="quick-next" :disabled="currentPage === totalPage" @click="pageChange(totalPage)"> >>
        </button>
        <span class="zs-pagination_jump">
            前往
            <input type="number" min="1" number="true" class="zs-pagination_editor"
                   style="width: 30px;"
                   :value="currentPage"
                  @change="handleJump"
            >
            页
        </span>
    </div>
</template>
<script>
    export default {
        name: 'zs-pagination',
        componentName: 'zs-pagination',
        props: {
            total: {
                type: Number,
                default: 0
            },
            totalPage: {
                type: Number,
                default: 1
            },
            size: {
                type: Number,
                default: 10
            },
            page: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                currentPage: this.page,
                windowStart: 1,
                windowSize: 5,
                defaultSize: [
                    { value: 10, label: '10页/条' },
                    { value: 15, label: '15页/条' },
                    { value: 20, label: '20页/条' }
                ],
                pageSize: this.size
            }
        },
        computed: {
            notEnoughPages() {
                return this.totalPage <= 5
            },
            //            totalPage() {
            //               return Math.ceil(this.total / this.pageSize);
            //            }
        },
        watch: {
            currentPage() {
                if (this.currentPage <= 2) {
                    this.windowStart = 1
                } else if (this.currentPage >= (this.totalPage - 2)) {
                    this.windowStart = this.totalPage - 2 * 2
                } else {
                    this.windowStart = this.currentPage - 2
                }

                this.$emit('current-change', this.currentPage)
            },
            pageSize(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.currentPage = 1
                    this.$emit('size-change', newVal);
                }
            },

        },
        methods: {
            pageChange(val) {
                if (val === 'prev') {
                    this.currentPage -= 1
                } else if (val === 'next') {
                    this.currentPage += 1
                } else {
                    this.currentPage = val
                }
            },
            isCurrentPage(val) {
                return val = this.currentPage;
            },
            handleJump(event) {
                let newPage = Number(event.target.value);
                if (newPage <= this.totalPage && newPage >= 1) {
                    this.currentPage = newPage;
                } else {
                    return false;
                }

            }
        }
    }

</script>
<style lang="less" scoped>
    @import './pagination.less';
</style>