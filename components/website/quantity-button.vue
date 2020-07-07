<template>
<div>
    <button @click="$emit('quantity', get_quantity > 1 ? --get_quantity : get_quantity )" class="btn material-icons border btn-hov">remove</button>
    <button class="btn bg-dark-2 ml-1 mr-1 pl-4 pr-4">{{get_quantity}}</button>
    <button @click="$emit('quantity', get_quantity < 5 ? ++get_quantity : get_quantity )" class="btn material-icons border btn-hov">add</button>
</div>
</template>

<script>
export default {
    props: {
        quantity: {
            required: false,
            default: 1
        }
    },
    data() {
        return {
            get_quantity: 1
        }
    },
    mounted() {
        this.get_quantity = this.quantity
    }
}
</script>

<style>

</style>