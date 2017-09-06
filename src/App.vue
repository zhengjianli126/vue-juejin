<template>
  <div id="app">
   <my-header/>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import myHeader from './components/common/Header'
export default {
  name: 'app',
  components:{
    myHeader
  }
}
</script>
<style>
</style>
