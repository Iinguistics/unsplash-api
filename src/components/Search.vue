<template>
    <div class="container">
        search page
       
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
    props: {
   term: String
  },
  created(){
    this.fetchSearchTermPhotos();
  },
  mounted(){
    console.log(this.$route.params.id)
  },
  updated(){
      console.log(this.term, 'why')
  },
  methods: {

     async fetchSearchTermPhotos(){
      const {data} = await axios.get('https://api.unsplash.com/search/photos?', {
        params:{
          query: this.$route.params.id,
          client_id: key
        }
      });
      this.termImages = data.results;
    },
  }
    

}
</script>


<style scoped>




  

  

    
</style>