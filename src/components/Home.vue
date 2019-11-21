<template>
  <div class="homeComponent">
    <navbar></navbar>
    <div class="banner-slide">
      <div class="slide">
        <div class="container-fluid px0">
          <div class="row">
            <div class="col-md-5">
              <div class="slide-wrapper">
                <div>
                  <div class="slide-title">
                    <div class="slide-primary">The gold</div>Standard
                  </div>
                  <div class="slide-divider my-3"></div>
                  <div class="slide-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis numquam necessitatibus beatae eveniet impedit natus nulla a placeat recusandae architecto.
                  </div>
                  <router-link to="/products" class="btn btn-slide mt-5">Shop now</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-7 banner-carousel">
              <carousel :perPage="1" :autoplay="true" :loop="true">
                <slide class="banner-01"></slide>
                <slide class="banner-02"></slide>
                <slide class="banner-03"></slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="services-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="services-icon">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="services-title">Quality guarantee</div>
                  <div class="services-text">Impedit quibusdam quaerat nemo aliquam sint minima!</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="services-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="services-icon">
                    <i class="fas fa-parachute-box"></i>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="services-title">Fast Delivery</div>
                  <div class="services-text">Impedit quibusdam quaerat nemo aliquam sint minima!</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="services-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="services-icon">
                    <i class="fas fa-exchange-alt"></i>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="services-title">Free {{"&"}} Easy Return</div>
                  <div class="services-text">Impedit quibusdam quaerat nemo aliquam sint minima!</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="services-wrapper">
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="services-icon">
                    <i class="fas fa-money-check-alt"></i>
                  </div>
                </div>
                <div class="col-lg-9 col-md-9">
                  <div class="services-title">Secured payment</div>
                  <div class="services-text">Impedit quibusdam quaerat nemo aliquam sint minima!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="categories">
      <div class="container">
        <div class="row my-4">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Top categories</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="top-wrapper">
              <div class="banner justify-content-center align-items-center d-flex">
                <img src="../assets/img/banners/home-img03.png" alt />
                <div class="p-2 text-category">
                  <div class="title-category">Road Bikes</div>
                  <div class="subtext-category mt-2 text-left">
                    <div class="ml-5">
                      <div class="p-1">
                        <span class="mr-2">
                          <i class="fas fa-arrow-right"></i>
                        </span> road bikes
                      </div>
                      <div class="p-1">
                        <span class="mr-2">
                          <i class="fas fa-arrow-right"></i>
                        </span> cyclocross bikes
                      </div>
                      <div class="p-1">
                        <span class="mr-2">
                          <i class="fas fa-arrow-right"></i>
                        </span> gravel bikes
                      </div>
                      <div class="p-1">
                        <span class="mr-2">
                          <i class="fas fa-arrow-right"></i>
                        </span> triathlon bikes
                      </div>
                      <routerLink
                        @click.native="getCategory($event)"
                        :to="{ name: 'products', params: { product: 'cyclocross', type: 'category' }}"
                        class="top-link"
                        name="cyclocross"
                      >
                        <div class="p-1">
                          <button class="btn btn-outline">
                            <span class="white font-weight-bold text-uppercase">
                              See more
                              <i class="fas fa-angle-double-right"></i>
                            </span>
                          </button>
                        </div>
                      </routerLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <routerLink
              @click.native="getCategory($event)"
              :to="{ name: 'products', params: { product: 'mountain', type: 'category' }}"
              class="top-link"
              name="mountain"
            >
              <div class="top-wrapper">
                <div class="banner justify-content-center align-items-center d-flex">
                  <img src="../assets/img/banners/home-img02.png" alt />
                  <div class="p-2 text-category">
                    <div class="title-category">Mountain Bikes</div>
                    <div class="subtext-category mt-2 text-left">
                      <div class="ml-5">
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> cross country mountain bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> trail mountain bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> downhill mountain bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> eletric mountain bikes
                        </div>
                        <div class="p-1">
                          <button class="btn btn-outline">
                            <span class="white font-weight-bold text-uppercase">
                              See more
                              <i class="fas fa-angle-double-right"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </routerLink>
          </div>
          <div class="col-md-4">
            <routerLink
              @click.native="getCategory($event)"
              :to="{ name: 'products', params: { product: 'comfort', type: 'category' }}"
              class="top-link"
              name="comfort"
            >
              <div class="top-wrapper">
                <div class="banner justify-content-center align-items-center d-flex">
                  <img src="../assets/img/banners/home-img01.png" alt />
                  <div class="p-2 text-category">
                    <div class="title-category">Comfort Bikes</div>
                    <div class="subtext-category mt-2 text-left">
                      <div class="ml-5">
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> hybrid bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> fitness bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> gravel bikes
                        </div>
                        <div class="p-1">
                          <span class="mr-2">
                            <i class="fas fa-arrow-right"></i>
                          </span> eletric bikes
                        </div>
                        <div class="p-1">
                          <button class="btn btn-outline">
                            <span class="white font-weight-bold text-uppercase">
                              See more
                              <i class="fas fa-angle-double-right ml-1"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </routerLink>
          </div>
        </div>
      </div>
    </div>

    <div class="banner">
      <div class="container">
        <div class="row my-5 text-left">
          <div class="col-md-6 col-xs-12">
            <div class="banner-wrapper">
              <div class="container">
                <div class="row p-2">
                  <div class="col-md-8">
                    <div class="mx-auto mt-4">
                      <div class="font-weight-bold text-uppercase">Accessories</div>
                      <div class="font-weight-bold">at Best prices</div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="../assets/img/banners/home-img01.png" class="card-img-top" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="banner-wrapper">
              <div class="container">
                <div class="row p-2">
                  <div class="col-md-8">
                    <div class="mx-auto mt-4">
                      <div class="font-weight-bold text-uppercase">Accessories</div>
                      <div class="font-weight-bold">at Best prices</div>
                    </div>
                  </div>
                  <div class="col-md-4 text-center">
                    <img src="../assets/img/banners/home-img03.png" class="card-img-top" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">Mountain Bikes</span>
            </div>
          </div>
        </div>
        <productsCategory :category="'mountain'" />
      </div>
    </div>

    <div class="featured">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3 my-2">Cyclocross Bikes</span>
            </div>
          </div>
        </div>
        <productsCategory :category="'road'" />
      </div>
    </div>

    <div class="newest py-5">
      <div class="container">
        <div class="row">
          <div class="title-categories">
            <div class="text-left" style="border-left: 3px solid #04a7bb">
              <span class="font-weight-bold text-uppercase mx-3">New products</span>
            </div>
          </div>
        </div>
        <productsCategory :category="''" />
      </div>
    </div>
    <miniCart />
    <miniList />
    <compareList />
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "",
      type: "",
      newProducts: {},
      slickOptions: {
        slidesToShow: 1
        // Any other options that can be got from plugin documentation
      },
    };
  },
  methods: {
    getCategory(event) {
    },
    loadNewProducts() {
    }
  },
  created() {
    this.loadNewProducts();
  }
};
</script>

<style lang="scss">
.VueCarousel-dot.VueCarousel-dot--active {
  background-color: #04a7bb !important;
}
.banner-slide .slide {
  height: 450px;
  width: 100%;
  align-items: center;
  display: flex;
  background: rgb(22, 34, 42);
  padding: 10px 30px;
  .slide-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 90px;
    .slide-title {
      color: #04a7bb;
      font-size: 40px;
      text-transform: uppercase;
      line-height: 2.3rem;
      .slide-primary {
        letter-spacing: 0.18rem;
        font-weight: bold;
      }
    }
    .slide-divider {
      width: 12%;
      border: 2px solid #fff;
    }
    .slide-text {
      font-size: 14px;
      color: #fff;
    }
    .btn-slide {
      background: transparent;
      border-radius: 50px;
      border: 1px solid #04a7bb;
      color: #04a7bb;
      text-transform: uppercase;
      padding: 10px 30px;
      &:hover {
        background: #04a7bb;
        color: #fff;
      }
    }
  }
}
.banner-slide .banner-01 {
  background: url("../assets/img/banners/banner-01.jpg") no-repeat center center;
  background-size: cover;
  background-size: cover; /* or contain depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  padding: 0;
  height: 250px;
}
.banner-slide .banner-02 {
  background: url("../assets/img/banners/banner-02.jpeg") no-repeat center center;
  background-size: cover;
  color: #fff;
  display: flex;
}
.banner-slide .banner-03 {
  background: url("../assets/img/banners/banner-03.jpg") no-repeat center center;
  background-size: cover;
  color: #fff;
  display: flex;
}
@media (max-width: 767px) {
  .banner-carousel {
    display: none;
  }
}
@media (max-width: 390px) {
  .top-wrapper img {
    width: 75%;
  }
}
@media (min-width: 768px) {
  .top-wrapper img {
    width: 90%;
  }
}
@media (min-width: 1200px) {
  .top-wrapper img {
    width: auto;
  }
}
.VueCarousel-navigation-prev {
  font-family: "Font Awesome 5 Free" !important;
  content: ">";
  font-weight: 900;
}
.VueCarousel-navigation-next {
  color: #000;
  font-family: "Font Awesome 5 Free" !important;
  content: "\f054";
  font-weight: 900;
  font-style: normal;
  text-decoration: inherit;
}
.VueCarousel-dot-container {
  margin-top: 0;
}
.banner-wrapper {
  margin-top: 20px;
  background: #eee;
  color: #636b6f;
}
@media only screen and (min-width: 992px) {
  .banner-wrapper img {
    height: 100px;
  }
}
// Services
.services-wrapper {
  padding: 35px 10px;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  .services-icon {
    background: #04a7bb;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
    width: 43px;
    height: 43px;
    transform: rotate(45deg);
    margin: 0 auto;
    i {
      height: 15px;
      width: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 3px #000;
      transform: rotate(-45deg);
    }
  }
  .services-title {
    font-weight: bold;
    line-height: 1.2rem;
  }
  .services-text {
    height: 55px;
    color: gray;
  }
}
@media (max-width: 767px) {
  .services-wrapper {
    text-align: center;
    .services-title {
      margin-top: 15px;
    }
  }
}
// End Of Services Section
.top-link {
  color: #636b6f;
}
.top-link:hover {
  text-decoration: none;
}
.top-wrapper {
  margin: -5px;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  .banner {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url("../assets/img/banners/simple-background-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 325px;
    .text-category,
    .subtext-category {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
    }
  }
  .title-category {
    text-align: center;
  }
  .text-category {
    left: 11px;
    right: 11px;
    transition: all 0.3s ease-in-out;
    .subtext-category {
      font-size: 12px;
      left: 0px;
      right: 0px;
      visibility: hidden;
      opacity: 0;
      -webkit-transition: opacity 300ms, visibility 300ms;
      transition: opacity 300ms, visibility 300ms;
      i {
        color: #17a2b8 !important;
      }
    }
  }
  &:hover .text-category {
    color: #17a2b8 !important;
    transform: translateY(-350%);
  }
  &:hover .subtext-category {
    visibility: visible;
    opacity: 1;
  }
}
.top-icons {
  margin: 25px;
}
.top-icons i {
  font-size: 40px;
  line-height: 1.5;
}
</style>