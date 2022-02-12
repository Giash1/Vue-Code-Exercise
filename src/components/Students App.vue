<template>
    <div id="students app">
        <ul>
            <li @click="send" v-for="student in students" :key="student.id">{{student}}</li>
        </ul>
 
    </div>
</template>

<script>
    export default {
        
        data(){
            return {
            students: ['Jony', 'Markus', 'Daniel'],
            
            }
            
            },
        methods: {
             send(){
                this.$emit("abc") // if you want to send data from child to parrent-->
                }   
            },
    }
</script>

<style scoped>
#students app{
background-color:red;
  margin:auto;
  padding:10px;
  color:red;
  display:grid;
}
</style>