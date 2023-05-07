<template>
    <div>
        <div class="posts">
            <PostCard v-for="project in projects" :key="project.id" :project="project">
                Ciao
            </PostCard>

        </div>

        <ul class="pagination">
            <li :class="[link.active ? 'active' : '', 'page-link']" v-for="link in links" @click="fetchPostsByUrl(link.url)"
                :key="link.label" v-html="link.label"></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'
export default {
    components: {
        Card
    },
    data() {
        return {
            projects: [],
            lastPage: 0,
            currentPage: 1,
            links: []
        }
    },
    methods: {
        fetchProjects(page) {
            // this.currentPage = page
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
                .then(res => {
                    // console.log(res)
                    const results = res.data.results
                    this.links = results.links
                    this.lastPage = results.last_page
                    this.projects = results.data
                    this.currentPage = results.current_page
                })
                .catch(err => {
                    console.log(err)
                })
        },
        fetchProjectsByUrl(url) {
            axios.get(url)
                .then(res => {
                    // console.log(res)
                    const results = res.data.results
                    this.links = results.links
                    this.lastPage = results.last_page
                    this.posts = results.data
                    this.currentPage = results.current_page
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchProjects(this.currentPage)
    },
}
</script>

<style  scoped>
.projects {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
}

.pagination {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
}

.page-link {
    background: #ddd;
    border-radius: 50%;
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    white-space: nowrap;
}

.page-link.active {
    background: crimson;
    color: white;
}
</style>