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
                        <router-link tag="li" to="/timeline/subscribe?sort=popular" class="nav-item"><a>热门</a></router-link>
                        <router-link tag="li" to="/timeline/subscribe?sort=newest" class="nav-item"><a>最新</a></router-link>
                        <router-link tag="li" to="/timeline/subscribe?sort=comment" class="nav-item"><a>评论</a></router-link>
                    </ul>
                    <ul class="nav-list right outer">
                        <router-link tag="li" to="ss" class="nav-item"><a>本周最热</a></router-link>
                        <router-link tag="li" to="ss" class="nav-item"><a>本月最热</a></router-link>
                        <router-link tag="li" to="ss" class="nav-item"><a>历史最热</a></router-link>
                    </ul>
                </nav>
          </header>
      </div>
  </div>
</template>
<script>
export default {
  name:"Fcontent"
}
</script>
