<template>
    <DefaultLayout>
        <div>

            <ul class="cardsList">
                <Card v-for="element in store.projects" :key="element.id" :project="element" />
            </ul>

        </div>
    </DefaultLayout>
</template>

<script>

import axios from 'axios'
import store from '../store'
import Card from '../components/Card.vue'

import DefaultLayout from '../layouts/Default.vue';

export default {
    components: {
        Card,
        DefaultLayout
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        cards() {
            return this.store.projects
        }
    },
    methods: {
        fetchProjects() {

            axios
                .get('http://127.0.0.1:8000/api/projects')
                .then((res) => {
                    this.store.projects = res.data.results
                })

        }
    },
    created() {
        this.fetchProjects()
    },
}

</script>

<style lang="scss" scoped>
.cardsList {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;
}
</style>