<template>
<div class="container">
  <h1 class="header-page">Первый сайт</h1> 
  <img src="../../assets/img/first.jpg" alt="" class="img-stile">
  <p class="text">Большой проект разрабатываемый командой энтузиастов. <br>
Я выступаю в роли лидера команды Frontend-разработчиков на фреймворк Vue. <br>
Веб-сервис разрабатывается как платформа для связи пациентов с необходимыми им докторами.
Предусмотрены платные онлайн-консультации по видео связи, календарь для записи на консультации
отзывы и добавление избранных врачей и многое другое.
Backend разработан на Django.
    </p>
  </div>
</template>

<script>
export default {
    name: 'WorkFirst',
}
</script>

<style>
.container{
  width: 1034px;
  margin: auto;
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
</style>