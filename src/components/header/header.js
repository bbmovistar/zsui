export default {
    data() {
        return {
            systemListFlag: false,
            roleListFlag: false,
            config: {
                systemConfig: Object.assign({
                    name: 'name',
                    url: 'url'
                }, this.systemConfig),
                roleConfig: Object.assign({
                    name: 'name',
                    key: 'key'
                }, this.roleConfig)
            }
        }
    },
    props: [
        'systemList',
        'systemConfig',
        'currentSystem',
        'roleList',
        'roleConfig',
        'currentRole',
        'exitUrl',
        'homeUrl',
        'username'
    ],
    methods: {
        link(item) {
            window.location.assign(item[this.config.url])
        },
        home() {
            window.location.assign(this.homeUrl)
        },
        roleListClick(item) {
            this.$emit('roleClick', item)
        }
    }
}