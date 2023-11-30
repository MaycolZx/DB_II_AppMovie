import '../../assets/css/bootstrap.min.css'
import '../../assets/css/icofont.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/responsive.css'
import '../../assets/css/slicknav.min.css'
import '../../assets/css/style.css'

export default function Footer(){
    return(
        <div>
            <footer class="footer">
			<div class="container">
				<div class="row">
                    <div class="col-lg-3 col-sm-6">
						<div class="widget">
							<img src="assets/img/logo.png" alt="about" />
							<p>7th Harley Place, London W1G 8LZ United Kingdom</p>
							<h6><span>Call us: </span>(+880) 111 222 3456</h6>
						</div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4>Legal</h4>
							<ul>
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Security</a></li>
							</ul>
						</div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4>Account</h4>
							<ul>
								<li><a href="#">My Account</a></li>
								<li><a href="#">Watchlist</a></li>
								<li><a href="#">Collections</a></li>
								<li><a href="#">User Guide</a></li>
							</ul>
						</div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
						<div class="widget">
							<h4>Newsletter</h4>
							<p>Subscribe to our newsletter system now to get latest news from us.</p>
							<form action="#">
								<input type="text" placeholder="Enter your email.."/>
								<button>SUBSCRIBE NOW</button>
							</form>
						</div>
                    </div>
				</div>
				<hr />
			</div>
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 text-center text-lg-left">
							<div class="copyright-content">
								<p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
							</div>
						</div>
						<div class="col-lg-6 text-center text-lg-right">
							<div class="copyright-content">
								<a href="#" class="scrollToTop">
									Back to top<i class="icofont icofont-arrow-up"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		    </footer>
            {/* <!-- footer section end --> */}
		    {/* <!-- jquery main JS --> */}
		    <script src="assets/js/jquery.min.js"></script>
		    {/* <!-- Bootstrap JS --> */}
		    <script src="assets/js/bootstrap.min.js"></script>
		    {/* <!-- Slick nav JS --> */}
		    <script src="assets/js/jquery.slicknav.min.js"></script>
		    {/* <!-- owl carousel JS --> */}
		    <script src="assets/js/owl.carousel.min.js"></script>
		    {/* <!-- Popup JS --> */}
		    <script src="assets/js/jquery.magnific-popup.min.js"></script>
		    {/* <!-- Isotope JS --> */}
		    <script src="assets/js/isotope.pkgd.min.js"></script>
		    {/* <!-- main JS --> */}
		    <script src="assets/js/main.js"></script>
        </div>
    )
}