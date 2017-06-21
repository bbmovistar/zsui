export default {
    data() {
        return {
            systemListFlag: false,
            config: Object.assign({
                name: 'name',
                url: 'url'
            }, this.systemConfig),
            exitUrl: 'http://www.baidu.com'
        }
    },
    props: ['systemList', 'systemConfig', 'currentSystem', 'roleList', 'currentRole'],
    methods: {
        link(item) {
            window.location.assign(item[this.config.url])
        }
    }
}