<template>
<div class="container-fluid">
    <div class="d-flex flex-wrap justify-content-center align-items-end">
        <div @click="open(item.title)" v-for="(item, i) in list" :key="i" class="m-4 bd-radius-5 bd-bottom bd-radius-0 prebuild-card btn-hov p-4 transition" style="width:320px">
            <div class="overflow-hidden">
                <img :src="item.thumbnail" width="100%" @load="img_loaded($event)" class="d-none" alt="">
            </div>
            <div class="p-2" style="position:relative">
                <div class="container-fluid mb-4">
                <h4 v-if="item.title" class="mt-4 text-white text-center">{{item.title}}</h4>
                <p v-if="item.model" class="w-100 small text-center" v-html="item.model"></p>
                <table class="table table-borderless prebuild-table" v-if="item.specification">
                    <tbody>
                        <tr v-for="(specs, j) in item.specification" :key="j">
                            <td class="small text-light" v-for="(spec, k) in specs" :key="k">{{spec}}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <h5 class="text-center text-primary mb-2 prebuild-price">Rs. {{item.price || "0.00"}}</h5>
                <button v-if="state" class="btn btn-primary btn-block mt-4">{{state}}</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
    props: {
        list: {
            required: false,
            default: []
        },
        state: {
            required: false
        }
    },
    data() {
        return {
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
    width: 100% !important;
    margin-bottom: 2.5rem !important;
  }
  .prebuild-table, .prebuild-price {
      display: none !important;
  }
}
</style>