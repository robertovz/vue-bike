<template>
  <footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Heading 1</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#">Payment Center</a>
                </li>
                <li>
                  <a href="#">Contact Directory</a>
                </li>
                <li>
                  <a href="#">Forms</a>
                </li>
                <li>
                  <a href="#">News and Updates</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Heading 2</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Website Tutorial</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Webmaster</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <!--Column1-->
            <div class="footer-pad">
              <h4>Heading 3</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Products 1</a>
                </li>
                <li>
                  <a href="#">Products 2</a>
                </li>
                <li>
                  <a href="#">Products 3</a>
                </li>
                <li>
                  <a href="#">Products 4</a>
                </li>
                <li>
                  <a href="#">Products 5</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <h4>Subscribe to our newsletter</h4>
            <form class="form-inline my-2 my-lg-0">
              <input type="text" class="form-control" placeholder="Subscribe" />
              <div class="input-group-prepend">
                <button class="btn btn-outline-info my-2">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
            <h4>Follow Us</h4>
            <ul class="social-network social-circle">
              <li>
                <a href="#" class="icoFacebook" title="Facebook">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" class="icoLinkedin" title="Linkedin">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" class="icoFacebook" title="Facebook">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" class="icoLinkedin" title="Linkedin">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">&copy; Copyright 2019 - Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background: #16222a;
  color: white;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 10;
}
footer a {
  color: #fff;
  font-size: 14px;
  transition-duration: 0.2s;
}
footer a:hover {
  color: #04a7bb;
  text-decoration: none;
}
.copy {
  font-size: 12px;
  padding: 5px;
  border-top: 1px solid #ffffff;
  margin-top: 20px;
}
.footer-pad {
  padding-top: 1.5em;
  padding-bottom: 2.5em;
}
.footer-middle {
  padding-top: 2em;
  color: white;
}
/*SOCİAL İCONS*/
/* footer social icons */
ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}
ul.social-network li {
  display: inline;
  margin: 0 2px;
}
/* footer social icons */
.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}
.social-network a.icoLinkedin:hover {
  background-color: #007bb7;
}
.social-network a.icoFacebook:hover i,
.social-network a.icoLinkedin:hover i {
  color: #fff;
}
.social-network a.socialIcon:hover,
.socialHoverClass {
  color: #44bcdd;
}
.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;
}
.social-circle li i {
  margin: 0;
  line-height: 30px;
  text-align: center;
}
.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}
.social-circle i {
  color: #595959;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}
.social-network a {
  background-color: #f9f9f9;
}
</style>