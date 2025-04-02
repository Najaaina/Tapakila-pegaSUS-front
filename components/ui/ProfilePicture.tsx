import Image from "next/image";
import { User } from "lucide-react";

type ProfilePictureProps = {
	name: string;
	className?: string;
};

export default function ProfilePicture({
	                                       name,
	                                       className = "",
                                       }: ProfilePictureProps) {
	return (
		<div
			className={`
      flex flex-col items-center justify-center
      w-full h-full
      ${className}
    `}
		>
			<div className="flex flex-col items-center">
				<div
					className="
          relative w-32 h-32 rounded-full overflow-hidden
          border-4 border-white dark:border-gray-800
          shadow-lg dark:shadow-gray-800/30
          md:w-40 md:h-40
          mx-auto
        "
				>
					<div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
						<Image
							src="/userPic.jpg"
							alt={`Photo de profil de ${name}`}
							width={160}
							height={160}
							className="object-cover"
							priority
						/>
					</div>
				</div>

				<h2
					className="
          mt-6 font-semibold text-xl md:text-2xl  /* Taille augmentée sur desktop */
          text-gray-900 dark:text-white
          text-center
          px-4  /* Padding pour les petits écrans */
        "
				>
					{name}
				</h2>
			</div>
		</div>
	);
}
