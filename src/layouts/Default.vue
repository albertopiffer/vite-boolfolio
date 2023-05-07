<template>
    <AppHome />
    <main>
        <slot />
    </main>
    <footer class="py-4 bg-slate-900 text-white">
        <div class="container">
            footer default layout
        </div>
    </footer>
</template>

<script>
import AppHome from '../components/AppHome.vue';
export default {
    components: {
        AppHome
    }

}
</script>

<style lang="scss" scoped></style>