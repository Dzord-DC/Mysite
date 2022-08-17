<template>
<div class="void">
  <div class="header-box">
    <div class="container">
      <div class="menu">
        <div><img src="../assets/img/method-draw-image.svg"  alt="logo" class="logo">
        </div>
        <router-link to="/" class="header-button"> <p class="btn-text">Разработчик</p> </router-link>
        <router-link :to="{name:'Works'}" class="header-button"> <p class="btn-text">Мои работы</p> </router-link>
        <router-link :to="{name:'Game'}" class="header-button"> <p class="btn-text">Игра</p> </router-link>
        <router-link :to="{name:'Contacts'}" class="header-button"> <p class="btn-text">Контакты</p> </router-link>
      </div>
      <div class="menu-burger">
        <button @click="showMenu = !showMenu" class="munu-buttom"><img src="../assets/img/method-draw-image.svg"  alt="logo" class="logo"> <span class="fia"> - - -</span>
        </button>
        <div v-if="showMenu" class="menu-burger-container" @click="showMenu = !showMenu" :style="{height:screenHeight + 'px', width:screenWidth + 'px' }">
          <div class="menu-burger-box">
            <router-link to="/" class="header-button"> <p class="btn-text">Разработчик</p> </router-link>
            <router-link :to="{name:'Works'}" class="header-button"> <p class="btn-text">Мои работы</p> </router-link>
            <router-link :to="{name:'Game'}" class="header-button"> <p class="btn-text">Игра</p> </router-link>
            <router-link :to="{name:'Contacts'}" class="header-button"> <p class="btn-text">Контакты</p> </router-link>
        
          </div>
         </div>
        
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
    name: 'HederSite',
    data(){
      return{
        showMenu: false,
        screenHeight: 100,
        screenWidth: 100,
      }
    },
    mounted () {
      this.screenHeight = window.screen.height;
      this.screenWidth = window.screen.width;
    }
}
</script>

<style scoped>
.header-box{
  height: 75px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 8px #000;
  background-color: #fff;
    position: fixed;
    z-index: 200;
}
.void {
height: 75px;
}
.container{
  max-width: 1034px;
  margin: 0 auto;
}
.menu{
  display: flex;
}
.munu-buttom{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background: none;
}
.menu-burger{
  display: none;
}
.fia{
  font-size: 80px;
  line-height: 15%;
  width: 32px;
}
.munu-buttom:focus .fia{
      text-shadow: 0 0 3px black;
}
.logo{
  margin: 0 25px;
  height:60px
}
.header-button{
  display: flex;
  font-size: 20px;
  height: 30px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #000;
  padding: 20px;
  transform: skew( -20deg, 0);
  background-color: #f0f0f3;
  box-shadow: 10px 10px 20px #d3d3d6, -5px 0px 10px #fff;
  transition:  0.5s;

}
.header-button:hover{
    box-shadow: 1px 4px 10px #000;
    text-shadow: 1px 1px #000;
}
.btn-text{
  transform: skew( 20deg, 0);
}
a.router-link-active, li.router-link-active>a {
  color: #fff;
  background-color: #333;
}
@media screen and (max-width: 800px) {
.header-box{
  justify-content: start;
}
.container{

  margin: 0 ;
}
.menu-burger-box{
  width: 40%;
  min-width: 160px;
}
.menu{
  display: none;
}
.menu-burger{
  display: flex;
  flex-direction: column;
}
}
</style>