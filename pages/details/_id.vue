<template>
<div>
    <basic-info />
    <system-info />
</div>
</template>

<script>
import basic_info from '@/components/info/basic-info.vue'
import system_info from '@/components/info/system-info.vue'
export default {
    components: {
        "basic-info": basic_info,
        "system-info": system_info
    }
}
</script>

<style>

</style>