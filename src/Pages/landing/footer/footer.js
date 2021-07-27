import React from "react";
import "./footer.css";
import footerImage from "../../../assets/footer.png";
import footerImage_one from "../../../assets/foo_one.png";
import facebookImage from "../../../assets/facebook.png";
import instaImage from "../../../assets/insta.png";
import twiterImage from "../../../assets/twiter.png";
import circleImage from "../../../assets/circle.png";

const Footer = () => {
	return (
		<>
			<div className="footer_slider">
				<div className="footer_contents">
					<div className="footer_content_list">
						<img className="footer_content_list_image" src={footerImage}></img>
						<h3 className="footer_content_list_heading">
							24/7 customer support
						</h3>
					</div>

					<div className="footer_content_list">
						<img
							className="footer_content_list_image"
							src={footerImage_one}
						></img>
						<h3 className="footer_content_list_heading">
							Greate Artist gurantee
						</h3>
					</div>

					<div className="footer_content_list">
						<img className="footer_content_list_image" src={circleImage}></img>
						<h3 className="footer_content_list_heading">Verfied ID</h3>
					</div>
				</div>

				<div className="divider"></div>

				<div className="footer_contents_two_items">
					<div>
						<h4 style={{ color: "white" }}>Mozaicalist</h4>
						<p style={{ color: "#ccc" }}>About</p>
						<p style={{ color: "#ccc" }}>Contact US</p>
					</div>

					<div>
						<h4 style={{ color: "white" }}>Discover</h4>
						<p style={{ color: "#ccc" }}>terms & safty</p>
						<p style={{ color: "#ccc" }}>travel credit</p>
					</div>

					<div>
						<h4 style={{ color: "white" }}>Artist</h4>
						<p style={{ color: "#ccc" }}>Become an Artist</p>
						<p style={{ color: "#ccc" }}>terms & policy</p>
					</div>

					<div>
						<img className="footer_slider_fa_image" src={facebookImage}></img>
						<img className="footer_slider_fa_image" src={instaImage}></img>
						<img className="footer_slider_fa_image" src={twiterImage}></img>
						<div>
							<p style={{ color: "#ccc", marginLeft: "20px" }}>Mozaicalist</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
