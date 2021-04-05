<template>
    <div class="container">
        <div class="randomPhotosGrid mt-5">
         <img class="grid-item" :key="item.id" v-for="item in randomImages" :src="item.urls.regular" :alt="item.alt_description"/> 
         
         
         
       </div>
     
     <!-- testing -->
       <div class="randomPhotosGrid mt-5">
              <div class="hover_img" :key="item.id" v-for="item in randomImages">
            <div><span>{{item.id}}</span><img class="grid-item" :src="item.urls.regular" :alt="item.alt_description"/> </div>
        </div>

       </div>
    <!--  end -->



    </div>
</template>



<script>
import axios from 'axios'
import { key } from '../unsplashKey'


export default {
    name: 'Home',
    data(){
    return{
     randomImages: []

    }
  },
  components: {
    
  },
  created(){
    this.fetchRandomPhotos();
  },
  updated(){
      console.log(this.randomImages)
  },

  methods: {
      async fetchRandomPhotos(){
      const {data} = await axios.get('https://api.unsplash.com/photos', {
        params:{
          client_id: key,
          per_page: 12
        }
      });
      this.randomImages = data;
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


.hover_img div { 
    position:relative; 
}

.hover_img div span { 
    position:absolute; 
    display:none; 
    z-index:99; 
    top: 50%; 
    left: 40%;
}
.hover_img div:hover span { 
    color: #5409C8;
    font-weight: 800;
    display:block; 
    background-color:rgba(0,0,0,5);
}





@media(max-width: 767px) {
   .randomPhotosGrid{
    display: grid;
    grid-template-columns: auto;
   }

}


    
</style>