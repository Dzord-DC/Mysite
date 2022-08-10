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
      
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
    name: 'HederSite',
}
</script>

<style scoped>
.header-box{
  height: 105px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 8px #000;
  background-color: #fff;
    position: fixed;
    z-index: 200;
}
.container{

  width: 1034px;
  margin: auto;
}
.menu{
  display: flex;
}
.logo{
  margin: 0 25px;
  height:100px
}
.header-button{
  display: flex;
  font-size: 20px;
  height: 60px;
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
@media screen {
  
}
</style>