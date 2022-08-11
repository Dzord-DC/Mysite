<template>
<div class="void">
<div class="footer">
  <div class="container">
    <p>Дмитрий Дроздов</p>
    <div class="contact-box">
      <a href="https://vk.com/dzord_dc" class="contact-a"><img src="../assets/img/vk.png" alt="vk" class="contact-img"></a>
      <a href="https://t.me/DzoRD_DC" class="contact-a"><img src="../assets/img/telegram.png" alt="vk" class="contact-img"></a>
      <a href="https://viber.click/79157665312" class="contact-a"><img src="../assets/img/viber.png" alt="vk" class="contact-img"></a>
      <a href="https://wa.me/79157665312" class="contact-a"><img src="../assets/img/whatsapp.png" alt="vk" class="contact-img"></a>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'FooterSite'
}
</script>

<style>
.footer{
  position: fixed;
  bottom: 0;
  height: 105px;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0px 0px 8px #000;
  background-color: #fff;
}
.void {
height: 105px;
}
.contact-box{
  display: flex;
  justify-content: center;
}
.contact-img{
  width: 40px;
  height: 40px;
}
.contact-a{
  display: block;
    width: 40px;
    height: 40px;
    margin: 10px;
}
</style>