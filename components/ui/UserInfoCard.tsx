type User = {
	name: string;
	email: string;
	creation_date: string;
};

type UserInfoCardProps = {
	user: User;
	className?: string;
};

export default function UserInfoCard({
	                                     user,
	                                     className = "",
                                     }: UserInfoCardProps) {
	const memberSince = () => {
		const creationDate = new Date(user.creation_date);
		return creationDate.toLocaleDateString("fr-FR", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<div
			className={`
      bg-white dark:bg-gray-800
      p-8 rounded-lg shadow-sm
      dark:shadow-gray-900/30
      min-h-[280px]  /* Hauteur minimale augmentée */
      flex flex-col justify-between /* Pour bien répartir l'espace */
      ${className}
    `}
		>
			<div className="space-y-6">
				<div>
					<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
						Nom
					</p>
					<p className="dark:text-white text-lg">
						{user.name}
					</p>
				</div>
				<div>
					<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Email</p>
					<p className=" dark:text-white text-lg">{user.email}</p>
				</div>
			</div>

			<div>
				<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
					Membre depuis
				</p>
				<p className=" dark:text-white text-lg">{memberSince()}</p>
			</div>
		</div>
	);
}
