<template>
    <li class="element">
        <h4>{{ project.title }}</h4>
        <span>id - {{ project.id }}</span>
        <span>{{ project.description }}</span>
        <span>url - {{ project.url }}</span>
        <span>client - {{ project.client }}</span>

        <span>type - {{ project.type ? project.type.name : 'x' }}</span>

        <ul class="technology-list" v-if="project.technologies && project.technologies.length > 0">
            <li class="technology" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}
            </li>
        </ul>

        <span>created - {{ project.created_at }}</span>
        <span>updated - {{ project.updated_at }}</span>

    </li>
</template>

<script>

export default {
    props: {
        project: {
            type: Object,
        },
    }
}

</script>

<style lang="scss" scoped>
.element {
    border: 1px solid white;
    padding: 2rem;
}

li {
    display: flex;
    flex-direction: column;
    gap: 1rem;

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