<template>
<div class="container-fluid pt-4 pl-0">
  <!-- <h3 class="mb-4">System Information</h3>             -->
  <table class="table table-borderless table-striped">
      <thead>
          <tr class="bg-primary bd-radius-5">
              <th v-for="(item, i) in heading" :key="i">
                  <h5 class="p-2 text-white">{{item}}</h5>
              </th>
          </tr>
          <tr>
              <th colspan="5"></th>
          </tr>
      </thead>
    <tbody>
        <tr v-for="(item, i) in info" :key="i" class="bd-bottom">
            <td class="small">{{item.component.split(":")[0]}}</td>
            <td class="small">{{item.component.split(":")[1]}}</td>
            <td class="small text-primary font-weight-bold" style="min-width:100px">Rs. {{parseInt(item.price).toFixed(2)}}</td>
            <td class="text-center" style="min-width:100px"><button class="btn btn-hov material-icons text-primary">create</button></td>
            <td class="text-right" style="min-width:100px"><button @click="item.add = !item.add" class="btn btn-block btn-primary pl-4 pr-4 pt-1 pb-1 transition">{{item.add ? 'Remove': 'Add'}}</button></td>
        </tr>
        <tr><td colspan="5"></td></tr>
        <tr class="mt-4">
            <td colspan="2"><h5 class="text-primary">Total Price</h5></td>
            <td colspan="2"><h5 class="text-primary">Rs. 51235.00</h5></td>
            <td><button class="btn btn-block btn-primary">Checkout</button></td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            heading: ["Component", "Details", "Price", "Customize", ""],
            info: [
                { component: "Operating System: Windows 10 Home: 2130", price: '2130', add: true },
                { component: "Processor: AMD Ryzen 9 3900X Processor (12x 3.8GHZ/64MB L3 Cache): 1000", price: '2130', add: true },
                { component: "Memory: 16GB [8GB x 2] DDR4-3200MHz ADATA XPG SPECTRIX D41 RGB: 1000", price: '2130', add: true },
                { component: "Storage: 1TB Intel 660P M.2 NVMe SSD: 1000", price: '2130', add: true },
                { component: "Video Card: MSI VENTUS GeForce RTX 2070 SUPER - 8GB GDDR6 (VR Ready): 1000", price: '2130', add: true },
                { component: "Game Bundle: [FREE] - Get Xbox Game Pass for PC Game Bundle - w/ Purchase of AMD Graphics or AMD Processors: 1000", price: '2130', add: true },
                { component: "Motherboard: ASUS TUF GAMING X570-PLUS (WiFi): 1000", price: '2130', add: true },
                { component: "Power supply: 650 Watt - HIGH POWER 80 PLUS Gold: 1000", price: '2130', add: true },
                { component: "Internal Wireless Network: On-Board Wireless Network: 1000", price: '2130', add: true },
                { component: "Keyboard: BUYPOWER RGB Gaming Keyboard [model may differ from images]: 1000", price: '2130', add: true },
                { component: "Mouse: iBUYPOWER Gaming Optical Mouse: 1000", price: '2130', add: true },
            ]
        }
    }
}
</script>

<style>
.rotate-135 {
    transform: rotate(135deg) !important;
}
</style>