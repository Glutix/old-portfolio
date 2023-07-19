import React, { useState, useEffect } from "react";
import arrow from "../assets/icons/arrow-scroll.svg";

const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const shouldShowButton = scrollTop > 200;

		setIsVisible(shouldShowButton);
	};

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}, 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
			className={`scroll-to-top ${isVisible ? "visible" : ""}`}
			onClick={scrollToTop}
		>
			<img src={arrow} alt="icon-arrow" />
		</button>
	);
};

export default ScrollToTop;
