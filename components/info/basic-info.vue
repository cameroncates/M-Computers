<template>
<div class="container-fluid text-center mt-5">
    <div class="d-flex basic-info-container">
        <div class="p-2 flex-shrink-0 basic-info-left">
            <img @load="img_loaded($event)" :src="preview.current" width="100%" class=" bd-radius-5 p-5 transition">
            <div class="mt-2">
                <img @click="preview.current=img" v-for="(img, i) in preview.all" :key="i" :src="img" width="100px" class="m-2 transition" :class="preview.current==img ? 'bd-blue-md p-1' : ''">
            </div>
        </div>
        <div class="pl-4 w-100 mt-4 text-left bd-left">
            <div class="w-75">
                <h1 class="text-primary">{{title.split("-").join(" ").toUpperCase()}}</h1>
                <p class="text-md">Rs. 1822.00</p>
                <p class="mt-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis iusto officia, sapiente, ad possimus quibusdam iste odit laudantium unde minus non eius in voluptate impedit exercitationem! Inventore, enim animi.</p>
                <p v-for="(item, i) in info.quick" :key="i" class="text-sm mb-2">
                    <strong>{{ item.split(":")[0] }} :</strong>
                    <span>{{ item.split(":")[1] }}</span>
                </p>
            </div>
            <div class="w-100 mt-5">
                <quantity-button />
            </div>
            <div class="w-100 mt-4 mb-4">
                <button class="btn btn-primary pl-5 pr-5 mr-3">
                    <span class="material-icons text-white btn p-0 mr-2">shopping_cart</span>
                    <span class="text-white btn p-0 text-md">Add to Cart</span>
                </button>
            </div>
            <div class="w-100 mt-4 mb-4">
                <button @click="$router.push('/build-your-own-pc/'+title)" class="btn btn-primary pl-5 pr-5 mr-3">
                    <span class="material-icons text-white btn p-0 mr-2">create</span>
                    <span class="text-white btn p-0 text-md">Customize</span>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import img1 from '@/assets/images/amd.jpg'
import img2 from '@/assets/images/intel.png'
import img3 from '@/assets/images/laptop.png'
import img4 from '@/assets/images/amd.jpg'
import img5 from '@/assets/images/intel.png'
import img6 from '@/assets/images/amd.jpg'
import img7 from '@/assets/images/laptop.png'
import img8 from '@/assets/images/intel.png'

import vue from 'vue'
import $ from 'jquery'
import dropdown_list from '@/components/website/dropdown-list.vue'
import quantity_button from '@/components/website/quantity-button.vue'
export default {
    components: {
        dropdown_list,
        "quantity-button": quantity_button
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
        this.title = this.$route.params.id
    }

}
</script>

<style>
.text-lg {
    font-size: 1.5rem;
}
.transition {
    transition: 0.3s;
}
.basic-info-left {
    width: 45% !important;
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