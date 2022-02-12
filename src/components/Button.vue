<template>
    <div id="button">
        <ul>
            <li v-for="student in buttonText" :key="student.name">{{student.name}} {{student.age}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        props:["buttonText" ]
        
    }
</script>

<style scoped>

</style>