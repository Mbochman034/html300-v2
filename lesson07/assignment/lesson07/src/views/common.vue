<template>
<div>
<Header />
<Intro2 />
<Accordion />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro2 from "@/components/Intro2.vue";
import Accordion from "@/components/Accordion.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Intro2,
    Accordion,
    Footer,
  }
}
</script>