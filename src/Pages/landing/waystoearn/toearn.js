import React from "react";
import Imagelogo from "../../../assets/earn_one.png";
import "./toearn.css";

const WaysToEarn = () => {
	return (
		<>
			<div className="waystoearn_slider">
				<div className="waystoearn_head">
					<h2 className="waystoearn_heading">Two ways to earn</h2>
				</div>

				<div className="waystoearn_contents">
					<div className="waystoearn_content_one">
						<div className="waystoearn_content_slider">
							<img src={Imagelogo}></img>
						</div>
						<div className="waystoearn_para_head">
							<h3 className="waystoearn_contents_heading">Events</h3>
							<p className="waystoearn_para_heading">
								Showcase your talent. Our platform will attract <br />
								the client for you and all you need to do <br /> is show up and
								create a <br />
								great experience for your performance.
							</p>
						</div>
					</div>

					<div className="waystoearn_content_one">
						<div className="waystoearn_content_slider">
							<img src={Imagelogo}></img>
						</div>
						<div className="waystoearn_para_head">
							<h3 className="waystoearn_contents_heading">Private Lessons</h3>
							<p className="waystoearn_para_heading">
								Earn when you teach your craft to the client <br />
								you will have a option to teach in <br />
								person or remotly so that other people <br />
								could learn to produce the art you do
							</p>
						</div>
					</div>
				</div>

				<div className="waystoearn_btn">
					<button className="waystoearn_button">Become an Artist</button>
				</div>
			</div>
		</>
	);
};

export default WaysToEarn;
