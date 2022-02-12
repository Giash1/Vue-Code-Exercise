<template>
  <div class="exercise">
    <h1> {{exercise}} </h1>
    <p>{{firstName}} {{lastName}}</p>
    <p>{{hello('afternoon')}}</p>
    
  </div>
</template>

<script>

export default {
    name:'Modal',
    data(){
      return{
          exercise:'Vue exercise component',
          firstName: 'Jamal',
          lastName:'Uddin'
          
          
      }
      },
methods: {
    hello(abc){
     return 'Good'+ " " + abc + " "+ this.firstName;
    }
  }


}
</script>

<style>
.exercise{
    background-color: bisque;
    align-items: center;
    font-size: medium;
}
</style>