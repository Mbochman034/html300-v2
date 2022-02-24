<template>
<div>
<Header />
<Intro3 />
<Popper />
<Search />
<Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Intro3 from "@/components/Intro3.vue";
import Popper from "@/components/Popper.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Intro3,
    Popper,
    Search,
    Footer,
  }
}
</script>