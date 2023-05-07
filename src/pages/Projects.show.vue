<template>
    <DefaultLayout>
        <template v-if="loading === false">
            <div class="container py-4">
                <img v-if="project.cover_image" :src="project.cover_path" alt="">

                <h1 class="text-3xl font-bold">
                    {{ project.title }}
                </h1>
                <h2>{{ project.user.name }}</h2>
                <p class="bg-amber-400 px-3 rounded-full w-max" v-if="project.category">{{ project.category.name }}</p>

                <ul class="flex gap-2 items-center flex-wrap">
                    <li class="italic text-slate-500" v-for="tag in project.tags" :key="tag.slug">{{ tag.name }}</li>
                </ul>
            </div>

            <div class="container py-8">
                <div v-html="project.content"></div>
            </div>

            <div class="container py-8" v-if="relatedPosts.length > 0">
                <ul class="grid grid-cols-3 gap-8">
                    <li v-for="related in relatedProjects" :key="related.id">
                        <Card :project="related" />
                    </li>
                </ul>

            </div>

        </template>
        <div class="animate-pulse" v-else>
            ...loading
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/Default.vue';
import axios from 'axios'
import Card from '../components/Card.vue';
export default {
    components: {
        DefaultLayout,
        Card
    },
    data() {
        return {
            project: null,
            loading: true
        }
    },
    props: ['slug'],
    computed: {
        relatedProjects() {
            if (this.project.category) {
                return this.project.category.projects
            }
            return []
        },

    },
    methods: {
        fetchPost(slug) {
            this.loading = true
            axios.get(`http://127.0.0.1:8000/api/projects/${slug}`) //this.$route.params.slug
                .then(res => {
                    const { success, project } = res.data
                    if (success) {
                        this.project = project
                    } else {
                        // this.$router.push({ name: '404' })
                        this.$router.replace({ name: '404' })
                    }
                })
                .catch(err => {
                    // console.log(err)
                    this.$router.replace({ name: '404' })
                })
                .finally(() => {

                    this.loading = false
                })
        }
    },
    created() {
        this.fetchProjects(this.slug)
    },
    beforeRouteUpdate(to, from) {
        // console.log('to route:',to)
        // console.log('from route:',from)
        const newSlug = to.params.slug
        console.log(newSlug)

        this.fetchProjects(newSlug)
    }

}
</script>

<style lang="scss" scoped></style>