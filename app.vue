<template>
        <div class="app-container">
            <div><!--//顶部-->
                <mt-header fixed title="顶部">
                    <span slot="left" @click="comeback()" v-show="flag">
                        <mt-button icon="back">返回</mt-button>
                    </span>
                </mt-header>
            </div>

            <div>
                <transition><!--动画效果-->
                    <router-view></router-view>
                </transition>

            </div>


            <div>
                <nav class="mui-bar mui-bar-tab">
                    <router-link class="mui-tab-item " to="/home">
                        <span class="mui-icon mui-icon-home"></span>
                        <span class="mui-tab-label">首页</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/vip">
                        <span class="mui-icon mui-icon mui-icon-person"></span>
                        <span class="mui-tab-label">会员</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/shopcar">
                        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getallcount}}</span></span>
                        <span class="mui-tab-label">购物车</span>
                    </router-link>
                    <router-link class="mui-tab-item" to="/search">
                        <span class="mui-icon mui-icon mui-icon-search"></span>
                        <span class="mui-tab-label" id="btn">搜索</span>
                    </router-link>
                </nav>
            </div>
        </div>
</template>

<script type="text/css" src="node_modules/jquery/dist/jquery.js"></script>
<script>
   export default{
       data(){
           return{
               flag:false
           }
       },
       methods:{
           comeback(){
               this.$router.go(-1)
           }
       },
       watch:{
           '$route.path':function(newval){//监听这个路径
               if(newval==="/home"){
                   this.flag=false;
               }else{
                  this.flag=true;
               }
           }
       }
   }
   /* $(function(){//jquery的ajax发送请求，异步获取数据使用.then()
           $('#btn').on('click',function () {
               $.ajax({
                   url:'./tsconfig.json',
                   type:'get',
                   dataType:'json',
                   /!*success:function (data) {
                       console.log(data)
                   }*!/
                   .then(function (data) {
                       console.log(data)
                   })
           })
        })
    })*/
</script>

 <style lang="css" scoped>
    .app-container{
       padding-top:45px;
       padding-bottom:50px;
       overflow-x:hidden;
       height:100%;
    }

     .v-enter{
         opacity: 0;
         transform: translateX(100%);
     }
     .v-leave-to{
         opacity: 0;
         transform: translateX(-100%);
         position: absolute;
     }
     .v-enter-active{}
     .v-leave-active{
         -webkit-transition: all,0.4s ease;
         -moz-transition: all,0.4s ease;
         -ms-transition: all,0.4s ease;
         -o-transition: all,0.4s ease;
         transition: all,0.4s ease;
     }
 </style>