<style lang="scss">
@import url("//at.alicdn.com/t/font_407438_6ao3j3pw240lik9.css");
 .main-header-box{
   height: 60px;
   width: 100%;
   background-color: #f4f5f5;
  .main-header{
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: 5rem;
    z-index: 250;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;  
   .container{
    max-width: 960px;
    margin: auto;    
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    }
  }
}
.logo{
  margin-right: 24px;
}
.main-nav{
    height: 100%;
    flex: 1 0 auto;
    .nav-list{
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    }
}
.nav-item{
    &.last-child{
      padding-right:0;
    }
    display: flex;
    height: 60px;
    padding: 0 18px; 
    color: #71777c;
    padding: 0 1.5rem;
    font-size: 1.33rem;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    &.search{   
    flex: 1 1 auto;
    justify-content: flex-end;
    cursor: auto;
    }
    a{
      color: #71777c;
      outline-width:0;
      text-decoration:none;
      &:hover{
        color: #007fff;
      }
    }
    &.add{
      position: relative;
      i{
        font-size: 16px;
      }
      i:hover{
        color: #007fff;   
      }
    }
    &.notification{
      position: relative;
      i{
        font-size: 18px;
      }
       i:hover{
        color: #007fff;   
      }
    }
    &.meun{
      position: relative;
    }
}
.main-nav-list{
  display: flex;
}
.search-form{
  display: flex;
  border: 1px solid hsla(0,0%,59%,.2);
  background-color: rgba(227,231,236,.2);
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  .search-input{
    padding: 7px 12px;
    border: none;
    box-shadow: none;
    outline: none;
    font-size: 14px;
    background-color: transparent;
    color: #666;
  }
  img{
    cursor: pointer;
  }
}
.avatar{
  width: 30px;
  height: 30px;
  background-image: url("https://user-gold-cdn.xitu.io/2016/11/29/15752cf60780dd5b75280706c4fbcd94?imageView2/1/w/100/h/100/q/85/interlace/1");
  border-radius:50%;
  display: inline-block;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
 .active a{
  color: #007fff;
}
.add .active i,.notification .active i{
  color: #007fff;
}
.asd{
  background-color: #fff;
  border:1px solid #007fff;
}
.nav-menu{
  position: absolute;
  width: 156px;
  left: 50%;
  top: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
  border: 1px solid hsla(217, 5%, 71%, .45);
  border-radius: 4px;
  font-size: 12px;  
    &.user-dropdown-list{
    width: 156px;
    right: 0;
    left: auto;
    transform: translateX(0);
    display: none;
    .nav-menu-item-group:not(:last-child){
      border-bottom: 1px solid rgba(0,0,0,.04);
    }
  }
  .nav-menu-item-group{
    padding: 12px 0;
   
  }
  .nav-menu-item{
    cursor: pointer;
    font-size: 16px;
    height: 35px;
    &>a{
      display: block;
      padding: 6px 12px;
      color: #71777c;
      
    }
    &:hover{
          background-color: hsla(0,0%,95%,.5);
    }
    &.more{
      position: relative;
    }
    .more-icon{
        float: right;
        color: #b2bac2;
        font-size: 14px;
        line-height: 24px;
      }
  }
}
.fengwei{
    display: inline-block;
    width: 19px;
    height: 19px;
    margin-right: 12px;
    font-size: 16px;
    vertical-align: middle;
    color: #b2bac2;
}
.more-dropdown-list{
  display: none;
  width: 134px;
  position: absolute;
  left: auto;
  top: 0;
  right: 102%;
  transform: translateX(0);
}
.isShow{
  display: block!important;
}
</style>
<template>
<div class="main-header-box">
  <header class="main-header">
    <div class="container">
      <router-link to="/" class="logo"><img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" class="logo-img"></router-link>
      <nav role="navigation" class="main-nav">
        <ul class="nav-list">
          <div class="main-nav-list">       
            <router-link tag="li" class="nav-item link-item" to="/page1"><a>首页</a></router-link>
            <router-link tag="li" class="nav-item link-item" to="/page2"><a>专栏</a></router-link>
            <router-link tag="li" class="nav-item link-item" to="/page3"><a>收藏集</a></router-link>
            <router-link tag="li" class="nav-item link-item" to="/page4"><a>发现</a></router-link>
            <router-link tag="li" class="nav-item link-item" to="/page5"><a>开源库</a></router-link>
          </div>
          <li class="nav-item search">
            <form role="search" v-bind:class="[isA?'asd':'']" class="search-form">
              <input @focus="isActive1()" @blur="isActive2()" maxlength="32" placeholder="搜索" class="search-input">
              <img :src="imgSrc" alt="搜索" class="search-icon">
            </form>
          </li>
          <router-link tag="li" class="nav-item add" to="/page6"><i class="icon-anonymous-iconfont iconfont"></i></router-link>
          <router-link tag="li" class="nav-item notification" to="/page7"><i class="icon-notificationread iconfont"></i></router-link>
          <li class="nav-item meun">
            <div class="avatar" @click="naxMenuShow()"></div>
            <ul class="nav-menu user-dropdown-list" :class="[isToggle?'isShow':'']">
                <div class="nav-menu-item-group">
                    <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-rentou2 iconfont"></i>我的主页</a>
                    </router-link>
                     <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-xin iconfont"></i>我喜欢的</a>
                    </router-link>
                     <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-shoucangjijijiji iconfont"></i>我的收藏集</a>
                    </router-link>
                     <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-biaoqian iconfont"></i>标签管理</a>
                    </router-link>
                </div>
                <div class="nav-menu-item-group">
                    <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-tripshezhishi iconfont"></i>设置</a>
                    </router-link>
                    <li class="nav-menu-item more" @mouseout="naxMenuShow1()"  @mouseover="naxMenuShow1()">
                        <a><i class="fengwei icon-guanyu iconfont"></i>关于<i class="more-icon iconfont icon-iconfontxiangxia1copy19"></i></a>
                        <ul class="nav-menu more-dropdown-list" :class="[isToggle1?'isShow':'']">
                            <div class="nav-menu-item-group">
                              <router-link tag="li" to="/page1" class="nav-menu-item">
                                  <a>下载应用</a>
                              </router-link>
                              <router-link tag="li" to="/page1" class="nav-menu-item">
                                  <a>关于</a>
                              </router-link>
                              <router-link tag="li" to="/page1" class="nav-menu-item">
                                  <a>加入我们</a>
                              </router-link>
                              <router-link tag="li" to="/page1" class="nav-menu-item">
                                  <a>翻译计划</a>
                              </router-link>
                              <router-link tag="li" to="/page1" class="nav-menu-item">
                                  <a>合作伙伴</a>
                              </router-link>
                            </div>
                        </ul>
                    </li>
                </div>
                <div class="nav-menu-item-group">
                    <router-link tag="li" to="/page1" class="nav-menu-item">
                        <a><i class="fengwei icon-dengchu iconfont"></i>登出</a>
                    </router-link>
                </div>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</div>
</template>
<script>
export default {
  name:"myHeader",
  data(){
    return{
        isA:false,
        imgSrc:"http://gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg",
        isToggle:false, 
        isToggle1: false
    }
  },
  methods: {
    isActive1: function(){
      this.isA=true;
      this.imgSrc = 'http://gold-cdn.xitu.io/v3/static/img/juejin-search-icon-focus.470748c.svg'
    },
    isActive2: function(){
      this.isA = false;
       console.log(this.isA)
      this.imgSrc ='http://gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg';
    },
    naxMenuShow:function(){
        if(!this.isToggle){
          this.isToggle =true;
        }else{
          this.isToggle = false;
        }
    }, 
    naxMenuShow1:function(){
        if(!this.isToggle1){
          this.isToggle1 =true;
        }else{
          this.isToggle1 = false;
        }
    }
  },
  created() {
    // 点击其他不在的区域触发事件
    document.addEventListener('click', (e) => {
      console.log(this.$el.contains(e.target));
      if (!this.$el.contains(e.target)){
          this.isToggle = false; 
      }
    })
  }
}
</script>
