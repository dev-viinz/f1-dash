import Image from "next/image";

import rainIcon from "../../../public/icons/cloud.rain.svg";
import noRainIcon from "../../../public/icons/cloud.heavyrain.svg";

type Props = {
	rain: boolean;
};

export default function RainComplication({ rain }: Props) {
	return (
		<div className="flex h-[55px] w-[55px] items-center justify-center rounded-[100px] bg-black">
			{rain ? (
				<Image src={rainIcon} alt="rain" className="h-[25px]" />
			) : (
				<Image src={noRainIcon} alt="no rain" className="h-[25px]" />
			)}
		</div>
	);
}
