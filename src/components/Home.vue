<template>
    <div class="container">
        search component 
        <div class="randomPhotosGrid mt-5">
             <img :key="item.id" v-for="item in test" :src="item.urls.regular"  class="grid-item" :alt="item.alt_description"/> 
       
       </div>
    </div>
</template>



<script>
export default {
    name: 'Home',
    data(){
    return{
      myTest: 'testing'

    }
  },
  components: {
    
  },
  props: {
   test: Array
  }
    
}
</script>



<style scoped>

li{
      list-style: none;
      display: inline;
}


.randomPhotosGrid{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px 10px;
}

.grid-item{
    width: 350px;
    height: auto;
}



    
</style>