<template>
<div>
<Header />
<Intro />
<Gallery />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";
import Gallery from "@/components/Gallery.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Intro,
    Gallery,
    Footer,
  }
}
</script>

