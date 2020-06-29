<template>
<div class="container-fluid p-0">
    <div class="d-flex  animate__animated  animate__fadeIn animate__faster" :style="style.card" ref="slideshow_card">
        <div class="align-self-center w-100">
            <img :src="list[i].thumbnail" width="100%" alt="">
        </div>
    </div>
    <div class="w-100 text-center mt-2">
        <button v-for="(item, j) in list" :key="j" class="btn pl-2 pr-2" @click="i=j">
            <span class="material-icons text-sm">{{j!=i ? 'panorama_fish_eye' : 'lens'}}</span>
        </button>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
    props: {
        list: {
            required: true
        }
    },
    data() {
        return {
            i: 0,
            style: {
                card: {
                    maxHeight: '720px',
                    overflow: 'hidden'
                }
            }
        }
    },
    mounted() {
        setInterval(() => {
            $(this.$refs.slideshow_card).addClass('animate__fadeIn')
            this.i == this.list.length - 1 ? this.i = 0 : this.i+=1
        }, 7500);
        this.$refs.slideshow_card.addEventListener('animationend', () => {
            $(this.$refs.slideshow_card).removeClass('animate__fadeIn')
        })
    }
}
</script>

<style>
</style>