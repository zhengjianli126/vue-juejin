<style scoped lang="scss">
    .container{
        position: relative;
        margin: 0 auto;
        margin-top: 72px;
        width: 100%;
        max-width: 960px;
        .timeline-entry-list{
                margin-right: 260px;
                background-color: #fff;
                border-radius: 2px;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        }
    }
    .list-header{
            padding: 16px 12px;
            border-bottom: 1px solid hsla(0,0%,59%,.1);
            .list-nav{
                display: flex;
                justify-content: space-between;
            }
    }
    .list-nav{
        position: relative;
        align-items: center;
        line-height: 1;
    }
    .nav-list{ 
        align-items: center;
        line-height: 1;
        
    }
    .nav-list .nav-item{
        padding: 0 1.2rem;
        font-size: 1.16rem;
        border-right: 1px solid hsla(0,0%,59%,.2);
        height: 13px;
        cursor: pointer;
    }
     .left .nav-item{
        float: left;
    }
    .right .nav-item{
        float: right;
         border-right:0;
    }
    .entry-list{
        width: 100%;
        background-color: #fff;
    }
    .item{
        border-bottom: 1px solid rgba(178,186,194,.15);
    }
    a{
        color: inherit;
    }
    .content-box{
        display: flex;
        align-items: center;
        padding: 18px 24px;
    }
    .info-box{
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
    }
    .meta-row{
        font-size: 1rem;
        color:#b2bac2;
    }
    .meta-list{
        display: flex;
        align-items: baseline;
        white-space: nowrap;
        .item.username{
            display: flex;
            align-items: baseline;
        }
        .item.tag{
            min-width: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .user-popover-box{
        display: flex;
        align-items: center;
    }
    .meta-list .item .tag:not(:last-child):after{
            content: "/";
            margin: 0 .2em;
            color: #b2bac2;
    }
    .meta-list .item.tag{
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title-row{
    margin: .5rem 0 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.title:visited{
    color: #909090;
}
.title{
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
}
.action-list{
    display: inline-flex;
    white-space: nowrap;
}
.action-list>.item.like{
    padding: 0;
}
.action-list>.item{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 .8rem;
    height: 2rem;
    font-size: 1.083rem;
    line-height: 1;
    color: #b2bac2;
    border-radius: 1px;
    border: 1px solid #edeeef;
}
.action-list>.item .title-box{
    display: flex;
    align-items: center;
    padding: 0 .8rem;
    height: 100%;
}
.action-list>.item .count{
    margin-left: .2em;
    font-weight: 700;
}
.action-list>.item.comment{
    margin-left: -1px;
    padding: 0;
}
.action-list>.item .title-box{
    display: flex;
    align-items: center;
    padding: 0 .8rem;
    height: 100%;
}
.active1 a {
    color: #007fff;
}
</style>
<style>
.outer::after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}
</style>

<template>
  <div class="container">
      <div class="timeline-entry-list">
          <header class="list-header">
                <nav class="list-nav" role="navigation">
                    <ul class="nav-list left outer">
                        <router-link tag="li" :to="routerUrl
                        +'?sort=popular'" :class="(activeFlag?'active1':'')" class="nav-item"><a>热门</a></router-link>
                        <router-link tag="li" :to="routerUrl
                        +'?sort=newest'" class="nav-item"><a>最新</a></router-link>
                        <router-link tag="li" :to="routerUrl
                        +'?sort=comment'" class="nav-item"><a>评论</a></router-link>
                    </ul>
                    <ul class="nav-list right outer">
                        <router-link tag="li" :to="routerUrl
                        +'?sort=weeklyHottest'" class="nav-item"><a>本周最热</a></router-link>
                        <router-link tag="li" :to="routerUrl
                        +'?sort=monthlyHottest'" class="nav-item"><a>本月最热</a></router-link>
                        <router-link tag="li" :to="routerUrl
                        +'?sort=hottest'" class="nav-item"><a>历史最热</a></router-link>
                    </ul>
                </nav>
          </header>
          <ul class="entry-list">
              <router-link tag="div" to="/entry/59b605b2f265da0660295780/detail" class="entry">
                <a class="entry-link">
                    <div class="content-box">
                        <div class="info-box">
                            <div class="info-row meta-row">
                                <ul class="meta-list">
                                    <li class="item username clickable">
                                        <router-link class="user-popover-box" to="/user/57ca7b8b5bbb500074e83485" tag="div">
                                            <a>逆流的鱼</a>
                                        </router-link>
                                    </li>
                                    <li class="item">3小时前</li>
                                     <li class="item tag">
                                        <router-link class="tag" to="/tag/Android" tag="a">
                                           Android
                                        </router-link>
                                        <router-link class="tag" to="/tag/程序员" tag="a">
                                            程序员
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="info-row title-row">
                               <router-link to="http://www.baidu.com" tag="a"class="title">天天学到夜里12点，感觉越学越迷茫，怎么办？</router-link>
                            </div>
                            <div class="info-row action-row">
                                <ul class="action-list">
                                    <li class="item like clickable">
                                        <a class="title-box">
                                            <img src="//gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg" class="icon">
                                            <span class="count">21</span>
                                        </a>
                                    </li>
                                    <li class="item comment clickable">
                                        <a href="/entry/59b605b2f265da0660295780/detail#comment" target="_blank" class="title-box">
                                            <img src="//gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" class="icon">
                                            <span class="count">5</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
              </router-link>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name:"Fcontent",
   watch:{
       '$route' (to, from) {
      // 对路由变化作出响应....
        var b= to.query.sort;
        if(b=='popular'){
                
        }else if(b =='newest'){

        }else if(b=='comment'){

        }
        const a =to.fullPath;
        const beginUrl =  a.substring(0, a.lastIndexOf("?"));
        this.routerUrl = beginUrl; 
    }
  },
  data(){
      return {
            routerUrl:'',
            activeFlag :''    
      }
  },
  created(){
      var a = this.$route.fullPath;
      var reg = /\/timeline/;
        if(reg.test(a)){
            this.activeFlag = true;
        }else{
            this.activeFlag = false;
        }
        this.routerUrl = '/timeline/subscribe'
  }
}
</script>
