import Vue from 'vue'
import alert from './alert.vue'
import Velocity from 'velocity-animate'

let alertConstructor = Vue.extend(alert)

let conf = options => {
    options = options || {}
    let alert = document.getElementById('zs-alert')
    if (alert) {
        return false
    }
    let alertPromise = new Promise((resolve, reject) => {
        options.resolve = resolve
    })
    let alertInstance = new alertConstructor({
        data: options
    }).$mount()
    document.body.appendChild(alertInstance.$el)
    Velocity(alertInstance.$el,
        {
            opacity: 1
        },
        {
            duration: 300
        })

    Velocity(alertInstance.$refs.alert,
        {
            top: '50%',
            opacity: 1
        }, {
            duration: 300
        })

    return alertPromise
}

conf.success = options => {
    options.type = 'success'
    return conf(options)
}

conf.error = options => {
    options.type = 'error'
    return conf(options)
}

conf.warn = options => {
    options.type = 'warn'
    return conf(options)
}

export default conf