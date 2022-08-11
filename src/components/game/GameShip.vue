<template>
    <div class="ship" :style="{left:coordinate +'px'}">
        <img src="../../assets/img/ship.png" alt="" class="ship-img">
    </div>
    
</template>
<script>
export default {
    name: 'GameShip',
    props: {
        coordinate: {
            type:Number,
            defulte: 250,
        }
    }

}
</script>
<style scoped>
.ship{
    display: block;
    position: absolute;
    top: 750px;
    width: 25px;
    height: 25px;
    box-shadow: 0px 21px 7px 1px orange;
    z-index: 2;
}
.ship-img{
    width: 50px;
    left: -12px;
    top: -7px;
    position: absolute;
}
</style>