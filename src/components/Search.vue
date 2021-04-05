<template>
      <div class="container">
       <div class="randomPhotosGrid mt-5">
              <div class="hover_img" :key="item.id" v-for="item in termImages">
            <div><a :href="'https://unsplash.com/@' + item.user.username" target="_blank" class="photographer">By {{item.user.username}}</a><a :href="item.links.download" target="_blank" class="download-img">Download</a><img class="grid-item" :src="item.urls.regular" :alt="item.alt_description"/></div>
         </div>
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
          per_page: 24
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
}



.hover_img div { 
    position:relative; 
}

.hover_img div .photographer { 
    position:absolute; 
    display:none; 
    z-index:99; 
    bottom: 1%; 
    left: 5%;
}
.hover_img div:hover .photographer { 
    color: #0385E6;
    font-weight: 800;
    display:block; 
    background-color: #333;
    padding: 12px;
}


.hover_img div .download-img { 
    position:absolute; 
    display:none; 
    z-index:99; 
    top: 1%; 
    left: 5%;
}
.hover_img div:hover .download-img { 
    color: #0385E6;
    font-weight: 800;
    display:block; 
    background-color: #333;
    padding: 12px;
}





@media(max-width: 767px) {
   .randomPhotosGrid{
    display: grid;
    grid-template-columns: auto;
   }

}

  

    
</style>