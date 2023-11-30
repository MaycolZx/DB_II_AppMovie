import '../../assets/css/bootstrap.min.css'
import '../../assets/css/icofont.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/responsive.css'
import '../../assets/css/slicknav.min.css'
import '../../assets/css/style.css'

export default function NavBar(){

    return (
        <div class="container">
			<div class="header-area">
				<div class="logo">
					<a href="index-2.html"><img src="../../assets/img/logo.png" alt="logo" /></a>
				</div>
				<div class="header-right">
					<form action="#">
						<select>
							<option value="Movies">Movies</option>
							<option value="Movies">Movies</option>
							<option value="Movies">Movies</option>
						</select>
						<input type="text"/>
						<button><i class="icofont icofont-search"></i></button>
					</form>
					<ul>
						<li><a href="#">Welcome Guest!</a></li>
						<li><a class="login-popup" href="#">Login</a></li>
					</ul>
				</div>
				<div class="menu-area">
					<div class="responsive-menu"></div>
				    <div class="mainmenu">
                        <ul id="primary-menu">
                            <li><a href="index-2.html">Home</a></li>
                            <li><a href="movies.html">Movies</a></li>
                            <li><a href="celebrities.html">CelebritiesList</a></li>
                            <li><a href="top-movies.html">Top Movies</a></li>
                            <li><a class="active" href="blog.html">News</a></li>
							<li><a href="#">Pages <i class="icofont icofont-simple-down"></i></a>
								<ul>
									<li><a href="blog-details.html">Blog Details</a></li>
									<li><a href="movie-details.html">Movie Details</a></li>
								</ul>
							</li>
                            <li><a class="theme-btn" href="#"><i class="icofont icofont-ticket"></i>Tickets</a></li>
                        </ul>
				    </div>
				</div>
			</div>
		</div>
    )
}