<template>
<div class="container-fluid p-0"> 
  <slideshow :list="slideshow_content"/>      
  <content-1 /> 
  <div class="w-100"><br><br><br></div>
  <content-2 /> 
</div>
</template>

<script>
import slideshow from '@/components/home/slideshow.vue'
import content_1 from '@/components/home/content-1.vue'
import content_2 from '@/components/home/content-2.vue'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
export default {
  components: {
    "slideshow": slideshow,
    "content-1": content_1,
    "content-2": content_2,
  },
  data() {
    return {
      slideshow_content: [
        { title: 'Content 1', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img1},
        { title: 'Content 2', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img2},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img3},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img4},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img5},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img6},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img7},
        { title: 'Content 3', description: 'M-Computer - The Largest gaming store located in Islamabad', thumbnail: img8},
      ]
    }
  },
  head () {
      return {
          title: "M-Computer - The Largest gaming store located in Islamabad",
          meta: [
              // hid is used as unique identifier. Do not use `vmid` for it as it will not work
              { hid: 'description', name: 'description', content: "" }
          ]
      }
  },    

}
</script>

<style>
</style>
