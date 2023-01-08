<template>
  <div>
    <template v-for="user in users">
      <UserItem :user=user></UserItem>
    </template>
  </div>
</template>

<script>
import UserItem from '../components/UserItem.vue';

export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => { return res.json() })
      // .then(res => console.log(res))
      .then((users) => { this.users = users; })
  },
  components: { UserItem }
}
</script>