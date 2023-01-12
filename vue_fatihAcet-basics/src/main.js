import { createApp } from 'vue'
// import { createApp } from 'vue/dist/vue.esm-bundler'; // configured in vite.config.js no-need

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('v-select', {
    template: `<select><slot></slot></select>`
})

app.component('v-option', {
    props: ['value'], 
    // template: '<option>{{value}}</option>',
    template: `<option>{{value}}</option>`,
    created() {
        console.log("Option Created");
    }
})

app.use(router)

app.mount('#app')
