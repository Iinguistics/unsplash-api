<template>
    <div class="container">
        <div class="randomPhotosGrid mt-5">
         <img class="grid-item" :key="item.id" v-for="item in test" :src="item.urls.regular"   :alt="item.alt_description"/> 
       </div>

      


    </div>
     <!--
     <div class="content">
        <div class="doc">
            <img src="https://source.unsplash.com/random" alt="" />
            <div class="links">
            <a href=""><i class="fa fa-heart"></i><span></span></a>
            <a href=""><i class="fa fa-comment"></i><span></span></a>
            </div>
        </div>
        </div>
        !-->
</template>



<script>


export default {
    name: 'Home',
    data(){
    return{
      myTest: 'testing'

    }
  },
  components: {
    
  },
  props: {
   test: Array
  }
    
}
</script>



<style scoped>

li{
      list-style: none;
      display: inline;
}


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


/* insta */
.doc{
    position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  font-size:0;
}
.doc::before{
    content:"";
    transition:.3s;
    position:absolute;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0);
  }
.doc .links{
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  overflow:hidden;
  opacity:0;
  transition:.2s;
}
.doc .links i{
  font-size:35px;
  margin:0 auto;
  position:relative;
  padding:15px;

}
.doc a{
  color:#FFF;
  position:relative;
  text-decoration:none;
}
.doc span{
    font-size:16px;
}

.doc:hover{
      opacity:1;
      background-color:rgba(0,0,0,.5);
}

.doc::before{
      opacity:1;
      background-color:rgba(0,0,0,.5);
}

    .links{
      opacity:1;
    }


    
</style>