<template>
  <div id="app">
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
                <router-link to="/products">Products</router-link>
              </li>
              <li>
                <router-link to="/details" class="active">{{product.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="app">
      <div class="product-info my-5">
        <div class="row mx-auto">
          <div class="col-md-5">
            <div class="img-wrapper">
              <img
                :src="product.img"
                class="card-img-top"
                alt="..."
                width="250px"
                style="max-width: 350px;"
                @mouseover="imageMouseOver($event)"
                @mousemove="imageMouseMove($event)"
                @mouseout="imageMouseOut($event)"
              />
            </div>
          </div>
          <div class="col-md-7 text-left">
            <div class="mx-2">
              <h3 class="text-capitalize">{{product.name}}</h3>
              <hr />
              <h4 class="font-weight-bold">{{product.price | currency}}</h4>
              <p v-html="product.description"></p>
              <p :class="product.amount > 0 ? 'green': 'd-none'">In Stock</p>
              <p :class="product.amount == 0 ? 'red': 'd-none'">Out of Stock</p>
              <div class="pt-2">
                <p class="text-muted font-weight-bold mb-1">Quantity:</p>
                <input
                  type="number"
                  style="width:60px; border-radius: 5px; height: 35px; border:transparent; padding: 5px"
                  v-model="pQuantity"
                  min="1"
                  @change="productQuantity(product.id)"
                  :max="product.amount"
                />
                <add-to-cart :p_product="product" />
                <miniCart />
              </div>
              <miniList />
              <compareList />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <tabs :options="{ useUrlFragment: false }">
        <tab name="Reviews">
          <div class="heading text-left black">Reviews</div>
          <div class="left-review text-left">
            <star-rating
              :inline="true"
              :read-only="true"
              :show-rating="false"
              :star-size="25"
              v-model="totalRate"
              :increment="0.1"
              active-color="#ff9800"
            ></star-rating>
            <p class="mt-2">{{totalRate}} average based on {{ totalUser }} reviews.</p>
          </div>
          <hr style="border:3px solid #f1f1f1" />
          <div class="row">
            <div class="side">
              <div class="text-center">5 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-5" style="width: 0%"></div>
              </div>
            </div>
            <div class="side right">
              <div class="text-center">{{ bar5 }}</div>
            </div>
            <div class="side">
              <div class="text-center">4 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-4" style="width: 0%"></div>
              </div>
            </div>
            <div class="side right">
              <div class="text-center">{{ bar4 }}</div>
            </div>
            <div class="side">
              <div class="text-center">3 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-3" style="width: 0%"></div>
              </div>
            </div>
            <div class="side right">
              <div class="text-center">{{ bar3 }}</div>
            </div>
            <div class="side">
              <div class="text-center">2 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-2" style="width: 0%"></div>
              </div>
            </div>
            <div class="side right">
              <div class="text-center">{{ bar2 }}</div>
            </div>
            <div class="side">
              <div class="text-center">1 star</div>
            </div>
            <div class="middle">
              <div class="bar-container">
                <div class="bar-1" style="width: 0%"></div>
              </div>
            </div>
            <div class="side right">
              <div class="text-center">{{ bar1 }}</div>
            </div>
          </div>
          <div>
            <hr style="border:3px solid #f1f1f1" />

            <div class="comment-list">
              <div
                class="orange font-weight-bold text-left page-header py-3 px-4"
              >Customer Reviews ({{ product.review.length }})</div>
              <div class="row" v-for="comment in product.review" :key="comment.id">
                <div class="col-md-1 col-sm-2 hidden-xs">
                  <div class="thumbnail">
                    <div class="image">
                      <img
                        src="../../assets/img/profile/profile.png"
                        class="img-circle elevation-1"
                        alt="User Image"
                        style="width: 55px"
                      />
                    </div>
                    <div class="text-center">{{ comment.author }}</div>
                  </div>
                </div>
                <div class="col-md-11 col-sm-10">
                  <div class="panel panel-default arrow left my-1">
                    <div class="panel-body card px-4">
                      <header class="text-left">
                        <div class="comment-date mt-3 mb-1" style="font-size: 12px">
                          <i class="fas fa-clock mx-1"></i>
                          {{ comment.datePublished }}
                        </div>
                        <div class="comment-user ml-2">
                          <star-rating
                            v-model="comment.rating"
                            :increment="0.5"
                            text-class="custom-text"
                            :read-only="true"
                            :star-size="25"
                          ></star-rating>
                        </div>
                        <div class="comment-post ml-1">
                          <p>{{ comment.description }}</p>
                        </div>
                      </header>
                      <div class="text-right">
                        <a href="#">
                          <i class="fa fa-trash red"></i>
                        </a>
                      </div>
                      <p class="text-right">
                        <a href="#" class="btn btn-default btn-sm">
                          <i class="fa fa-reply"></i> reply
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#allComments"
              v-if="totalUser > 0"
            >View all comments</button>

            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
              id="allComments"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header modal-custom-header mb-2">
                    <div class="font-weight-bold">All Comments</div>
                    <button
                      type="button"
                      class="close white"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" class="white">&times;</span>
                    </button>
                  </div>
                  <div class="my-5">
                    <div
                      class="orange font-weight-bold text-left page-header py-2 px-5"
                    >Customer Reviews ({{ totalUser }})</div>
                    <div class="row mt-2 mx-5">
                      <div class="col-lg-1 col-md-2 col-sm-2 hidden-xs">
                        <div class="thumbnail">
                          <div class="image">
                            <img
                              src="../../assets/img/profile/profile.png"
                              class="img-circle elevation-1"
                              alt="User Image"
                              style="width: 55px"
                            />
                          </div>
                          <div class="text-center">{{ comment.user_name }}</div>
                        </div>
                      </div>
                      <div class="col-lg-11 col-md-10 col-sm-10">
                        <div class="panel panel-default arrow left">
                          <div class="panel-body card px-4">
                            <header class="text-left">
                              <div class="comment-date mt-3 mb-1" style="font-size: 12px">
                                <i class="fas fa-clock mx-1"></i>
                              </div>
                              <div class="comment-user ml-2">
                                <star-rating
                                  :increment="0.5"
                                  text-class="custom-text"
                                  :read-only="true"
                                  :star-size="25"
                                />
                              </div>
                              <div class="font-weight-bold ml-2">{{ }}</div>
                              <div class="comment-post ml-1">
                                <p>{{ }}</p>
                              </div>
                            </header>
                            <div class="text-right">
                              <button
                                type="button"
                                class="btn btn-danger"
                                @click="deleteReview(comment.id)"
                              >
                                <i class="fa fa-trash"></i>
                              </button>
                            </div>
                            <p class="text-right">
                              <a href="#" class="btn btn-default btn-sm">
                                <i class="fa fa-reply"></i> reply
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="d-block text-left mt-4">
            <hr style="border:3px solid #f1f1f1" />
            <div
              class="text-center font-weight-bold p-3"
              style="background: #eee;"
            >You're reviewing: {{product.name}}</div>
            <h4 class="blue mt-3">Write your own review</h4>
            <p v-if="(userRate)" class="red">You already reviewed this product.</p>
            <h5 class="d-inline-block mb-3">Rating</h5>
            <star-rating
              v-model="rating"
              :increment="0.5"
              text-class="custom-text"
              :read-only="(userRate)"
              class="d-inline-block my-3"
              :star-size="25"
              min="1"
            ></star-rating>
            <input
              type="price"
              name="price"
              placeholder="Short description"
              class="form-control mb-2"
              maxlength="15"
            />
            <textarea
              name
              id
              class="form-control d-block"
              style="height: 170px"
              placeholder="Write your review"
              maxlength="550"
            ></textarea>
            <button type="submit" class="btn btn-primary my-3">Publish</button>
          </form>
        </tab>
        <tab name="Details">
          <div class="card">
            <div class="card-body table-responsive p-0" style="box-shadow: none">
              <table class="table table-striped table-hover text-left text-capitalize">
                <tbody>
                  <tr>
                    <td class="font-weight-bold table_item">Color</td>
                    <td>{{product.color}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold table_item">Frame Material</td>
                    <td>{{product.frame_material}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold table_item">Speed</td>
                    <td>{{product.speed}}</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold table_item">Wheel Size</td>
                    <td>{{product.wheel_size}} Inch</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold table_item">Wheel Spec</td>
                    <td>{{product.wheel_spec}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </tab>
        <tab name="Shipping & Returns">
          <div class="row text-left">
            <div class="col-md-6">
              <div class="text-uppercase font-weight-bold black">Returns policy</div>
              <div class="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum totam magni harum modi, accusamus distinctio temporibus,
                adipisci labore quaerat itaque voluptatum nihil maxime quos quia
                ex explicabo voluptas numquam minus.
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-uppercase font-weight-bold black">Shipping</div>
              <div class="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Neque odit voluptatem at expedita perspiciatis nesciunt eligendi
                maiores, sed doloribus mollitia maxime accusamus voluptatum hic
                velit veritatis tenetur, quo corporis magni.
              </div>
            </div>
          </div>
        </tab>
      </tabs>
    </div>

    <div class="newest py-5">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Related products</span>
            </div>
          </div>
        </div>
        <productsCategory :category="category" :text="'Related'" />
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      item: {},
      pQuantity: 1,
      rating: 0,
      short_description: "",
      comment: "",
      totalRate: 0,
      totalComment: 0,
      totalUserRate: 0,
      totalUser: 0,
      userRate: false,
      comments: {},
      category: "",
      bar1: 0,
      bar2: 0,
      bar3: 0,
      bar4: 0,
      bar5: 0
    };
  },
  methods: {
    loadProduct() {
      var id = this.$route.params.p_id;
      var tempProduct = this.$store.state.storeProducts.filter(
        product => product.id == id
      );
      this.product = tempProduct[0];
      this.category = this.product.type;
      this.$store.commit("addLastProduct", this.product);
      this.getTotalRating(this.product);
    },
    productQuantity(id) {
      this.item.id = id;
      this.item.quantity = this.pQuantity;
      this.$store.commit("productQuantity", this.item, this.pQuantity);
    },
    getTotalRating(product) {
      var data = product.review;
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += parseFloat(data[i]["rating"]);
        this.totalUser++;
        if (parseInt(data[i]["rating"]) == "1") {
          this.bar1 += 1;
        }
        if (parseInt(data[i]["rating"]) == "2") {
          this.bar2 += 1;
        }
        if (parseInt(data[i]["rating"]) == "3") {
          this.bar3 += 1;
        }
        if (parseInt(data[i]["rating"]) == "4") {
          this.bar4 += 1;
        }
        if (parseInt(data[i]["rating"]) == "5") {
          this.bar5 += 1;
        }
      }

      $(".bar-1").css("width", this.bar1 + "%");
      $(".bar-2").css("width", this.bar2 + "%");
      $(".bar-3").css("width", this.bar3 + "%");
      $(".bar-4").css("width", this.bar4 + "%");
      $(".bar-5").css("width", this.bar5 + "%");

      var avg = sum / product.review.length;
      this.totalRate = parseFloat(avg.toFixed(1));
    },
    imageMouseOver: function(event) {
      event.target.style.transform = "scale(2)";
    },
    imageMouseMove: function(event) {
      var self = this;
      event.target.style.transform = "scale(2)";
      self.timeout = setTimeout(function() {
        event.target.style.transformOrigin =
          ((event.pageX - event.target.getBoundingClientRect().left) /
            event.target.getBoundingClientRect().width) *
            100 +
          "% " +
          ((event.pageY -
            event.target.getBoundingClientRect().top -
            window.pageYOffset) /
            event.target.getBoundingClientRect().height) *
            100 +
          "%";
      }, 50);
      self.mouseStop = setTimeout(function() {
        event.target.style.transformOrigin =
          ((event.pageX - event.target.getBoundingClientRect().left) /
            event.target.getBoundingClientRect().width) *
            100 +
          "% " +
          ((event.pageY -
            event.target.getBoundingClientRect().top -
            window.pageYOffset) /
            event.target.getBoundingClientRect().height) *
            100 +
          "%";
      }, 100);
    },
    imageMouseOut: function(event) {
      event.target.style.transform = "scale(1)";
    }
  },
  created() {
    this.loadProduct();
  }
};
</script>

<style>
.img-wrapper {
  overflow: hidden;
}
.add-to-cart,
.add-to-compare {
  display: inline;
}
.heading {
  font-size: 25px;
  color: black;
}
.fa {
  font-size: 25px;
}
.checked {
  color: orange;
}
.table_item {
  width: 25%;
}
/* Three column layout */
.side {
  float: left;
  width: 15%;
  margin-top: 10px;
}
.middle {
  margin-top: 10px;
  float: left;
  width: 70%;
}
/* Place text to the right */
.right {
  text-align: right;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* The bar container */
.bar-container {
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: white;
}
/* Individual bars */
.bar-5 {
  height: 18px;
  background-color: #4caf50;
}
.bar-4 {
  height: 18px;
  background-color: #2196f3;
}
.bar-3 {
  height: 18px;
  background-color: #00bcd4;
}
.bar-2 {
  height: 18px;
  background-color: #ff9800;
}
.bar-1 {
  height: 18px;
  background-color: #f44336;
}
@media (max-width: 400px) {
  .side,
  .middle {
    width: 100%;
  }
  /* Hide the right column on small screens */
  .right {
    display: none;
  }
}
.user-review {
  border-radius: 50%;
  border: 2px solid grey;
  padding: 15px;
  font-size: 18px;
}
.tabs-component {
  margin: 4em 0;
}
.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}
@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}
.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}
.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}
.tabs-component-tab:hover {
  color: #666;
}
.tabs-component-tab.is-active {
  color: #000;
}
.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}
@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: 0.5em;
    transform: translateY(2px);
    transition: transform 0.3s ease;
  }
  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}
.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.75em 1em;
  text-decoration: none;
  text-transform: uppercase;
}
.tabs-component-panels {
  padding: 4em 0;
}
@media (min-width: 700px) {
  .tabs-component-panels,
  .product-info {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 4em 2em;
  }
}
.comment-list .thumbnail {
  margin-top: 30%;
}
.comment-list .row {
  margin-bottom: 0px;
}
.comment-list .panel .panel-heading {
  padding: 4px 15px;
  position: absolute;
  border: none;
  /*Panel-heading border radius*/
  border-top-right-radius: 0px;
  top: 1px;
}
.comment-list .panel .panel-heading.right {
  border-right-width: 0px;
  /*Panel-heading border radius*/
  border-top-left-radius: 0px;
  right: 16px;
}
.comment-list .panel .panel-heading .panel-body {
  padding-top: 6px;
}
.comment-list figcaption {
  /*For wrapping text in thumbnail*/
  word-wrap: break-word;
}
/* Portrait tablets and medium desktops */
@media (min-width: 768px) {
  .comment-list .arrow:after,
  .comment-list .arrow:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }
  .comment-list .panel.arrow.left:after,
  .comment-list .panel.arrow.left:before {
    border-left: 0;
  }
  .panel.panel-default.arrow.left {
    border-color: lightgrey;
  }
  /*****Left Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.left:before {
    left: 0px;
    top: 30px;
    /*Use boarder color of panel*/
    border-right-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.left:after {
    left: 1px;
    top: 31px;
    /*Change for different outline color*/
    border-right-color: #ffffff;
    border-width: 15px;
  }
  /*****Right Arrow*****/
  /*Outline effect style*/
  .comment-list .panel.arrow.right:before {
    right: -16px;
    top: 30px;
    /*Use boarder color of panel*/
    border-left-color: inherit;
    border-width: 16px;
  }
  /*Background color effect*/
  .comment-list .panel.arrow.right:after {
    right: -14px;
    top: 31px;
    /*Change for different outline color*/
    border-left-color: #ffffff;
    border-width: 15px;
  }
}
.comment-list .comment-post {
  margin-top: 6px;
}
</style>