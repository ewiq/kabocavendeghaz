export interface Feedback {
	id: number;
	name: string;
	country: string;
	text: string;
	rating: number;
}

// This function creates feedback objects using the current language messages
export function getFeedbacks(m: any): Feedback[] {
	return [
		{
			id: 1,
			name: m.feedbacks_1_name(),
			country: m.feedbacks_1_country(),
			text: m.feedbacks_1_text(),
			rating: parseInt(m.feedbacks_1_rating())
		},
		{
			id: 2,
			name: m.feedbacks_2_name(),
			country: m.feedbacks_2_country(),
			text: m.feedbacks_2_text(),
			rating: parseInt(m.feedbacks_2_rating())
		},
		{
			id: 3,
			name: m.feedbacks_3_name(),
			country: m.feedbacks_3_country(),
			text: m.feedbacks_3_text(),
			rating: parseInt(m.feedbacks_3_rating())
		},
		{
			id: 4,
			name: m.feedbacks_4_name(),
			country: m.feedbacks_4_country(),
			text: m.feedbacks_4_text(),
			rating: parseInt(m.feedbacks_4_rating())
		}
	];
}
