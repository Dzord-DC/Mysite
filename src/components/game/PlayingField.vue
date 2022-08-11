<template>
<div class="box" :style="{height:screenHeight-200 + 'px'}">
    <input class="control" autofocus 
        v-on:keydown.left="movingLeft"
        v-on:keyup.left="stop" 
        v-on:keydown.right="movingRight"
        v-on:keyup.right="stop"
        v-on:keydown.space="shot">
    <div class="game-field-box">
        <div class="game-field">
            <GameShip :coordinate="x"/>
            <GameBullet v-for="(item) in bullets" :key="item.id" :id="item.id"></GameBullet>
            <easy-enemy v-for="(item, id) in enemys" :key="id" :id="item.id"/>
            <game-star v-for="(item) in getStar" :key="item.id" :id="item.id"/>
         <!--   <easy-enemy v-for="(item, id) in enemys" :key="id" :id="item.id"/>
            <GameBullet v-for="(item) in bullets" :key="item.id" :id="item.id"></GameBullet>
            <GameShip :coordinate="x"/>
            <game-star v-for="(item) in getStar" :key="item.id" :id="item.id"/>
            <GameStar /> -->
        </div>
        
    </div> 
    
</div>
    
  
</template>

<script>
import GameBullet from './GameBullet.vue'
import GameShip from './GameShip.vue'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import EasyEnemy from './EasyEnemy.vue'
import GameStar from './GameStar.vue'
export default {
  components: { GameShip, 
  GameBullet, 
  EasyEnemy, 
  GameStar 
  },
  name: 'PlayngField',
  props: {
  },
  data: () => ({
      bullets:[],
      enemys:[],
      muving: 0,
      inter: 0,
      x:250,
      screenHeight: 0,
      slag:0
  }),
  computed: {
      getBul () {
        return this.$store.getters.getBullets
      },
      getEnemy () {
        return this.getEnemys()
      },
      getStar(){
          return this.getStars()
      }
      
  },
  methods: {
      ...mapMutations([
          'addNewShot'
      ]),
      ...mapGetters([
          'getBullets',
          'getEnemys',
          'getStars',
      ]),
      ...mapActions([
          'shotstate',
          'runIt',
          'stopIt'
      ]),
      stop() {
          this.muving = 0
          clearInterval(this.inter)
      },
      movingLeft () {
          if(this.muving == 0 || this.muving == 2){
              clearInterval(this.inter)
              this.muving = 1
              this.inter = setInterval(()=>{
                  if(this.x>5){
                      this.x -= 1
                  }
              
          },5)
          }
          
      },
      movingRight () {
          if(this.muving == 0 || this.muving == 1){
              clearInterval(this.inter)
              this.muving = 2
              this.inter = setInterval(()=>{
              if(this.x<465){
                      this.x += 1
                  }
          },5)
          }
      },
      shot () {
          this.slag++
          this.shotstate( { id:this.slag, x:this.x+10, y: 750})
          this.bullets = this.getBul
      },
  },
  mounted() {
      this.runIt()
      this.enemys = this.getEnemy
  },
  created () {
      this.screenHeight = window.screen.height -20
  },
  unmounted () {
      this.stopIt()
  }
  

}
</script>


<style scoped>
.box{
    width: 100%;
    height: 850px;
    position: relative;
    display: flex;
    
}
.game-field-box{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 850px;
}
.game-field{
    position: relative;
    display: flex;
    background-color: rgb(26, 26, 26);
    border: 4px solid rgb(95, 7, 209);
    width: 500px;
    height: 800px;
}
.control{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 850px;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    text-decoration-color: transparent;
    color: transparent;
    text-shadow: 0 0 0 black;
    opacity: 0;
    z-index: 0;
}

</style>
