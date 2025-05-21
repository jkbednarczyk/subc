export interface BlogPostSummary {
    id: number;
    title: string;
    slug: string;
    createdAt: string;
    excerpt: string;
    coverImageLocation: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  coverImageLocation: string;
  excerpt: string;
  content: string;
}

export const mockPostsSummaries: BlogPostSummary[] = [
  {
    id: 1,
    title: "Porcelana z XIX wieku",
    slug: "meissen-tajemnice-manufaktury",
    createdAt: "2024-05-15T12:00:00",
    excerpt: "Filiżanka z Miśni, ręcznie zdobiona, pochodzi z 1870 roku...",
    coverImageLocation: "/images/blog/meissen.png"
  },
  {
    id: 2,
    title: "Rosenthal – historia w porcelanie",
    slug: "rosenthal-historia",
    createdAt: "2024-05-14T10:30:00",
    excerpt: "Poznaj wyjątkowe serie Rosenthal z XX wieku...",
    coverImageLocation: "/images/blog/meissen.png"
  },
  {
    id: 3,
    title: "Sekrety znaków na porcelanie",
    slug: "znaki-na-porcelanie",
    createdAt: "2024-05-13T08:15:00",
    excerpt: "Dowiedz się, jak rozszyfrować znaki wytwórni i datowanie porcelany.",
    coverImageLocation: "/images/blog/meissen.png"
  },
  {
    id: 4,
    title: "Najcenniejsze zegary antyczne",
    slug: "zegary-antyczne",
    createdAt: "2024-05-12T11:45:00",
    excerpt: "Francuskie zegary kominkowe i ich wartość kolekcjonerska.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 5,
    title: "Jak dbać o porcelanę?",
    slug: "jak-dbac-o-porcelane",
    createdAt: "2024-05-11T13:20:00",
    excerpt: "Sprawdzone metody pielęgnacji starych filiżanek i figurek.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 6,
    title: "Unikatowe filiżanki z epoki secesji",
    slug: "filizanki-secesja",
    createdAt: "2024-05-10T17:00:00",
    excerpt: "Secesyjne zdobienia, złocenia i inspiracje naturą w porcelanie.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 7,
    title: "Porcelanowe figurki – sztuka miniatury",
    slug: "figury-porcelanowe",
    createdAt: "2024-05-09T15:10:00",
    excerpt: "Mistrzowie rzeźby w porcelanie – figurki z Miśni i Volkstedt.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 8,
    title: "Porcelana w stylu empire",
    slug: "porcelana-empire",
    createdAt: "2024-05-08T09:25:00",
    excerpt: "Jak rozpoznać porcelanę empire i co ją wyróżnia?",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 9,
    title: "Porcelana z Ćmielowa – polska duma",
    slug: "porcelana-cmielow",
    createdAt: "2024-05-07T10:50:00",
    excerpt: "Legendarna polska marka z ponad 200-letnią historią.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 10,
    title: "Jak ocenić wartość antyku?",
    slug: "jak-ocenic-antyk",
    createdAt: "2024-05-06T08:40:00",
    excerpt: "Czynniki wpływające na cenę antyków: wiek, sygnatura, stan.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 11,
    title: "Mity na temat starej porcelany",
    slug: "mity-o-porcelanie",
    createdAt: "2024-05-05T13:30:00",
    excerpt: "Czy każda stara filiżanka jest cenna? Obalamy mity.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 12,
    title: "Filiżanka jako prezent – co wybrać?",
    slug: "filizanka-na-prezent",
    createdAt: "2024-05-04T12:00:00",
    excerpt: "Elegancki prezent z duszą: jak wybrać filiżankę z historią?",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 13,
    title: "Sygnatury Meissen – jak je rozpoznać?",
    slug: "meissen-sygnatury",
    createdAt: "2024-05-03T16:10:00",
    excerpt: "Podwójny miecz i inne znaki wytwórni z Miśni.",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 14,
    title: "Najbardziej poszukiwane serie Rosenthal",
    slug: "rosenthal-top-serie",
    createdAt: "2024-05-02T09:45:00",
    excerpt: "Które kolekcje Rosenthal cieszą się największym uznaniem?",
    coverImageLocation: "/images/blog/postCover.png"
  },
  {
    id: 15,
    title: "Jak rozpoznać porcelanę ręcznie malowaną?",
    slug: "porcelana-recznie-malowana",
    createdAt: "2024-05-01T10:20:00",
    excerpt: "Porady dla początkujących kolekcjonerów i miłośników detali.",
    coverImageLocation: "/images/blog/postCover.png"
  },
];

export const mockFullPost: Post[] = [
  {
    id: 1,
    title: "Porcelanowe opowieści: Meissen i tajemnice manufaktury",
    slug: "meissen-tajemnice-manufaktury",
    createdAt: "2024-05-15T12:00:00",
    coverImageLocation: "/images/blog/meissen.png",
    excerpt: "Porady dla początkujących kolekcjonerów i miłośników detali.",
    content: `
      <p>
        Manufaktura w Miśni (Meissen) to nie tylko pierwsze europejskie centrum produkcji porcelany, ale także miejsce,
        gdzie przez wieki tworzono przedmioty będące połączeniem sztuki i rzemiosła. Historia jej powstania to fascynująca opowieść o alchemikach,
        sekretach formuły na „białe złoto” i królewskich ambicjach.
      </p>
      <img src="/images/blog/meissen-wazon.png" alt="Porcelanowy wazon z Meissen" />
      <p>
        W XVIII wieku Augustus II Mocny zapragnął uniezależnić się od chińskich importów i uczynić Saksonię centrum europejskiej porcelany.
        Zatrudnił Johanna Böttgera, który jako pierwszy w Europie opracował prawdziwą, twardą porcelanę. Tak narodziła się Meissen –
        z charakterystycznym znakiem podwójnych mieczy, który do dziś świadczy o oryginalności wyrobu.
      </p>
      <img src="/images/blog/meissen-miecz.png" alt="Znak podwójnych mieczy Meissen" />
      <p>
        Dziś figurki, filiżanki i wazony z Meissen są obiektami pożądania kolekcjonerów z całego świata.
        Każdy detal – od ręcznego malowania po złocenia – jest wykonywany z niezwykłą precyzją.
        Wybierając porcelanę z Miśni, obcujemy z historią i tradycją, która przetrwała wieki.
      </p>
    `},
    {
      id: 16,
      title: "Historia porcelany w Europie",
      slug: "rosenthal-historia",
      createdAt: "2024-05-16T10:00:00",
      coverImageLocation: "/images/blog/meissen.png",
      excerpt: "Poznaj drogę porcelany od Chin po europejskie manufaktury.",
      content: `
        <h2>Początki porcelany w Chinach</h2>
        <p>Porcelana ma swoje korzenie w Chinach, gdzie była wytwarzana już w VII wieku. Dzięki wyjątkowej technologii wypału i składowi gliny, chińska porcelana wyróżniała się trwałością i przejrzystością. Z czasem techniki produkcji udoskonalano, a wytwory stawały się coraz bardziej dekoracyjne i cenione na cesarskim dworze. Przez wiele wieków pozostawała towarem elitarnym, często zdobionym złotem, kobaltem lub szkliwami celadonowymi. Jej rozwój był ściśle związany z kulturą i rytuałami, a rzemiosło przekazywano z pokolenia na pokolenie.</p>

        <h2>Droga do Europy</h2>
        <p>Chińska porcelana dotarła do Europy w średniowieczu za sprawą kupców arabskich i Jedwabnego Szlaku. Początkowo traktowano ją jako towar luksusowy, dostępny tylko dla najbogatszych. Przewożona statkami Kompanii Wschodnioindyjskich, była sprzedawana na aukcjach królewskich dworów i wśród arystokracji. Europejczycy, zafascynowani jej pięknem i trwałością, nadali jej miano „białego złota”. Przez wieki porcelana była inspiracją dla malarzy, rzeźbiarzy i architektów, pojawiała się w pałacach i w ikonografii sakralnej.</p>

        <h2>Pierwsze europejskie próby</h2>
        <p>W XVII wieku w Europie próbowano odtworzyć chińską recepturę. Przełom nastąpił w Miśni, gdzie w 1708 roku Johann Friedrich Böttger i Ehrenfried Walther von Tschirnhaus opracowali pierwszą prawdziwą europejską porcelanę. Odkrycie to było utrzymywane w tajemnicy przez wiele lat, a manufaktura w Miśni stała się wzorem dla przyszłych zakładów. Ich wyroby szybko zdobyły renomę, a królewskie zamówienia zapewniały rozwój i eksperymenty z formą oraz zdobieniami. Z czasem inne miasta, jak Wiedeń, Berlin czy Sèvres, również rozwijały swoje techniki, opierając się na miśnieńskich wzorcach.</p>

        <h2>Rozkwit manufaktur</h2>
        <p>W XVIII i XIX wieku powstało wiele znanych manufaktur, takich jak Miśnia, Sèvres czy Rosenthal. Każda z nich wykształciła swój charakterystyczny styl zdobienia. Porcelana zaczęła być produkowana masowo, ale nadal powstawały unikatowe, ręcznie zdobione egzemplarze na specjalne zamówienia. Manufaktury zatrudniały artystów, rzeźbiarzy i chemików, którzy pracowali nad udoskonaleniem form, szkliw i pigmentów. W tym czasie porcelana trafiła także do klasy średniej i zyskała status powszechnego przedmiotu codziennego użytku – jednak nie zatraciła swojej estetycznej wartości i prestiżu.</p>

        <h2>Porcelana dziś</h2>
        <p>Współcześnie porcelana to nie tylko sztuka użytkowa, ale także przedmiot kolekcjonerski. Zachwyca nadal precyzją wykonania i bogactwem wzorów. Historyczne egzemplarze osiągają wysokie ceny na aukcjach, a współczesne manufaktury łączą tradycję z nowoczesnym designem. Powstają zarówno repliki dawnych modeli, jak i zupełnie nowe kolekcje wpisujące się w aktualne trendy. Porcelana znajduje swoje miejsce nie tylko w muzeach i domach kolekcjonerów, ale także w restauracjach, galeriach i nowoczesnych wnętrzach. Jej urok jest ponadczasowy, a jakość – nie do podrobienia.</p>
      `

  },
  {
    id: 17,
    title: "Zegar kominkowy z brązu – klasyka XIX wieku",
    slug: "znaki-na-porcelanie",
    createdAt: "2024-05-16T14:30:00",
    coverImageLocation: "/images/blog/meissen.png",
    excerpt: "Odkryj elegancję zegarów kominkowych z epoki wiktoriańskiej.",
    content: `
      <p>Zegary kominkowe z brązu były nieodłącznym elementem XIX-wiecznych salonów. Ich masywna konstrukcja i finezyjne zdobienia przyciągają uwagę kolekcjonerów do dziś. Zdobione często motywami mitologicznymi, roślinnymi lub klasycznymi kolumnami, zegary te stanowiły centralny punkt w wystroju pomieszczeń. Niektóre modele były również wyposażone w figurki przedstawiające sceny rodzajowe lub alegoryczne postaci. Złocenia i zastosowanie marmuru w podstawach nadawały im dodatkowego prestiżu, czyniąc je przedmiotami pożądania nie tylko wśród arystokracji, ale również zamożnego mieszczaństwa.</p>

      <p>W epoce wiktoriańskiej takie zegary stanowiły wyznacznik statusu społecznego. Często były wykonywane ręcznie, z dbałością o każdy detal – od mechanizmu po reliefy zdobiące obudowę. Wytwarzano je w renomowanych warsztatach zegarmistrzowskich, gdzie mistrzowie rzemiosła poświęcali tygodnie pracy, aby dopracować każdy element. Wzornictwo inspirowane było często klasycyzmem francuskim, co czyniło je nie tylko urządzeniami do pomiaru czasu, ale i prawdziwymi dziełami sztuki. Dodatkowo, zegary często uzupełniano o pasujące lichtarze lub lustra, tworząc kompleksowe zestawy dekoracyjne dla eleganckich wnętrz.</p>

      <img src="/images/blog/meissen-miecz.png" alt="Zegar kominkowy z brązu" />

      <p>Mechanizm zegara zazwyczaj był nakręcany ręcznie i potrafił działać przez wiele dni bez ponownego nakręcania. Zegary te były nie tylko precyzyjne, ale również niezwykle dekoracyjne. Ich mechanizmy opierały się na precyzyjnie kalibrowanych kołach zębatych i balansach, które zapewniały niezawodne odmierzanie czasu. W niektórych modelach zastosowano również funkcję bicia godzin i półgodzin, a niekiedy także melodyjne kuranty. Mechanizmy często były sygnowane przez znanych zegarmistrzów, co znacznie zwiększało ich wartość kolekcjonerską. Obudowy, często otwierane na klucz, skrywały misterne wnętrza z grawerowanymi tabliczkami producentów i numerami seryjnymi.</p>

      <p>Dziś takie egzemplarze są poszukiwane na aukcjach i przez kolekcjonerów na całym świecie. Ich wartość zależy od stanu zachowania, sygnatury oraz pochodzenia. Zegary zachowane w oryginalnym stanie, z pełnym mechanizmem i nienaruszoną obudową, mogą osiągać wysokie ceny na międzynarodowych rynkach antyków. Renomowani kolekcjonerzy zwracają uwagę na detale, takie jak jakość odlewu, kunszt wykończenia czy obecność dokumentacji historycznej. Współczesne renowacje mogą podnieść lub obniżyć wartość zegara – wszystko zależy od tego, czy zachowano zgodność z pierwotnym stylem i materiałami. Zegary kominkowe z XIX wieku to nie tylko świadectwo czasu, ale i trwały symbol luksusu oraz wysublimowanego gustu.</p>
`

  }
];
