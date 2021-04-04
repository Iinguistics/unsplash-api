<template>
      <div class="container">
        <div class="randomPhotosGrid mt-5">
         <img class="grid-item" :key="item.id" v-for="item in termImages" :src="item.urls.regular"   :alt="item.alt_description"/> 
       </div>
      </div>
</template>







<script>
import axios from 'axios'
import { key } from '../unsplashKey'

export default {
    name: 'Search',
    data(){
    return{
    termImages: []
     }
    },

  created(){
    this.fetchSearchTermPhotos();
  },
  
  updated(){
    this.fetchSearchTermPhotos();
  },
  methods: {

     async fetchSearchTermPhotos(){
      const {data} = await axios.get('https://api.unsplash.com/search/photos?', {
        params:{
          query: this.$route.params.id,
          client_id: key,
          per_page: 12
        }
      });
      this.termImages = data.results;
    },
  }
    

}
</script>


<style scoped>

.randomPhotosGrid{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px 10px;
}

.grid-item {
    width: 350px;
    height: auto;
}
.grid-item:hover{
    transition:.3s;
    background-color:rgba(0,0,0,5);
    opacity: 0.8;
}


  

  

    
</style>