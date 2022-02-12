<template>
   <div id="computed" >
       <h1>COMPUTED PROPERTY</h1>
    <div id="computed1">
 <button id="button" v-on:click="joni++">Add to Joni</button>
 <button id="button" v-on:click="moni++">Add to Moni</button>
 <p>Joni-{{joni}}</p>
 <p>Moni-{{moni}}</p>
 <!-- <p> age + Joni = {{AddToJoni()}}</p>
 <p> age + Moni = {{AddToMoni()}}</p> -->
 <p> age + Joni = {{AddToJoni}}</p>
 <p> age + Moni = {{AddToMoni}}</p>
 </div>

 <div id="computed2">
     <h1>Hello: {{Fullname}}</h1>
     <hr>
     <ul>
         <li>
        <label for="text">Firstname:</label>
        <input type="text" v-model="first">
         </li>
          <li>
        <label for="text">Lastname:</label>
        <input type="text" v-model="last">
         </li>
     
     </ul>
</div>   
   
    </div>
</template>

<script>
    export default {
        data(){
            return {
            age:30,
            joni:0,
            moni:0,
            first:"",
            last: "",
            }
            
            },
    // methods: {
    //     AddToJoni: function(){
    //         return this.joni+this.age;
    //     },
    //    AddToMoni: function(){
    //         return this.moni+this.age;
    //     },
    // }
        computed:{
          AddToJoni: function(){
             return this.joni+this.age;
        },
        AddToMoni: function(){
             return this.moni+this.age;
        },
        Fullname: function(){
           return this.first + " " + this.last;
        },

        }
    }
</script>

<style scoped>
#computed{
    background-color:blanchedalmond;
    margin: 0;
    padding: 10px;
    align-items: center;
    font-size: 20px;
    color: brown;
}
#computed1{
    background-color: greenyellow;
    margin: 0;
    padding: 10px;
    align-items: center;
    font-size: 20px;
    color: brown;
}
#computed2{
    background-color:rebeccapurple;
    margin: 0;
    padding: 10px;
    align-items: center;
    font-size: 20px;
    color: violet;
}
#button{
color: blue;
font-weight: bold;
font-size: 20px;
}
</style>