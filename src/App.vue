<template>
  <Home :test= myTest />
</template>

<script>
import Home from './components/Home.vue'
import axios from 'axios'
import { key } from '../src/unsplashKey'

export default {
  name: 'App',
  data(){
    return{
      myTest: []

    }
  },
  components: {
    Home
  },
  methods: {
    
   async fetchRandomPhotos(){
     
      const {data} = await axios.get('https://api.unsplash.com/search/photos?', {
        params:{
          query: 'london',
          client_id: key
        }
      });
      this.myTest = data.results;
    }
  },
  mounted(){
    this.fetchRandomPhotos();
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
  font-family: 'Arimo', sans-serif;
}
</style>

