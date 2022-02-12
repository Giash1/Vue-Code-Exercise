<template>
    <div id="propsapp">
<ul>
<li v-for="worker in workerList" :key="worker.id">{{worker.name}} : {{worker.age}} : {{worker.position}}</li>
 </ul>
  <button v-on:click="deleteList">Delete</button>  
    </div>
</template>

<script>

    export default {
  props: ["workerList"],
//  props: {
//      workerList:{
//           type:Array,
//      required:true
//      }
    
// },
  data() {
      return {
          
      }
  },
  methods: {
      deleteList:function(){
          this.workerList.pop(); //pop is an element out of the array
      }
  }
        }
</script>

<style scoped>

</style>