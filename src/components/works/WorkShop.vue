<template>
<div class="container">
  <h1 class="header-page">Онлайн магазин</h1> 
  <img src="../../assets/img/verstca.jpg" alt="" class="img-stile">
  <p class="text">В данном проекте представлены статичные страницы "Интернет магазина одежды". 
    Меню сайта организовал ссылками на отдельные страницы.
    Сам проект реализовал без использования сторонних библиотек. 
    Использовал стандартизированный язык разметки HTML, каскадную таблицу стилей CSS, и немнго JavaScript.
    Макет сайта брался из Figma. 
    Данный проект был сделан по учебному курсу Geekbrains.
    </p>
  </div>
</template>

<script>
export default {
    name: 'WorkShop',
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