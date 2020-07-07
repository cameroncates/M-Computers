<template>
<div class="container-fluid p-0">
    <div class="d-flex bd-bottom bg-dark justify-content-between pl-3 pr-3">
        <div class="align-self-center">
            <button @click="$router.push('/')" class="btn pt-4 pb-4"><b>M-Computers</b></button>
        </div>
        <div class="text-right header-right">
            <div class="lg-screen d-inline">
                <button @click="link_clicked($event, i)" class="btn btn-hov p-4 dropdown-btn" v-for="(item, i) in links" :key="i" v-html="item"></button>
            </div>
            <button @click="open_menu($event)" class="btn btn-hov menu d-none material-icons dropdown-btn p-4">menu</button>
            <button @click="signup_or_signin($event)" class="btn btn-primary ml-4 pl-4 pr-4 box-shadow dropdown-btn">Account</button>
        </div>
    </div>
</div>
</template>

<script>
import dropdown_list from './dropdown-list.vue'
import vue from 'vue'
import $ from 'jquery'
export default {
    components: {
        dropdown_list
    },
    data() {
        return {
            visible: true,
            links: ["Build Your Own PC", "Pre-Build PC &nbsp; &#9207;"],
            links_sm: ["Build Your Own PC", "Pre-Build PC"],
            link_list_1: ["Gaming PC", "All in one PC", "Budget PC"],
            register: ["Login", "Create Account"]
        }
    },
    methods: {
        link_clicked(e, i) {
            switch(i) {
                case 0:
                    this.$router.push('/select-plateform')
                    break
                case 1:
                    let { html, instance } = this.component(dropdown_list, { e, list: this.link_list_1, width: 200 } )
                    document.body.append(html)
                    break
            }
        },
        open_menu(e) {
            let { html, instance } = this.component(dropdown_list, { e, list: this.links_sm, width: 250 } )
            document.body.append(html)
        },
        signup_or_signin(e) {
            let { html, instance } = this.component(dropdown_list, { e, list: this.register, width:175 } )
            document.body.append(html)
        },
        component(component, props = null) {
            let ComponentClass = vue.extend(component)
            let instance = new ComponentClass({ propsData: props })
            instance.$mount()
            return {
                html: instance.$el,
                instance
            }
        },
    },

}
</script>

<style>
@media only screen and (max-width: 910px) {
  .header-right .lg-screen {
    display: none !important;
  }
  .header-right .menu {
      display: inline-block !important;
  }
}
</style>