import { HTMLAttributes } from "react";

export const IconArrowRight: React.FC<HTMLAttributes<SVGSVGElement>> = function (props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	);
};
