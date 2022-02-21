<template>
       <main role="main">
        <!-- Jumbotron -->
        <div class="jumbotron">
        <div class="container">
            <h1 class="display-3">Let's Grow Something Beautiful!</h1>
            <p>We're here to help you build a beautiful and easily-maintained potted garden. We'll show you how simple getting started can be.</p>
            <p class="btn btn-primary btn-md"><router-link to="/inspired" class="nav-link">Get Inspired</router-link></p>
        </div>
        </div>

        
    </main> 
</template>

<style lang="scss" scoped>
.jumbotron {
    background-color: #eeeeee;
    // padding: 2rem;
}
.container {
    margin-left: 2rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
}
.nav-link {
    color: #fff;
    &:hover {
    color: #b8b6b6;
}
}


</style>