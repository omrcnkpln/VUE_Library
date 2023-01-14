<!-- model binding v-model ile  -->
<template>
    <div>
        <ul>
            <li v-for="gif in gifs">
                <img :src="gif.images.fixed_height.url" alt="" />
                <!-- <img v-bind:src="gif.images.fixed_height.url" alt=""> -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['gifs'],
}
</script>

<style>
ul {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid tomato;
}

li {
    list-style: none;
    float: left;
    margin: 1rem;
}
</style>