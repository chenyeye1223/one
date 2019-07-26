/**
 */
import Vue from 'vue'

Vue.use(VueRouter)//手动安装路由
import VueRouter from 'vue-router'//引包
import home from './components/tabbar/home.vue'//导入 对应组件
import search from './components/tabbar/search.vue'
import vip from './components/tabbar/vip.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomments from './components/goods/goodscomments.vue'
var router =new VueRouter({//创建路由对象
    routes:[
        {path:'/home',component:home},
        {path:'/search',component:search},
        {path:'/vip',component:vip},
        {path:'/shopcar',component:shopcar},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newsinfo',component:newsinfo},//匹配id用：
        {path:'/home/photolist',component:photolist},//图片分享路由
        {path:'/home/photoinfo',component:photoinfo},//图片分享内部路由只是为了展示效果
        /*{path:'/home/photoinfo/:id',component:photoinfo}//图片分享内部路由*/
        {path:'/home/goodslist',component:goodslist},//商品路由
        {path:'/home/goodsinfo',component:goodsinfo},//商品详情路由
        /*{path:'/home/goodsinfo/:id',component:photoinfo}//商品详情路由*/
        {path:'home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'},//由vue.$router动态传递的id值
        {path:'home/goodscomments/:id',component:goodscomments,name:'goodscomments'},//由vue.$router动态传递的id值
    ],
    linkActiveClass:'mui-active'//把默认的高亮（router-link-active）替换了mui-active
})
 export default router//导出