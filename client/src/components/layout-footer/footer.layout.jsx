import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
/*<div className="col-4 offset-1 col-sm-2">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>
								<Link style={{ color: "#FFF" }} className="nav-link" to="/home">
									Home
								</Link>
							</li>
							<li>
								<Link
									style={{ color: "#FFF" }}
									className="nav-link"
									to="/about"
								>
									About
								</Link>
							</li>
							<li>
								{" "}
								<Link style={{ color: "#FFF" }} className="nav-link" to="/menu">
									Menu
								</Link>
							</li>
							<li>
								{" "}
								<Link
									style={{ color: "#FFF" }}
									className="nav-link"
									to="/contact"
								>
									Contact
								</Link>
							</li>
</ul>
</div>*/
export default function Footer() {
	return (
		<div className="footer-basic">
			<footer>
				<div className="social text-center">
					<a className="btn btn-google" href="http://google.com/+">
						<i className="fa fa-google-plus"></i>
					</a>
					<a
						className="btn btn-facebook"
						href="http://www.facebook.com/profile.php?id="
					>
						<i className="fa fa-facebook"></i>
					</a>
					<a className="btn btn-linkedin" href="http://www.linkedin.com/in/">
						<i className="fa fa-linkedin"></i>
					</a>
					<a className="btn btn-twitter" href="http://twitter.com/">
						<i className="fa fa-twitter"></i>
					</a>
					<a className="btn btn-google" href="http://youtube.com/">
						<i className="fa fa-youtube"></i>
					</a>
					<a className="btn " href="mailto:">
						<i className="fa fa-envelope-o"></i>
					</a>
				</div>
				<ul className="list-inline">
					<li className="list-inline-item">
						<a>Home</a>
					</li>
					<li className="list-inline-item">
						<a>Services</a>
					</li>
					<li className="list-inline-item">
						<a>About</a>
					</li>
					<li className="list-inline-item">
						<a>Terms</a>
					</li>
					<li className="list-inline-item">
						<a>Privacy Policy</a>
					</li>
				</ul>
				<br />
				<p className="copyright">Crown Fusion Shop © 2022</p>
			</footer>
		</div>
	);
	/* return (
		<footer className="footer  w-100">
			<div className="container w-100">
				<div className="row">
					<div className="col-7 col-sm-5">
						<h5>Our Address</h5>
						<address>
							121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG
							<i className="fa fa-phone fa-lg"></i>: +852 1234 5678
							<i className="fa fa-fax fa-lg"></i>: +852 8765 4321
							<i className="fa fa-envelope fa-lg"></i>:
							<a href="mailto:confusion@food.net">confusion@food.net</a>
						</address>
					</div>
					<div className="col-12 col-sm-4 align-self-center">
						<div className="text-center">
							<a
								className="btn btn-social-icon btn-google"
								href="http://google.com/+"
							>
								<i className="fa fa-google-plus"></i>
							</a>
							<a
								className="btn btn-social-icon btn-facebook"
								href="http://www.facebook.com/profile.php?id="
							>
								<i className="fa fa-facebook"></i>
							</a>
							<a
								className="btn btn-social-icon btn-linkedin"
								href="http://www.linkedin.com/in/"
							>
								<i className="fa fa-linkedin"></i>
							</a>
							<a
								className="btn btn-social-icon btn-twitter"
								href="http://twitter.com/"
							>
								<i className="fa fa-twitter"></i>
							</a>
							<a
								className="btn btn-social-icon btn-google"
								href="http://youtube.com/"
							>
								<i className="fa fa-youtube"></i>
							</a>
							<a className="btn btn-social-icon" href="mailto:">
								<i className="fa fa-envelope-o"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>© Copyright 2018 Ristorante Con Fusion</p>
					</div>
				</div>
			</div>
		</footer>
	); */
}
