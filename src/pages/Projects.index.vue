<template>
    <DefaultLayout>
        <div class="container">
            <h1>Blog</h1>
        </div>
        <div class="container">
            <Posts />
        </div>

    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/Default.vue';
import Posts from '../components/Projects.vue';
export default {
    components: {
        Projects,
        DefaultLayout
    }

}
</script>

<style lang="scss" scoped></style>
