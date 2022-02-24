<template>
<div>
<Header />
<Jumbotron />
<Article />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import Article from "@/components/Article.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Jumbotron,
    Article,
    Footer,
  }
}
</script>

