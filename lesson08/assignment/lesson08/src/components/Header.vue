<template>
    <header class="main">
        <!-- Logo -->
    <div>
        <router-link to="/"><img class="header-img" src="../assets/garden-logo.svg"/></router-link>
    </div>

    <!-- Navigation   -->    
    <nav class="navbar navbar-light" style="background-color: #0b160b;">
            <!-- Navbar content -->
                    <ul class="nav justify-content-center">
            <NavLink 
                v-for="link in links" 
                v-bind:key="link.id"
                v-bind:url="link.url" 
                v-bind:linkText="link.linkText" />
        </ul>
    </nav> 
    </header>  
</template>


<script>
import NavLink from '@/components/NavLink.vue'

export default {
  name: 'Nav',
  components: {
    NavLink
  },
  props: {},
    data() {
    return { links:
      [
          {id: 1, url: "/", linkText: "Home"},
          {id: 2, url: "/inspired", linkText: "Get Inspired"},
          {id: 3, url: "/common", linkText: "Common Terms"},
          {id: 4, url: "/about", linkText: "About"}
      ]
    }
    }
}
</script>


<style scoped lang="scss">
.header-img {
    padding: 1rem 0 1rem 3rem;
    width: 14rem;
}
.navbar {
    padding-left: 2rem;
}
.nav li a {
    color: #fff;
    &:hover {
        color: #b8b6b6;
    }
}
</style>
