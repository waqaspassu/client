import React from "react";
import Icon from "../../../assets/icon.png";
import goBackImg from "../../../assets/b.jpg";
import "./goback.css";

const GoBack = () => {
	return (
		<>
			<div className="goback_slider">
				<div className="goback_head">
					<h2 className="goback_heading">We`ve go your back</h2>
				</div>

				<div className="goback_contents">
					<div className="main-box-list">
						<div className="goback_content_list">
							<img className="goback_content_list_icon" src={Icon} alt="imag"/>
							<p>
								Every Mozaicalist service you offer is <br />
								covered by the Mozaicalist Guarantee.
							</p>
						</div>

						<div className="goback_content_list">
							<img  className="goback_content_list_icon" src={Icon} alt="imag"/>
							<p>
							Self secure and conveient online <br />
							payment
							</p>
						</div>

						<div className="goback_content_list">
							<img  className="goback_content_list_icon" src={Icon} alt="imag"/>
							<p>
						 A world class support team that has your <br />
							 back around the clock
							</p>
						</div>

						<div className="goback_content_list">
							<img  className="goback_content_list_icon" src={Icon} alt="imag"/>
							<p>
								Build on trust the artist and client must <br />
							add a government identification
							</p>
						</div>

						<div className="goback_content_list">
							<img  className="goback_content_list_icon" src={Icon} alt="imag"/>
							<p>
								Every Artist is personally evaulated by our <br />
						 team to approved to the platform
							</p>
						</div>
					</div>
					<div className="goback_contents_image">
						<img  src={goBackImg} />
					</div>
				</div>
			</div>
		</>
	);
};

export default GoBack;
