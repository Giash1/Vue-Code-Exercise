<template>
    <div id="workers app">
    
          <ul>
            <li v-for="worker in workers" :key="worker.id">{{worker}}</li>
        </ul>

    </div>
</template>

<script>

    export default {
    
    data() {
        return {
            workers:['Jasim', 'Dani', 'Mali']
        }
    },
}
</script>

<style scoped>

</style>