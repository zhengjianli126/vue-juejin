<template>
  <div>
      <Tools></Tools>
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
  created(){
    console.log(this.$route.fullPath);
    var a = this.$route.fullPath;
    if(a=='/timeline'){
        this.services = true;
    }else{
       this.services = false;
    }
  
  },
   watch:{
   },
  components:{
    Tools
  }
}
</script>
