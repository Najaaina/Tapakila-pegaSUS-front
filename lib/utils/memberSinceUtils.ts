// Calculer "membre depuis"

const memberSince = (dateCreationUser : Date) => {
	const creationDate = new Date(dateCreationUser);
	return creationDate.toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export default memberSince;