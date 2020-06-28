<template>
<div class="container-fluid d-flex flex-wrap mt-5">
    <div class="w-100"><br><br></div>
    <div class="left text-center p-2">
        <button @click="$router.push('/prebuilds')" class="btn material-icons text-primary mb-3 btn-hov" :style="style.icon">desktop_mac</button>
        <h5>Pre Builds</h5>
        <p class="small w-75 m-auto">Choose from hunderends of unique pre-builds PC at affordable rates</p>
    </div>
    <div class="right text-center p-2 bd-left">
        <button @click="$router.push('/select-plateform')" class="btn material-icons text-primary mb-3 btn-hov" :style="style.icon">construction</button>
        <h5>Build your own PC</h5>
        <p class="small w-75 m-auto">Shows systems that you can customize and ship within 10 working days</p>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            style: {
                icon: {
                    fontSize: '15rem'
                }
            }
        }
    }
}
</script>

<style scoped>
.left {
    width: 50%;
}
.right {
    width: 50%;
}
@media only screen and (max-width: 800px) {
    .left, .right {
        width: 100%;
        margin-bottom: 2rem;
        border: 1px solid transparent !important;
    }
}
</style>