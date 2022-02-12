<template>
    <div>
<select name="custom" id="custom" v-model="selectedData" v-on:change="changedData">
<option value="0">Option1</option>
<option value="1">Option2</option>
<option value="2">Option3</option>
<option value="3">Option4</option>
</select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedData:null,
            }
        },
    methods: {
        changedData:function (){
            this.$emit('dataTransfer', this.selectedData)
        }
    }
    }
</script>

<style scoped>

</style>