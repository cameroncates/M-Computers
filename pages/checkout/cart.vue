<template>
<div class="container pt-5 pb-5">
  <h2 class="text-white">Shopping Cart</h2>
  <p>Total <strong class="text-primary">{{cart.length}}</strong> items in the cart</p>            
  <table class="table table-borderless table-responsive">
    <thead>
      <tr class="bg-dark-2">
        <th class="font-weight-bold text-primary text-md p-4">Name</th>
        <th class="font-weight-bold text-md text-primary p-4">Quantity</th>
        <th class="font-weight-bold text-md text-primary text-right p-4">Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3" class="pb-4 pt-4"></td>
        </tr>
        <tr v-for="(item, i) in cart" :key="'A'+i" class="bd-bottom">
            <td style="min-width:500px">
                <div>
                    <img :src="item.thumbnail" width="150px" alt="">
                    <div class="p-2">
                        <h5 class="text-white">{{item.title}}</h5>
                        <p v-html="item.model"></p>
                    </div>
                </div>
            </td>
            <td style="min-width:200px" class="td-align-middle">
                <quantity-button @quantity="update_quantity($event, i)" :quantity="item.quantity" />
            </td>
            <td class="text-right td-align-middle" style="min-width:150px">
                <p class="text-primary text-md font-weight-bold">Rs. {{item.total}}</p>
            </td>
            <td style="min-width:200px" class="text-right td-align-middle">
                <button class="btn material-icons text-primary btn-hov bg-dark-2">create</button>
                <button class="btn material-icons text-danger btn-hov bg-dark-2">delete</button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <h3 class="text-primary">Total Price</h3>
            </td>
            <td colspan="2" class="text-right">
                <h3 class="text-primary">Rs. {{total_price}}</h3>
            </td>
        </tr>
        <tr>
            <td colspan="4"></td>
        </tr>
        <tr>
            <td colspan="4" class="text-right">
                <button @click="$router.push('/prebuilds')" class="btn text-primary pr-4 pl-4 mr-4 btn-hov">Continue Shopping</button>
                <button @click="$router.push('/checkout/information')" class="btn btn-primary pl-5 pr-5 text-md">Checkout</button>
            </td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import quantity_button from '@/components/website/quantity-button.vue'
export default {
    components: {
        "quantity-button": quantity_button
    },
    data() {
        return {
            cart: [],
            total_price: 0,
            clone: []
        }
    },
    methods: {
        update_quantity(e, i) {
            this.cart[i].total = this.cart[i].price * e
            this.total_price = this.sum(this.cart, 'total')
            this.cart[i].quantity = e
            this.setCookie('cart', JSON.stringify(this.cart), 14)
        }
    },
    mounted() {
        this.cart = JSON.parse(this.getCookie('cart'))
        this.clone = JSON.parse(JSON.stringify(this.cart))
        this.total_price = this.sum(this.cart, 'total')
    }
}
</script>

<style>
</style>