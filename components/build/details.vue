<template>
<div class="container-fluid p-0 d-flex">
    <div class="w-50" :style="style.container">
        <div class="w-100 mb-4">
            <img @click="components[i].img.preview=image" :src="image" v-for="(image, j) in components[i].img.list" :key="j" width="100px" alt="" :class="components[i].img.preview==image ? 'bd-blue-md p-4' : 'border'" class="m-2 p-3 btn-hov transition">
        </div>
        <img :src="components[i].img.preview" width="100%" alt="">
    </div>
    <div class="w-50 d-flex flex-wrap">
        <div class="p-4" :style="style.right">
            <!-- <h5 class="font-weight-normal mb-5">Base Components</h5> -->
            <h1 class="ls-1 text-primary transition">{{components[i].title}}</h1>
            <p class="mb-5">{{components[i].description}}</p>
            <div class="border bg-dark bd-radius-5 p-2 w-75">
                <div class="w-100 text-right">
                    <button class="btn material-icons text-primary text-lg">check_box</button>
                </div>
                <div class="p-3">
                    <p class="mb-3" v-html="components[i].model"></p>
                    <h5 class="text-primary">Rs. {{components[i].price}}</h5>
                    <div class="w-100 text-right mt-4">
                        <button @click="$emit('alt', {alt: components[i].alt, title: components[i].title })" class="btn btn-primary pl-4 pr-4 border">Change</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-100 mt-5 text-center p-5 align-self-end">
            <button @click="change($event, 'previous')" class="btn border pl-5 pr-5 mr-3 btn-hov mt-4" v-if="i>0">
                <!-- <span class="material-icons btn p-0 mr-2 text-primary">keyboard_arrow_left</span> -->
                <span class="btn p-0 text-primary">Previous</span>
            </button>
            <button @click="change($event, 'next')" class="btn border pl-5 pr-5 mr-3 mt-4" :class="i<components.length-1 ? 'text-primary btn-hov': 'btn-primary' " 
                v-html="i<components.length-1 ? 'Next' : 'Preview Components'">
            </button>
        </div>
    </div>
</div>
</template>

<script>

import img1 from '@/assets/images/amd.jpg'
import img2 from '@/assets/images/intel.png'
import img3 from '@/assets/images/laptop.png'
import $ from 'jquery'
export default {
    data() {
        return {
            i: 0,
            cart: null,
            product: "",
            components: [
                { title: "CPU", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img1, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "MOTHERBOARD", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img2, list: [img1, img2, img3,] }, price: 30 , model: "16GB [8GB x 2dasdad] 2666MHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "COOLERS", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img3, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2]sdad 2666MHz DDR4 <br> SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "RAM", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img1, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2] 2666MaHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "GRAPHIC CARD", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img2, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "BASIC CASE", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img3, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
                { title: "POWER SUPPLY", alt: [
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img3, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img1, price: '12412.00'},
                    { title: 'Ryzen Primal Gaming Daily Deal', model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", thumbnail: img2, price: '12412.00'},
                ], img: { preview: img1, list: [img1, img2, img3,] }, price: 30, model: "16GB [8GB x 2] 2666MHz DDR4 SO-DIMM Laptop Memory", description: "More memory improves multi-tasking, and faster memory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo maiores dicta excepturi amet aut nisi, sit animi. Quisquam dolor tempora voluptas nemo nostrum. Praesentium adipisci doloremque libero incidunt veritatis? improves computer responsiveness. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptate ipsam doloremque aperiam unde alias impedit inventore ex, cupiditate maiores dignissimos, est nam neque deleniti id autem tenetur rerum illo? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quae corporis esse voluptates rem illo at eos adipisci, delectus, voluptatem totam, eum accusamus cum voluptas doloremque est ea expedita praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores ducimus maiores dolor, perspiciatis ab itaque consequuntur autem recusandae consequatur ea ipsa, quia id minus sed fugit. Eaque, soluta quaerat."},
            ],
            component: {
                title: "MEMORY",
                
            },
            style: {
                container: {
                    overflow: "auto",
                    height: '200px'
                },
                right: {
                    overflow: "auto",
                    maxHeight: '500px'
                }
            }
        }
    },
    methods: {
        set_height() {
            this.style.container.height = ($(window).height() - 100) + 'px'
            this.style.right.maxHeight = ($(window).height() - 100) + 'px'
        },
        change(e, where) {
            let $this = this
            switch(where) {
                case "next":
                    if(e.target.innerText == "Next") {
                        let contain = this.cart.filter(function(item) {
                            return item.title == $this.components[$this.i].title
                        })
                        console.log(contain, 'contains...', this.components[this.i].title)
                        let obj = {
                            title: this.components[this.i].title,
                            price: this.components[this.i].price,
                            total: this.components[this.i].price * 1,
                            model: this.components[this.i].model,
                            quantity: 1,
                            thumbnail: this.components[this.i].img.preview
                        }
                        contain.length < 1 ? this.cart.push(obj) : this.cart[this.i] = obj
                        this.setCookie('cart', JSON.stringify(this.cart), 14)
                        this.i < this.components.length - 1 ? this.i++ : ''
                        this.$emit('update_cart', this.cart)
                    } else {
                        let components = []
                        for(let k=0; k<this.components.length; k++) {
                            components.push({
                                price: this.components[k].price,
                                title: this.components[k].title,
                                thumbnail: this.components[k].img.preview,
                                model: this.components[k].model
                            })
                        }
                        this.$emit('preview', components)
                    }
                    break
                case "previous":
                    this.i > 0 ? this.i-- : ''
                    // this.cart.pop()
                    break
            }
        }
    },
    mounted() {
        this.product = this.$route.params.id
        this.set_height()
        $(window).resize(() => {
            this.set_height()
        })
        this.cart = JSON.parse(this.getCookie('cart'))

    }
}
</script>

<style>

</style>