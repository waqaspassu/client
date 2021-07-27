import React from "react";
import Imagelogo from "../../../assets/earn_one.png";
import Itemimg from "../../../assets/1.jpg";
import "./styles.css";

const Work = () => {
	return (
		<>
			<div className="steps-box">
			<h2 className="goback_heading">We`ve go your back</h2>
				<div className="steps-item">
					<div className="steps-item-content">
						<h4>List yourself for free</h4>
						<p>
							Set your price, add photos, videos, and details, then your listing
							is ready to be seen by millions of people searching for artists.
						</p>
					</div>
					<div className="steps-item-icon"><div className="nbmr">1</div><div className="steps-item-tail"></div></div>
					
					<div className="steps-item-content">
						<img src={Itemimg} alt="Itemimg" />
					</div>
				</div>
				<div className="steps-item">
					<div className="steps-item-content">
						<img src={Itemimg} alt="Itemimg" />
					</div>
					<div className="steps-item-icon"><div className="nbmr">1</div><div className="steps-item-tail"></div></div>
					<div className="steps-item-content">
						<h4>List yourself for free</h4>
						<p>
							Set your price, add photos, videos, and details, then your listing
							is ready to be seen by millions of people searching for artists.
						</p>
					</div>
					
				</div>
				{/* <div className="steps-item">
					<div className="steps-item-content">
						<img src={Itemimg} alt="Itemimg" />
					</div>
					<div className="steps-item-icon"><span className="nbmr">2</span><div className="steps-item-tail"></div></div>
					<div className="steps-item-content">
						<h4>List yourself for free</h4>
						<p>
							Set your price, add photos, videos, and details, then your listing
							is ready to be seen by millions of people searching for artists.
						</p>
					</div>
					
				</div> */}
			</div>
		</>
	);
};

export default Work;
