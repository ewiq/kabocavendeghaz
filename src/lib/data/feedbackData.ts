export interface Feedback {
	id: number;
	name: string;
	country: string;
	text: string;
	rating: number;
}

export const feedbacks: Feedback[] = [
	{
		id: 1,
		name: 'Júlia',
		country: 'Magyarország',
		text: 'Gyönyörű a ház, nagyon kedvesek a szállásadók. A reggeli kiváló volt. A szállás igényesen van berendezve, minden nagyon kényelmes és otthonos. Kisgyermekkel érkeztünk, nagyon sok játék állt rendelkezésre, így ő is nagyon élvezte az ottlétet.',
		rating: 5
	},
	{
		id: 2,
		name: 'Jan',
		country: 'Slovenia',
		text: "Rooms were big and comfortable, there was really a lot of space, there's a piano which we really loved. Place was clean and had everything that we needed. Owner and his wife were responsive and really really helpful.",
		rating: 5
	},
	{
		id: 3,
		name: 'Zsuzsanna',
		country: 'Magyarország',
		text: 'A vendégház egyszerűen gyönyörű, nagyon barátságos, finom ízléssel berendezett, és jól felszerelt. Isteni reggelit kaptunk, mindenből a legjobb minőséget tették az asztalra, külön dícséret illeti a szállásadók saját készítésű házilekvárait. És a szállásadók is igazán kedvesek voltak!',
		rating: 5
	},
	{
		id: 4,
		name: 'Éva',
		country: 'Magyarország',
		text: 'Nagyon tetszetős annak ellenére, hogy régi bútorok vannak a szobákban. Közel a központhoz, komphoz. A házigazda készséges és türelmes volt, pedig többször módosítottam a foglalást. Tágasak a helyiségek, bőven elfer benne egy nagy család vagy baráti társaság. Nagyon meglepett - jó értelemben - a kis kápolna ami a kertben található. Jó volt egy kicsit elcsendesiteni az elmét. Mindenkinek csak ajánlani tudom.',
		rating: 5
	}
];
