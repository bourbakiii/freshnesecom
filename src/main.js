import {createApp} from 'vue'
import router from './router/router.js'
import 'reset-css'
import '@/assets/scss/style.scss'
import App from './App.vue'
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite'

createApp(App).use(router).use(svgSpriteDirectivePlugin, {
    url: '/sprites.svg',
    class: 'icon',
}).mount('#app')

