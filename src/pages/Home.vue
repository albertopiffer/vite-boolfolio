<template>
    <DefaultLayout>
        <div>
            <div class="container">
                <h1>Home page</h1>
                <a href="./portfolio">portfolio</a>
                <a href="./about">chi sono</a>
            </div>
        </div>
    </DefaultLayout>
</template>
<script>
import DefaultLayout from '../layouts/Default.vue';
export default {
    components: {
        DefaultLayout
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;

    gap: 1rem;
}
</style>