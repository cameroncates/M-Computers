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
        "system-info": system_info,
    },
    head () {
        return {
            title: "M-Computer - The Largest gaming store located in Islamabad",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: "" }
            ]
        }
    },    
}
</script>

<style>

</style>