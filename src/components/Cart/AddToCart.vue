<template>
    <div class="add-to-cart">
   
        <button :disabled="(p_product.amount == 0)" type="button" class="btn bcustom-primary cart-btn" @click="addToCart" value="Add to Cart"> Add to Cart </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
      props: {
        p_product: {}
      },
  data(){
    return {
      item: this.p_product,
    }
  },
  methods:{
    addToCart() {
      $('#cart').modal('show');
      this.$store.commit('addToCart', this.item)
    },
  },
};
</script>