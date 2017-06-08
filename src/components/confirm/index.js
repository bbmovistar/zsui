import Vue from 'vue'
import confirm from './confirm.vue'
import Velocity from 'velocity-animate'

let confirmConstructor = Vue.extend(confirm)

let conf = options => {
    options = options || {}
    let confirm = document.getElementById('zs-confirm')
    if (confirm) {
        return false
    }
    if (typeof options === 'string') {
        options = {
            msg: options
        }
    }
    let confirmPromise = new Promise((resolve, reject) => {
        options.resolve = resolve
    })
    let confirmInstance = new confirmConstructor({
        data: options
    }).$mount()
    document.body.appendChild(confirmInstance.$el)
    Velocity(confirmInstance.$el,
        {
            opacity: 1
        },
        {
            duration: 300
        })

    Velocity(confirmInstance.$refs.confirm,
        {
            top: '50%',
            opacity: 1
        }, {
            duration: 300
        })

    return confirmPromise
}

export default conf