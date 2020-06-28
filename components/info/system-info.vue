<template>
<div class="container-fluid bd-top mt-5 p-5">
  <h3 class="mb-4">System Information</h3>            
  <table class="table table-borderless table-striped">
    <tbody>
        <tr v-for="(item, i) in info" :key="i">
            <td class="small font-weight-bold">{{item.split(":")[0]}}</td>
            <td class="small">{{item.split(":")[1]}}</td>
        </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            info: [
                "Operating System: Windows 10 Home",
                "Case: Thermaltake Level 20 MT ARGB",
                "Processor: AMD Ryzen 9 3900X Processor (12x 3.8GHZ/64MB L3 Cache)",
                "Processor Cooling: iBUYPOWER 240mm Addressable RGB Liquid Cooling System - Black",
                "Memory: 16GB [8GB x 2] DDR4-3200MHz ADATA XPG SPECTRIX D41 RGB",
                "Storage: 1TB Intel 660P M.2 NVMe SSD",
                "Video Card: MSI VENTUS GeForce RTX 2070 SUPER - 8GB GDDR6 (VR Ready)",
                "Game Bundle: [FREE] - Get Xbox Game Pass for PC Game Bundle - w/ Purchase of AMD Graphics or AMD Processors",
                "Motherboard: ASUS TUF GAMING X570-PLUS (WiFi)",
                "Power supply: 650 Watt - HIGH POWER 80 PLUS Gold",
                "Internal Wireless Network: On-Board Wireless Network",
                "Keyboard: BUYPOWER RGB Gaming Keyboard [model may differ from images]",
                "Mouse: iBUYPOWER Gaming Optical Mouse",
                "Warranty: 3 Year Standard Warranty Service",
                "Rush Service: 2-Day"
            ]
        }
    }
}
</script>

<style>

</style>