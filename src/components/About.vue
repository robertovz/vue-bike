<template>
  <div>
    <navbar />
    <div class="container my-4">
      <div class="about-wrapper">
        <div class="row mt-4">
          <div class="col-10 col-lg-6 mx-auto">
            <div class="img-wrapper mt-4 ml-3">
              <img src="../assets/img/banners/bike-banner-03.png" alt />
            </div>
          </div>
          <div class="col-10 col-lg-6 mx-auto">
            <p class="p-3">
              In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.
            </p>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-10 col-lg-6 mx-auto">
            <p class="p-3">
              In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.In vel odio eu enim dignissim tempor et vitae lorem.
              Curabitur non placerat quam, eu volutpat dui.
            </p>
          </div>
          <div class="col-10 col-lg-6 mx-auto">
            <div class="img-wrapper mt-4 mr-3">
              <img src="../assets/img/banners/bike-banner-02.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="preferences">
      <div class="row">
        <div class="col-12 preferences-text">
          <h1 class="text-capitalize m-2 mt-5 mx-auto text-center font-weight-bold">why choose us</h1>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-md-10 mx-auto">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="preferences-wrapper">
                <h4 class="text-center font-weight-bold">Professional</h4>
                <p class>
                  In vel odio eu enim dignissim tempor et vitae lorem.
                  Curabitur non placerat quam, eu volutpat dui.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="preferences-wrapper">
                <h4 class="text-center font-weight-bold">Modern products</h4>
                <p class>
                  In vel odio eu enim dignissim tempor et vitae lorem.
                  Curabitur non placerat quam, eu volutpat dui.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="preferences-wrapper">
                <h4 class="text-center font-weight-bold">Satisfaction guaranteed</h4>
                <p class>
                  In vel odio eu enim dignissim tempor et vitae lorem.
                  Curabitur non placerat quam, eu volutpat dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<style lang="scss">
.about-wrapper {
  background: #f2f3f7;
  border: 1px solid lightgrey;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  img {
    width: 100%;
  }
}

.preferences {
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/img/banners/bike-banner.png") center/cover no-repeat;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
  .preferences-wrapper {
    background: rgba(255, 255, 255, 0.4);
    padding: 20px;
    margin: 5px;
    font-weight: 500;
  }
  @media screen and (max-width: 1200px) {
    .preferences-wrapper {
      height: 220px;
    }
  }
}
</style>