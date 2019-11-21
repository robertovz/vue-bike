<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="row my-5">
        <div :class="(this.$store.state.cart.length === 0) ? 'col-md-10 mx-auto' : 'col-md-8'">
          <div class="card" style="max-height: 400px;">
            <div class="card-header">CART</div>
            <div class="card-body table-responsive p-0">
              <table class="table text-center" v-if="this.$store.state.cart.length === 0">
                <tr>
                  <td class="my-3" style="font-size: 20px">No products in the cart.</td>
                </tr>
                <tr>
                  <router-link to="/products" class="btn bcustom-primary my-3">Back to products list</router-link>
                </tr>
              </table>
              <table class="table table-hover" v-if="this.$store.state.cart.length > 0">
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th width="100">Quantity</th>
                    <th width="100">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in this.$store.state.cart" :key="item.id">
                    <td height="70" width="100">
                      <img
                        :src="item.img"
                        class="card-img-top"
                        alt="..."
                        width="250px"
                      />
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.price | currency}}</td>
                    <td>
                      <input
                        type="number"
                        style="width:60px; border-radius: 5px; height: 32px; border:transparent; padding: 5px"
                        v-model="item.quantity"
                        min="1"
                        @change="productQuantity(item.id, item.quantity, item.amount)"
                        :max="item.amount"
                      />
                    </td>
                    <td>
                      <button @click="$store.commit('removeFromCart', item)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-if="this.$store.state.cart.length > 0">
          <div class="card">
            <div class="card-header">TOTAL AMOUNT</div>
            <div class="card-body table-responsive p-0">
              <table class="table">
                <tbody>
                  <tr class="justify-content-between">
                    <td>Sub Total</td>
                    <td>{{this.$store.getters.subTotal | currency}}</td>
                  </tr>
                  <tr class="justify-content-between">
                    <td>Tax (%)</td>
                    <td>{{this.$store.getters.tax | currency}}</td>
                  </tr>
                  <tr class="justify-content-between">
                    <td>Total price</td>
                    <td>{{this.$store.getters.totalPrice | currency}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="justify-content-between">
                    <td>
                      <button
                        class="btn btn-outline-dark btn-block p-2"
                        @click="$store.commit('clearCart')"
                      >Clear Cart</button>
                    </td>
                    <td>
                      <button
                        class="btn btn-outline-primary btn-block p-2"
                        @click="placeOrder()"
                      >Proceed to Checkout</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [],
      carts: [],
      cartsAdd: {
        id: "",
        name: "",
        price: ""
      },
      item: {},
      badge: "0",
      quantity: "1",
      qntt: 0,
      tax: "0",
      totalPrice: "0"
    };
  },
  methods: {
    loadCart() {
      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("cart"));
      }
    },
    productQuantity(id, quantity, amount) {
      if (quantity > amount) {
        quantity = amount;
      }
      this.item.id = id;
      this.item.quantity = quantity;
      this.$store.commit("productQuantity", this.item, this.quantity);
    },
    placeOrder(event) {
    }
  },
  created() {
    this.loadCart();
  }
};
</script>

<style>
</style>