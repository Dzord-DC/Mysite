<template>
<div class="container">
  <h1 class="header-page">Дмитрий Дроздов</h1>
    <div class="contact-box">
     <p class="contact-text">Номер телефона: +79157665312</p> 
      <a href="https://vk.com/dzord_dc" class="contact-a"><img src="../assets/img/vk.png" alt="vk" class="contact-img"> <p class="contact-text">ВК</p> </a>
      <a href="https://t.me/DzoRD_DC" class="contact-a"><img src="../assets/img/telegram.png" alt="vk" class="contact-img"><p class="contact-text">Телеграм</p></a>
      <a href="https://viber.click/79157665312" class="contact-a"><img src="../assets/img/viber.png" alt="vk" class="contact-img"> <p class="contact-text">Viber</p> </a>
      <a href="https://wa.me/79157665312" class="contact-a"><img src="../assets/img/whatsapp.png" alt="vk" class="contact-img"> <p class="contact-text">Whatsapp</p> </a>
    </div>
    
    </div>
</template>

<script>

export default {
    name: 'MyContacts',
    data(){
      return{
        ms: 1.9891*Math.pow(10, 30),
        me: 5.9722*Math.pow(10, 24),
        mm: 7.35*Math.pow(10, 22),
        Rem: 384467000,
        Rsm: 149600000000,
        G: 6.7*Math.pow(10, -11)
      }
      
    },
    computed:{
      Fse(){
        return this.G*((this.ms*this.me)/Math.pow(this.Rsm, 2))
      },
      Fsm(){
        return this.G*((this.ms*this.mm)/Math.pow(this.Rsm-this.Rem, 2))
      },
      Fem(){
        return this.G*((this.mm*this.me)/Math.pow(this.Rem, 2))
      },
    }
}
</script>

<style scoped>
.container{
  max-width: 1034px;
  margin: auto;
}
.header-page{
  margin: 36px auto;
}
.contact-box{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-a{
  display: flex; 
  text-decoration: none;
}
.contact-a:hover{
  text-shadow: 0px 2px 10px rgb(80, 79, 79);
}
.contact-img{
width: 50px;
}
.contact-a:hover .contact-img{
  
      box-shadow: 0px 15px 8px rgb(80 79 79);
    opacity: 0.7;
}

.contact-text{
  color: #000;
  font-size: 36px;
  text-decoration: none;
   margin: 0 12px;
}
</style>