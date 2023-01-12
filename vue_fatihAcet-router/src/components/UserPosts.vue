<template>
    <div>
        <RouterLink :to="userLink">Back To User</RouterLink>

        <template v-for="post in posts">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
            <hr />
        </template>
    </div>
</template>

<script>
export default {
    name: 'UserPosts',
    data() {
        return {
            posts: {}
        }
    },
    computed: {
        userLink() { 
            return `/user/${this.$route.params.userId}`;
        }
    },
    created() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
            .then((res) => { return res.json() })
            // .then(res => console.log(res))
            .then((data) => { this.posts = data; })
    }
}
</script>
