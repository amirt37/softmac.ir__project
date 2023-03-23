import {createRouter , createWebHistory} from 'vue-router'
import MyHome from './components/MyHome'
import NotFound from './components/NotFound.vue'
import AppsMother from './components/apps/AppsMother.vue'
import AppsShow from './components/apps/AppsShow.vue'
import AllApps from './components/apps/AllApps.vue'

const routes = [
    // path: '/posts', name: "PostTemplate", component: PostTemplate, children: [
        // { path: '', name: "PostPage", component: PostPage },
        // { path: ':id', name: "PostShow", component: PostShow },
        // { path: 'create', name: "PostCreate", component: PostCreate },
    //     { path: 'edit/:id', name: "PostEdit", component: PostEdit },
    // ],
    // {path: ''}
    {path: '/' ,name:'home', component : MyHome },
    {path: '/apps' ,name:'apps', component : AppsMother , children:[
        { path:'', name:'allApps', component : AllApps },
        { path: ':id', name: "AppsShow", component: AppsShow }
    ]},
    {path: '/:pathMatch(.*)*', name: 'NotFound' , component : NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes  

})

export default router

  
