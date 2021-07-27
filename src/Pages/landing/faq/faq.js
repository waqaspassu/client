import React, { useState } from "react";
import "./faq.css";
import downLogo from "../../../assets/down.png";
import upLogo from "../../../assets/uplogo.png";
const Faq = () => {
	// const [box, setBox] = useState(false);


	const des = {
		left:[
		{
			id:1,
			title: "Who can be the mozacalist",
			isShow: true,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		},
		{
			id:2,
			title: "Who can be the mozacalist",
			isShow: false,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		}],
		right:[
		{
			id:3,
			title: "Who can be the mozacalist",
			isShow: false,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		},
		{
			id:4,
			title: "Who can be the mozacalist",
			isShow: false,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		},
		{
			id:5,
			title: "Who can be the mozacalist",
			isShow: false,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		},
		{
			id:6,
			title: "Who can be the mozacalist",
			isShow: false,
			discription:
				"All kinds of artists do well on Mozaicalist – from photographers and dancers to musicians and painters. People come to Mozaicalist looking for artists to perform in their private events, clubs, weddings, and festivals. Additionally, you can share you@0.75X.png",
		},
	]};


	const [faqData, setFaqData] = useState(des)
	const handleBoxSize = (item) => {
		let res = faqData.right.map((data,idex)=>{
			console.log({data})
				return {
					isShow:!data.isShow,
					...data
				}
		})
		console.log(res)
	};
	return (
		<div className="faq_slider">
			<div className="faq_slider_head">
				<h2 className="faq_slider_heading">FAQ</h2>
			</div>
			<div className="faq_main">
				<div className="left_section">
					{
						faqData.left.map((item,index)=>{
							return(
								<div
									className={`item${[index+1]} ${item.isShow
										? "faq_content_box_one"
										: "faq_content_box_one_differ"}`
									
									}
								>
									<div className="faq_content_boxone_flex">
										<h3>{item.title}</h3>
										<img
											onClick={()=> handleBoxSize(item)}
											style={{ cursor: "pointer" }}
											src={item.isShow ? upLogo : downLogo}
										/>
									</div>
									<p
										className={
											item.isShow 
												? "faq_content_boxone_flex_para"
												: "faq_content_boxone_flex_para_two"
										}
									>
										Test
									</p>
								</div>
							)
						})
					}
				</div>
				<div className="right_section">
				{
						faqData.right.map((item,index)=>{
							return(
								<div
									className={`item${[index+1]} ${item.isShow
										? "faq_content_box_one"
										: "faq_content_box_one_differ"}`
									
									}
								>
									<div className="faq_content_boxone_flex">
										<h3>{item.title}</h3>
										<img
											onClick={()=> handleBoxSize(item)}
											style={{ cursor: "pointer" }}
											src={item.isShow ? upLogo : downLogo}
										/>
									</div>
									<p
										className={
											item.isShow 
												? "faq_content_boxone_flex_para"
												: "faq_content_boxone_flex_para_two"
										}
									>
										Test
									</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Faq;
