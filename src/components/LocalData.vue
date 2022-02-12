<template>
    <div id ="local component">
    <ul>
        <li v-for="item in lists" :key="item">{{item}}</li>
    </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lists: [
                 'Apple', 'Banan', 'Orange'   
                ]
            }
        },
        
    }
</script>

<style scoped>

</style>