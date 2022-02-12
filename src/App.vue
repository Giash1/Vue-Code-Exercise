<template>
  <div id="App">
 <div>     
 <h1>{{title}}</h1>
 <p>{{massage}}</p>

<div class="props">
<!--props-->
<Button :buttonText="students"/>
<PropsApp :workerList="workersAmerica"/>
</div>


 <div id="global object">
   <h1>{{title0}}</h1>
<h1>{{title1}}</h1>
 <students/>
<!-- global object that is created in students app and main.js-->
 <h1>{{title2}}</h1>
 <workers/>
  <!-- global object that is created in Workers App and main.js-->
 </div>
 <div id="local object">
   <h1>{{title3}}</h1>
   <lists/> <!-- local object that is created in the LocalData-->

 </div>
 
 </div>

 <Modal/>
 <Click/>
 <Computed/>
<Event/>
<lists/>


  </div> 
</template>

<script>
import Modal from './components/Modal.vue'
import Click from './components/Click.vue'
import Computed from './components/Computed'
import Event from './components/Event.vue'
import LocalData from './components/LocalData'
import Button from './components/Button.vue'
import PropsApp from './components/PropsApp.vue'



 // import Modal can be changed by any name but components/name should be the same like Modal or Modal.vue
export default {
  
    name: 'App',
    components:{ Modal, Click, Computed, Event, "lists": LocalData, Button, PropsApp },
    data(){
   return {
     students:[
       {name:'Giash',age: 35},
         {name: 'Nabhan', age: 25}    
     ],
     workersAmerica:[
       {name: 'Dalia', age: 30, position:'worker'},
       {name: 'Nalia', age: 33, position:'manager'},
       
       ],
    age:30, 
    title: 'Vue exercise',
    title0:'GLOBAL OBJECT:',
    title1: 'Students List',
    title2: 'Workers List',
    title3: 'LOCAL OBJECTS:',
    massage: 'component creating',
    
        }
        },


}
</script>

<style scoped>
#App {
  background-color:aqua;
  margin:auto;
  padding:10px;
  color:black;
  display:grid;
}
.props{
  background-color: blue;
  font-weight:bold;
  height: auto;
  display: flex;
  flex-direction:column;
}




</style>