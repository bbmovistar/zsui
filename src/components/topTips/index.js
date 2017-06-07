import Vue from 'vue'
import topTips from './topTips.vue'
import Velocity from 'velocity-animate'

let topTipsConstructor = Vue.extend(topTips)
let ZINDEX = 5000

let tips = options => {
    let instaceController = document.getElementById('instaceController')
    if (!instaceController) {
        let createDIV = document.createElement('div')
        createDIV.id = 'instaceController'
        createDIV.style = 'position:absolute;width:0;height:0;top:0;left:0;'
        instaceController = document.body.appendChild(createDIV)
    }
    if (typeof options === 'string') {
        options = {
            msg: options
        }
    }
    let instance = new topTipsConstructor({
        data: options
    }).$mount()
    instance.$el.style.zIndex = ZINDEX++
    instaceController.appendChild(instance.$el)
    Velocity(instance.$el,
        {
            top: '5%'
        },
        {
            duration: 300
        })
}

tips.success = options => {
    if (typeof options === 'string') {
        options = {
            msg: options,
            type: 'success'
        }
    }
    if (typeof options === 'object') {
        options.type = 'success'
    }
    tips(options)
}

tips.error = options => {
    if (typeof options === 'string') {
        options = {
            msg: options,
            type: 'error'
        }
    }
    if (typeof options === 'object') {
        options.type = 'error'
    }
    tips(options)
}

export default tips