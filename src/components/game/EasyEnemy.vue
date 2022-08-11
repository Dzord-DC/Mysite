<template>
    <div class="enemy" :style="{left:dataEnamyX+'px', top:dataEnamyY+'px'}">
        <img v-if="!open" src="../../assets/img/popcat1.png" alt="" class="enemy-img">
        <img v-if="open" src="../../assets/img/popcat2.png" alt="" class="enemy-img">
        <div :style="{width:dataEnamyHP+'px'}" class="enamy-hp"></div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'EasyEnemy',
    props: {
        id:Number
    },
    data: () => ({
        open: false
    }),
    watch: {
        
    },
    computed: {
        dataEnamyY(){
            if(this.$store.getters.getEnemys.length > 0){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].y
        } else {
            return 0
        }
        },
        dataEnamyX(){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].x
        },
        dataEnamyHP(){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].hp
        }
    },
    methods: {
        ...mapActions([
          'stopIt'
      ]),
    },
    created(){
        setInterval(()=>{
            this.open = !this.open },
            800
        )
    }

}
</script>
<style scoped>
.enemy{
    border-radius: 20% ;
    position: absolute;
    width: 50px;
    height: 50px;
    z-index: 2;
}
.enemy-img{
    width: 50px;
}
.enamy-hp{
    height: 5px;
    background: linear-gradient(90deg, red, green)
}
</style>