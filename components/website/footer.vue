<template>
<div class="container-fluid bg-dark p-3 bd-top mt-5">
    <p class="w-75 m-auto">&copy; {{year}} M-Computers. All Rights Reserved.</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            year: null
        }
    },
    mounted() {
        this.year = new Date().getFullYear()
    }

}
</script>

<style>

</style>