<template>
    <div id="event">
    <div class="age">
   <div>
   <button v-on:click="add">Add</button>
   <button v-on:click.once="add">Add once</button> <!--modifier once-->
   <button v-on:click="substract">Substract</button>
   </div>
   <div>
   <button v-on:dblclick="add1(10)">Add10</button>
   <button v-on:dblclick="substract1(10)">Substract10</button> <!--double click function-->
   </div>
   <p> I am {{age}} years old</p>
 </div>
 <div class="mousemove" v-on:mousemove="update">
     {{x}} , {{y}}
 </div>
<div>
    <a @clcik.prevent="click" href="https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers">prevent</a>
 <br>
 <label for="text">Name</label>
 <!--<input type="text" v-on:keyup.enter="logName">-->
 <input type="text" v-on:keydown.enter="logName">
</div>

<div>
<label for="text">Name1</label>
<input type="text" v-model="name1" >
<span>{{name1}}</span>
</div>

<div>
  <p>Show various options</p>
  <CustomEvents @dataTransfer="updatedData"/>
</div>
    </div>
</template>

<script>
import CustomEvents from "./CustomEvents.vue";
    export default {
    data() {
        return {
            name1: "",
            age: 30,
            x: 0,
            y: 0,
            finalResult: "",
        };
    },
    methods: {
        add() {
            this.age++;
        },
        substract() {
            this.age--;
        },
        add1(inc) {
            this.age += inc;
        },
        substract1(dec) {
            this.age -= dec;
        },
        update(abc) {
            this.x = abc.offsetX;
            this.y = abc.offsetY;
        },
        click() {
            console.log("you cliked me");
        },
        logName() {
            console.log("you hav written");
        },
        updatedData(value){
       this.value =value;
        },
        
    },
    components: { CustomEvents }
}
</script>

<style scoped>
.age{
  background-color:darkblue;
  font-weight:lighter;
  font-size: large;
}
.mousemove {
    background-color:black;
    color:red;
    height:100px;
    width:auto;
    padding:70px;
    margin: 100px;
}


</style>