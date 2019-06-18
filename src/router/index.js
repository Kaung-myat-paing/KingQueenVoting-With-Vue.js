import Vue from 'vue'
import VueRouter from 'vue-router'
import student from '../components/student.vue'
import home from '../components/home.vue'
import selection from '../components/selection.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home },
    { path: '/student', component: student },
    { path: '/selection',component: selection}

]

const router = new VueRouter({
    routes
})

export default router
