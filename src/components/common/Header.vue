<style lang="scss">
@import url("//at.alicdn.com/t/font_407438_440apgln0sbgldi.css");
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
.active i{
  color: #007fff;
}
.search-form .active{
  background-color: #fff;
  border:1px solid #007fff;
}

</style>
<template>
<div class="main-header-box">
  <header class="main-header">
    <div class="container">
      <router-link to="/" class="logo"><img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" class="logo-img">
  </router-link>

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
            <form role="search" class="search-form">
              <input maxlength="32" placeholder="搜索掘金" class="search-input">
              <img data-v-5ce25e66="" src="//gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="搜索" class="search-icon">
            </form>
          </li>
          <router-link tag="li" class="nav-item add" to="/page6"><i class="icon-anonymous-iconfont iconfont"></i></router-link>
          <router-link tag="li" class="nav-item notification" to="/page7"><i class="icon-notificationread iconfont"></i></router-link>
          <li class="nav-item meun"><div class="avatar"></div></li>
        </ul>
      </nav>
    </div>
  </header>
</div>
</template>
<script>
export default {
  name:"myHeader",
  methods: {
    
  }
}
</script>
