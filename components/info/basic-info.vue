<template>
<div class="container-fluid text-center mt-4">
    <div class="d-flex basic-info-container">
        <div class="w-50 p-2 flex-shrink-0 basic-info-left">
            <img @load="img_loaded($event)" :src="preview.current" width="100%" class=" bd-radius-5 transition">
            <div class="mt-2">
                <img @click="preview.current=img" v-for="(img, i) in preview.all" :key="i" :src="img" width="100px" class="m-2  transition" :class="preview.current==img ? 'bd-blue-md p-1' : ''">
            </div>
        </div>
        <div class="pl-3 w-100 mt-4 text-left">
            <div class="d-flex justify-content-between">
                <h1 class="text-left font-weight-normal mb-5 text-primary display-4 font-weight-bold">{{title}}</h1>
            </div>
            <h2 class="text-left text-left w-50 mb-5">Rs. 1822.00</h2>
            <div class="w-100 mt-5 mb-4">
                <!-- <p class="small d-inline">QTY:</p> -->
                <!-- <button @click="quantity_dp($event)" class="btn pl-4 pr-4 ml-2 p-1 bg-dark-2 dropdown-btn">{{quantity.selected}}</button> -->
                <button class="btn btn-primary pl-5 pr-5 mr-3 text-lg">Add to Cart</button>
            </div>
            <div class="w-100 mt-4 mb-4">
                <button class="btn btn-primary pl-5 pr-5 mr-3 text-lg">Customize</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import img3 from '@/assets/images/3.jpg'
import img4 from '@/assets/images/4.jpg'
import img5 from '@/assets/images/5.jpg'
import img6 from '@/assets/images/6.jpg'
import img7 from '@/assets/images/7.jpg'
import img8 from '@/assets/images/8.jpg'

import vue from 'vue'
import $ from 'jquery'
import dropdown_list from '@/components/website/dropdown-list.vue'
export default {
    components: {
        dropdown_list
    },
    data() {
        return {
            title: "",
            preview: {
                current: img8,
                all: [img1, img2, img3, img4, img5, img6, img7, img8]
            },
            quantity: {
                list: ["1", "2", "3", "4", "5"],
                selected: 1
            },
            info: {
                quick: ["Window: Window 10 Home", "Processor: Cor-i 7", "Resolution: 1080p", "RAM: 8GB", "Storage: 1TB Intel 660P M.2 NVMe SSD", "Video Card: MSI VENTUS GeForce RTX 2070 SUPER - 8GB GDDR6 (VR Ready)"]
            }
        }
    },    
    methods: {
        img_loaded(e) {
            $(e.target).removeClass('d-none').addClass('animate__animated  animate__fadeIn animate__faster ')

        },
        quantity_dp(e) {
            let { html, instance } = this.component(dropdown_list, { e, list: this.quantity.list, width: 45 } )
            instance.$on('select', payload => {
                this.quantity.selected = payload
            })
            document.body.append(html)
        },
        component(component, props = null) {
            let ComponentClass = vue.extend(component)
            let instance = new ComponentClass({ propsData: props })
            instance.$mount()
            return {
                html: instance.$el,
                instance
            }
        },

    },
    mounted() {
        this.title = this.$route.params.id.split("-").join(" ").toUpperCase()
    }

}
</script>

<style>
.text-lg {
    font-size: 1.5rem;
}
.bd-blue-md {
    border: 0.125rem solid #4CAF50;
}
.transition {
    transition: 0.3s;
}
@media only screen and (max-width: 744px) {
  .basic-info-container {
    flex-wrap:  wrap !important;
  }
  .basic-info-left {
      width: 100% !important;
      margin-bottom: 0.5rem !important;
  }
}
</style>