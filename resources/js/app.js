require('./bootstrap');
window.Vue = require('vue').default;
//importar vuetify
import vuetify from './vuetify';
//importar router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//importar el menu principal
import App from './components/App.vue'
// rutas 
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/home',
            components:require('./components/home/PageHome.vue')
        },
        {
            path:'/contact',
            components:require('./components/contact/PageContact.vue')
        },
        {
            path:'/productos',
            name:'productos',
            components: require('./views/productos.vue')
        },
        { path:'producto-detalle/:id', name:'producto', components: require('./components/producto-detalle.vue')},
        { path:'*', redirect:'/home'}
    ]
})

const app = new Vue({
    el: '#app',
    components:{App},
    router,
    vuetify
});
