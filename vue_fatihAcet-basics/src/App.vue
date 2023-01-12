<!-- two way data binding -->
<!-- v-cloack -->
<template>
  <RouterLink to="/">Home</RouterLink>

  <div id="vmodel">
    <input type="text" v-model.trim="message" />
    <button @click="log">Log To Console</button>
    <button @click="setValue">SetValue</button>

    <select v-model="selectedVal">
      <option value="">Select...</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
      <option value="baz">Baz</option>
    </select>

    <input type="checkbox" v-model="isSelected">
  </div>

  <div id="vcloak" v-cloak>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </div>

  <div id="slots">
    <v-select>
      <v-option value="Foo"></v-option>
      <v-option value="Bar"></v-option>
      <v-option value="Baz"></v-option>
    </v-select>
  </div>

  <div id="nextTick">
    {{ message }}
  </div>
  <button @click="change">Change Message</button>

  <!-- vue element modifier like preventDefault and jquery.one-->
  <!-- event.key opr. -->
  <div id="modifier">
    <a href="/foo" @click.prevent="log2">Go To Foo</a>
    <!-- <button @click.once="log2">Button</button> -->
    <button @click.ctrl="log2">Button</button>
    <!-- <input type="text" @keyup.enter="log2"> -->
    <input type="text" @keyup.alt.shift.enter="log2">

    <!-- another cool stuff -->
    <!-- Vue.config.keyCodes.a = 65;
    <button @keyup.a="log2">Button</button> -->
  </div>

  <div id="filters">
    <p>{{ nameUppercase }}</p>
    <p>{{ priceFixed }}</p>
  </div>

  <RouterView></RouterView>
</template>

<style>
[v-cloak] {
  display: none;
}

.hidden {
  display: none;
}
</style>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      message: "Hello World",
      selectedVal: '',
      isSelected: true,
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Jack' },
      ],
      name: 'logitech camera',
      price: 25
    }
  },
  computed: {
    nameUppercase() {
      return this.name.toUpperCase();
    },
    priceFixed() {
      return `${this.price.toFixed(2)} TL`;
    }
  },
  methods: {
    log() {
      console.log(`"${this.message}"`);
    },
    setValue() {
      this.message = 'Hello World';
      this.selectedVal = 'baz';
    },
    change() {
      this.message = 'Hello Hello';
      console.log(document.querySelector('#nextTick').innerText);

      this.$nextTick(() => { // works with callback for async opr. like setTimeout
        console.log(document.querySelector('#nextTick').innerText);
      })
    },
    log2() {
      console.log("fooooo");
    }
  }
}

</script>
