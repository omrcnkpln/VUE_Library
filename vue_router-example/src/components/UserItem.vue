<template>
    <div>
        <!-- <router-link :to="profileLink">
            <p>@{{ user.name }} {{ user.username }}</p>
        </router-link> -->

        <RouterLink :to="profileLink">
            <p>@{{ user.name }} {{ user.username }}</p>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: "UserItem",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        profileLink() {
            return `/user/${this.user.id}`;
        }
    },
    created() {
        // console.log(this.user);
    }
}
</script>
