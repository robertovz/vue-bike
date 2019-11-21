<template>
  <!-- Modal -->
  <div
    class="modal right fade"
    id="cart"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel2"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title text-center" id="myModalLabel2">
            <span class="text-center">
              <i class="fa fa-shopping-cart mx-2"></i>
            </span>
            {{this.$store.state.cart.length}}
          </h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <table class="table-striped">
            <tbody>
              <h3
                :class="['text-center mt-5', (this.$store.state.cart.length > 0) ? 'd-none' : 'd-block']"
              >No products in the cart.</h3>
              <tr v-for="item in this.$store.state.cart" :key="item.id" class="text-left">
                <td height="50" width="60"><img :src="item.img" class="card-img-top" alt="..." width="250px"></td>
                <td class="p-3">{{item.name.substring(0,20) }}
                    <span v-if="(item.name).length > 20">...</span></td>
                <td>{{item.price | currency}}</td>
                <td width="60" class="p-2">
                  <input type="number" style="width:60px; border-radius: 5px; height: 32px; border:transparent; padding: 5px"
                  v-model="item.quantity" min="1" @change="productQuantity(item.id, item.quantity, item.amount)" :max="item.amount">
                </td>
                <td width="60">
                  <button @click="$store.commit('removeFromCart', item)" class="btn btn-danger">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer d-block">
          <span style="font-size: 13px" class="d-block">Sub Total: <span class="mx-2"> {{this.$store.getters.subTotal | currency}} </span>&nbsp;</span>
          <span style="font-size: 13px" class="d-block">Tax: <span class="mx-2"> {{this.$store.getters.tax | currency}} </span></span>
          <span style="font-size: 15px" class="d-block mb-3">Total price: <span class="mx-2"> {{this.$store.getters.totalPrice | currency}} </span></span>
          <router-link to="/checkout" class="btn btn-block btn-primary bcustom-secondary text-uppercase btn-mini-cart" data-dismiss="modal" aria-label="Close">View Cart</router-link>
          <router-link to="/checkout" class="btn btn-block btn-primary bcustom-secondary text-uppercase btn-mini-cart" data-dismiss="modal" aria-label="Close">Proceed to checkout</router-link>
        </div>
      </div>
      <!-- modal-content -->
    </div>
    <!-- modal-dialog -->
  </div>
  <!-- modal -->
</template>


<script>
export default {
  data() {
    return {
      item: {},
    };
  },
  methods: {
    productQuantity(id, quantity, amount) {
      if(quantity > amount) {
        quantity = amount;
      }
      this.item.id = id;
      this.item.quantity = quantity;
      this.$store.commit('productQuantity', this.item, this.quantity)
    },
  },
  created() {
  }
};
</script>

<style>
.modal.right.fade .modal-header, .modal.right.fade .modal-footer {
    background: #16222a!important;
    color: #fff;
    border-radius: 0;
    z-index: 10;
}
.modal.right.fade .modal-body {
    overflow-y: auto;
}
.modal.right.fade .close {
    color: #fff;
}
.modal.right.fade  .modal-dialog {
  position: fixed;
  margin: auto;
  width: 400px;
  height: 100%;
  -webkit-transform: translate3d(0%, 0, 0);
  -ms-transform: translate3d(0%, 0, 0);
  -o-transform: translate3d(0%, 0, 0);
  transform: translate3d(0%, 0, 0);
}
.modal.right.fade  .modal-content {
  height: 100%;
  overflow-y: auto;
}
.modal.right.fade .modal-body table {
  position: absolute;
  width: 100%;
  left: 0;
}
/*Right*/
.modal.right.fade .modal-dialog {
  right: 0px;
  -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
  -o-transition: opacity 0.3s linear, right 0.3s ease-out;
  transition: opacity 0.3s linear, right 0.3s ease-out;
}
.modal.right.fade.in .modal-dialog {
  right: 0;
}
/* ----- MODAL STYLE ----- */
.modal.right.modal-content {
  border-radius: 0;
  border: none;
}
.modal.right.modal-header {
  border-bottom-color: #eeeeee;
}
.modal.right.modal-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
@media only screen and (max-width: 720px) {
  .modal.right .modal-dialog {
    width: 320px!important;
  }
  .cart-name, .cart-price {
    display: block;
  }
  .cart-price {
    padding-left: 75px;
  }
}
@media only screen and (min-width: 992px) {
  .btn-mini-cart {
    display: inline;
  }
}
</style>