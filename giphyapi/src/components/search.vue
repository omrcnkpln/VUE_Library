<!-- model binding v-model ile  -->
<template>
    <div class="search">
        <input type="text" v-model="query" @keypress.enter="handleSearch">
        <!-- <button v-on:click="handleSearch">Search</button> -->
        <button @click="handleSearch">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    },
    methods:{
        handleSearch(){
            this.$emit('searchRequested', this.query)
        }
    }
}
</script>

<style>
.search{
    padding: 1rem;
    border: 1px solid red;
    border-radius: 5px;
    width: 400px;
}
.search button{
    padding: 1rem;
    border: 1px solid blue;
    background-color: lime;
    font-size: 14px;
    border-radius: 5px;
}
</style>