<template>
<div class="container-fluid text-center mt-4">
    <div class="d-flex basic-info-container" v-if="!preview.lg_size">
        <div class="p-2 flex-shrink-0 basic-info-left transition">
            <img @click="preview.lg_size=true" @load="img_loaded($event)" :src="preview.current" width="100%" class="bd-radius-5">
            <div class="mt-2">
                <img @click="preview.current=img" v-for="(img, i) in preview.all" :key="i" :src="img" width="100px" class="m-2 transition" :class="preview.current==img ? 'bd-blue-md p-1' : ''">
            </div>
        </div>
        <div class="pl-3 pt-4 w-100 text-left" :style="style.right">
            <h4 class="text-left text-primary font-weight-normal">{{title}}</h4>
            <div class="w-100 mt-4">
                <!-- <p v-for="(item, i) in info.quick" :key="i" class="small pb-0 pt-0 mt-0 mb-1">
                    <strong>{{ item.split(":")[0] }}</strong>
                    <span> : {{ item.split(":")[1] }}</span>
                </p> -->
            </div>
            <system-info />
        </div>
    </div>
    <div class="p-absolute w-100 animate__animated  animate__zoomIn animate__faster" :style="style.full_img" v-if="preview.lg_size">
        <div class="w-100 bg-dark-2 text-right">
            <button class="btn p-3 text-right material-icons" @click="preview.lg_size=false">clear</button>
        </div>
        <img :src="preview.current" width="100%" alt="">
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
import system_info from '@/components/info/system-info.vue'

export default {
    components: {
        "system-info": system_info,
        dropdown_list
    },
    data() {
        return {
            style: {
                right: {
                    maxHeight: 500 + 'px',
                    overflow: 'auto'
                },
                full_img: {
                    top: '0px',
                    left: '0px',
                    position: 'absolute'
                }
            },
            title: "",
            preview: {
                current: img8,
                all: [img1, img2, img3, img4, img5, img6, img7, img8],
                lg_size: false
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
        system_info_height() {
            this.style.right.maxHeight = ($(window).height() - 100) + 'px'
        }
    },
    mounted() {
        this.title = this.$route.params.id.split("-").join(" ").toUpperCase()
        this.system_info_height()
        $(window).resize(() => {
            this.system_info_height()
        })
    }

}
</script>

<style>
.basic-info-left {
    width: 40%;
}
.bd-blue-md {
    border: 0.125rem solid #226b35;
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