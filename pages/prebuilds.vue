<template>
<div class="container-fluid p-0">
    <search-engine />
    <content-list :list="list" />
</div>
</template>

<script>
import search_engine from '@/components/prebuilds/search-engine.vue'
import content_list from '@/components/prebuilds/content-list.vue'
import img1 from '@/assets/images/amd.jpg'
import img2 from '@/assets/images/intel.png'
import img3 from '@/assets/images/laptop.png'
import img4 from '@/assets/images/amd.jpg'
import img5 from '@/assets/images/intel.png'
import img6 from '@/assets/images/amd.jpg'
import img7 from '@/assets/images/laptop.png'
import img8 from '@/assets/images/intel.png'
export default {
    components: {
        "search-engine": search_engine,
        "content-list": content_list,
    },
    data() {
        return {
            list: [
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img1, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD speical G", thumbnail: img2, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]                
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img3, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img4, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]                
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img5, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "Ryzen Primal Gaming Daily Deal", thumbnail: img6, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD speical G", thumbnail: img7, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
                { title: "AMD Ryzen 7 3rd Gen Gaming", thumbnail: img8, 
                    specification: [
                        ["Window 10 Home", "AMD Ryzen 7 3700X Processor"],
                    ]
                },
            ]
        }
    }

}
</script>

<style>

</style>