export interface BlogPostSummary {
    id: number;
    title: string;
    slug: string;
    createdAt: string;
    excerpt: string;
    coverImageLocation: string;
}

export const mockPostsSummaries: BlogPostSummary[] = [
  {
    id: 1,
    title: "Porcelana z XIX wieku",
    slug: "porcelana-z-xix-wieku",
    createdAt: "2024-05-15T12:00:00",
    excerpt: "Filiżanka z Miśni, ręcznie zdobiona, pochodzi z 1870 roku...",
    coverImageLocation: "/images/blog/porcelana-1.jpg",
  },
  {
    id: 2,
    title: "Rosenthal – historia w porcelanie",
    slug: "rosenthal-historia",
    createdAt: "2024-05-14T10:30:00",
    excerpt: "Poznaj wyjątkowe serie Rosenthal z XX wieku...",
    coverImageLocation: "/images/blog/rosenthal.jpg",
  },
  {
    id: 3,
    title: "Sekrety znaków na porcelanie",
    slug: "znaki-na-porcelanie",
    createdAt: "2024-05-13T08:15:00",
    excerpt: "Dowiedz się, jak rozszyfrować znaki wytwórni i datowanie porcelany.",
    coverImageLocation: "/images/blog/znaki.jpg",
  },
  {
    id: 4,
    title: "Najcenniejsze zegary antyczne",
    slug: "zegary-antyczne",
    createdAt: "2024-05-12T11:45:00",
    excerpt: "Francuskie zegary kominkowe i ich wartość kolekcjonerska.",
    coverImageLocation: "/images/blog/zegar-1.jpg",
  },
  {
    id: 5,
    title: "Jak dbać o porcelanę?",
    slug: "jak-dbac-o-porcelane",
    createdAt: "2024-05-11T13:20:00",
    excerpt: "Sprawdzone metody pielęgnacji starych filiżanek i figurek.",
    coverImageLocation: "/images/blog/pielegnacja.jpg",
  },
  {
    id: 6,
    title: "Unikatowe filiżanki z epoki secesji",
    slug: "filizanki-secesja",
    createdAt: "2024-05-10T17:00:00",
    excerpt: "Secesyjne zdobienia, złocenia i inspiracje naturą w porcelanie.",
    coverImageLocation: "/images/blog/secesja.jpg",
  },
  {
    id: 7,
    title: "Porcelanowe figurki – sztuka miniatury",
    slug: "figury-porcelanowe",
    createdAt: "2024-05-09T15:10:00",
    excerpt: "Mistrzowie rzeźby w porcelanie – figurki z Miśni i Volkstedt.",
    coverImageLocation: "/images/blog/figurki.jpg",
  },
  {
    id: 8,
    title: "Porcelana w stylu empire",
    slug: "porcelana-empire",
    createdAt: "2024-05-08T09:25:00",
    excerpt: "Jak rozpoznać porcelanę empire i co ją wyróżnia?",
    coverImageLocation: "/images/blog/empire.jpg",
  },
  {
    id: 9,
    title: "Porcelana z Ćmielowa – polska duma",
    slug: "porcelana-cmielow",
    createdAt: "2024-05-07T10:50:00",
    excerpt: "Legendarna polska marka z ponad 200-letnią historią.",
    coverImageLocation: "/images/blog/cmielow.jpg",
  },
  {
    id: 10,
    title: "Jak ocenić wartość antyku?",
    slug: "jak-ocenic-antyk",
    createdAt: "2024-05-06T08:40:00",
    excerpt: "Czynniki wpływające na cenę antyków: wiek, sygnatura, stan.",
    coverImageLocation: "/images/blog/ocena.jpg",
  },
  {
    id: 11,
    title: "Mity na temat starej porcelany",
    slug: "mity-o-porcelanie",
    createdAt: "2024-05-05T13:30:00",
    excerpt: "Czy każda stara filiżanka jest cenna? Obalamy mity.",
    coverImageLocation: "/images/blog/mity.jpg",
  },
  {
    id: 12,
    title: "Filiżanka jako prezent – co wybrać?",
    slug: "filizanka-na-prezent",
    createdAt: "2024-05-04T12:00:00",
    excerpt: "Elegancki prezent z duszą: jak wybrać filiżankę z historią?",
    coverImageLocation: "/images/blog/prezent.jpg",
  },
  {
    id: 13,
    title: "Sygnatury Meissen – jak je rozpoznać?",
    slug: "meissen-sygnatury",
    createdAt: "2024-05-03T16:10:00",
    excerpt: "Podwójny miecz i inne znaki wytwórni z Miśni.",
    coverImageLocation: "/images/blog/meissen.jpg",
  },
  {
    id: 14,
    title: "Najbardziej poszukiwane serie Rosenthal",
    slug: "rosenthal-top-serie",
    createdAt: "2024-05-02T09:45:00",
    excerpt: "Które kolekcje Rosenthal cieszą się największym uznaniem?",
    coverImageLocation: "/images/blog/rosenthal-serie.jpg",
  },
  {
    id: 15,
    title: "Jak rozpoznać porcelanę ręcznie malowaną?",
    slug: "porcelana-recznie-malowana",
    createdAt: "2024-05-01T10:20:00",
    excerpt: "Porady dla początkujących kolekcjonerów i miłośników detali.",
    coverImageLocation: "/images/blog/recznie.jpg",
  },
];
