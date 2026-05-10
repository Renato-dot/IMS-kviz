export interface Question {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Koliko čaša vode dnevno se preporučuje piti za održavanje hidratacije?",
    options: ["2-3", "4-5", "6-8", "10-12"],
    correctIndex: 2,
    explanation: "Preporučuje se 6-8 čaša vode dnevno (oko 1.5-2 litre), iako potrebe variraju ovisno o tjelesnoj aktivnosti i klimi."
  },
  {
    id: 2,
    question: "Koji je normalan raspon krvnog tlaka za odraslu osobu?",
    options: ["90/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/100 mmHg"],
    correctIndex: 1,
    explanation: "Normalan krvni tlak je oko 120/80 mmHg. Vrijednosti iznad 140/90 mmHg smatraju se povišenim tlakom."
  },
  {
    id: 3,
    question: "Koliko sati sna se preporučuje za odraslu osobu?",
    options: ["4-5 sati", "5-6 sati", "7-9 sati", "10-12 sati"],
    correctIndex: 2,
    explanation: "Odraslima se preporučuje 7-9 sati sna po noći za optimalno zdravlje i funkcioniranje."
  },
  {
    id: 4,
    question: "Koja vrsta masti je najštetnija za zdravlje srca?",
    options: ["Zasićene masti", "Trans masti", "Jednozasićene masti", "Polinezasićene masti"],
    correctIndex: 1,
    explanation: "Trans masti su najštetnije jer podižu LDL (loši) kolesterol i snižavaju HDL (dobar) kolesterol."
  },
  {
    id: 5,
    question: "Što je BMI (indeks tjelesne mase)?",
    options: [
      "Mjera tjelesne snage",
      "Odnos težine i visine",
      "Mjera tjelesne masti u krvi",
      "Indeks tjelesne izdržljivosti"
    ],
    correctIndex: 1,
    explanation: "BMI je odnos težine i visine (kg/m²) i koristi se za procjenu je li osoba pothranjena, normalne težine ili pretila."
  },
  {
    id: 6,
    question: "Koji je normalan raspon šećera u krvi natašte?",
    options: ["2-4 mmol/L", "3.9-5.5 mmol/L", "6-8 mmol/L", "9-11 mmol/L"],
    correctIndex: 1,
    explanation: "Normalna razina šećera u krvi natašte je između 3.9 i 5.5 mmol/L. Vrijednosti iznad 7.0 mmol/L mogu ukazivati na dijabetes."
  },
  {
    id: 7,
    question: "Koliko minuta umjerene tjelesne aktivnosti tjedno preporučuje SZO?",
    options: ["60 minuta", "90 minuta", "150 minuta", "300 minuta"],
    correctIndex: 2,
    explanation: "Svjetska zdravstvena organizacija preporučuje najmanje 150 minuta umjerene tjelesne aktivnosti tjedno."
  },
  {
    id: 8,
    question: "Koji vitamin se prirodno proizvodi u koži izlaganjem suncu?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctIndex: 3,
    explanation: "Vitamin D se sintetizira u koži pod utjecajem UV zraka sunca. Važan je za zdravlje kostiju i imunitet."
  },
  {
    id: 9,
    question: "Što je hipertenzija?",
    options: ["Nizak krvni tlak", "Povišen krvni tlak", "Poremećaj srčanog ritma", "Upala krvnih žila"],
    correctIndex: 1,
    explanation: "Hipertenzija je stanje povišenog krvnog tlaka, obično iznad 140/90 mmHg, i naziva se 'tihi ubojica' jer često nema simptoma."
  },
  {
    id: 10,
    question: "Koja hrana je najbogatiji izvor omega-3 masnih kiselina?",
    options: ["Piletina", "Losos", "Svinjetina", "Govedina"],
    correctIndex: 1,
    explanation: "Masna riba poput lososa, skuše i srdela najbogatiji je izvor omega-3 masnih kiselina koje štite srce i krvne žile."
  },
  {
    id: 11,
    question: "Koliko dugo može čovjek preživjeti bez vode?",
    options: ["1-2 dana", "3-5 dana", "7-10 dana", "14 dana"],
    correctIndex: 1,
    explanation: "Čovjek može preživjeti oko 3-5 dana bez vode, ovisno o uvjetima okoline i tjelesnoj kondiciji."
  },
  {
    id: 12,
    question: "Koji je najčešći simptom anemije?",
    options: ["Visok krvni tlak", "Umor i slabost", "Povećan apetit", "Nesanica"],
    correctIndex: 1,
    explanation: "Anemija, najčešće uzrokovana nedostatkom željeza, uzrokuje umor, slabost i bljedilo zbog smanjenog broja crvenih krvnih stanica."
  },
  {
    id: 13,
    question: "Koliko kalorija dnevno treba prosječna odrasla žena?",
    options: ["1200-1500", "1800-2200", "2500-3000", "3000-3500"],
    correctIndex: 1,
    explanation: "Prosječna odrasla žena treba oko 1800-2200 kalorija dnevno, ovisno o dobi, aktivnosti i metabolizmu."
  },
  {
    id: 14,
    question: "Što mjeri puls (otkucaji srca u minuti)?",
    options: [
      "Količinu krvi u tijelu",
      "Brzinu protoka krvi",
      "Broj otkucaja srca u minuti",
      "Krvni tlak"
    ],
    correctIndex: 2,
    explanation: "Puls mjeri broj otkucaja srca u minuti. Normalan puls u mirovanju je 60-100 otkucaja/minutu."
  },
  {
    id: 15,
    question: "Koji mineral je ključan za zdravlje kostiju?",
    options: ["Željezo", "Cink", "Kalcij", "Bakar"],
    correctIndex: 2,
    explanation: "Kalcij je ključan mineral za izgradnju i održavanje zdravih kostiju i zuba. Dnevna potreba je oko 1000 mg."
  },
  {
    id: 16,
    question: "Koji je glavni uzrok tipa 2 dijabetesa?",
    options: ["Virusna infekcija", "Inzulin-rezistencija", "Nedostatak vitamina", "Genetska mutacija"],
    correctIndex: 1,
    explanation: "Tip 2 dijabetesa uglavnom je uzrokovan inzulin-rezistencijom, često povezanom s pretilošću i neaktivnim načinom života."
  },
  {
    id: 17,
    question: "Koliko voća i povrća dnevno preporučuje se jesti?",
    options: ["1 porcija", "2 porcije", "5 porcija (400g)", "10 porcija"],
    correctIndex: 2,
    explanation: "Preporučuje se najmanje 5 porcija voća i povrća dnevno (oko 400g) za smanjenje rizika od kroničnih bolesti."
  },
  {
    id: 18,
    question: "Što je kolesterol HDL?",
    options: ["Loši kolesterol", "Dobar kolesterol", "Vrsta šećera u krvi", "Vrsta masti u hrani"],
    correctIndex: 1,
    explanation: "HDL je 'dobar' kolesterol koji pomaže uklanjati loši kolesterol iz krvnih žila i štiti srce."
  },
  {
    id: 19,
    question: "Koliko soli dnevno ne bi trebalo prekoračiti prema preporukama?",
    options: ["3g", "5g", "10g", "15g"],
    correctIndex: 1,
    explanation: "Svjetska zdravstvena organizacija preporučuje manje od 5g soli dnevno (oko 1 čajna žličica) za prevenciju hipertenzije."
  },
  {
    id: 20,
    question: "Koji je najvažniji organ za detoksikaciju u tijelu?",
    options: ["Bubrezi", "Jetra", "Pluća", "Koža"],
    correctIndex: 1,
    explanation: "Jetra je glavni organ za detoksikaciju - obrađuje i uklanja toksine, lijekove i štetne tvari iz organizma."
  },
  {
    id: 21,
    question: "Koliko dugo traje probava hrane u želucu?",
    options: ["30 minuta", "2-4 sata", "8-10 sati", "24 sata"],
    correctIndex: 1,
    explanation: "Probava u želucu traje oko 2-4 sata, dok cijeli proces probave kroz probavni sustav traje 24-72 sata."
  },
  {
    id: 22,
    question: "Koji vitamin je važan za zgrušavanje krvi?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin E"],
    correctIndex: 2,
    explanation: "Vitamin K je ključan za zgrušavanje krvi i metabolizam kostiju. Nalazi se u zelenom lisnatom povrću."
  },
  {
    id: 23,
    question: "Što je stresni test (test opterećenja)?",
    options: [
      "Psihološki test anksioznosti",
      "Test tjelesne izdržljivosti srca",
      "Test krvi na stresne hormone",
      "Test plućne funkcije"
    ],
    correctIndex: 1,
    explanation: "Stresni test prati rad srca tijekom tjelesnog opterećenja i pomaže otkriti probleme s protokom krvi u srčanom mišiću."
  },
  {
    id: 24,
    question: "Koliko koštanog tkiva se obnavlja godišnje u odraslog čovjeka?",
    options: ["1%", "5%", "10%", "25%"],
    correctIndex: 2,
    explanation: "Oko 10% koštanog tkiva se obnavlja svake godine. Taj proces usporava s godinama, posebno nakon menopauze."
  },
  {
    id: 25,
    question: "Koji je najčešći uzrok smrti u razvijenim zemljama?",
    options: ["Rak", "Kardiovaskularne bolesti", "Dijabetes", "Upala pluća"],
    correctIndex: 1,
    explanation: "Kardiovaskularne bolesti (bolesti srca i krvnih žila) vodeći su uzrok smrti u razvijenim zemljama."
  },
  {
    id: 26,
    question: "Koliko prosječno odrasla osoba diše u minuti?",
    options: ["6-8 puta", "12-20 puta", "30-40 puta", "50-60 puta"],
    correctIndex: 1,
    explanation: "Odrasla osoba diše prosječno 12-20 puta u minuti u mirovanju, što je oko 20.000 udaha dnevno."
  },
  {
    id: 27,
    question: "Koji je preporučeni dnevni unos vlakana za odrasle?",
    options: ["5g", "15g", "25-30g", "50g"],
    correctIndex: 2,
    explanation: "Preporučeni dnevni unos vlakana je 25-30g. Vlakna pomažu probavu, snižavaju kolesterol i šećer u krvi."
  },
  {
    id: 28,
    question: "Što je bazalni metabolizam?",
    options: [
      "Brzina metabolizma tijekom vježbanja",
      "Energija potrebna za osnovne životne funkcije u mirovanju",
      "Brzina probave hrane",
      "Količina kalorija u hrani"
    ],
    correctIndex: 1,
    explanation: "Bazalni metabolizam je količina energije potrebna tijelu u mirovanju za održavanje osnovnih životnih funkcija."
  },
  {
    id: 29,
    question: "Koji je normalan pH krvi?",
    options: ["6.8-7.0", "7.35-7.45", "7.8-8.0", "8.2-8.5"],
    correctIndex: 1,
    explanation: "Normalan pH krvi je 7.35-7.45. Održavanje ovog uskog raspona ključno je za preživljavanje."
  },
  {
    id: 30,
    question: "Koliko krvi ima prosječno odraslo tijelo?",
    options: ["2-3 litre", "4-5 litara", "7-8 litara", "10 litara"],
    correctIndex: 1,
    explanation: "Prosječno odraslo tijelo ima oko 4-5 litara krvi, što je oko 7% ukupne tjelesne težine."
  },
  {
    id: 31,
    question: "Koji je najveći organ u ljudskom tijelu?",
    options: ["Jetra", "Pluća", "Koža", "Crijeva"],
    correctIndex: 2,
    explanation: "Koža je najveći organ ljudskog tijela, površine oko 2 m², i štiti tijelo od vanjskih utjecaja."
  },
  {
    id: 32,
    question: "Koliko mišića ima ljudsko tijelo?",
    options: ["200", "400", "600", "800"],
    correctIndex: 2,
    explanation: "Ljudsko tijelo ima oko 600 mišića koji čine oko 40% tjelesne težine."
  },
  {
    id: 33,
    question: "Koji je glavni simptom dehidracije?",
    options: ["Povećan apetit", "Žeđ i tamni urin", "Povećana energija", "Crvenilo kože"],
    correctIndex: 1,
    explanation: "Glavni simptomi dehidracije su žeđ, tamni urin, suha usta, umor i vrtoglavica."
  },
  {
    id: 34,
    question: "Koliko često se preporučuje posjetiti liječnika za sistematski pregled?",
    options: ["Svake godine", "Svake 2-3 godine", "Svakih 5 godina", "Samo kad nešto boli"],
    correctIndex: 0,
    explanation: "Preporučuje se godišnji sistematski pregled za rano otkrivanje bolesti i praćenje zdravlja."
  },
  {
    id: 35,
    question: "Koji je najbolji način za snižavanje stresa prema znanstvenim istraživanjima?",
    options: ["Gledanje televizije", "Redovita tjelesna aktivnost", "Prespavanje", "Konzumacija alkohola"],
    correctIndex: 1,
    explanation: "Redovita tjelesna aktivnost je jedan od najučinkovitijih načina za smanjenje stresa - oslobađa endorfine i poboljšava raspoloženje."
  },
  {
    id: 36,
    question: "Što je imunološki sustav?",
    options: [
      "Sustav za probavu hrane",
      "Sustav za obranu od bolesti",
      "Sustav za disanje",
      "Sustav za cirkulaciju krvi"
    ],
    correctIndex: 1,
    explanation: "Imunološki sustav je tjelesna obrana od infekcija i bolesti, sastoji se od stanica, tkiva i organa koji rade zajedno."
  },
  {
    id: 37,
    question: "Koliko prosječno srce otkuca tijekom života?",
    options: ["500 milijuna", "1 milijarda", "2.5 milijarde", "5 milijardi"],
    correctIndex: 2,
    explanation: "Srce prosječno otkuca oko 2.5 milijarde puta tijekom 75-godišnjeg života."
  },
  {
    id: 38,
    question: "Koji je preporučeni maksimalni unos šećera dnevno za odrasle?",
    options: ["10g", "25g", "50g", "100g"],
    correctIndex: 1,
    explanation: "SZO preporučuje manje od 25g dodanog šećera dnevno (6 žličica) za zdravlje i prevenciju bolesti."
  },
  {
    id: 39,
    question: "Koliko koštaju ljudske kosti?",
    options: ["150", "206", "300", "350"],
    correctIndex: 1,
    explanation: "Odrasli čovjek ima 206 kostiju. Bebe se rađaju s oko 300 kostiju koje se s vremenom spajaju."
  },
  {
    id: 40,
    question: "Koji je najčešći krvni tip u Hrvatskoj?",
    options: ["A+", "B+", "AB+", "0+"],
    correctIndex: 0,
    explanation: "Krvna grupa A+ je najčešća u Hrvatskoj i Europi, slijedi je 0+."
  }
]
