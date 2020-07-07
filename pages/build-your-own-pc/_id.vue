<template>
<div class="container-fluid p-0">
    <build-details @alt="alt_func" @preview="preview_func" @update_cart="update_cart_func" />
    <div :style="style.content" class="bg-dark-2 p-2 animate__animated  animate__fadeInUp animate__faster w-100" v-if="alt.show">
        <div class="w-100 d-flex justify-content-between align-items-center bd-bottom p-2">
            <h4 class="font-weight-normal text-primary p-2">{{alt.title}}</h4>
            <button class="btn material-icons text-lg btn-hov" @click="close_alt()">close</button>
        </div>
        <content-list :list="alt.list" :state="component_state" class="bg-dark-2" />
    </div>
    <cart :cart="cart" @preview="$router.push('/checkout/cart')" />
</div>
</template>

<script>

import build_details from '@/components/build/details.vue'
import content_list from '@/components/prebuilds/content-list.vue'
import cart from '@/components/website/cart.vue'
import $ from 'jquery'
export default {
    components: {
        "build-details": build_details,
        "content-list": content_list,
        cart
    },
    data() {
        return {
            style: {
                content: {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    height: '500px',
                    overflow: 'auto'
                }
            },
            alt: {
                title: "Unknown",
                show: false,
                list: []
            },
            component_state: "",
            cart: []
        }
    },
    methods: {
        update_cart_func(payload) {
            this.cart = payload
            console.log(this.cart, 'my cart')
        },
        alt_func(payload) {
            this.alt.list = payload.alt
            this.alt.title = payload.title +'\'s alternatives'
            this.component_state = "Select"
            this.show_popup()
        },
        preview_func(payload) {
            this.alt.list = payload
            this.alt.title = "Selected Components"
            this.component_state = "Change"
            this.show_popup()
        },
        show_popup() {
            // $(document.body).scrollTop()       
            window.scrollTo(0, 0);     
            setTimeout(() => {
                this.alt.show=true
                $(document.body).css({
                    overflow: 'hidden'
                })                
            }, 100);
        },
        set_height() {
            this.style.content.height = $(window).height() + 'px'
        },
        close_alt() {
            this.alt.show = false
            $(document.body).css({
                overflow: 'auto'
            })
        }
    },
    mounted() {
        this.set_height()
        $(window).resize(() => {
            this.set_height()
        })
        if(!this.getCookie('cart')) {
            let arr = null
            this.setCookie('cart', JSON.stringify(arr), 14)
        }
        // this.setCookie('cart', JSON.stringify([]), 14)
        this.cart = JSON.parse(this.getCookie('cart'))
    }
}
</script>

<style>

</style>