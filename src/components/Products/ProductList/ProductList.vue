<template>
  <div class="productsComponent">
    <navbar></navbar>
    <div class="breadcrumbs">
      <div class="container">
        <div class="row">
          <div class="col-10 text-center">
            <ul class="breadcrumb">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link
                  to="/products"
                  :class="{'active' : this.$route.params.product == undefined}"
                >Products</router-link>
              </li>
              <li v-if="this.$route.params.product !== undefined">
                <router-link
                  to="/products"
                  class="text-capitalize active"
                >{{this.$route.params.product}} Bikes</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row my-5">
        <div class="col-md-3">
          <form class="card">
            <div class="text-left">
              <!-- cd-filter-content -->
              <form class="form-inline my-lg-0 track-wrapper white" onSubmit="return false;">
                <div class="row mx-auto">
                  <div class="col-10 mx-auto">
                    <h6 class="font-weight-bold track-text">Product Price</h6>
                  </div>
                  <div class="col-10 mx-auto">
                    <div class="track-container">
                      <span class="multi-range">
                        <input
                          type="range"
                          :min="minValue"
                          :max="maxValue"
                          id="lower"
                          v-model="minPrice"
                        />
                        <input
                          type="range"
                          :min="minValue"
                          :max="maxValue"
                          id="upper"
                          v-model="maxPrice"
                          style="position: relative"
                        />
                        <span class="range-value min">$ {{ minPrice }}</span>
                        <span class="range-value max">$ {{ maxPrice }}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Categories</h5>
                <div class="ml-2" v-for="item in uniqueCategory" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="categories"
                  />
                  <label
                    class="form-check-label text-capitalize"
                    :for="item"
                    :value="item"
                  >{{item}} Bikes</label>
                  <br />
                </div>
              </form>
              <hr v-if="this.$route.params.type === undefined" />
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Color</h5>
                <div class="ml-2" v-for="item in uniqueColor" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="colors"
                  />
                  <label
                    :class="'form-check-label text-capitalize color-select color-'+item"
                    :for="item"
                    :value="item"
                  ></label>
                  <br />
                </div>
              </form>
              <hr />
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Frame Material</h5>
                <div class="ml-2" v-for="item in uniqueFrameMaterial" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="frame_material"
                  />
                  <label class="form-check-label text-capitalize" :for="item" :value="item">{{item}}</label>
                  <br />
                </div>
              </form>
              <hr />
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Speed</h5>
                <div class="ml-2" v-for="item in uniqueSpeed" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="speed"
                  />
                  <label class="form-check-label text-capitalize" :for="item" :value="item">{{item}}</label>
                  <br />
                </div>
              </form>
              <hr />
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Wheel Size</h5>
                <div class="ml-2" v-for="item in uniqueWheelSize" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="wheel_size"
                  />
                  <label
                    class="form-check-label text-capitalize"
                    :for="item"
                    :value="item"
                  >{{item}} Inch</label>
                  <br />
                </div>
              </form>
              <hr />
              <form class="form-check m-3 py-2">
                <h5 class="font-weight-bold ml-0">Wheel Spec</h5>
                <div class="ml-2" v-for="item in uniqueWheelSpec" :key="item.id">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :name="item"
                    :id="item"
                    :value="item"
                    v-model="wheel_spec"
                  />
                  <label class="form-check-label text-capitalize" :for="item" :value="item">{{item}}</label>
                  <br />
                </div>
              </form>
              <hr />
              <form class="form m-3 py-3" onSubmit="return false;">
                <h5 class="font-weight-bold ml-2">Search</h5>
                <div class="form-inline">
                  <input
                    type="text"
                    v-model="search"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div class="input-group-prepend">
                    <button
                      type="button"
                      @click="searchit"
                      class="btn btn-outline-primary my-2 my-sm-0"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              <hr />
              <form class="form-check m-3 py-3">
                <h5 class="font-weight-bold">Availability</h5>
                <div class="ml-2">
                  <input
                    class="form-check-input"
                    data-filter
                    type="radio"
                    name="radioButton"
                    id="radio1"
                    checked
                  />
                  <label class="radio-label" for="radio1">Only Available</label>
                  <br />
                  <input
                    class="form-check-input"
                    data-filter=".radio2"
                    type="radio"
                    name="radioButton"
                    id="radio2"
                  />
                  <label class="radio-label" for="radio2">Show All</label>
                </div>
                <!-- cd-filter-content -->
              </form>
              <hr />
              <!-- cd-filter-block -->
              <div class="form m-3">
                <h5 class="font-weight-bold ml-2">Compare List</h5>
                <div
                  class="my-2 ml-2"
                >You have {{ this.$store.state.compare.length }} item(s) in your basket.</div>
                <button
                  :disabled="(this.$store.state.compare.length == 0)"
                  type="button"
                  class="btn btn-block btn-dark my-3"
                  data-toggle="modal"
                  data-target="#compare"
                >Compare</button>
                <compareList />
              </div>
            </div>
          </form>
          <!-- cd-filter -->
        </div>
        <div class="col-md-9">
          <products-component :products.sync="products" @changed="changeProducts"></products-component>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      products: {},
      items: {},
      search: "",
      list: [],
      category: false,
      categories: [],
      colors: [],
      frame_material: [],
      speed: [],
      wheel_size: [],
      wheel_spec: [],
      items: {},
      searchItem: false,
      pageitems: 10,
      min: 10,
      max: 210,
      minValue: 0,
      maxValue: 1350,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      uniqueCategory: {},
      uniqueColor: {},
      uniqueFrameMaterial: {},
      uniqueSpeed: {},
      uniqueWheelSize: {},
      uniqueWheelSpec: {},
      upperVal: "",
      upperSlider: "",
      maxPrice: 1350,
      minPrice: 0,
      aux: "",
      pos: {
        curTrack: null
      }
    };
  },
  methods: {
    handleChange(e) {},
    filterProducts() {},
    removeFilter(e) {
      this.products = this.items;
      if (this.categories.length > 0) {
        this.products = this.products.filter(
          product => product.type == this.categories[0]
        );
      }
      if (this.colors.length > 0) {
        this.products = this.products.filter(
          product => product.color == this.colors[0]
        );
      }
      if (this.frame_material.length > 0) {
        this.products = this.products.filter(
          product => product.frame_material == this.frame_material[0]
        );
      }
      if (this.speed.length > 0) {
        this.products = this.products.filter(
          product => product.speed == this.speed[0]
        );
      }
      if (this.wheel_size.length > 0) {
        this.products = this.products.filter(
          product => product.wheel_size == this.wheel_size[0]
        );
      }
      if (this.wheel_spec.length > 0) {
        this.products = this.products.filter(
          product => product.wheel_spec == this.wheel_spec[0]
        );
      }
      this.handleChange();
    },
    viewProduct() {
      this.grid = !this.grid;
    },
    getResults(page = 1) {
      if (this.searchItem) {
        let query = this.$store.state.search;
        axios
          .get(
            "/api/product/search?q=" +
              query +
              "/" +
              this.pageitems +
              "?page=" +
              page
          )
          .then(data => {
            this.products = data.data;
            this.items = data.data;
            this.searchItem = true;
            this.loadFilter(data.data);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        axios
          .get("api/items/" + this.pageitems + "?page=" + page)
          .then(response => {
            this.products = response.data;
            this.items = response.data;
            this.loadFilter(response.data);
          });
      }
    },
    searchit() {
      Fire.$emit("searching");
    },
    loadProducts(event) {
      this.searchItem = false;
      this.products = this.$store.state.storeProducts;
      this.items = this.products;
      this.loadFilter(this.products);
    },
    loadPrices(products) {
      this.maxValue = Math.max.apply(
        Math,
        products.map(product => product.price)
      );
      this.maxPrice = this.maxValue;
      this.minValue = Math.min.apply(
        Math,
        products.map(product => product.price)
      );
      this.minPrice = this.minValue;
    },
    loadFilter(products) {
      this.uniqueCategory = [...new Set(products.map(product => product.type))];
      this.uniqueColor = [...new Set(products.map(product => product.color))];
      this.uniqueFrameMaterial = [
        ...new Set(products.map(product => product.frame_material))
      ];
      this.uniqueSpeed = [...new Set(products.map(product => product.speed))];
      this.uniqueWheelSize = [
        ...new Set(products.map(product => product.wheel_size))
      ];
      this.uniqueWheelSpec = [
        ...new Set(products.map(product => product.wheel_spec))
      ];
    },
    changeProducts(event) {
      const orderType = event;
      this.max = Math.max.apply(
        Math,
        this.products.map(product => product.price)
      );
      if (orderType == "bestSelling") {
        return (this.products = this.products.sort((prev, curr) =>
          prev.amount > curr.amount ? 1 : -1
        ));
      }
      if (orderType == "nameAsc") {
        return (this.products = this.products.sort((prev, curr) =>
          prev.name > curr.name ? 1 : -1
        ));
      }
      if (orderType == "nameDesc") {
        return (this.products = this.products.sort((prev, curr) =>
          prev.name > curr.name ? -1 : 1
        ));
      }
      if (orderType == "newArrivals") {
        return (this.products = this.products.sort((prev, curr) =>
          prev.created_at > curr.created_at ? -1 : 1
        ));
      }
      if (orderType == "priceAsc") {
        return (this.products = this.products.sort(
          (prev, curr) => prev.price - curr.price
        ));
      }
      if (orderType == "priceDesc") {
        return (this.products = this.products.sort(
          (prev, curr) => curr.price - prev.price
        ));
      }
    }
  },
  mounted() {
    var lowerSlider = document.querySelector("#lower");
    var upperSlider = document.querySelector("#upper");
    var lowerVal = parseInt(lowerSlider.value);
    var upperVal = parseInt(upperSlider.value);
    upperSlider.oninput = function() {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
      if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
          upperSlider.value = 4;
        }
      }
    };
    lowerSlider.oninput = function() {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);
      if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        console.log(this.maxPrice);
        if (upperVal == upperSlider.max) {
          lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
      }
    };
  },
  watch: {
    maxPrice() {
      this.removeFilter();
      this.products = this.products.filter(
        product => product.price <= this.maxPrice
      );
      this.products = this.products.filter(
        product => product.price >= this.minPrice
      );
      this.loadFilter(this.products);
    },
    minPrice() {
      this.removeFilter();
      this.products = this.products.filter(
        product => product.price <= this.maxPrice
      );
      this.products = this.products.filter(
        product => product.price >= this.minPrice
      );
      this.loadFilter(this.products);
    },
    categories() {
      if (this.categories.length == 1) {
        this.products = this.products.filter(
          product => product.type === this.categories[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    },
    colors() {
      if (this.colors.length == 1) {
        this.products = this.products.filter(
          product => product.color === this.colors[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    },
    frame_material() {
      if (this.frame_material.length == 1) {
        this.products = this.products.filter(
          product => product.frame_material === this.frame_material[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    },
    speed() {
      if (this.speed.length == 1) {
        this.products = this.products.filter(
          product => product.speed === this.speed[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    },
    wheel_size() {
      if (this.wheel_size.length == 1) {
        this.products = this.products.filter(
          product => product.wheel_size === this.wheel_size[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    },
    wheel_spec() {
      if (this.wheel_spec.length == 1) {
        this.products = this.products.filter(
          product => product.wheel_spec === this.wheel_spec[0]
        );
      } else {
        this.removeFilter();
      }
      this.loadFilter(this.products);
    }
  },
  created() {
    Fire.$on("searching", () => {
      let query = this.$store.state.search;
      axios
        .get("/api/product/search?q=" + query)
        .then(data => {
          this.products = data.data;
          this.items = data.data;
          this.searchItem = true;
          this.loadFilter(data.data);
        })
        .catch(err => {
          console.log(err);
        });
    });
    this.loadProducts();
  }
};
</script>

<style lang="scss">
@media only screen and (max-width: 1200px) {
  .btn.bcustom-secondary,
  .btn.bcustom-primary,
  .btn.btn-dark {
    width: 100% !important;
    margin: 2px;
  }
}
@media only screen and (min-width: 768px) {
  .card-name {
    height: 100px !important;
  }
}
@media only screen and (min-width: 1078px) {
  .card-name {
    height: 55px !important;
  }
}
.color-select {
  height: 25px;
  width: 25px;
  border-radius: 5px;
}
.color-red {
  background: #e3342f;
}
.color-blue {
  background: #3490dc;
}
.color-green {
  background: #38c172;
}
.color-white {
  background: #ececec;
}
.color-black {
  background: #000;
}
.form-check-label {
  cursor: pointer;

  &:hover {
    color: #04a7bb;
  }
}
.range-value {
  position: absolute;
  top: -2rem;
}
.range-value.min {
  left: 0;
}
.range-value.max {
  right: 0;
}
.track-wrapper {
  background: #16222a;
  padding: 45px 0;
}
.track-text,
.track-container {
  text-align: center;
  margin: 0 auto;
}
input[type="range"] {
  position: relative;
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  padding: 0 2px;
  /* Add some L/R padding to ensure box shadow of handle is shown */
  overflow: hidden;
  border: 0;
  border-radius: 1px;
  outline: none;
  background: linear-gradient(grey, grey) no-repeat center;
  /* Use a linear gradient to generate only the 2px height background */
  background-size: 100% 2px;
  pointer-events: none;
  width: 100%;
  &:active,
  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 28px;
    background-color: #fff;
    position: relative;
    margin: 5px 0;
    /* Add some margin to ensure box shadow is shown */
    cursor: pointer;
    appearance: none;
    pointer-events: all;
    box-shadow: 0 1px 4px 0.5px rgba(0, 0, 0, 0.25);
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 13px;
      left: 100%;
      width: 2000px;
      height: 2px;
    }
  }
}
.multi-range {
  position: relative !important;
  top: 35px;
  input[type="range"] {
    position: absolute;
    &:nth-child(1) {
      &::-webkit-slider-thumb::before {
        background-color: purple;
      }
    }
    &:nth-child(2) {
      background: none;
      &::-webkit-slider-thumb::before {
        background-color: grey;
      }
    }
  }
}
</style>