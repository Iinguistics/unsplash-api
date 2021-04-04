<template>
    <div class="container">
        search component 
        <div class="randomPhotosGrid mt-5">
            <div class="grid-item">testing</div>
            <div class="grid-item">testing</div>
            <div class="grid-item">testing</div>
            <div class="grid-item">testing</div>
            <div class="grid-item">testing</div>
            <div class="grid-item">testing</div>
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


    
</style>