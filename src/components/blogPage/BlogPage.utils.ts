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

export interface FullPostResponse {
  post: {
    id: number;
    title: string;
    author: string;
    slug: string;
    createdAt: string;
    coverImageLocation: string;
    excerpt: string;
    content: string;
  };
  previous: {
    title: string;
    slug: string;
  } | null;
  next: {
    title: string;
    slug: string;
  } | null;
}

export const mockPostsSummaries: BlogPostSummary[] = [
  {
    id: 1,
    title: "Tak samo ale inaczej, czyli historia którą chcemy pamiętać",
    slug: "tak-samo-ale-inaczej",
    createdAt: "2025-06-26T12:00:00",
    excerpt: "Najlepiej sprzedający się model porcelany wszech czasów… i jego cicha, zapomniana siostra. Poznaj historię, której nie znajdziesz w katalogach.",
    coverImageLocation: "/images/blog/0001/moonlight-cover.jpg"
  }
];

export const mockFullPost: FullPostResponse[] = [
  {
    post: {
      id: 1,
      title: "Tak samo ale inaczej, czyli historia którą chcemy pamiętać",
      author: "Jakub Bednarczyk",
      slug: "tak-samo-ale-inaczej",
      createdAt: "2025-06-26T12:00:00",
      coverImageLocation: "/images/blog/0001/moonlight-cover.jpg",
      excerpt: "Najlepiej sprzedający się model porcelany wszech czasów… i jego cicha, zapomniana siostra. Poznaj historię, której nie znajdziesz w katalogach.",
      content: `
        <h2>Oto filiżanka Old Country Roses</h2>
        
        <p>Totalny klasyk w porcelanie. Znajdziemy go praktycznie na każdej angielskiej giełdzie antyków lub car bootcie. Model, który sprzedał się w ponad 150 milionach egzemplarzy, czyli był najlepiej sprzedającym się modelem porcelany – kiedykolwiek i gdziekolwiek – na świecie. (Wśród kobiet z mojej najbliższej rodziny nie posiada go tylko moja półroczna córka, co pewnie z czasem i tak się zmieni.)<br>
          Gdy ktoś kolekcjonuje angielską porcelanę, to ciężko nie spotkać się z tymi różami o głębokich, ciepłych kolorach różanej czerwieni. Złoceniami o specjalnie poszarpanych brzegach. Formie, która – choć pękata – sprawia wrażenie smukłej. Po prostu ma ona w sobie coś, co urzeka.</p>

        <figure>
          <img src="/images/blog/0001/old-country-roses.jpg" alt="Filiżanki Royal Albert Old Country Roses i Moonlight Rose w drewnianej gablocie" />
          <figcaption>Filiżanki Royal Albert Old Country Roses i Moonlight Rose</figcaption>
        </figure>
        
          <p>A obok… jakiś destrukt wypałowy o zgaszonych i wyblakłych kolorach.</p>

        <p><strong>No NIE!</strong> To nie destrukt, tylko jeden z piękniejszych zamysłów w designie. Mała zmiana, która idealnie oddaje ducha zmieniających się czasów.</p>

        <h2>Ale po kolei, nie wyprzedzajmy faktów</h2>

        <p>Wzór Old Country Roses zaprojektowany został w 1962 roku przez Harolda Holdcrofta, ówczesnego dyrektora artystycznego Royal Albert. Inspiracją dla nowego projektu był wcześniejszy wzór z 1921 roku – King’s Ransom, który nie przystawał już do realiów lat 60. XX wieku.</p>

        <p>Po ciężkich latach II wojny światowej i niemal dwóch dekadach odbudowy świat, jak i Zjednoczone Królestwo, zaczął wchodzić w nową erę.<br>
          Erę optymizmu gospodarczego i kulturowych przemian. Pokolenia dorastającego wyżu powojennego - tzw. baby boomers. Erę tworzącej się popkultury i konsumpcjonizmu. Zespołów nowej rockowej muzyki: The Beatles czy The Rolling Stones. Nowej, kolorowej mody, w której królowały minispódniczki i nieformalne stroje. Wnętrz domów z tapetami w geometryczne wzory, plastikowymi meblami o wcześniej nie występujących formach czy jaskrawymi dodatkami inspirowanymi pop-artem Andy’ego Warhola.</p>

        <h2>Nowy świat - jednak nie do końca</h2>

        <p>Opakowanie zmieniło się diametralnie, ale fundamenty pozostały. Ludzie nadal żenili się młodo. Chcieli założyć własny dom i go urządzić! Mimo nowych form rozrywki, jak choćby telewizja, ich codzienność nadal wyznaczała praca na etacie. Niedzielny obiad w rodzinnym gronie, czy słynna angielska herbatka o piątej po południu – pita z porcelanowego zestawu filiżanek, otrzymanego jako tradycyjny prezent ślubny, trzymanego w drewnianym kredensie na specjalne okazje. Do tych codziennych rytuałów w zmieniającym się świecie potrzebny był nowy wzór.</p>

        <p>I właśnie w takich okolicznościach OLD COUNTRY ROSES pojawił się na rynku. Tworzył wizję „starej, dobrej Anglii”, będąc jednocześnie przystępny i masowy. Prawie z miejsca stał się łącznikiem starego z nowym. Stylowości z dostępnością.</p>

        <figure>
          <img src="/images/blog/0001/old-country.jpg" alt="Zdjęcie dawnej, angielskiej wsi" />
          <figcaption>Dawna, angielska wieś <br/>
                      Photo by Hugo Kruip on Unsplash
          </figcaption>
        </figure>
        
        <h2>Czas jednak mija</h2>

        <p>Świat lat 60. i 70., z ich barwnością, idealizmem, swobodą obyczajową i dekoracyjnym rozmachem, przemijał.<br>
          Wyspiarska rzeczywistość zaczęła wchodzić w okres kryzysów gospodarczych, inflacji, strajków i społecznych napięć – nastroje zmieniały się diametralnie.<br>
          Nadeszły lata 80. - czasy „Żelaznej Damy” - Margaret Thatcher, pierwszej kobiety na stanowisku premiera. Wprowadziła kraj w dekadę reform, które głęboko przekształciły gospodarkę oraz podejście do życia. Powoli rodziła się nowa mentalność - oparta na indywidualizmie, pragmatyzmie i dążeniu do sukcesu. To czasy, które na dobre zerwały z przedwojenną nostalgią. (Według mnie filmem świetnie oddającym klimat tych czasów jest „Billy Elliot”. Polecam każdemu.)</p> 
          
        <h2>Wraz ze zmianą myślenia nadeszła zmiana estetyki</h2>

        <p>Już nie było miejsca na ciepłe, kolorowe sentymenty ani romantyczne złocenia. Wnętrza stały się prostsze, chłodniejsze. Styl, który dziś nazywamy skandynawskim, powoli wsiąkał w brytyjską tkankę. Królowały błękity, szarości, chrom, szkło i połysk. Estetyka zaczęła podążać za rytmem nowego życia: szybszego, bardziej uporządkowanego, mniej dekoracyjnego. Porcelana również musiała się dostosować. Potrzebna była elegancja w nowym wydaniu, pasująca nie do angielskiej wsi, lecz rytmu nowoczesnego miasta - delikatna, chłodna i bez zbędnych emocji.</p>

        <figure>
          <img src="/images/blog/0001/lloyds-building.jpg" alt="Zdjęcie Lloyd’s Building w centrum Londynu" />
          <figcaption>Lloyd’s Building w centrum Londynu. Wybudowany w 1986r.<br/>
                      Photo by Michal GADEK on Unsplash
          </figcaption>
        </figure>
        
        <h2>Model Moonlight Rose, czyli róża w blasku księżyca</h2>

        <p>Skąd w ogóle wziął się taki pomysł?</p>

        <p>Tę historię opowiedział mi pewien starszy handlarz porcelany. Spotkałem go na giełdzie w Newark (moja ulubiona). Ubrany w staromodną tweedową marynarkę, z błyskiem w oku, który mają tylko ludzie naprawdę zakochani w przedmiotach z duszą.</p>

        <p>Według niego wzór Moonlight Rose powstał dzięki młodej projektantce, której powierzono zadanie stworzenia czegoś nowego – ale wciąż wiernego duchowi Royal Albert.</p>

        <p>Brzmi prosto? A jednak nie jest. Bo co można wymyślić?<br>
            Nowe gatunki kwiatów? Banał.<br>
            Bogatsze złocenia? Kicz! I dodatkowo przestarzały.<br>
            Całkowicie nowa forma? Ale jak nawiązać do przeszłości?<br>
            Wszystkie narysowane projekty po chwili namysłu lądowały w koszu. Po kolejnej, nieudanej próbie zaczęło narastać w niej zwątpienie oraz nerwowość, a nie są to muzy nastrajające do tworzenia. Jak oddać ducha nowych czasów?</p>

        <p>Pewnej gorącej, czerwcowej nocy, gdy nie mogła zasnąć, przechadzała się po swoim londyńskim mieszkaniu. Zlecone zadanie nie dawało jej spokoju. W końcu przysiadła w swoim nowoczesnym fotelu i zamyśliła się.</p>

        <figure>
          <img src="/images/blog/0001/night.png" alt="Ciepła, czerwcowa noc w londyńskim mieszkaniu lprzy pełni księżyca" />
        </figure>
        
        <p>Jej wzrok przykuła stara drewniana witrynka, w której trzymała swoją kolekcję porcelany. Już dawno miała wymienić stary mebel, bo nie pasował do reszty.<br>
            Ale teraz jej wzrok przykuła nie witrynka, a filiżanka.<br>
            Jej pierwszy okaz – podarowany przez mamę. Wyglądała odmiennie. W mroku nocy, oświetlona blaskiem wpadającego księżyca, już nie przypominała jej sielskiej i ciepłej angielskiej wsi, którą znała z młodości. Była cicha, chłodna i elegancka. W tej chwili wiedziała już, że to nie nowy motyw jest potrzebny, ale nowa interpretacja tego, co dobrze znane.</p>

        <p>Gdy pierwszy raz usłyszałem tę historię – urzekła mnie.</p>

        <p>Chwilowo…</p>

        <h2>Później przyszła pragmatyczna myśl, że to pewnie nieprawda</h2>

        <p>Najprawdopodobniej były to bajania starego handlarza, który tylko chciał mi sprzedać filiżankę.</p>

        <p>Zapewne projekt powstał w sterylnym, zimnym biurze w szklanym apartamentowcu w Londynie. Pracował nad nim sztab ludzi: analitycy trendów, projektanci, marketingowcy. Wszystko było przeliczone, przewidziane, przetestowane. Kształt, kolorystyka, nawet nazwa – „Moonlight Rose” – miała idealnie trafić w gusta odbiorców lat 80. Miał to być produkt, który dobrze wygląda w nowoczesnej kuchni, pasuje do szklanego stolika, do stonowanej palety szarości i błękitów.</p>

        <p>I pewnie tak właśnie było.</p>

        <p>A jednak...</p>

        <p>Nie potrafię się całkiem pozbyć tej opowieści.</p>

        <p>Bo może nie wszystko musi być prawdą, żeby było piękne?</p>

        <figure>
          <img src="/images/blog/0001/moonlight-rose-set.jpg" alt="Zestaw porcelany Royal Albert Moonlight Rose - patera, cukiernica, mlecznik, filiżanka i wykałacznik" />
        </figure>

      `
    },
    previous: null,
    next: null
  }
];
