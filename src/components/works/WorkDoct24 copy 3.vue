<template>
<div class="container">
  <h1 class="header-page">Doct24</h1> 
  <img src="../../assets/img/Doc24.png" alt="" class="img-stile">
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
    name: 'WorkDoct24',
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