<template>
  <div>
      <Tools/>
      <template>
          <div>
            <router-view></router-view>
          </div>
      </template>
      
  </div>
</template>
<script>
import Tools from '../common/Tools'
export default {
  name:"timeline",
  components:{
    Tools
  }
}
</script>
