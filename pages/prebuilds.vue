<template>
<div class="container-fluid p-0">
    <search-engine />
    <content-list />
</div>
</template>

<script>
import search_engine from '@/components/prebuilds/search-engine.vue'
import content_list from '@/components/prebuilds/content-list.vue'
export default {
    components: {
        "search-engine": search_engine,
        "content-list": content_list,
    }

}
</script>

<style>

</style>