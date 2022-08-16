<template>
<div class="container">
  <h1 class="header-page">Первый сайт</h1> 
  <img src="../../assets/img/first.jpg" alt="" class="img-stile">
  <p class="text">В данном проекте представлены две статичные страницы.
    Верстку сделал без использования сторонних библиотек. 
    Использовал стандартизированный язык разметки HTML, каскадную таблицу стилей CSS.
    Макет сайта брал из Figma. 
    Данный проект был сделан по учебному курсу Geekbrains.
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