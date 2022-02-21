<template>
<div>
<Header />
<Jumbotron />
<Images />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Images from "@/components/Images.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Jumbotron,
    Images,
    Footer,
  }
}
</script>

