<template>
    <DefaultLayout>
        <div>
            <div class="container">
                <h1>Home page</h1>
                <a href="./portfolio" class="portfolio">portfolio</a>
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
    .portfolio {
        margin-bottom: 50px;
    }
}
</style>