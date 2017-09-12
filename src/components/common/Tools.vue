<style lang="scss" scoped>

.view-nav{
    position: fixed;
    top: 5rem;
    width: 100%;
    height: 45px;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    left: 0;
    background-color: #fff;
    .nav-list{
        width: 100%;
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: auto;
        line-height: 1;
        .nav-item{
            flex-shrink: 0;
            font-size: 1.16rem;
            color: #71777c;
            padding: 0 12px;
            height: 45px;
            &.right{
            position: absolute;
            top: 0;
            right: 0;
            }
            &.last-child{
                padding-right: 0;
            }
            &.active a{
                color: #007fff;    
            }
        }
    }
}
.nav-list{
    position: relative;
}
</style>

<template>
    <div class="view-nav" role="navigation">
        <ul class="nav-list left">
            <router-link tag="li" to="/timeline/subscribe" :class="(myServices?'active':'')" class="nav-item"><a>我关注的</a></router-link>
            <template v-for="item in categoryList">
                    <router-link v-if="item.isSubscribe" tag="li" :to="{path:'/timeline/'+item.title}" class="nav-item"><a>{{item.name}}</a></router-link>
            </template>
            <router-link tag="li" to="/page4" class="nav-item right"><a>标签管理</a></router-link> 
        </ul>  
    </div>
</template>
<script>
export default {
  name:'Tools',
  watch:{   
       '$route' (to, from) {
      // 对路由变化作出响应....
     var a = to.fullPath;
     console.log(a,123)
          if(a=='/timeline'){
               this.myServices = true;
          }else{
             this.myServices = false;
          }
      
      
    }
  },
  created(){
      if(this.$route.fullPath=='/timeline'){
            this.myServices = true;
      }else{
          this.myServices = false;
      }
     
  },
  data(){
      return {
           myServices: '',
              categoryList: [
                  {
                      "id": "5562b410e4b00c57d9b94a92",
                      "name": "Android",
                      "title": "android",
                      "createdAt": "2015-05-24T21:33:04Z",
                      "updatedAt": "2016-04-21T19:19:13Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/225aafca3a440e5d.png",
                      "background": "https://dn-mhke0kuv.qbox.me/ec8d337c485c4db2.png",
                      "tagId": "5597838ee4b08a686ce2319d",
                      "weight": "1",
                      "isSubscribe": false
                  },
                  {
                      "id": "5562b415e4b00c57d9b94ac8",
                      "name": "前端",
                      "title": "frontend",
                      "createdAt": "2015-05-24T21:33:10Z",
                      "updatedAt": "2016-03-09T00:39:02Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/1c40f5eaba561e32.png",
                      "background": "https://dn-mhke0kuv.qbox.me/8c95587526f346c0.png",
                      "tagId": "5597a05ae4b08a686ce56f6f",
                      "weight": "2",
                      "isSubscribe": true
                  },
                  {
                      "id": "5562b405e4b00c57d9b94a41",
                      "name": "iOS",
                      "title": "ios",
                      "createdAt": "2015-05-24T21:32:54Z",
                      "updatedAt": "2016-04-21T19:19:10Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/4a218bdf1f6969fd.png",
                      "background": "https://dn-mhke0kuv.qbox.me/34589746327a360a.png",
                      "tagId": "5597838ae4b08a686ce23139",
                      "weight": "3",
                      "isSubscribe": false
                  },
                  {
                      "id": "569cbe0460b23e90721dff38",
                      "name": "产品",
                      "title": "product",
                      "createdAt": "2016-01-18T02:27:17Z",
                      "updatedAt": "2016-04-29T04:39:33Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/057d8e19e6405697.png",
                      "background": "https://dn-mhke0kuv.qbox.me/91e7ff7e6447c6cc.png",
                      "tagId": "56e65334da2f60004c50910f",
                      "weight": "4",
                      "isSubscribe": false
                  },
                  {
                      "id": "5562b41de4b00c57d9b94b0f",
                      "name": "设计",
                      "title": "design",
                      "createdAt": "2015-05-24T21:33:18Z",
                      "updatedAt": "2016-03-09T00:38:50Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/3627821e57ceecb9.png",
                      "background": "https://dn-mhke0kuv.qbox.me/784dddfade84f1c9.png",
                      "tagId": "5597a035e4b08a686ce56bd9",
                      "weight": "5",
                      "isSubscribe": false
                  },
                  {
                      "id": "5562b422e4b00c57d9b94b53",
                      "name": "工具资源",
                      "title": "freebie",
                      "createdAt": "2015-05-24T21:33:22Z",
                      "updatedAt": "2016-03-09T00:38:40Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/eb20ab1334d9abea.png",
                      "background": "https://dn-mhke0kuv.qbox.me/412957a61f414c0b.png",
                      "tagId": "5597a04de4b08a686ce56e63",
                      "weight": "6",
                      "isSubscribe": false
                  },
                  {
                      "id": "5562b428e4b00c57d9b94b9d",
                      "name": "阅读",
                      "title": "article",
                      "createdAt": "2015-05-24T21:33:28Z",
                      "updatedAt": "2016-03-09T00:38:15Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/20f56d7df9f97d1d.png",
                      "background": "https://dn-mhke0kuv.qbox.me/228be0376b22924b.png",
                      "tagId": "",
                      "weight": "7",
                      "isSubscribe": false
                  },
                  {
                      "id": "5562b419e4b00c57d9b94ae2",
                      "name": "后端",
                      "title": "backend",
                      "createdAt": "2015-05-24T21:33:13Z",
                      "updatedAt": "2016-03-09T00:38:00Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/a2ec01b816abd4c5.png",
                      "background": "https://dn-mhke0kuv.qbox.me/fb3b208d06e6fe32.png",
                      "tagId": "5597a063e4b08a686ce57030",
                      "weight": "8",
                      "isSubscribe": false
                  },
                  {
                      "id": "57be7c18128fe1005fa902de",
                      "name": "人工智能",
                      "title": "ai",
                      "createdAt": "2017-07-24T06:11:07Z",
                      "updatedAt": "2017-07-24T06:11:04Z",
                      "icon": "https://dn-mhke0kuv.qbox.me/9b525117507d7a76c4ac.png",
                      "background": "https://dn-mhke0kuv.qbox.me/9b525117507d7a76c4ac.png",
                      "tagId": "57be7c18128fe1005fa902de",
                      "weight": "9",
                      "isSubscribe": true
                  }
              ],
              "total": 9}
  }
}
</script>
