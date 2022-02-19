import React from "react";
import "./styles.scss";

export default function TitleBanner() {
	return (
		<div className="title-banner">
			<div className="row">
				<div className="col cont">
					<header className="row">
						<h2>Crown Fusion</h2>
					</header>
					<div id="fashion" className="row">
						<h1>
							We take inspiration from the World's best cuiisines, and craet a
							uniqu fusion experieice. Our lipsmacking craeate will tickec will
							create
						</h1>
					</div>
				</div>
				<video
					poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
					playsInline={true}
					autoPlay={true}
					muted={true}
					loop={true}
				>
					<source
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm"
						type="video/webm"
					/>
					<source
						src="http://thenewcode.com/assets/videos/fashion.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
	);
}

/*<div className="row row-header">
<div className="col-12 col-sm-6">
  <h1>Crown Con Fusion</h1>
  <p>
    We take inspiration from the World's best cuiisines, and craet a
    uniqu fusion experieice. Our lipsmacking craeate will tickec
    will create
  </p>
</div>
</div></body>*/
