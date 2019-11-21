<template>
  <div class="myproduct">
    <div class="row mb-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between sort-filter">
              <form class="input-group-prepend d-block text-left mx-3 my-2" autocomplete="off">
                <label class="mr-sm-2" for="inlineFormCustomSelect">Sort by:</label>
                <select
                  class="custom-select mr-sm-2"
                  id="orderType"
                  name="orderType"
                  v-model="orderType"
                  @change="itemsPage()"
                >
                  <option value>Default</option>
                  <option value="bestSelling">Best Selling</option>
                  <option value="nameAsc">Name: A-Z</option>
                  <option value="nameDesc">Name: Z-A</option>
                  <option value="newArrivals">New Arrivals</option>
                  <option value="priceAsc">Price: Lowest To Highest</option>
                  <option value="priceDesc">Price: Highest To Lowest</option>
                </select>
              </form>
              <form class="input-group-prepend d-block text-left mx-3 my-2">
                <label class="mr-sm-2" for="inlineFormCustomSelectQuantity">Show:</label>
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelectQuantity"
                  @change="itemsPage()"
                  v-model="itemsPerPage"
                >
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </form>
              <form class="input-group-prepend text-right mx-2 mt-4">
                <button
                  :disabled="(grid==true)"
                  @click="viewProduct()"
                  class="btn btn-dark"
                  style="height: 40px;"
                >
                  <i class="fas fa-th"></i>
                </button>
                <button
                  :disabled="(grid==false)"
                  @click="viewProduct()"
                  class="btn btn-dark mx-1"
                  style="height: 40px;"
                >
                  <i class="fas fa-list"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="mt-2 mb-3 ml-5 text-left">
            <span>Showing {{products.length}} results.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="products" id="products">
      <div class="row" v-if="grid === true">
        <div class="col-lg-4 col-md-6" v-for="product in products" :key="product.id">
          <div class="card product-item mt-2">
            <router-link
              :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
              class="text-center d-block"
            >
              <div class="img-container">
                <img :src="product.img" class="card-img-top" alt="..." />
              </div>
            </router-link>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <router-link
                  :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                  class="text-left black card-name"
                >
                  {{ product.name.substring(0,45) }}
                  <span v-if="(product.name).length > 45">...</span>
                </router-link>
                <div
                  class="card-price ml-1 lightblue font-weight-bold"
                >{{ product.price | currency }}</div>
              </div>
              <div class="card-description" v-html="product.description.substring(0,70)">
                <span v-if="(product.description).length > 70">
                  ...
                  <router-link
                    :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                    class="text-left black card-name"
                  >See more</router-link>
                </span>
              </div>
            </div>
            <div class="card-btns mt-2 mb-4 text-center">
              <add-to-cart :p_product="product" />
              <miniCart />
              <router-link
                :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                class="btn bcustom-secondary mx-1"
              >
                <span>
                  <i class="fa fa-search icon"></i>
                </span>
              </router-link>
              <add-to-compare :p_product="product" />
              <miniList />
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="grid === false">
        <div class="col-12" v-for="product in products" :key="product.id">
          <div class="card product-item mt-2">
            <div class="row">
              <div class="col-md-4">
                <router-link
                  :to="{ name: 'details' , 
                    params: { p_name: product.name, p_id: product.id }}"
                  class="text-center d-block"
                >
                  <img :src="product.img" class="card-img-top" alt="..." />
                </router-link>
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <router-link
                      :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                      class="text-left black card-name"
                    >
                      {{ product.name.substring(0,45) }}
                      <span v-if="(product.name).length > 45">...</span>
                    </router-link>
                    <div
                      class="card-price ml-1 lightblue font-weight-bold"
                    >{{ product.price | currency }}</div>
                  </div>
                  <div
                    class="card-description mx-1 text-left"
                    v-html="product.description.substring(0,150)"
                  >
                    <span v-if="(product.description).length > 150">
                      ...
                      <router-link
                        :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                        class="text-left black card-name"
                      >See more</router-link>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4 p-3">
                <div class="black card-availibity font-weight-bold my-3">
                  <span class="ml-1">Availibity:</span>
                  <span class="green">In Stock</span>
                </div>
                <div class="card-btns mt-2 mb-4">
                  <add-to-cart :p_product="product" />
                  <miniCart />
                  <router-link
                    :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
                    class="btn bcustom-secondary mx-1"
                  >
                    <span>
                      <i class="fa fa-search icon"></i>
                    </span>
                  </router-link>
                  <add-to-compare :p_product="product" />
                  <miniList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
  mounted() {},
  data() {
    return {
      product: [],
      quantity: "1",
      grid: true,
      orderType: "",
      rating: 0,
      totalRate: 0,
      itemsPerPage: 0,
      maxValue: 0
    };
  },
  methods: {
    viewProduct() {
      this.grid = !this.grid;
    },
    handleScroll() {
      if (window.innerWidth < 768) {
        this.grid = false;
      }
    },
    itemsPage() {
      this.$emit("changed", this.orderType);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
<style>
.card-name {
  height: 40px;
}
.card-description {
  height: 120px;
}
.card-img-top {
  max-width: 225px;
}
.cart-btn:hover {
  color: white !important;
  background: #04a7bb !important;
  border-color: #04a7bb;
}
.cart-btn .icon {
  font-size: 17px;
}
.img-container {
  position: relative;
}
.img-container .card-img-top {
  transition: all 0.3s linear;
  height: 195px;
  max-width: 285px;
}
.img-container:hover .card-img-top {
  transform: scale(1.05);
  z-index: -10 !important;
}
.btn {
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .sort-filter {
    display: block !important;
  }
  .card-availibity {
    text-align: center;
  }
  .img-container .card-img-top {
    width: 100%!important;
    max-width: 300px!important;
  }
}
</style>