<template>
<div class="container">
  <div class="title-box">
  <img src="../assets/img/Ava.jpg" alt="avatar" class="avatar">
  <div class="description">
    <h1 class="header-page">Дроздов Дмитрий</h1>
    <p>{{dateday}}.{{datemonth}}.{{dateyear}}</p>
    <p>{{FullYea}} {{yearName}}</p>
    <h3 class="litle-margin">Frontend-разработчик</h3>
    <p class="litle-margin">Прошёл курсы повышения квалификации на портале GeekBrains по специальности Frontend-разработчик</p>
   <ul class="list"> Основная программа:
      <li>HTML/CSS.Интерактивный курс</li>
      <li>Профуссиональная верстка</li>
      <li>Базовый курс JavaScript</li>
      <li>Инструменты сборки Web-проектов</li>
      <li>Vue.js</li>
      <li>ReactJS</li>
      <li>Node.js</li>
      <li>TypeScript</li>
      <li>Agile, Scrum. Теория</li>
      <li>Командная разработка по методологии Agile: SCRUM</li>
      <li>Основы реляционных баз данных. MySQL</li>
      <li>Linux. Рабочая станция</li>

   </ul>
  </div>
</div>
<h2 class="litle-margin">Опыт работы</h2>
<div class="work-plase">
  <div class="work-time litle-margin">
    Июль 2022 — по настоящее время <br>
     2 месяца
  </div>
  <div class="work-description">
    <h4 class="litle-margin">Doct24</h4>
    <h5>Frontend-разработчик</h5>
    <p>Разработка онлайн сервиса телемедицины. Верстка макета из Figma и создание функционала на фреймворке Vue. Подключение обмена данными с beckend на Django</p></div>
</div>
<div class="work-plase">
  <div class="work-time litle-margin">
    Октябрь 2018 — май 2022 <br>
    3 года 8 месяцев
  </div>
  <div class="work-description">
    <h4 class="litle-margin">Элтик</h4>
    <h5>Инженер</h5>
    <p>-Монтаж и пуско-наладка слаботочных систем (пожарная и охранная сигнализация, видеонаблюдение и СКУД) в новых школах и детских содах. <br>
      -Установка и настройка интерактивных систем. <br>
      Достижения: Успешно сдал в эксплуатацию 4 школы и 5 детских садов.</p></div>
</div>
<div class="work-plase">
  <div class="work-time litle-margin">
    Сентябрь 2016 — сентябрь 2018 
2 года 1 месяц
  </div>
  <div class="work-description">
    <h4 class="litle-margin">502 завод по ремонту военно-технического имущества</h4>
    <h5>Инженер</h5>
    <p>-Проведение дефектации зенитно-ракетных комплексов на территории военной части. <br>
        -Поиск неисправностей и ремонт цифровых плат. <br>
        Достижения: Написал несколько программ проверки старых цифровых плат на современную установку, что позволило в разы увеличить скорость их проверки и нахождения дефектов.</p></div>
</div>
</div>
</template>

<script>
export default {
    name: 'MainSite',
    data(){
      return{
        dateday:null,
        datemonth:null,
        dateyear:null,
        FullYear: 0,
      }
    },
    computed: {
      yearName () {
        const namey = ['год','года','лет']
        const age = this.getAge;
        return age > 10 && age <= 20? namey[2]:(age%10 ==1?namey[0]:(age%10 < 5 && age%10 > 0? namey[1]:namey[2]))
      },
      getAge() {
        let today = new Date();
        let birthDate = new Date(this.dateyear, this.datemonth-1, this.dateday);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
      }
    return age;
}

    },
    created(){
      let newdate = new Date(1993, 0, 17);
      this.dateday = newdate.getDate();
      this.datemonth = newdate.getMonth() + 1;
      this.dateyear = newdate.getFullYear();
      this.FullYea = this.getAge

    }
}
</script>

<style>
.container{
  max-width: 1034px;
  margin: auto;
}
.litle-margin {
      margin: 15px;
}
.title-box{
  margin: 50px 0;
  display: flex;
  justify-content: space-evenly;
}

.header-page{
  margin: 36px auto;
}
.avatar{
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 60%;
  border: 3px solid;
}
.description{
  width: 45%;
}
.list{
  text-align: start;
}
.work-plase{
  display: flex;
  margin: 20px 0;
}
.work-description{
  text-align: start;
  width: 70%;
}
.work-time{
  width: 250px;
}
</style>