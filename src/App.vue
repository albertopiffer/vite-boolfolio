<template>
  <router-view></router-view>
</template>

<script>
import AppHome from './components/AppHome.vue';
import Home from './pages/Home.vue';


export default {
  components: {
    AppHome,
    Home,
  }
}

</script>

<style lang="scss" scoped></style>
