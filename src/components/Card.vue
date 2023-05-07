<template>
    <li class="cardElement">
        <h4>{{ project.title }}</h4>
        <span>{{ project.id }}</span>
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

<style lang="scss" scoped></style>