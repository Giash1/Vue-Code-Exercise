<template>
  <div class="website">
<ul>
    <li  v-for="list in lists" v-bind:key="list">
        {{list}}
    </li>
      <a :href="webside">Vue.org</a>
      <br>
      <label for="text">vue</label>
 <input type="text" v-model="add1">
 <button class="button" v-bind:click="add">Add</button>
 <p v-html="websideTag"></p>
 </ul>
  </div>
</template>

<script>
export default {
data() {
    return {
        text:"",
        add1: "",
        lists: [],
        abc:"",
        webside:'https://vuejs.org/v2/guide/ ',
        websideTag:'<a href="https://vuejs.org/v2/guide/"> vue.org website </a>' 
    }
},
methods:{
    add(){
   this.list.push(this.text)
    }
    }
}
</script>

<style>
.website{
    background-color: fuchsia;
    color:black;
    font-size: 20px;
}
.button{
    color: blue;
    font-size: 20px;
    font-weight:bold;
}
</style>