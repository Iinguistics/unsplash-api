<template>
   <SearchBar @term-submitted="termSubmitted" />
   <Home :test= myTest />
   <router-view />
</template>

<script>
import Home from './components/Home.vue'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import { key } from '../src/unsplashKey'

export default {
  name: 'App',
  data(){
    return{
      myTest: [],
      term: ''

    }
  },
  components: {
    Home,
    SearchBar
  },
  methods: {
    
   async fetchSearchTermPhotos(){
      const {data} = await axios.get('https://api.unsplash.com/search/photos?', {
        params:{
          query: 'london',
          client_id: key
        }
      });
      this.myTest = data.results;
    },


    async fetchRandomPhotos(){
      const {data} = await axios.get('https://api.unsplash.com/photos', {
        params:{
          client_id: key,
          per_page: 12
        }
      });
      this.myTest = data;
    },

    termSubmitted(term){
      console.log(term)
    }


  },
  mounted(){
    //this.fetchSearchTermPhotos();
    //this.fetchRandomPhotos();
    console.log(this.myTest)
  },
  updated(){
    console.log(this.myTest);
  }

  
   
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
  font-family: 'Arimo', sans-serif;
}
</style>

