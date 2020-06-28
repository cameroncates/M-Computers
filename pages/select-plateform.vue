<template>
<div class="container-fluid">
    <div class="w-100"><br><br></div>
    <content-2 title="Select your plateform" @select="select" />
</div>
</template>

<script>
import content_2 from '@/components/home/content-2.vue'
export default {
    components: {
        "content-2": content_2
    },
    methods: {
        select(payload) {
            this.$router.push('/build-your-own-pc/'+payload)
        }
    }
}
</script>

<style>

</style>