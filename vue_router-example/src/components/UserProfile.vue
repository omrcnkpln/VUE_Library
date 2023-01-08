<template>
    <div>
        <a @click="goBack">Go Back To User List</a>

        <h1> {{ userData.name }}</h1>

        <ul>
            <li>{{ userData.email }}</li>
            <li>{{ userData.phone }}</li>
            <li>{{ userData.website }}</li>
        </ul>

        <!-- <RouterLink v-bind:to="postsLink"></RouterLink> -->
        <RouterLink :to="postsLink">Posts</RouterLink>
        <RouterLink :to="nextUserLink">Next User</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
    data() {
        return {
            userData: {}
        }
    },
    methods: {
        fetchData() {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
                .then((res) => { return res.json() })
                // .then(res => console.log(res))
                .then((data) => { this.userData = data; })
        },
        goBack() {
            // this.$router.go(-1); // go back one page not correct when refresh
            // this.$router.push("/");
            this.$router.push({ name: 'home' });
            // this.$router.push({ name: 'userProfile', params: { id: 9 } });
        }
    },
    watch: {
        '$route': 'fetchData'
    },
    created() {
        this.fetchData();
    },
    computed: {
        postsLink() {
            return `/user/${this.$route.params.id}/posts`;
        },
        nextUserLink() {
            return `/user/${parseInt(this.$route.params.id) + 1}`;
        },
    }
}
</script>
