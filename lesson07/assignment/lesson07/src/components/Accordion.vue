<template>
<div id="accordion" class="accordion-container">
  <div v-for="(post, index) in posts" :key="index" :class="[
        'accordion',
        { 'is-open': isOpen.includes(index) }
      ]">
    <div class="accordion-header" @click="toggleAccordion(index)">
      <button v-if="!isOpen.includes(index)" class="accordion__toggle--open btn">{{post.term}}</button>
      <button v-else class="accordion__toggle--closed btn">{{post.term}}</button>
    </div>
    <div v-if="isOpen.includes(index)" class="accordion__body--open" :class="post.class">
      <div class="accordion__body--closed">
        <div class="accordion-content">
          {{ post.text }}
          <strong>{{ post.sub }}</strong>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'term',
  props: {
    msg: String
  },
  data() {
    return {
      isOpen: [],
      posts: [{
          term: "Annuals, Perennials, and Biennials",
          text: "                    Before you can successfully grow any plant, it's essential to understand its life cycle. Annuals are plants that complete their lifecycle (seed to flower) in a single growing season and then die; therefore they have to be planted new each year. Perennials are plants that come back year after year, while biennials take two growing seasons (years) to complete their life cycle. Biennials do not flower the first year, but flower the second year, set seed, and then die.",
          class: 'blue',
          dataTarget: "#collapseOne",
          ariaControls: "collapseOne",
          id: "collapseOne",
          ariaLabelledBy: "headingOne",
          ariaExpanded: 'true'
        },
        {
          term: "Bolting",
          text: "                  Bolting occurs when a gardener does not harvest their crop, and the plants move past the peak edibility stage and into a flowering and seed production phase. For example, lettuces and cabbages should be harvested when the head is large and still firm, but if you allow them to continue their growth cycle, the heads will open up and a tall flower stalk will grow.",
          class: 'green',
          dataTarget: "#collapseTwo",
          ariaControls: "collapseTwo",
          id: "collapseTwo",
          ariaLabelledBy: "headingOneTwo",
          ariaExpanded: 'false'
        },
        {
          term: "Companion Planting",
          text: "                If you aren't in the know about companion planting, now's the time to learn. Companion planting means planting different crops near each other because they benefit one another. This can help bring in pollinators, maximize planting space, or increase crop productivity. For example, planting marigolds around a garden helps repel garden pests while attracting pollinators.",
          class: 'red',
          dataTarget: "#collapseThree",
          ariaControls: "collapseThree",
          id: "collapseThree",
          ariaLabelledBy: "headingThree",
          ariaExpanded: 'false'
        }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      if (this.isOpen.includes(index)) {
        this.isOpen = this.isOpen.filter(i => i !== index);
        return;
      }
      this.isOpen.push(index);
    }
  }
};
</script>

<style scoped lang="scss">
.accordion-container {
    padding: 2rem;
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    min-height: 5rem;
}
.accordion__toggle--closed,
.accordion__toggle--open {
    font-size: 1.1rem;
    min-width: 10rem;
    border-radius: 10px;
    background-color: lightgray;
    &:hover {
        background-color:darkgray;
    }
}
.accordion__body--closed {
    max-height: 0;
}
.accordion__body--open {
    
    color: #8f8f8f;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-family: lato, arial, sans-serif;
    min-height: 8rem;
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
}
@media only screen and (max-width: 600px) {
    .accordion__body--open {
        margin: 1rem 0 1rem;
    }
}
.accordion {
    border: solid 1px rgb(202, 202, 202);
    margin: 0.25rem;
    padding: 2rem;
}
.accordion-content {
    font-family: lato, arial, sans-serif;
    padding: 0.5rem;
    overflow: hidden;
}
.btn:focus {
    box-shadow: none;
}
.card {
    margin: 0.5rem;
    padding: 0.5rem 1rem 1rem;
}
.card-body {
    padding: 1.25rem;
}
.collapse {
    padding: 0;
    max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
}
.is-closed .collapse {
    max-height: 0;
}
</style>