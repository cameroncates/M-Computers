<template>
<div class="container-fluid pt-5 pb-5 bg-dark">
    <div class="m-auto p-2 prebuilds-search-container">
        <div class="w-100 mt-5 mb-5"></div>
        <h5 class="text-center ls-2">Look for products in our store with one search engine, <br> categorize by different variety.</h5>
        <div class="w-100 mt-2 mb-2"></div>
        <p class="w-100 m-auto text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio enim tempora, nostrum officiis ullam amet accusamus, quas aspernatur dolor reprehenderit similique quidem distinctio consequatur illo iure exercitationem sint velit quo!</p>
        <div class="w-100 mb-4"></div>
        <div class="w-100 mb-2" v-if="filter.selected.length > 0">
            <button @click="removefrom_filter(item)" class="btn bg-dark-2 text-light pl-4 pr-4 text-sm mr-2 mb-2 bd-round animate__animated  animate__fadeIn animate__faster" v-for="(item, i) in filter.selected" :key="i">{{item}}</button>
            <br>
        </div>
        <div class="input-group bg-dark-2 bd-radius-5 p-1">
            <div class="input-group-append">
            <span class="input-group-text material-icons bg-none bd-none">search</span>
            </div>
            <input type="text" class="form-control bg-none bd-none" placeholder="Search for...">
            <div class="input-group-append">
            <button class="btn input-group-text btn-hov bg-none bd-none bd-radius-5" @click="visible = !visible" :class="visible ? 'text-primary bg-dark-2' : ''">
                <span class="material-icons mr-2">filter_alt</span>
                <span class="small">Filter</span>
            </button>
            </div>
        </div>    
        <div class="w-100 mt-3 mb-3"></div>
        <div class="table-responsive bg-dark-2 p-2 animate__animated  animate__fadeIn animate__faster " v-if="visible">
            <table class="table table-borderless">
                <thead>
                <tr class="bd-bottom">
                    <th class="smallfont-weight-bold text-white" v-for="(item, i) in filter.title" :key="i">{{item}}</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, j) in filter.list" :key="j">
                        <td style="min-width:150px" class="pb-1 pt-1" v-for="(sub_item, k) in filter.list[j]" :key="k">
                            <button @click="addto_filter(sub_item)" class="btn text-sm btn-block p-1 btn-hov  text-left" :class="filter.selected.includes(sub_item) ? 'text-primary font-weight-bold': 'text-light'">{{sub_item}}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            filter: {
                selected: [],
                title: ["Date", "Category", "Type"],
                list: [
                    ["Last Hour", "Computer Cases", "Gaming PC"],
                    ["Today", "Accessories", "All in PC"],
                    ["This week", "Gaming Chairs", "Budget PC"],
                    ["This Month", "External Storage"],
                    ["This year"],
                ]
            }
        }
    },
    methods: {
        addto_filter(item) {
            if(!this.filter.selected.includes(item)) {
                this.filter.selected.push(item)
            } else {
                this.removefrom_filter(item)
            }
        },
        removefrom_filter(item) {
            let index = this.filter.selected.indexOf(item)
            this.filter.selected.splice(index, 1)
        }
    }
}
</script>

<style>
.prebuilds-search-container {
    width: 60% !important;
}
@media only screen and (max-width: 1120px) {
  .prebuilds-search-container {
    width: 90% !important;
  }
}
</style>