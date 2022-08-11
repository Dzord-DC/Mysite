<template>
  <div class="game-box">
    <PlayingField />
  </div>
  
</template>

<script>
import PlayingField from './PlayingField.vue'
export default {
    name: 'MyGame',
    components: {
    PlayingField
  }
}
</script>

<style>
.game-box{
  margin-top: 10px ;
}
</style>