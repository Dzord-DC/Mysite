<template>
<div class="void">
<div class="footer">
  <div class="container">
    <p>Дмитрий Дроздов</p>
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
</style>