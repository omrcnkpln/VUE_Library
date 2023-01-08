<!-- .env usage -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import { createDOMCompilerError } from "@vue/compiler-dom";
import Search from "./components/Search.vue";
import Preview from "./components/Preview.vue";
</script>

<template>
  <!-- <p v-if="isLoading">Loading</p> -->
  <!-- <search v-on:SearchRequested="handleSearch"></search> -->
  <!-- <preview v-bind:gifs="gifs"></preview> -->
  <!-- <preview :gifs="gifs"></preview> -->
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>

<script>
// export default {
//   name: "App",
//   components: {
//     Search, Preview,
//   },
//   data() {
//     return {
//       isLoading: true,
//       gifs: []
//     }
//   },
//   methods: {
//     doQuery(url) {
//       fetch(url)
//         .then((res) => { return res.json() })
//         .then((res) => {
//           this.gifs = res.data;
//           this.isLoading = false;
//         })
//     },
//     handleSearch(query) {
//       this.gifs = [];
//       this.isLoading = true;
//       const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=pwAVzDuynV8MnBXpUNdbNZLc2eijijhH&ids=`;
//       this.doQuery(url);
//     }
//   },
//   created() {
//     // fetch(import.meta.env.VITE_APP_GIPHY)
//     const url = "https://api.giphy.com/v1/gifs/trending?api_key=pwAVzDuynV8MnBXpUNdbNZLc2eijijhH&ids=";
//     this.doQuery(url);
//   }
// };
</script>


<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>