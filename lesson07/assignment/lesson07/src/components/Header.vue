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
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/inspired" class="nav-link">Get Inspired</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/common" class="nav-link">Common Terms</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
            </ul>
    </nav> 
    </header>  
</template>

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
