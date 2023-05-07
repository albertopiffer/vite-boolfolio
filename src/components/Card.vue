            <!-- "id": 1,
            "type_id": 7,
            "title": "Architecto rerum aut.",
            "description": "Reiciendis aut temporibus iste. Et ab deleniti qui. Perferendis et ut assumenda sint.",
            "url": "http://willms.com/rem-non-voluptatibus-eum-dolores-dolor",
            "client": "Fay Ltd",
            "slug": "architecto-rerum-aut",
            "deleted_at": null,
            "created_at": "2023-05-03T15:06:39.000000Z",
            "updated_at": "2023-05-03T15:07:03.000000Z" -->


<template>
    <li class="element">
        <h4>{{ project.title }}</h4>
        <span>id - {{ project.id }}</span>
        <span>{{ project.description }}</span>
        <span>url - {{ project.url }}</span>
        <span>client - {{ project.client }}</span>
        <span>created - {{ project.created_at }}</span>
        <span>updated - {{ project.updated_at }}</span>

    </li>
</template>

<script>

export default {
    props: {
        // PASSO L'OGGETTO INTERO COME PROP
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
}
</style>