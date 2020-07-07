<template>
<div class="container">
    <div class="w-100"><br><br></div>
    <div class="d-flex p-2">
        <!-- LEFT -->
        <div class="flex-shrink-0 p-2 info-left">
            <div class="form-group">
                <label for="email">
                    <h4  class="text-white">Contact Information</h4>
                </label>
                <div class="w-100 p-2">
                    <p class="mb-2 small">Email</p>
                    <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                </div>
            </div>
            <div class="w-100 bd-top mt-5 mb-5"></div>
            <div class="form-group">
                <label for="email">
                    <h4  class="text-white">Shipping Address</h4>
                </label>
                <div class="d-flex m-0">
                    <div class="w-50 p-2">
                        <p class="mb-2 small">First Name</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                    <div class="w-50 p-2">
                        <p class="mb-2 small">Last Name</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                </div>
                <div class="d-flex m-0">
                    <div class="w-100 p-2">
                        <p class="mb-2 small">Address</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                </div>
                <div class="d-flex m-0">
                    <div class="w-100 p-2">
                        <p class="mb-2 small">City</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                </div>
                <div class="d-flex m-0">
                    <div class="w-50 p-2">
                        <p class="mb-2 small">Country/Region</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                    <div class="w-50 p-2">
                        <p class="mb-2 small">Postal Code</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                </div>
                <div class="d-flex m-0">
                    <div class="w-100 p-2">
                        <p class="mb-2 small">Phone</p>
                        <input type="password" class="form-control bg-dark-2 bd-none p-4 bd-radius-5" id="pwd" name="pswd">
                    </div>
                </div>

            </div>
            <div class="w-100 d-flex justify-content-between">
                <button type="button" @click="$router.push('/checkout/cart')" class="btn text-primary btn-hov">Back to Cart</button>
                <button type="button" class="btn pl-5 mr-2 pr-5 btn-primary pt-2 pb-2">Continue to Shipping</button>
            </div>
        </div>    

        <!-- RIGHT -->
        <div class="info-right flex-shrink-0 p-2 bg-dark-2 bd-radius-5">
            <table class="table table-borderless table-responsive">
                <tbody>
                <tr v-for="(item, i) in cart" :key="i" class="bd-bottom">
                    <td>
                        <div class="d-flex">
                            <img :src="item.thumbnail" width="75px" alt="" class="flex-shrink-0 align-self-start">
                            <div class="p-2">
                                <h6 style="position:relative">
                                    <span class="text-white">{{item.title}}</span>
                                </h6>
                                <p class="small" v-html="item.model"></p>
                            </div>
                        </div>
                    </td>
                    <td class="td-align-middle text-right" style="min-width:100px">
                        <p class="text-primary font-weight-bold small">Rs. {{item.total}}</p>
                    </td>
                </tr>
                <tr class="bd-top">
                    <td>Subtotal</td>
                    <td class="text-right">Rs. {{total_price}}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td class="text-right">Rs. {{shipping}}</td>
                </tr>
                <tr class="bd-top">
                    <td class="">
                        <h5 class="text-primary">Total</h5>
                    </td>
                    <td class="text-right">
                        <h5 class="text-primary"><span class="small text-primary">Rs.</span> {{total_price + shipping}}</h5>
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
            cart: [],
            total_price: 0,
            shipping: 199
        }
    },
    mounted() {
        this.cart = JSON.parse(this.getCookie('cart'))
        this.total_price = this.sum(this.cart, 'total')
    }
}
</script>

<style>
.info-left {
    width: 55% !important;
}
.info-right {
    width: 45% !important;
}
</style>