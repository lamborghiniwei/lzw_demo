import hEnInput from "./h-en-input.vue"
import hZnInput from "./h-zn-input.vue"
import Vue from "vue"

// const context = require.context("./", false, /\.vue$/)

// context.keys().forEach(key => {
//     let component = context(key).default
//     Vue.component(component.name, component)
// })
Vue.component(hEnInput.name, hEnInput);
Vue.component(hZnInput.name, hZnInput);