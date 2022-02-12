<template>
  <div id="Click">
   <h1>CONDITION</h1>
   <div id="condition">
   <button v-on:click="wrong =!wrong">toogle error</button>
   <button v-on:click="completed =!completed">toogle completed</button>
   <p v-if="wrong">Something wrong</p>
   <p v-else-if="completed">It is completed</p>
   </div>
   
   
   
   <h1>CLICK </h1>
  <div>
   <input type="text" v-model="text" placeholder="username" v-bind:class="{error}" >
   <button v-on:click="submit">send</button>
   <p  v-if="error">fail</p>
   </div>
<hr>
  <div>
      <h1>V-for</h1>
      <ul>
      <li v-for="item in list" :key="item.id">
      {{item}}
  </li>
   <input type="text" v-model="text" v-on:keyup.enter="add">
   <button v-on:click="add">Add</button>
   </ul>
   </div>
   
   <template>
       <div>
         
         <ul> 
         <li v-for="(name,index) in characters" :key="name.id">{{index}}. {{name}}</li>
         </ul> 

         <ul> 
         <li v-for="(item,index) in groups" :key="item.id">{{index}}. {{item.name}} : {{item.members}}</li>
         </ul> 
        
         <ul v-for="abc in groups" :key="abc.id"> 
             <div v-for="(number, name) in abc" :key='name.id'>
                 {{name}}: {{number}}
             </div>
        
         </ul>  
       </div>
   </template>
    <Website/>
  </div>
</template>

<script>
import Website from './Website.vue'
export default {
    components: { Website },
    data() {
        
        return {
            username: "",
            error: true,
            list: [],
            text: "",
            wrong:false,
            completed:false,
            characters: ['Star', 'Sky', 'Moon'],
            groups: [
                {name:'active', members:'25'},
                {name:'strong', members:'20'},
                {name:'week', members:'5'}
            ],
          

        };
    },
    methods: {
        submit() {
            if (this.username < 4) {
                this.error = true;
            } 
        },
        add() {
            this.list.push(this.text);
        }
    },

}
</script>

<style>
#click{
    background-color: mediumseagreen;
    font-size:20px;
    color:blueviolet;
}

#condition{
    background-color: beige;
    font-size:20px;
    color:blueviolet;
}
</style>