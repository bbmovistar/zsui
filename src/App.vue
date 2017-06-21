<template>
  <div id="app">
    <zs-main :leftMenuList='leftMenuData' :systemList='systemList' currentSystem='学籍管理系统' currentRole='老师' :roleList='roleList'
      :filterRouteName='filterRouteName' :roleConfig='roleConfig' @roleClick='roleClick' exitUrl='http://www.baidu.com' homeUrl='http://www.baidu.com'
      username='哲学'></zs-main>
  </div>
</template>
<script>
  import main from '@/components/main/main.vue'
  import data from './data.js'

  export default {
    name: 'app',
    data() {
      return {
        leftMenuData: data,
        systemList: [
          {
            name: '访客管理系统',
            url: 'http://www.baidu.com'
          },
          {
            name: '招生管理系统',
            url: 'http://www.baidu.com'
          },
          {
            name: '学籍管理系统',
            url: 'http://www.baidu.com'
          },
          {
            name: '防御管理系统',
            url: 'http://www.baidu.com'
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
          classInfo: ['detail', 'detail2']
        }
      }
    },
    methods: {
      roleClick($event) {
        console.log($event)
      }
    },
    components: {
      'zs-main': main
    }
  }

</script>