<!-- .env usage -->
<script setup>
import Search from "../components/Search.vue";
import Preview from "../components/Preview.vue";
</script>

<template>
  <main>
    <!-- <p v-if="isLoading">Loading</p> -->
    <!-- <search v-on:SearchRequested="handleSearch"></search> -->
    <!-- <preview v-bind:gifs="gifs"></preview> -->
    <preview :gifs="gifs"></preview>
  </main>
</template >

<script>
export default {
  name: "App",
  components: {
    Search, Preview,
  },
  data() {
    return {
      isLoading: true,
      gifs: []
    }
  },
  methods: {
    doQuery(url) {
      fetch(url)
        .then((res) => { return res.json() })
        .then((res) => {
          this.gifs = res.data;
          this.isLoading = false;
        })
    },
    handleSearch(query) {
      this.gifs = [];
      this.isLoading = true;
      const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=pwAVzDuynV8MnBXpUNdbNZLc2eijijhH&ids=`;
      this.doQuery(url);
    }
  },
  created() {
    // fetch(import.meta.env.VITE_APP_GIPHY)
    const url = "https://api.giphy.com/v1/gifs/trending?api_key=pwAVzDuynV8MnBXpUNdbNZLc2eijijhH&ids=";
    this.doQuery(url);
  }
};
</script>