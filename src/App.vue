<template>
  <Home :test= myTest />
</template>

<script>
import Home from './components/Home.vue'
import axios from 'axios'

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
          client_id: 'HPm13HgLp3IvxRUTJlllbzDN_SlCOcbOBnwJyJIA7g4'
        }
      });
      this.myTest = data;
    }
  },
  mounted(){
    this.fetchRandomPhotos();
    console.log(this.myTest)
  },
  updated(){
    console.log(this.myTest.results);
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
}
</style>

