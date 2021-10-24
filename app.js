function random(max,min){
  return Math.floor(Math.random()*(max-min)+min)

}
const app = Vue.createApp({
  data() {
   return{
    monsterhealth:100,
    humanhealth:100,
    currentvalue:0
   }
  },
  computed:{
    monsterBarClass() {
      return{
        width:this.monsterhealth + '%'

      };

    },
    playerBarClass(){
      return{
        width:this.humanhealth + '%'

      };
    },
    getdisabled(){
      return this.currentvalue % 3 != 0
    }

  },
 methods:{
  attackMonster(){
    this.currentvalue++;
    const attackvaluemonster=random(12,5);
    this.monsterhealth=this.monsterhealth-attackvaluemonster
    this.attackPlayer();
    // if(this.monsterhealth<20){
    //   console.log('monsterhealth')
    // }



  },
  attackPlayer(){
    const attackvaluehuman=random(15,8);
    this.humanhealth=this.humanhealth-attackvaluehuman  },
    specialAttack(){
      this.currentvalue++;
      const attackvaluemonster=random(20,10);
    this.monsterhealth=this.monsterhealth-attackvaluemonster
    this.attackPlayer();


    }
 }


});
app.mount('#game');