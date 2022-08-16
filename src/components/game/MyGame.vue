<template>
<div v-if="showMenu" class="game-menu">
  <h1 class="game-name">Star Catflict</h1>
  <h1 v-if="!game" class="game-name">ПОТРАЧЕНО</h1>
  <p v-if="!game" class="game-point">Счет: {{point}}</p>
  <button class="game-btn" @click="hendleStart">Начать</button>
</div>
  <div class="game-box">
    <PlayingField v-if="game"/>
    
  </div>
  
</template>

<script>
import PlayingField from './PlayingField.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'MyGame',
    components: {
    PlayingField
  },
  data(){
    return{
      showMenu: true,
      game: true,
      point: '',
    }
  },
  watch: {
    getGame(){
      if(!this.getGame ){
        this.showMenu = true;
        this.game = false;
        this.point = this.getPoins
        this.stopIt();
      }
    }
  },
  computed:{
    getGame(){
      return this.$store.getters.getGo
    },
    getPoins(){
      return this.$store.getters.getPoints
    }
  },
  methods: {
    ...mapGetters(['getPoints', 'getGo']),
    ...mapActions([
          'shotstate',
          'runIt',
          'stopIt'
      ]),
    hendleStart(){
      this.showMenu = false;
      this.game = true;
      this.runIt();
    }
  },
  
}
</script>

<style>
.game-menu{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  z-index: 10;
  height: 830px;
  align-items: center;
  background-color: rgba(107, 107, 107, 0.329);
}
.game-name{
  margin-bottom: 56px;
  font-size: 90px;
  color: brown;
}
.game-btn{
  color: #fff;
  font-size: 90px;
  background: none;
  border: none;
  
}
.game-btn:hover{
  text-shadow: 0 2px 10px brown;
}
.game-box{
  margin-top: 10px ;
}
.game-point{
  font-size: 30px;
}
</style>