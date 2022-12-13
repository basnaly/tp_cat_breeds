const booleanOptions = [
	{key: '0', text: 'false'},
	{key: '1', text: 'true'}
]

const starOptions = [
	{key: '1', text: '⭐️'},
	{key: '2', text: '⭐️⭐️'},
	{key: '3', text: '⭐️⭐️⭐️'},
	{key: '4', text: '⭐️⭐️⭐️⭐️'},
	{key: '5', text: '⭐️⭐️⭐️⭐️⭐️'},
]

export const FILTERABLE_CATS_PROPERTIES = [
	{ key: 'origin', text: 'Origin', options: [] },
    { key: 'lap', text: 'Lap', options: starOptions },
	{ key: 'adaptability', text: 'Adaptability', options: starOptions },
	{ key: 'affection_level', text: 'Affection level', options: starOptions },
	{ key: 'child_friendly', text: 'Child friendly', options: starOptions },
	{ key: 'dog_friendly', text: 'Dog friendly', options: starOptions },
	{ key: 'energy_level', text: 'Energy level', options: starOptions },
	{ key: 'grooming', text: 'Grooming', options: starOptions },
	{ key: 'health_issues', text: 'Health issues', options: starOptions },
	{ key: 'intelligence', text: 'Intelligence', options: starOptions },
	{ key: 'shedding_level', text: 'Shedding level', options: starOptions },
	{ key: 'social_needs', text: 'Social needs', options: starOptions },
	{ key: 'stranger_friendly', text: 'Stranger friendly', options: starOptions },
	{ key: 'vocalisation', text: 'Vocalisation', options: starOptions },
	{ key: 'experimental', text: 'Experimental', options: booleanOptions },
	{ key: 'hairless', text: 'Hairless', options: booleanOptions },
	{ key: 'rare', text: 'Rare', options: booleanOptions },
	{ key: 'hypoallergenic', text: 'Hypoallergenic', options: booleanOptions },
]