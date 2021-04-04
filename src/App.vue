<template>
   <SearchBar @term-submitted="termSubmitted" />
   <router-view />
</template>

<script>
import SearchBar from './components/SearchBar'

export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  components: {
    SearchBar
  },

   
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

