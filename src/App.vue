<template>
  <div id="app">
    <zs-main :leftMenuList='leftMenuData' :systemList='systemList' currentSystem='学籍管理系统' :filterRouteName='filterRouteName'></zs-main>
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
        filterRouteName: {
          classInfo: ['detail', 'detail2']
        }
      }
    },
    components: {
      'zs-main': main
    }
  }

</script>