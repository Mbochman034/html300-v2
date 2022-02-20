<template>
<div class="gallery-container">
<div class="row pb-5">
  <section class="col-sm-6">
  <div class="pb-5" v-for="inspires in inspires" v-bind:key="inspires.title">
    <img :src="inspires.imgOne" :alt="inspires.title" width=80%>
    <h3 class="mt-4 pb-1">{{inspires.titleOne}}</h3>
    <p>{{inspires.content1A}}</p>
    <p>{{inspires.content1B}}</p>
</div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="inspires in inspires" v-bind:key="inspires.title">
    <img :src="inspires.imgTwo" :alt="inspires.title" width=80%>
    <h3 class="mt-4 pb-1">{{inspires.titleTwo}}</h3>
    <p>{{inspires.content2A}}</p>
    <p>{{inspires.content2B}}</p>
  </div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="inspires in inspires" v-bind:key="inspires.title">
    <img :src="inspires.imgThree" :alt="inspires.title" width=80%>
    <h3 class="mt-4 pb-1">{{inspires.titleThree}}</h3>
    <p>{{inspires.content3A}}</p>
    <p>{{inspires.content3B}}</p>
  </div>
</section>
<section class="col-sm-6">
  <div class="pb-5" v-for="inspires in inspires" v-bind:key="inspires.title">
    <img :src="inspires.imgFour" :alt="inspires.title" width=80%>
    <h3 class="mt-4 pb-1">{{inspires.titleFour}}</h3>
    <p>{{inspires.content4A}}</p>
    <p>{{inspires.content4B}}</p>
  </div>
</section>
</div>
</div>
</template>

<script>
export default {
  name: 'methods',
  data () {
    return {
      inspires: [
        {titleOne: "Lavendar",
          imgOne: require('../assets/image1.jpg'),
          content1A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          content1B: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          // Second image
          titleTwo: "Potato Vine",
          imgTwo: require('../assets/image2.jpg'),
          content2A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          content2B: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          // Third image
          titleThree: "Window Baskets",
          imgThree: require('../assets/image3.jpg'),
          content3A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          content3B: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          // Fourth image
          titleFour: "Pet-Friendly Plants",
          imgFour: require('../assets/image4.jpg'),
          content4A: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
          content4B: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        }
      ]
    }
  }
}
</script>


<style>
.gallery-container {
  padding: 3rem;
}
</style>
