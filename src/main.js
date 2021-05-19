import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'

import 'tiptap-vuetify/dist/main.css'

Vue.config.productionTip = false

Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'fa'
});
new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
