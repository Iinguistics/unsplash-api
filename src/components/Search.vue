<template>
    <div class="searchbar">
        <label>Image Search</label>
      <input
      type="text" 
      placeholder="Search high-resolution photos"
      class="form-input"
      />
     <i class="fa fa-camera-retro"></i>
     
    </div>
     
</template>







<script>
export default {
    
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
    box-shadow: 0 0 10px 4px #34495e;
  }


  .secondary{
      margin-top: 15px !important;
  }

  






  @media(max-width: 767px) {
   .searchbar{
     max-width: 75%;
   }
  }
    
</style>