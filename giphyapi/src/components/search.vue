<!-- model binding v-model ile  -->
<template>
    <div class="search">
        <input type="text" v-model="query">
        <button>Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    }
}
</script>