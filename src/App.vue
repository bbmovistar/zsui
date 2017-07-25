<template>
  <div id="app">
    <zs-main :leftMenuList='leftMenuData' :systemList='systemList' :systemListShow='false' currentSystem='学籍管理系统' currentRole='老师'
      :roleList='roleList' :filterRouteName='filterRouteName' schoolName='艮山中学' :schoolNameShow='true' :roleConfig='roleConfig'
      :roleListShow='false' @roleClick='roleClick' exitUrl='http://www.baidu.com' homeUrl='http://www.baidu.com' username='哲学'
      @exit='exit'></zs-main>
  </div>
</template>
<script>
  import main from '@/components/main/main.vue'
  import data from './data.js'

  export default {
    name: 'app',
    data() {
      return {
        leftMenuData: [],
        systemList: [
          {
            name: '访客管理系统',
            url: 'http://www.baidu.com',
            key: 'aaa'
          },
          {
            name: '招生管理系统',
            url: 'http://www.baidu.com',
            key: 'aaa'
          },
          {
            name: '学籍管理系统',
            url: 'http://www.baidu.com',
            key: 'aaa'
          },
          {
            name: '防御管理系统',
            url: 'http://www.baidu.com',
            key: 'aaa'
          }
        ],
        roleList: [
          {
            name: '校长',
            key: 1,
            appkey: '校长2'
          },
          {
            name: '主任',
            key: 2,
            appkey: '主任2'
          }
        ],
        roleConfig: {
          name: 'appkey'
        },
        filterRouteName: {
          gradeMassage: ['detail']
        }
      }
    },
    methods: {
      roleClick($event) {
        console.log($event)
      },
      exit() {
        console.log(1)
      }
    },
    created() {
      setTimeout(() => {
        this.leftMenuData = data
      }, 1000);
    },
    components: {
      'zs-main': main
    }
  }

</script>