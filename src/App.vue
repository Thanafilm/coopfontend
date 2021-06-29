<template>
  <div id="app">
  <div class="nav"> <app-header /></div>
    <div class="main"> <router-view/></div> 
   <Facebook/>
    <Footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Footer from './components/Footer.vue'
import Facebook from './components/Facebook'

export default {
  components:{
    AppHeader,
    Footer,
    Facebook,
    
  }
}
</script>


<style>
@font-face {
  font-family: "Athiti";
  src: url(../src/assets/font/Athiti-Medium.ttf);
}

#app {
  font-family: "Athiti" ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main{
  margin-top:165px;
  z-index: -1;
}
</style>
