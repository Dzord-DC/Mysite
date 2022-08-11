import Vuex from 'vuex'


export default new Vuex.Store({
    
    state: {
        bullets:[],
        enemys:[],
        stars:[],
        count:0,
        fly:0,
        points: 0,
        enemyNum:0,
        go: true,
        
    },
    mutations: {
        setGo (state) {
            state.go = true;
        },
        clearData (state) {
            state.bullets = [];
            state.enemys = [];
            state.stars=[];
            state.count = 0;
            state.points = 0;
            state.go = true;

        },
        addEnemy (state) {
            if (Math.random()*100> 98){
            const start = Math.round(Math.random()*400+40)
            state.enemyNum +=1
            const direction = Math.round(Math.random()**2+1)
            state.enemys.push({id:state.enemyNum,w:50, h:50, x:start, y:0, direction: direction, hp: 50})
            }
           
        },
        addNewShot(state, payload) {
            if(state.bullets.length < 18){
            state.bullets.push(payload)}
        },
        moveSlag(state) {
            state.bullets.forEach(item=>item.y-=10)
        },
        moveEnemy(state) {
            state.enemys.forEach((item , id)=>{
                if(item.direction == 1){
                    if(item.x>5){
                    item.x -= 3} else {
                        item.direction = 2
                    }
                }
                if(item.direction == 2){
                    if(item.x<450){
                    item.x += 3} else {
                        item.direction = 1
                    }
                }
                item.y+=1
                if(item.y>760){
                    state.enemys.splice(id,1)
                    state.go = false;
                }
            })
        },
        deleteShot(state) {
          state.bullets.forEach((item,id)=>{
              if(item.y<0) {
                  state.bullets.splice(id, 1)
              }
            })
        },
        hit(state){
            state.bullets.forEach((bullet,id)=>{
                    state.enemys.forEach((enemy,i)=>{
                    if(bullet.y<=enemy.y+enemy.h){
                        if(bullet.x>=enemy.x && bullet.x<enemy.x+enemy.w) {
                           state.bullets.splice(id, 1)
                           enemy.hp -= 10;
                           state.points += 10;
                            if(enemy.hp <= 0 ){
                                state.enemys.splice(i, 1);
                                state.points += 50;
                            }
                        }
                        
                        }
                    })
                })
        },
        addStar(state) {
            if (state.stars.length < 12){
                state.stars.push({x:Math.round(Math.random()*400+40), y:1,id:state.count++})
            }
        },
        moveStar(state) {
            state.stars.forEach((star,id)=> {
                star.y+=1
                if(star.y>799){
                    state.stars.splice(id,1)
                }
            })
        },
    },
    getters: {
        getBullets: state => state.bullets,
        getEnemys: state => state.enemys,
        getStars: state => state.stars,
        getPoints: state => state.points,
        getGo: state => state.go,
    },
    actions: {
        shotstate(state, payload) {
            this.commit('addNewShot',payload)
        },
        runIt(){
            this.commit('setGo')
            this.commit('addEnemy')
            this.fly = setInterval(()=>{
                
                this.commit('moveEnemy')
                this.commit('moveSlag')
                this.commit('hit')
                this.commit('deleteShot')
                this.commit('addEnemy')
                if (Math.random()*100> 99){
                    this.commit('addStar')
                    
                }
                this.commit('moveStar')
                
            },20)
        },
        stopIt() {
            this.commit('clearData');
            clearInterval(this.fly);
        }
    }
})