import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            // component: HelloWorld
            components: { default: HelloWorld }
        },
        {
            path: '/test',
            name: 'HelloWorld',
            // component: HelloWorld
            components: { default: HelloWorld }
        }
    ]
})
