<template>
    <div >
        <form class="searchbar" @submit.prevent="termHandler">
          <label>Image Search</label>
          <input
            v-model="term"
            type="text" 
            placeholder="Search high-resolution photos"
            class="form-input"
            minlength="1"
            />
            <i class="fa fa-camera-retro mt-1" @click="termHandler"></i>
        </form>
        <h5>{{error}}</h5>
    </div>
</template>




<script>
export default {
    name: 'SearchBar',
    data(){
    return{
      term: '',
      error: ''

    }
  },
  
  methods: {
      termHandler(){
        //  this.$emit('term-submitted', this.term)
        //  this.$router.push({ name: "Search", params: { term: this.term } })
        if(this.term === ''){
          this.error = 'Please enter at least one character';
          return;
        } 
        this.error = '';
        this.$router.push(`/search/${this.term}`);
      }
  }
    
}
</script>
<style scoped>

.searchbar{
    max-width: 45%;
    margin: auto;
    margin-top: 100px;
    font-size: 16px;
    margin-bottom: 100px;
}

.form-input{
    display: block;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    padding: 15px 40px;
    outline: none;
    color: #212121;
    transition: 0.5s;
    border-radius: 7px;
    height: 40px;
    margin-top: 15px;
  }
  
  .form-input:focus{
    box-shadow: 0 0 5px 2px #34495e;
  }


  .secondary{
      margin-top: 15px !important;
  }

  
  i:hover{
    cursor: pointer;
  }



  @media(max-width: 767px) {
   .searchbar{
     max-width: 75%;
   }
  }
    
</style>