<template>
  <div class="container">
    <h1 class="header-page">Мои работы</h1>
    <div class="card-box">
        <router-link :to="{name: 'WorkDoct24'}" class="cart-work">
          <img src="../assets/img/Doc24.png" alt="worklogo" class="work-img">
          <div> <h3>Doct24</h3> <p>Стартап</p> </div>
        </router-link>
        <router-link :to="{name: 'WorkVideotek'}" class="cart-work">
          <img src="../assets/img/videotek.jpg" alt="worklogo" class="work-img">
          <div> <h3>Videotek</h3> <p>Командная разработка</p> </div>
        </router-link>
        <router-link :to="{name: 'WorkDoct24'}" class="cart-work">
          <img src="../assets/img/verstca.jpg" alt="worklogo" class="work-img">
          <div> <h3>Онлайн магазин</h3> <p>Учебный проект</p> </div>
        </router-link>
        <router-link :to="{name: 'WorkDoct24'}" class="cart-work">
          <img src="../assets/img/first.jpg" alt="worklogo" class="work-img">
          <div> <h3>Первый сайт</h3> <p>Учебный проект</p> </div>
        </router-link>
    </div>
    <router-view  />
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.container{
  width: 1034px;
  margin: auto;
}
.header-page{
  margin: 36px auto;
}
.card-box{
  
    display: flex;
    flex-wrap: wrap;
}
.cart-work {
  margin: 16px;
  display: flex;
  width: 300px;
  height: 400px;
  position: relative;
  border: 1px solid #000;
  flex-direction: column;
  justify-content: space-around;
  color: #000;
  text-decoration: none;
  transition: 00.5s;
}
.cart-work:hover{
  box-shadow: 0px 0px 15px #000;
}
.work-img{
  height: 60%;
    width: 100%;
    object-fit: cover;        
}
</style>