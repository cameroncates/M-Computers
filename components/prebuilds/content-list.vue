<template>
<div class="container-fluid mt-5">
    <div class="d-flex flex-wrap justify-content-center align-items-end">
        <div @click="open(item.title)" v-for="(item, i) in list" :key="i" class="m-4 bg-white box-shadow bd-radius-5 prebuild-card" style="width:320px">
            <div class="border overflow-hidden">
                <img :src="item.thumbnail" width="100%" @load="img_loaded($event)" class="d-none" alt="">
            </div>
            <div class="p-2">
                <div class="container-fluid bd-bottom mb-4">
                <h6 class="mt-4 pb-3 text-center">{{item.title}}</h6>
                <table class="table table-borderless prebuild-table">
                    <tbody>
                        <tr v-for="(specs, j) in item.specification" :key="j">
                            <td class="small" v-for="(spec, k) in specs" :key="k">{{spec}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <h5 class="text-center text-primary mb-4">Rs. 1,229</h5>
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
import $ from 'jquery'

export default {
    data() {
        return {
            list: [
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img1, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD speical G", thumbnail: img2, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]                
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img3, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img4, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]                
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img5, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img6, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["NVIDIA GeForce RTX 2060 SUPER - 8GB", "1TB Intel M.2 NVMe SSD"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD speical G", thumbnail: img7, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img8, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                        // ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
            ]
        }
    },
    methods: {
        img_loaded(e) {
            $(e.target).removeClass('d-none').addClass('animate__animated  animate__fadeIn animate__faster ')
        },
        open(title) {
            title = title.split(" ").join("-").toLowerCase()
            this.$router.push('/details/'+title)            
        }
    }
}
</script>

<style>
.prebuild-card {
    transition: 0.3s;
    transform: scale(1);
}
.prebuild-card:hover {
    cursor: pointer;
    transform: scale(1.025);
}
@media only screen and (max-width: 1135px) {
  .prebuild-card {
    width: 45% !important;
    margin: 0.5rem !important;
  }
  .prebuild-table {
      display: none !important;
  }
}
</style>