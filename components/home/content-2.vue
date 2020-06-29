<template>
<div class="container-fluid mt-5" :style="style.container">
    <h5 class="w-100 text-center">{{title}}</h5>
    <div class="w-100 d-flex justify-content-center content-2-container align-items-end">
        <div v-for="(item, i) in list" :key="i" class="m-5 content-2-card">
            <img :src="item.thumbnail" width="100%" alt="" class="p-2">
            <div class="w-100 text-center mt-3">
                <button @click="plateform_selected(item.title)" class="btn pt-2 pb-2 btn-block border btn-hov content-2-btn">{{item.title}}</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import intel from '@/assets/images/intel.png'
import amd from '@/assets/images/amd.jpg'
import laptop from '@/assets/images/laptop.png'
import $ from 'jquery'
export default {
    props: {
        title: {
            required: false,
            default: "Build your own PC"
        }
    },
    data() {
        return {
            list: [
                { thumbnail: intel, title: 'Intel Gaming PC'},
                { thumbnail: amd, title: 'AMD Gaming PC'},
                { thumbnail: laptop, title: 'Laptops'},
            ],
            style: {
                container: {
                }
            }
        }
    },
    methods: {
        plateform_selected(plateform) {            
            this.$router.push('/build-your-own-pc/'+plateform.split(" ").join("-").toLowerCase())
            // this.$emit('select', plateform.split(" ").join("-").toLowerCase())
        }
    },
    mounted() {
        this.style.container.minHeight = $(window).height()/2 + 'px'
    }
}
</script>

<style scoped>
.content-2-card {
    width: 360px;
}

@media only screen and (max-width: 970px) {
    .content-2-card {
        width: 100% !important;
        margin-bottom: 2.5rem !important;
    }
    .content-2-container {
        flex-wrap: wrap !important;
    }
    .content-2-btn {
        width: 100% !important;
    }
}
</style>