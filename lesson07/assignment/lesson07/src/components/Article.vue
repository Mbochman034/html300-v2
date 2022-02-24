<template>
<div class="gallery-container">
<div class="row">
  <section class="col-md-4">
  <div v-for="inspires in inspires" v-bind:key="inspires.title">
    <h3>{{inspires.titleOne}}</h3>
    <p>{{inspires.content1A}}</p>
    <p>{{inspires.content1B}}</p>
    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
</div>
</section>
<section class="col-md-4">
  <div v-for="inspires in inspires" v-bind:key="inspires.title">
    <h3>{{inspires.titleTwo}}</h3>
    <p>{{inspires.content2A}}</p>
    <p>{{inspires.content2B}}</p>
    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
  </div>
</section>
<section class="col-md-4">
  <div v-for="inspires in inspires" v-bind:key="inspires.title">
    <h3>{{inspires.titleThree}}</h3>
    <p>{{inspires.content3A}}</p>
    <p>{{inspires.content3B}}</p>
    <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
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
        {titleOne: "Watering Tips",
          content1A: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
          content1B: "Etiam porta sem malesuada magna mollis euismod. Donec sed odio.",
          // Second article
          titleTwo: "Our Substrate Picks",
          content2A: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
          content2B: "Etiam porta sem malesuada magna mollis euismod. Donec sed odio.",
          // Third article
          titleThree: "Window Baskets",
          content3A: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
          content3B: "Etiam porta sem malesuada magna mollis euismod. Donec sed odio.",
          
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