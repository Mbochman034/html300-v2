<template>
 <!-- Uses require and string + var concatenation to render the url correctly in the v-bind statement -->
  <div class="card m-2" style="width: 18rem;">
    <img v-bind:src= "require('../assets/' + imageSrc)" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ articleName }}</h5>
      <p class="card-text">{{ text }}</p>
      <a href="#" class="btn btn-dark">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleItemCard',
  props: { 
    articleName: { type: String, required: true }, 
    text: { type: String, required: true }, 
    imageSrc: {type: String, required: true }
  }
}
</script>