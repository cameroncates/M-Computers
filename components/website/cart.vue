<template>
<div :style="style">
    <button @click="$emit('preview')" class="p-3 bg-dark-2 bd-round btn d-flex">
        <span class="text-primary text-lg material-icons">shopping_cart</span>
        <span class="text-danger font-weight-bold text-sm">({{cart.length}})</span>
    </button>
</div>
</template>

<script>
export default {
    props: {
        cart: {
            required: true
        }
    },
    data() {
        return {
            style: {
                position: 'fixed',
                right: '20px',
                bottom: '20px'
            }
        }
    }
}
</script>

<style>

</style>