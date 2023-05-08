<template>
    <DefaultLayout>
        <div class="project">
            <h4>{{ projectstore.title }}</h4>
            <span>id - {{ projectstore.id }}</span>
            <span>{{ projectstore.description }}</span>
            <span>url - {{ projectstore.url }}</span>
            <span>client - {{ projectstore.client }}</span>
            <span class="type">{{ projectstore.type ? projectstore.type.name : 'x' }}</span>
            <ul class="technology-list" v-if="projectstore.technologies && projectstore.technologies.length > 0">
                <li class="technology" v-for="technology in projectstore.technologies" :key="technology.id">{{
                    technology.name }}
                </li>
            </ul>
            <span>created - {{ projectstore.created_at }}</span>


        </div>
    </DefaultLayout>
</template>
<script>

import DefaultLayout from '../layouts/Default.vue';
import axios from 'axios'

export default {
    components: {
        DefaultLayout
    },
    data() {
        return {
            projectstore: []
        }
    },

    props: ['slug'],

    methods: {
        fetchProject() {
            this.loading = true
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then(res => {
                    const { success, project } = res.data
                    if (success) {
                        this.projectstore = project
                        console.log(this.projectstore)
                        console.log(this.projectstore.title)
                    }
                })
        }
    },


    created() {
        this.fetchProject()
    },
}


</script>
<style lang="scss" scoped>
.project {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .type {
        background-color: white;
        padding: 5px;
        border-radius: 999px;

        width: fit-content;
        min-width: 20px;

        text-align: center;

        color: #242424;
    }

    .technology-list {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center;

        li {
            background-color: white;
            padding: 5px;
            border-radius: 999px;

            color: #242424;
        }
    }
}
</style>