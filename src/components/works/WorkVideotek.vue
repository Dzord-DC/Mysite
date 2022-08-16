<template>
<div class="container">
  <h1 class="header-page">Videotek</h1> 
  <img src="../../assets/img/videotek.jpg" alt="" class="img-stile">
  <p class="text">
    Данный сайт является выпускным проектом курса Geekbrains. 
    Над ним трудилась команда из 6 разработчиков. Я работал в роли Frontend-разработчика. 
    Front проекта написан на Vue, backend на node.js. 
    Сайт Videotek-это онлайн-кинотеатр, 
    в котором реализована возможность просмотра фильмов, сериалов, 
    других видеозаписей, фильтрация данного видеоряда по новизне, рейтингу, 
    жанрам, так же есть возможность получить подробную информацию о фильме, 
    сериале или видео. На сайте есть раздел новостей, статей по теме кино.
    </p>
    <a href="http://89.108.83.43:8048" class="btn"> Перейти на сайт</a>
  </div>
</template>

<script>
export default {
    name: 'WorkDoct24',
}
</script>

<style scoped>
.container{
  max-width: 1034px;
  margin: auto;
  display: flex;
    flex-direction: column;
    align-items: center;
}
.header-page{
  margin: 36px auto;
}
.img-stile{
  width: 100%;
}
.text{
  margin: 20px;
  font-size: 20px;
  line-height: 150%;
}
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 36px;
  width: 300px;
  height: 60px;
  font-size: 25px;
  color: #000;
  text-decoration: none;
  border: 1px solid;
}
</style>