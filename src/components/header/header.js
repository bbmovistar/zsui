export default {
    data() {
        return {
            systemListFlag: false
        }
    },
    mounted() {
        document.getElementById('main').addEventListener('click', () => {
            this.systemListFlag = false
        })
    }
}