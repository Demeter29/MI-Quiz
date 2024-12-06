let data = [

    [
        "Mit nevezünk egy kereső rendszer globális munkaterületének? (lehet több is jó)",
        "A kereső rendszer által használt memóriaterületet.",
        "Azt a memóriaterületet, amelyen a keresés eltárolja a megszerzett, és megőrzésre hasznosnak ítélt ismereteket",
        "A kereső rendszer algoritmusának globális változóit.",
        "A soron következő lépés kiválasztásánál használt memória területet.",
        [2]
    ], 

    [
        "Melyek a hiperút tulajdonságai? (lehet több is jó)",
        "Egyetlen végcsúcsa van",
        "Csúcsaiból legfeljebb egyetlen hiperél indu",
        "Nem tartalmazhat irányított kört.",
        "Kezdőcsúcsából bármelyik csúcsába vezet hiperútbeli irányított út.",
        [2,4]
    ], 

    [
        "Az alábbi algoritmusok közül melyek használnak módosítható stratégiát?",
        "szélességi gráfkeresés",
        "tabu keresés",
        "evolúciós algoritmus",
        "rezolúció",
        [1]
    ], 

    [
        "Az alábbi módszerek közül melyekbe épült be visszalépéses keresés? (lehet több is jó)",
        "Mélységi gráfkeresésben.",
        "Alfa-béta kiértékelő algoritmusban a kétszemélyes játékoknál",
        "A tabu keresésnél.",
        "Szabályalapú következtetésnél.",
        [1,2]
    ], 

    [
        "Mit reprezentál egy kétszemélyes játéknak egy állapota?",
        "Egy állást és a soron következő játékost.",
        "Az aktuális állást az oda vezető lépésekkel együtt.",
        "Az aktuális állást az arra alkalmazható lépésekkel együtt.",
        "Az aktuális állást.",
        [1]
    ], 

    [
        "Hogyan szokták az egyeneseket kódolni?",
        "Úgy, hogy a kód darabjai az egyed egy-egy tulajdonságát mutassa",
        "Úgy, hogy az egyed kódja egy kromoszóma legyen",
        "Úgy, hogy a kódolás és a dekódolás is hatékony legyen",
        "Úgy, hogy az egyed kódja egy kromoszóma legyen.",
        [1]
    ], 

    [
        "Hogyan nevezzük a gráfkeresések globális munkaterületén tárolt gráfot?",
        "keresőgráf",
        "cáfolati gráf",
        "reprezentációs gráf",
        "játékgráf",
        [1]
    ], 

    [
        "Mit nevezünk egy hiperút bejárásának?",
        "Olyan sorozatot, amelynek elemei a hiperút csúcsaiból álló sorozatok",
        "A hiperút összes csúcsát egyszer tartalmazó meghatározott sorrendű sorozat.",
        "A hiperút összes hiperélét egyszer tartalmazó eghatározás.",
        "A hiperút összes csúcsából összeállított meghatározott sorrendű sorozatot.",
        [1]
    ], 

    [
        "Az alábbiak közül melyik NEM modellfüggő vezérlési stratégia?",
        "A legjobb csúcsot válasszuk a szomszédos csúcsok közül.",
        "A visszalépéses keresés részlegesen előre vizsgáló (FC) módszere.",
        "A szabályalapú következtetéseknél a tényliterál illesztése előzze meg a szabályillesztést.",
        "A rezolúciós lépés egyik klóza legyen mindig (egy literálból álló) egységklóz.",
        [1]
    ], 

    [
        "A félév során tanult módszerek közül melyik NEM tekinthető útkereső algoritmusnak?",
        "rezolúció",
        "szimultált hűtés",
        "B algoritmus",
        "k-legközelebbi szomszéd módszere",
        [1]
    ], 

    [
        "Hogyan lehet megtudni, hogy kinek van nem-vesztő stratégiája egy három esélyes (győzelem,vereség,döntetlen)kimenetelű kétszemélyes játékban?) (lehet több is jó)",
        "Nem lehet véges lépésben megválaszolni ezt a kérdést",
        "A játékfa leveleit megcímkézzük annak a játékosnak a nevével (A vagy B), aki a levél csúccsal jelzett állásban nyernifog, a döntetlen állásokhoz az X címkét írjuk. Szintről szintre felfelé haladva az Y játékos szintjén lévő csúcs, ha van Y cím gyereke akkor Y címkét kap, ha nincs, de van X címkéjű gyereke, akkor X címkét kap, különben a másik játékos nevét írjuk oda. A gyökér címkéje adja meg a választ.",
        "Átalakítjuk a játékfát és/vagy fává és ebben keresünk olyan gyökérből induló hiperutat, amely vagy kizárólag az egyik, vagy kizárólag a másik játékos csupa győztes vagy döntetlen levélcsúcsába vezet",
        "A minimax algoritmussal ha a teljes játékfára alkalmazzuk úgy, hogy az első játékos győztes állásaihoz +1-et, a vesztesállásaihoz -1-et rendelünk a döntetlen állásokhoz 0-t. Ha a gyökérbe lefuttatott érték +1 akkor az első játékosnakgyőztes stratégiája van, ha 0 akkor mindkettőnek nemvesztő stratégiája, ha -1 akkor második játékosnak van győztesstratégiája",
        [2]
    ], 

    [
        "Tekintsünk három eseményt (A, B, E), amelyiket egy valószínűség háló három különböző csúcsához írtvalószínűségi változóinak segítségével fogalmazhatunk meg (E változók csúcsait röviden az A, B és E csúcsainak is hívhatjuk.) Mikor mondhatjuk, hogy az A és a B feltételesen független E-re nézve? (lehet több is jó)",
        "Ha A csúcsából E csúcsába, E csúcsából B csúcsába vezet irányított él, de A és B csúcsai között nem.",
        "Ha A csúcsából B csúcsába, B csúcsából E csúcsába vezet irányított él, de A és E csúcsai között nem.",
        "Ha A és B csúcsaiba vezet irányított és sz E csúcsából, de A és B csúcsai között nem.",
        "Ha A és B csúcsaiból vezet irányított és sz E csúcsába, de A és B csúcsai között nem",
        [1,3]
    ], 

    [
        "Mi a feladata a vezérlési stratégiának a kereső rendszerekben? (itt csak egy mo van)",
        "Kiválasztani a soron következő keresési szabályt.",
        "Ellátni a kereső rendszert a megoldandó feladatból származó ismerettel.",
        "Megváltoztatni a globális munkaterület tartalmát.",
        "Ellenőrizni, hogy a globális munkaterület kielégíti-e a terminálási feltételt.",
        [1]
    ],  

    [
        "Az alábbiak közül melyik NEM utal a mesterséges intelligencia jelenlétére egy szoftverben?",
        "A szoftver optimális megoldást talál a kitűzött problémához.",
        "A megoldandó feladatnak hatalmas a problématere.",
        "A szoftverbe különleges technológiák vannak beépítve.",
        "A szoftver viselkedése intelligens jegyeket mutat.",
        [1]
    ], 

    [
        "Mire utal egy algoritmussal kapcsolatban a kombinatorikus robbanás fogalma?",
        "Az algoritmus NP-teljes.",
        "Az algoritmus végtelen ciklusba tud kerülni.",
        "Az algoritmus kezelhetetlenül nagy memóriát igényel és/vagy a futási ideje óriási.",
        "Az ilyen algoritmus nagyságrendekkel több megoldást tud előállítani adott időegység alatt.",
        [3]
    ], 

    [
        "Mit várunk el egy útkereső algoritmustól?",
        "Azt, hogy egy irányított gráfban egy adott csúcsból kiinduló megadott csúcsok valamelyikébe érkező optimális költségű irányított utat találjon meg",
        "Azt, hogy megadja egy irányított gráfban egy adott csúcsból kiinduló összes többi csúcsba vezető optimális költségű utat.",
        "Azt, hogy megadja egy irányított gráfban egy adott csúcsból kiinduló összes többi csúcsba vezető valamelyik utat",
        "Azt, hogy egy irányított gráfban egy adott csúcsból kiinduló megadott csúcsok valamelyikébe érkező irányított utat találjon meg",
        [4]
    ], 

    [
        "Hogyan definiáljuk az optimális költség fogalmát?",
        "Egy csúcsból egy másik csúcsba vezető utak költségeinek infínuma.",
        "Egy csúcsból csúcsok halmazába vezető utak költségeinek minimuma.",
        "Egy csúcsból csúcsok halmazába vezető utak költségeinek infínuma.",
        "Egy csúcsból egy másik csúcsba vezető utak költségeinek minimuma.",
        [2,4]
    ],

    [
        "Mely állítások igazak az alábbiak közül?",
        "A Turing kritérium az MI szkeptikusok érveit erősíti",
        "A Turing kritérium cáfolataként született meg a kínai szoba elmélet.",
        "A Turing kritérium és a kínai szoba elmélet egyaránt az erős MI hívők érveit erősítik.",
        "A kínai szoba elmélet az MI szkeptikusok érveit erősíti",
        [2,4]
    ],

    [
        "Mikor nevezhetünk egy feladatot útkeresési problémának?",
        "Amikor a megoldás egy irányított gráf egy útjának feleltethető meg.",
        "Csak akkor, ha a feladat olyan állapottér modellel rendelkezik, amelyben a megoldást egy műveletsorozat írja le.",
        "Amikor a feladat problématerének elemei ugyanazon csúcsból kiinduló irányított utak.",
        "Amikor egy gráfban keressük egy adott csúcsból az összes többibe vezető optimális utakat.",
        [1,3]
    ],

    [
        "Hogyan nyerhető ki egy útkeresési probléma megoldásakor kapott útból a feladat megoldása?",
        "Az út élei a feladat különböző megoldásait szimbolizálják.",
        "Sokszor az út élei mutatják a feladat megoldásához szükséges lépéseket.",
        "Néha az út végpontja szimbolizálja a feladat egy megoldását.",
        "Az út csúcsai a feladat különböző megoldásai.",
        [2,3]
    ],

    [
        "Mely állítások igazak egy 𝛿-gráfra?",
        "Csúcsaiból véges sok irányított él indul ki.",
        "Végtelen sok csúcsa lehet.",
        "Éleinek költsége pozitív valós szám.",
        "Csúcsaiba véges sok irányított él fut be.",
        [1,2]
    ],

    [
        "Egy útkeresési feladat gráfreprezentációjához meg kell adni a …",
        "megoldási utakat",
        "startcsúcsot",
        "reprezentációs gráfot",
        "alkalmazandó heurisztikákat",
        [2,3]
    ],

    [
        "Az alábbiak közül melyek tartoznak a Turing kritériumok közé?",
        "megszerzett ismeret tárolása",
        "természetes nyelvű kommunikáció",
        "automatikus következtetés",
        "optimális megoldás megtalálása",
        [1,2,3]
    ],

    [
        "Egy hiperút egy bejárása",
        "nem lehet végtelen hosszú",
        "a hiperút összes hiperélét legalább egyszer érinti.",
        "a hiperút egy hiperélét legfeljebb annyiszor érinti, ahány közönséges irányított út vezet a hiperútban a hiperút kezdőcsúcsából a hiperél kezdőcsúcsába",
        "kört nem tartalmazhat",
        [2,3]
    ],

    [
        "Hogyan NEM csökkenthető egy állapottér modell bonyolultsága?",
        "Növeljük az állapotok számát, de új műveleteket vezetünk be.",
        "Szigorítjuk az állapotok invariáns tulajdonságát.",
        "Szigorítjuk a műveletek értelmezési tartományát.",
        "Csökkentjük a célállapotok számát.",
        [4]
    ],

    [
        "Mitől NEM függ egy reprezentációs gráf bonyolultsága?",
        "A csúcsai be-fokának számától.",
        "A köreinek gyakoriságától, és hosszuk sokféleségétől.",
        "A csúcsainak és éleinek számától.",
        "A csúcsai ki-fokának számától.",
        [1]
    ],

    [
        "Melyik NEM része a probléma dekompozíciós modellnek?",
        "Dekompozíciós műveletek definiálása.",
        "Az állapotok definiálása.",
        "Az egyszerű problémák megadása.",
        "A kiinduló probléma leírása.",
        [2]
    ],

    [
        "Milyen egy dekompozíciós operátor?",
        "Egy problémát megadott problémák egyikével helyettesít.",
        "Egy problémát több problémának a halmazára képez le.",
        "Egy probléma-sorozatot részsorozatokra bont fel.",
        "Egy problémát több problémának a sorozatára képez le.",
        [4]
    ],

    [
        "Az alábbiak közül melyek NEM elemei az állapottér modellnek?",
        "állapotgráf",
        "műveletek",
        "kezdő állapot vagy annak leírása",
        "heurisztika",
        [1,4]
    ],

    [
        "Mely állítások igazak az állapotgráfra az alábbiak közül?",
        "Csúcsai az állapotokat szimbolizálják.",
        "Startcsúcsa a kezdőállapotot szimbolizálja.",
        "Célcsúcsai a modellezett feladat megoldásai.",
        "Élei a műveletek végrehajtásait szimbolizálják.",
        [1,2,4]
    ],

    [
        "Az alábbi feladat-modellezések közül melyeknél NEM egyezett meg a problématér a reprezentációs gráf startcsúcsból kivezető útjaival?",
        "n-királynő probléma",
        "Hanoi-tornyai probléma",
        "integrál számítás",
        "8-as kirakó játék",
        [1,3]
    ],

    [
        "Melyik ok-okozati összefüggések igazak az alábbiak közül?",
        "Az állapotgráfbeli körök hossza és száma kihat a problématér bonyolultságára.",
        "Az állapotgráf csúcsainak száma kihat a megoldó algoritmus hatékonyságára.",
        "Az optimális megoldások száma kihat az állapotgráf bonyolultságára.",
        "A megoldó algoritmus számítási bonyolultsága kihat a problématér bonyolultságára.",
        [1,2]
    ],

    [
        "Hogyan csökkenthető egy állapottér modellben a műveletek kiszámítási bonyolultsága?",
        "Szigorítjuk az állapotok invariáns állítását.",
        "Több heurisztikát építünk be a modellbe.",
        "Az állapotokat extra információval egészítjük ki.",
        "Szigorítjuk a műveletek előfeltételét.",
        [1,3]
    ],

    [
        "Melyek a feltételei a visszafelé haladó keresésnek?",
        "A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert valamelyik célállapot.",
        "A reprezentációs gráf kétirányú éleket tartalmazzon és legyen ismert az összes célállapot.",
        "A reprezentációs gráf startcsúcsából az összes célcsúcsba vezető úton kétirányú élek legyenek.",
        "A reprezentációs gráf startcsúcsából valamelyik célcsúcsba vezető úton kétirányú élek legyenek.",
        [1]
    ],

    [
        "Mi célt szolgál a probléma-redukciós operátor?",
        "MEgadja, hogy egy állapot mely állapotokból érhető el egy állapottér modellben.",
        "Egy problémát egyszerűbb problémákra vezet vissza.",
        "Egy állapottér modell egy műveletének inverzze.",
        "Az állapottér modell egy műveletére megadja, hogy a művelet segítségével mely állapotokból lehet eljutni adott állapotok egyikébe.",
        [4]
    ],

    [
        "Az alábbi módszerek közül melyiknél változhat futás közben a globális munkaterület mérete?",
        "Tabu keresésnél.",
        "Hegymászó módszernél.",
        "Véletlen újra indított hegymászó módszernél.",
        "Szimulált hűtésnél.",
        [1]
    ],

    [
        "Melyik állítás NEM igaz a lokális keresésekre az alábbiak közül?",
        "Az aktuális csúcs környezetéből választja az új aktuális csúcsot.",
        "Ezek mohó stratégiájú algoritmusok.",
        "Memóriája az aktuális csúcs környezetének tárolására korlátozódik.",
        "Csak egy lokálisan legjobb megoldást képes megtalálni.",
        [2,4]
    ],

    [
        "Tekinthető-e a hegymászó módszer a tabu keresés speciális változatának?",
        "Igen, amennyiben a hegymászó módszer tulajdonképpen egy egyelemű tabu halmazt használ, amely az előző aktuális csúcsot tárolja csak.",
        "Nem, amennyiben a hegymászó módszer nem tárolja el az eddig megtalált legjobb kiértékelő függvényértékű csúcsot.",
        "Nem, mert a tabu keresés véletlen módon választ új csúcsot.",
        "Nem, mert a tabu keresés felismeri a köröket, a hegymászó algoritmus nem.",
        [1,2]
    ],

    [
        "Hány helyen használ a szimulált hűtés algoritmusa véletlenített módszert?",
        "Nulla. Ez ugyan egy nem-determinisztikus módszer, de nem használ véletlenítést.",
        "Kettő. A következő csúcs kiválasztásához, illetve annak elfogadásához.",
        "Három. A következő aktuális csúcs kiválasztásához, annak elfogadásához, és a hűtési ütemterv változtatásához.",
        "Egy. A következő aktuális csúcs kiválasztásához.",
        [2]
    ],

    [
        "Mely állítások igazak az alábbiak közül?",
        "A heurisztika garantálja, hogy az algoritmus hatékonysága jobb lesz.",
        "A heurisztika garantálja, hogy az algoritmus az optimális megoldást találja meg.",
        "A heurisztika egyszerre csökkentheti az algoritmus memória igényét és a futási idejét.",
        "A heurisztikát a feladatot megoldó algoritmusba közvetlenül építjük be.",
        [3,4]
    ],

    [
        "Melyek az alábbiak közül a tabu keresés hátrányai?",
        "Kicsi a memória igénye.",
        "Zsákutcába érve a keresés megáll.",
        "A tabu halmaz méretét csak kísérletezéssel lehet beállítani.",
        "Képes felismerni, és elkerülni a kisebb köröket.",
        [2,3]
    ],

    [
        "Mely állítások NEM igazak a lokális keresésre az alábbiak közül?",
        "Erősen összefüggő gráfokban nem akadnak el.",
        "Körmentes gráfokban nem akad el.",
        "Kicsi memóriát használnak.",
        "Talál megoldást, ha van megoldás.",
        [2,4]
    ],

    [
        "Melyek az alábbiak közül a hegymászó módszer hátrányai?",
        "Nem garantál optimális megoldást.",
        "Zsákutcába érve a keresés megáll.",
        "Körök mentén végtelen működésbe kezdhet.",
        "Kicsi a memória igénye.",
        [1,2,3]
    ],

    [
        "Hogyan hat a heurisztika információ tartalma egy kereső rendszer futási idejére?",
        "Nagyobb információ tartalom mellett a lépések száma csökkenhet.",
        "Minél nagyobb az információ tartalma, annál jobb lesz a hatékonysága.",
        "Minél kisebb az információ tartalma, annál gyorsabban tud új lépést választani.",
        "Nagyobb információ tartalom mellett egy lépés futási ideje nő.",
        [1,3,4]
    ],

    [
        "Mely algoritmusok születtek a hegymászó módszer zsákutcában való beragadásának elkerülésére?",
        "Véletlen újraindított keresés (random restart search)",
        "Tabu keresés",
        "Szimulált hűtés algoritmusa",
        "Lokális nyaláb keresés (local beam search)",
        [1,3,4]
    ],

    [
        "Mi a lokális keresések általános vezérlési stratégiája?",
        "Az aktuális csúcs szomszédjai közül válasszuk a legjobb csúcsot!",
        "Az aktuális csúcs(ok) környezetéből válasszunk egy (vagy több) viszonylag jó csúcsot!",
        "Az aktuális csúcs környezetéből válasszuk a legjobb csúcsot!",
        "Az aktuális csúcs(ok) környezetéből válasszuk a legjobb csúcsot (csúcsokat)!",
        [2]
    ],

    [
        "A tabu keresésnél használt kiértékelő függvény, amellyel össze tudjuk hasonlítani az aktuális csúcs gyerekeit, heurisztikus stratégiának számít?",
        "Igen, ez a függvény a konkrét feladatból származik.",
        "Nem, mert ezt csak az olyan feladatoknál használhatjuk, amelyek állapottér modell-lel rendelkeznek. Ez tehát egy modell-függő stratégia",
        "Nem, mert ilyen függvényt minden tabu keresés használ.",
        "A heurisztikának nincs köze a vezérlési stratégiához.",
        [1]
    ],

    [
        "Mit tartalmaz a visszalépéses keresések globális munkaterülete?",
        "Ez eddig bejárt startcsúcsból kiinduló utakat azok csúcsaiból kivezető még nem vizsgált élekkel együtt.",
        "A reprezentációs gráfot és külön annak a startcsúcsból kiinduló egyik útját.",
        "Ez eddig bejárt részgráfot és külön annak a startcsúcsból kiinduló egyik útját annak csúcsaiból kivezető még nem vizsgált élekkel együtt.",
        "A startcsúcsból kiinduló egyik utat és annak csúcsaiból kivezető még nem vizsgált éleket",
        [4]
    ],

    [
        "Melyek a visszalépéses keresés keresési szabályai?",
        "A nyilvántartott úthoz egy újabb kivezető él hozzávétele, illetve az utolsó él elvétele",
        "A nyilvántartott út kiterjesztése, illetve a visszalépés.",
        "A nyilvántartott út utolsó csúcsának kiterjesztése, illetve az utolsó él elvétele.",
        "A nyilvántartott út végcsúcsából kivezető egyik él hozzávétele az úthoz, illetve az út utolsó élének elvétele",
        [4]
    ],

    [
        "Mi a visszalépéses keresés általános vezérlési stratégiája?",
        "Zsákutcába jutva mindig a visszalépés szabályát kell választani.",
        "A továbblépést meghatározó sorrendi és a vágó szabályok.",
        "A visszalépés szabályát csak a legvégső esetben válasszuk.",
        "A visszalépés szabálya mindig elsőbbséget élvez a többi keresési szabállyal szemben.",
        [3]
    ],

    [
        "Melyik állítás NEM igaz a visszalépéses keresés második változatára az alábbiak közül?",
        "A körfigyelés elhagyása végtelen fák esetén mindenképpen gyorsítja a megoldás megtalálását.",
        "A körfigyelés elhagyása kicsi mélységi korlát mellett gyorsíthatja a futási időt.",
        "A körfigyelés elhagyása növeli a memória igényét.",
        "A körfigyelés elhagyása mindenképpen gyorsítja a megoldás megtalálását.",
        [4]
    ],

    [
        "Melyek az alábbiak közül a visszalépéses keresés hátrányai?",
        "Ugyanazt a részgráfot többször is bejárja.",
        "Nehéz az implementációja.",
        "Nagy a memória igénye.",
        "Kezdetben hozott rossz döntést csak sok visszalépés árán korrigálja.",
        [1,4]
    ],

    [
        "Képzelje maga elé a 4-királynő probléma 2. állapottér modelljének állapotfáját. (Minden csúcsból négy él vezet ki.) Hány startcsúcsból kivezető utat vizsgál meg ebben a visszalépéses keresés második változata, ha a mélységi korlát 2?",
        "8",
        "16",
        "20",
        "21",
        [4]
    ],

    [
        "Mely állítások igazak a visszalépéses keresés második változatára az alábbiak közül?",
        "Minden 𝛿-gráfban terminál",
        "Minden 𝛿-gráfban talál megoldást, ha van.",
        "Minden 𝛿-gráfban talál megoldást, ha annak hossza rövidebb, mint a mélységi korlát.",
        "Minden 𝛿-gráfban megmutatja, hogy van-e megoldás",
        [1,3]
    ],

    [
        "Mely állítások NEM igazak a visszalépéses keresés második változatára az alábbiak közül?",
        "A mélységi korlát figyelés önmagában is elég ahhoz, hogy garantáltan termináljon",
        "A körfigyelés önmagában is elég ahhoz, hogy garantáltan termináljon.",
        "Képes megtalálni a legrövidebb megoldást, ha van.",
        "Ha van megoldás a mélységi korláton belül, akkor talál megoldást.",
        [2,3]
    ],

    [
        "Melyek az alábbiak közül a visszalépéses keresés előnyei?",
        "Ha van (mélységi korálton belül) megoldása, akkor talál egyet.",
        "Mindig terminál.",
        "Véges 𝛿-gráfban optimális megoldást talál",
        "Kicsi a memória igénye.",
        [1,2,4]
    ],

    [
        "Mely állítások NEM igazak az alábbiak közül?",
        "A sorrendi és a vágó szabály egyaránt épülhet heurisztikára.",
        "A sorrendi szabály egy heurisztikus vezérlési stratégia.",
        "A mélységi korlát felfogható egy speciális vágó szabálynak.",
        "Vágó szabály nem alkalmazható sorrendi szabályokkal együtt.",
        [2,4]
    ],

    [
        "Képzelje maga elé a Hanoi tornyai probléma állapotgráfját három korong esetén. A startcsúcsból kivezető utak közül hányat vizsgál meg a visszalépéses keresés második változata, ha a mélységi korlát 3?",
        "9",
        "8",
        "14",
        "15",
        [4]
    ],

    [
        "Mit tartalmaz a gráfkeresés globális munkaterülete?",
        "A startcsúcsból kiinduló eddig felfedezett összes utat a nyílt csúcsokkal együtt.",
        "A reprezentációs gráfot, de külön megcímkézve benne a már bejárt csúcsokat.",
        "A reprezentációs gráf egy tetszőleges részgráfját.",
        "Csak a nyílt csúcsok halmazát.",
        [1]
    ],

    [
        "Melyek a gráfkeresés keresési szabályai?",
        "A nyílt csúcsok kiterjesztései.",
        "Egy újabb él hozzávétele a kereső gráf egyik csúcsához.",
        "A továbblépés (újabb él felfedezése) és a visszalépés.",
        "A továbblépés (egy csúcsból kivezető összes él felfedezése) és a visszalépés.",
        [1]
    ],

    [
        "Mi a gráfkeresés általános vezérlési stratégiája?",
        "Minden lépésben a legígéretesebb nyílt csúcsot választja kiterjesztésre.",
        "A legutoljára felfedezett nyílt csúcs kiterjesztése.",
        "A startcsúcsból legkisebb költségű úton elérhető nyílt csúcs kiterjesztése.",
        "A startcsúcsból legkisebb költségű már felfedezett úton elérhető nyílt csúcs kiterjesztése.",
        [1]
    ],

    [
        "Mely csúcsokat nevezzük a gráfkereséseknél nyílt csúcsoknak?",
        "A keresőgráf azon csúcsait, amelyek gyermekeit még nem, vagy nem eléggé jól ismerjük, ennél fogva kiterjesztésre várnak",
        "A keresőgráf azon csúcsait, amelyekből kivezető éleket még nem fedeztük fel.",
        "A keresőgráf azon csúcsait, amelyeket még nem terjesztettünk ki.",
        "A reprezentációs gráf azon csúcsait, amelyeket még nem terjesztettünk ki.",
        [1]
    ],

    [
        "Mit mutat a gráfkereséseknél a szülőre visszamutató pointerfüggvény (",
        "A keresőgráfbeli csúcsok egyik szülőjét.",
        "A reprezentációs gráfbeli csúcsok legjobb szülőjét.",
        "A keresőgráfbeli csúcsok legjobb szülőjét.",
        "A reprezentációs gráfbeli csúcsok egyik szülőjét.",
        [1]
    ],

    [
        "Mit mutat a gráfkereséseknél a költségfüggvény (g)?",
        "A startcsúcsból a keresőgráfbeli csúcsokhoz, a keresőgráfban vezető egyik út költségét.",
        "A startcsúcsból a keresőgráfbeli csúcsokhoz vezető egyik út költségét.",
        "A startcsúcsból a keresőgráfbeli csúcsokhoz, a keresőgráfban vezető legolcsóbb út költségét.",
        "A startcsúcsból a keresőgráfbeli csúcsokhoz a szülőre visszamutató pointerfüggvény által kijelölt út költségét.",
        [1]
    ],

    [
        "Mikor nevezünk egy kiértékelő függvényt csökkenőnek?",
        "Ha egy csúcs függvényértéke soha nem nő, viszont mindig csökken valahányszor olcsóbb odavezető utat találunk hozzá.",
        "Ha egy csúcs értéke csak akkor változik, de akkor csökken, ha egy olcsóbb odavezető utat találunk hozzá.",
        "Ha egy startcsúcsból kiinduló már felfedezett út mentén a csúcsok függvényértékei monoton csökkennek.",
        "Ha az algoritmus által kiterjesztett csúcsok függvényértékei monoton csökkennek.",
        [1]
    ],

    [
        "Hogyan lehet a keresőgráf korrektségét fenn tartani?",
        "Minden kiterjesztés után bejárjuk a kiterjesztéssel elért gyerekcsúcsok leszármazottait (ha vannak), és kijavítjuk azok korrektségét.",
        "Olyan kiértékelő függvényt használunk, amely kizárja, hogy egy már korábban kiterjesztett csúcshoz minden addiginál olcsóbb odavezető utat találjunk a startcsúcsból.",
        "Visszahelyezzük az OPEN halmazba azt a zárt csúcsot, amelyhez minden addiginél olcsóbb odavezető utat találtunk a startcsúcsból.",
        "Amikor egy minden addiginél olcsóbb odavezető utat találunk egy csúcshoz, akkor módosítjuk a szülőre visszamutató pointerfüggvény értékét és a költségfüggvény értékét.",
        [1,2]
    ],

    [
        "Mikor mondjuk a keresőgráf egyik csúcsára, hogy korrekt?",
        "Ha a szülőre visszamutató pointerek a keresőgráfra nézve optimális utat jelölnek ki hozzá a startcsúcsból, és ennek az útnak a költségét mutatja a költségfüggvény",
        "Ha optimális és konzisztens.",
        "Ha a gráfkeresés már kiterjesztette a gyerekeit is.",
        "Ha a költségfüggvény értéke a visszamutató pointerfüggvény által kijelölt szülő csúcsánál mért költségfüggvény értékének, és a szülőtől hozzávezető él költségének összege.",
        [1,2]
    ],

    [
        "Mely állítások igazak az alábbiak közül a gráfkeresés általános algoritmusára?",
        "Véges 𝛿-gráfban mindig terminál.",
        "Egy csúcsot legfeljebb véges sokszor terjeszt ki még végtelen nagy 𝛿-gráfok esetén is.",
        "Véges 𝛿-gráfban talál megoldást, ha van",
        "Véges 𝛿-gráfban optimális megoldást talál, ha van megoldás",
        [1,2,3]
    ],

    [
        "Mely állítások NEM igazak az alábbiak közül a gráfkeresés általános algoritmusára?",
        "Körmentes 𝛿-gráfban talál megoldást, ha van.",
        "𝛿-gráfban mindig terminál.",
        "Csökkenő kiértékelő függvényt használva soha nem terjeszt ki inkorrekt csúcsot",
        "Véges 𝛿-gráfban talál megoldást, ha van",
        [1,2]
    ],

    [
        "Lehet-e sorrendi heurisztika egy nem-informált gráfkeresés másodlagos vezérlési stratégiájában?",
        "Igen.",
        "Nem.",
        "Csak akkor, ha már az elsődleges vezérlési stratégia is alkalmaz heurisztikát.",
        "A másodlagos stratégiába nem lehet heurisztikát beépíteni.",
        [1]
    ],

    [
        "Mit jelent a gráfkereséseknél a megengedhetőség fogalma?",
        "Olyan heurisztikus függvényt, amely alulról becsüli egy reprezentációs gráfban a csúcsokból a célba vezető optimális út költségét.",
        "Olyan gráfkereső algoritmust, amelyik optimális megoldást talál, ha van.",
        "Olyan algoritmust, amely lépésről lépésre szűkíti a megoldások halmazát, amíg az már csak az optimális megoldásokat tartalmazza.",
        "Olyan gráfkereséseket, amelyek kiértékelő függvényében megengedett a heurisztika használata.",
        [1]
    ],

    [
        "Melyik állítás NEM igaz az azonosan nulla függvényről?",
        "Nem válaszható kiértékelő függvénynek.",
        "Becsli a célba vezető optimális út költségét.",
        "Megengedhető és monoton megszorításos.",
        "Nem tartalmaz extra ismeretet, azaz heurisztikát.",
        [1]
    ],

    [
        "Melyik gráfkereső algoritmust nevezzük A* algoritmusnak?",
        "Amelyik kiértékelő függvénye g+h alakú, ahol h nem-negatív és megengedhető.",
        "Amelyik kiértékelő függvénye g+h alakú, ahol h nem-negatív, megengedhető és monoton megszorításos.",
        "Amelyik garantáltan optimális megoldást talál, ha van.",
        "Amelyik kiértékelő függvénye g+h alakú, ahol h megengedhető, és garantáltan optimális megoldást talál, ha van.",
        [1]
    ],

    [
        "Mi az alábbiak közül az A algoritmus tulajdonsága?",
        "𝛿-gráfban megengedhető heurisztikával optimális megoldást talál, ha van",
        "Heurisztikus függvénye megengedhető.",
        "𝛿-gráfban egy csúcsot legfeljebb egyszer terjeszt ki.",
        "𝛿-gráfban optimális megoldást talál, ha van",
        [1]
    ],

    [
        "Mely állítás NEM igaz a következetes (A ) algoritmusra?",
        "A kiterjesztéseinek száma akár a kiterjesztett csúcsok száma mínusz egynek a kettő hatványa is lehet",
        "Egy csúcsot legfeljebb egyszer terjeszt ki.",
        "Amikor egy csúcsot kiterjeszt, már ismeri a start csúcsból odavezető optimális utat",
        "Optimális megoldással terminál, ha van megoldás.",
        [1]
    ],

    [
        "Mennyi a B algoritmus kiterjesztéseinek száma legrosszabb esetben, ha a kiterjesztett csúcsok száma k?",
        "½ k^2",
        "2^(k-1)",
        "k",
        "k log2 k",
        [1]
    ],

    [
        "Mikor mondunk egy A* algoritmust jobban informáltnak egy másiknál?",
        "Ha a heurisztikus függvényének értéke a nem célcsúcsokban kisebb, mint a másik algoritmus heurisztikus függvényének értéke.",
        "Ha kevesebb csúcs kiterjesztése mellett terminál.",
        "Ha a memória igénye nem nagyobb a másikénál.",
        "Ha a heurisztikus függvényének értéke a nem célcsúcsokban közelebbi becslést ad, mint a másik algoritmus heurisztikus függvényének értéke.",
        [1]
    ],

    [
        "Mikor mondjuk a gráfkereséseknél egy heurisztikus függvényről azt, hogy monoton megszorításos?",
        "Ha bármelyik él költsége nagyobb-egyenlő, mint az a különség, amit úgy kapunk, hogy az él kezdőcsúcsának függvényértékéből levonjuk a végcsúcsának függvényértékét.",
        "Ha a függvényt használó gráfkeresés működési grafikonja monoton növekedő.",
        "Ha a függvény megengedhető és nem negatív.",
        "Ha a függvény alulról becsüli minden csúcsban a hátralevő optimális költséget.",
        [1]
    ],

    [
        "Melyik állítás igaz az egyenletes gráfkeresésre?",
        "Optimális megoldást talál, ha van.",
        "Egy már kiterjesztett csúcshoz soha nem talál minden addiginál olcsóbb utat.",
        "Kiértékelő függvénye az élek élköltségeit egységnyinek tekinti.",
        "Dijkstra legrövidebb utak algoritmusának szinonimája.",
        [1,2]
    ],

    [
        "Az alábbiak közül melyek a megengedhető gráfkereső algoritmusok?",
        "A algoritmus",
        "B algoritmus",
        "Egyenletes gráfkeresés",
        "A** algoritmus",
        [1,2,3,4]
    ],

    [
        "A kurzuson speciális kétszemélyes játékokkal foglalkoztunk. Az alábbiak közül melyik tulajdonság NEM volt érvényes ezekre?",
        "egyik játékosnak biztos van győztes stratégiája",
        "zéró összegű",
        "determinisztikus",
        "véges",
        [1]
    ],

    [
        "Hogyan modellezzük a kétszemélyes játékokat?",
        "Állapottér modellel.",
        "Probléma dekompozícióval.",
        "Korlátkielégítéses modellel.",
        "ÉS/VAGY fákkal.",
        [1]
    ],

    [
        "Mi a nyerő stratégiája egy játékosnak egy kétszemélyes játékban?",
        "Azon győztes végállásba vezető játszmáinak összessége, amelyek közül valamelyiket biztosan végig tudja játszani, ha nem hibázik",
        "Győztes végállásba vezető játszmáinak összessége.",
        "Győztes végállásainak összessége.",
        "A győztes végállásba vezető egyik játszmája.",
        [1]
    ],

    [
        "Melyik állítás igaz az alábbiak közül egy játékos nyerő stratégiára?",
        "Az egyik játékos biztosan rendelkezik vele.",
        "Mindkét játékos számára előállítható.",
        "A játékfából készített ÉS/VAGY fában egy olyan hiperút, amelyik a startcsúcsból csupa, a játékos számára nyerő végállásba vezet.",
        "A játékfából a játékos szempontjából készített ÉS/VAGY fában egy olyan hiperút, amelyik a startcsúcsból csupa, a játékos számára nyerő végállásba vezet.",
        [4]
    ],

    [
        "Hogyan lehet megtudni, hogy kinek van győztes stratégiája egy két kimenetelű kétszemélyes játékban?",
        "Nem lehet véges lépésben megválaszolni ezt a kérdést.",
        "Úgy, hogy a minimax algoritmust alkalmazzuk a teljes játékfára úgy, hogy az első játékos győztes állásaihoz +1-et, a vesztes állásaihoz -1-et rendelünk. Ha a gyökérbe felfuttatott érték +1, akkor az első játékosnak van győztes stratégiája, egyébként a másodiknak.",
        "A játékfa leveleit megcímkézzük annak a játékosnak a nevével, aki a levélcsúccsal jelzett állásban nyerni fog. Szintről szintre felfelé haladva az Y játékos szintjén levő csúcs, ha van Y címkéjű gyereke, akkor Y címkét kap; különben a másik játékos nevét írjuk oda. A gyökér címkéje adja meg a választ.",
        "Átalakítjuk a játékfát ÉS/VAGY fává, és ebben keresünk olyan gyökérből induló hiperutat, amely vagy kizárólag az egyik, vagy kizárólag a másik játékos csupa győztes levélcsúcsába vezet",
        []
    ],

    [
        "Mikor következik be vágás az alfa-béta algoritmus működése során?",
        "Ha az aktuális csúcs alfa értéke nagyobb vagy egyenlő a csúcs béta értékénél.",
        "Ha az aktuális út egy alfa értéke kisebb vagy egyenlő az út egy béta értékénél.",
        "Ha az aktuális csúcs alfa értéke nagyobb vagy egyenlő az alatta vagy felette levőcsúcs béta értékénél.",
        "Ha az aktuális út egy alfa értéke nagyobb vagy egyenlő az út egy béta értékénél.",
        [4]
    ],

    [
        "Mi az a nyugalmi teszt?",
        "Váltakozó mélységű keresésnél a részfa felépítéséhez használt feltétel.",
        "Egy szülőcsúcs és egy gyerekének kiértékelő függvényértékei különbségét vizsgáló teszt.",
        "Az alfa-béta algoritmus vágási feltételét ellenőrző teszt.",
        "A heurisztikus kiértékelő függvény konstruálásához használt lehetséges módszer.",
        [1,2]
    ],

    [
        "Mely állítások igazak az alábbiak közül a játékfákra?",
        "Ágai a lehetséges játszmákat szimbolizálják.",
        "Levelei a győztes állásokat szimbolizálják.",
        "Csúcsai a játék állásait szimbolizálják.",
        "Szintjei a soron következő játékost szimbolizálják.",
        [1,3,4]
    ],

    [
        "Melyek az alábbiak közül a minimax algoritmusnak a lépései?",
        "Felépítjük a játékfát.",
        "Megadjuk a legnagyobb értékű levélcsúcshoz vezető ágat.",
        "Kiértékeljük a felépített fa leveleit.",
        "A saját szintjeink csúcsaihoz a gyerekeik értékeinek maximumát írjuk.",
        [3,4]
    ],

    [
        "Az alábbi részleges játékfa kiértékelő módszerek közül melyik ad a minimax-szal azonos eredményt?",
        "(n,m) átlagoló algoritmus",
        "negamax algoritmus",
        "szelektív algoritmus",
        "alfa-béta algoritmus",
        [2,4]
    ],

    [
        "Mi a játékfa?",
        "A kétszemélyes játék modelljének állapotgráfjából kialakított irányított fa.",
        "Az összes játszmát irányított útként megjelenítő irányított fa.",
        "Olyan ÉS/VAGY fa, amelyik szintjeiről váltakozva vagy csak ÉS kapcsolatú élek indulnak ki, vagy csak VAGY kapcsolatú élek.",
        "Egy ÉS/VAGY fa.",
        [1,2]
    ],

    [
        "Milyen az általános vezérlési stratégiája az evolúviós algoritmusoknak?",
        "nem-módosítható",
        "gráfkereső",
        "visszalépéses",
        "mohó",
        [1]
    ],

    [
        "Mit tárol az evolúciós algoritmus a globális munkaterületén?",
        "A populációt.",
        "Az evolúciós operátorokat.",
        "A rekombinációra kiválasztott egyedek halmazát.",
        "Az egyedek alkotta problémateret.",
        [1]
    ],

    [
        "Melyik NEM evolúciós operátor az alábbiak közül?",
        "Véletlen cseréje a kód két elemének.",
        "Rulett kerék algoritmus.",
        "Kétpontos keresztezés.",
        "Egy egyed kódolása.",
        [4]
    ],

    [
        "Hogyan szokták az egyedeket kódolni?",
        "Úgy, hogy a kód darabjai az egyed egy-egy tulajdonságát mutassa.",
        "Úgy, hogy az egyed kódja egy kromoszóma legyen.",
        "Úgy, hogy a kódolás és a dekódolás is hatékony legyen.",
        "Úgy, hogy a dekódolás gyors legyen, mert a fittnesz függvényt az egyedre lehet kiszámolni.",
        [1]
    ],

    [
        "Hol épülhet véletlenített módszer az evolúciós algoritmusba?",
        "Csak a populáció lecserélendő egyedeinek előállításában.",
        "Csak a kezdeti populáció kialakításában és mind a négy evolúciós operátorban.",
        "Csak a kiválasztásban, a rekombinációban, és a mutációban.",
        "Csak a keresztezési pontok megadásában.",
        [2]
    ],

    [
        "Hol van szerepe a kiválasztásnak az evolúciós algoritmusban?",
        "A keresztezési pontok megadásában.",
        "Ez az első lépése az evolúciós ciklusnak.",
        "A populáció lecserélendő egyedeinek előállításában.",
        "A rekombinációhoz szükséges szülő egyedek előállításában és az új populáció kialakításában.",
        [2,3,4]
    ],

    [
        "Mi a lényege a jó kiválasztási módszernek az evolúciós algoritmusokban?",
        "A fittnesz függvény alapján rendezi sorba a populáció egyedeit.",
        "Figyelembe veszi, hogy a kódban melyek az egyed tulajdonságait jelző szakaszok.",
        "A rátermett egyedeket nagyobb valószínűséggel választja ki, de ad esélyt a kevésbé rátermettek kiválasztására is",
        "Megkeresi a populáció legjobb egyedét.",
        [3]
    ],

    [
        "Mi a kapcsolat a keresztezés és a rekombináció között?",
        "A rekombináció a szülő egyedeken, míg a keresztezés azok kódjával dolgozik.",
        "A rekombinációk speciális keresztezések.",
        "A keresztezés mindig megelőzi a rekombinációt.",
        "A keresztezések speciális rekombinációk.",
        [4]
    ],

    [
        "Melyek lehetnek a feltételei az evolúciós algoritmus leállásának?",
        "Nincsen a populációnak adott korlátnál nagyobb fittneszértékű egyede.",
        "A populáció összesített fittneszértéke már egy ideje nem változik.",
        "A populáció minden egyedének fittneszértéke meghalad egy adott korlátot.",
        "Célegyed megjelenése a populációban.",
        [2,4]
    ],

    [
        "Mely keresztezési módszerek őrzik meg permutáció tulajdonságot?",
        "Parciálisan illesztett keresztezés.",
        "Egypontos keresztezés.",
        "Egyenletes keresztezés.",
        "Ciklikus keresztezés.",
        [1,4]
    ],

    [
        "Az alábbiak közül, melyek alkalmas módszerek a permutáció tulajdonságot megőrző mutációra?",
        "Kód első két elemének cseréje.",
        "Kód növekvő sorba rendezése.",
        "Kód egy szakaszának átrendezése.",
        "Kód két véletlen választott elemének cseréje.",
        [3,4]
    ],

    [
        "Mi az a rezolúciós gráf?",
        "Az üres klóz előállítását bemutató gráf.",
        "Az útkeresési feladatot leíró irányított gráf.",
        "Az összes klóz előállítását bemutató gráf.",
        "Logikai következtetést szimbolizáló ÉS/VAGY gráf.",
        [3]
    ],

    [
        "Melyek a p || q és a !p || !q rezolvensei?",
        "p || q || !q és q || p || !p",
        "p || !p és q || !q",
        "nem rezolválhatók",
        "üres klóz",
        [2]
    ],

    [
        "Mi a globális munkaterülete a rezolúciónak?",
        "Az axiómákból és a célállítás negáltjából kialakított klózok halmaza.",
        "A kiinduló és az eddig előállított klózok halmaza.",
        "Az egyedek populációja.",
        "A formalizációban részt vevő predikátumok halmaza.",
        [2]
    ],

    [
        "Mi a keresési szabálya a rezolúciónak?",
        "Az üres klóz levezetése.",
        "A Skolemizálás.",
        "Az üres klóz előállítása.",
        "A rezolvens képzés.",
        [4]
    ],

    [
        "Melyik az alábbiak közül a visszafelé haladó szabályalapú reprezentáció jellemzője?",
        "A tényállítás egy univerzálisan kvantált ÉS/VAGY formula.",
        "A célállítás egy L1 || … || Ln egzisztenciálisan kvantált formula, ahol L literál.",
        "A szabályok L→W alakúak, ahol W egy ÉS/VAGY formula, L egy literál, és minden változó univerzálisan kvantált.",
        "A szabályok W→L alakúak, ahol W egy ÉS/VAGY formula, L egy literál, és minden változó univerzálisan kvantált.",
        [4]
    ],

    [
        "Melyik az alábbiak közül az előrefelé haladó szabályalapú reprezentáció jellemzője?",
        "A szabályok W→L alakúak, ahol W egy ÉS/VAGY formula, L egy literál, és minden változó univerzálisan kvantált.",
        "A célállítás egy egzisztenciálisan kvantált ÉS/VAGY formula.",
        "A tényállítás egy L1 || … || Ln univerzálisan kvantált formula, ahol L literál.",
        "A szabályok L→W alakúak, ahol W egy ÉS/VAGY formula, L egy literál, és minden változó univerzálisan kvantált.",
        [4]
    ],

    [
        "Hogyan kell a rezolúciót válaszadásra felhasználni?",
        "A választ egy egzisztenciálisan kvantált változóval kell megjeleníteni a célállításban.",
        "A kérdésre adható választ egy külön predikátummal jelenítjük meg a célállításban.",
        "A rezolúció csak igen/nem jellegű választ képes adni.",
        "Az A , … , A ⟹ C kérdés helyett az A && … && A && !C kielégíthetetlenségét vizsgáljuk.",
        [1]
    ],

    [
        "Mi következik abból, hogy a rezolúció módszere helyes?",
        "Ha elakad (nem tud újabb klózt előállítani), akkor a kiinduló klózhalmaz kielégíthető.",
        "Kicsi a futási ideje",
        "Ha üres klózzal terminál, akkor a kiinduló klózhalmaz kielégíthetetlen.",
        "Mindig elő tudja állítani az üres klózt.",
        [1,3]
    ],

    [
        "Mi következik abból, hogy a rezolúció módszere teljes?",
        "Ha a kiinduló klózhalmaz kielégíthetetlen, akkor véges lépésen belül terminál.",
        "Ha a kiinduló klózhalmaz kielégíthető, akkor nem állítja elő az üres klózt.",
        "Ha a kiinduló klózhalmaz kielégíthetetlen, akkor levezethető az üres klóz.",
        "Minden A , … , A ⟹ C alakú tétel bizonyítására vagy cáfolására alkalmas.",
        [2,3]
    ],

    [
        "Melyek az alábbiak közül a rezolúció reprezentációs gráfjának különös tulajdonságai?",
        "Ha a stratcsúcsból vezet út célcsúcsba, akkor mindegyik startcsúcsból elérhető csúcsból is vezet célcsúcsba út.",
        "Nincs benne kör.",
        "Bármelyik csúcsból bármelyik csúcsba el lehet jutni.",
        "Nincs benne zsákutca.",
        [1,2]
    ],

    [
        "Melyek lehetnek az alábbiak közül a rezolúció modellfüggő vágó stratégiái?",
        "Minden rezolúciós lépésben az egyik szülőklóz az utoljára előállított klóz legyen.",
        "Soroljuk be szintekre a rezolúciós gráf klózait. Nulladik szinten a kiinduló klózok, az i+1-dik szinten azok, amelyek egyik szülője az i-dik szinten van, másik szülője az első i szint valamelyikén. Állítsuk elő szintenként a klózokat.",
        "Minden rezolúciós lépésben az egyik szülőklóz egyetlen literálból álljon.",
        "Mindig azt a klózpárt rezolváljuk előbb, amelyikben a literálok száma a legkevesebb.",
        [1,3]
    ],

    [
        "Melyek az alábbiak közül a rezolúció modellfüggő sorrendi stratégiái?",
        "Mindig azt a klózpárt rezolváljuk, amelyekben a literálok száma a legkevesebb.",
        "Minden rezolúciós lépésben az egyik szülőklóz egyetlen literálból álljon.",
        "Soroljuk be szintekre a rezolúciós gráf klózait. Nulladik szinten a kiinduló klózok, az i+1-dik szinten azok, amelyek egyik szülője az i-dik szinten van, a másik szülő az első i szint valamelyikén. Állítsuk elő szintenként a klózokat.",
        "Minden rezolúciós lépésben az egyik szülőklóz az utoljára előállított klóz legyen.",
        [1,3]
    ],

    [
        "Hogyan számoljuk az A esemény valószínűségét feltéve, hogy B esemény – amely valószínűsége nagyobb, mint nulla – bekövetkezik?",
        "P(A|B) = P(B|A)P(B) / P(A)",
        "P(A|B) = P(A)P(B) / P(B)",
        "P(A|B) = P(A,B) / P(A)",
        "P(A|B) = P(A,B) / P(B)",
        [4]
    ],

    [
        "Mikor mondjuk, hogy A és B események feltételesen függetlenek E eseményre nézve?",
        "P(AB|E) = P(A|E) P(B|E)",
        "P(AB|E) = P(A|E)",
        "P(AB|E) = P(B|E)",
        "P(AB|E) = P(A|E) P(B|E) / P(E)",
        [1]
    ],

    [
        "Az alábbiak közül melyik egy Bayes tétel?",
        "P(A|B) = P(B|A) P(B) / P(A)",
        "P(B|A,E) = P(A,B|E) P(A|E) / P(B|E)",
        "P(B|A,E) = P(A|B,E) P(A|E) / P(B|E)",
        "P(A|B) = P(B|A) P(A) / P(B)",
        [4]
    ],

    [
        "Az alábbiak közül melyik NEM igényel bizonytalanság kezelést?",
        "Elmosódott jelentésű állítások alapján történő következtetés.",
        "Axiómákból kiinduló logikai következtetés.",
        "Ellentmondó adatokra épülő következtetés.",
        "Hiányzó adatok alapján történő következtetés.",
        [2]
    ],

    [
        "Milyen gráf a valószínűségi háló?",
        "Véges körmentes irányított gráf.",
        "Véges fa.",
        "𝛿-gráf.",
        "Véges fa-gráf.",
        [1]
    ],

    [
        "Mit mutat meg a valószínűségi háló feltételes valószínűségi táblája?",
        "Azt, hogy egy csúcs valószínűségi változója milyen valószínűséggel vesz fel egyadott értéket feltéve, hogy a gyerek csúcsok valószínűségi változói adott értékűek.",
        "Azt, hogy egy él valószínűségi változója milyen valószínűséggel vesz fel egy adott értéket feltéve, hogy az él végcsúcsából kifutó élek valószínűségi változói adott értékűek",
        "Azt, hogy egy csúcs valószínűségi változója milyen valószínűséggel vesz fel egy adott értéket feltéve, hogy a szülő csúcsok valószínűségi változói adott értékűek.",
        "Azt, hogy egy él valószínűségi változója milyen valószínűséggel vesz fel egy adott értéket feltéve, hogy az él kezdőcsúcsába futó élek valószínűségi változói adott értékűek.",
        [3]
    ],

    [
        "Mit jelent a normalizálás technikája?",
        "Adott kifejezések olyan együtthatóval történő szorzását, hogy ezáltal az összegük 1 legyen.",
        "A kettes norma alkalmazását.",
        "Bayes hálók fa-gráfokká történő átalakítását.",
        "Adott összegű kifejezések közös együtthatójának kiszámolását.",
        [1,4]
    ],

    [
        "Mit jelent az, hogy egy valószínűsági háló egyszeresen kötött?",
        "Azt, hogy a háló körmentes.",
        "Azt, hogy a háló egy fa-gráf.",
        "Azt, hogy a háló egy irányított fa.",
        "Azt, hogy a háló éleinek irányításait megfordítva irányított fát kapunk.",
        [2]
    ],

    [
        "Az alábbiak közül melyek igazak a valószínűségi hálókra?",
        "Az éleiről elhagyva az irányítást a hálóból egy irányítatlan fát kapunk.",
        "Irányított élei a válószínűségi változók közötti közvetlen ok-okozatiösszefüggéseket mutatják.",
        "Csúcsai egy adott tárgykör valószínűségi változóit reprezentálják.",
        "Egyetlen célcsúcsa van.",
        [2,3]
    ],

    [
        "Hogyan javítható a valószínűségi hálóban való számítás hatékonysága, ha a háló nem fa-gráf?",
        "Csúcsok összevonásával fa-gráffá alakítjuk a valószínűségi hálót.",
        "Csúcsok elhagyásával több fa-gráfokra bontjuk a valószínűségi hálót.",
        "A valószínűségi hálót példák generálására használjuk, amelyekből relatív gyakoriságot számolunk.",
        "Nem javítható.",
        [1,2,3]
    ],

    [
        "Milyen heurisztikus bizonytalanságkezelő technikákról hallott?",
        "Fuzzy következtetés.",
        "Zárt világ feltételezés.",
        "Bayes-i frissítés módszere.",
        "MYCIN szakértő rendszer következtetése.",
        [1,4]
    ],

    [
        "Mit jelent az, hogy egy tanulás felügyelt?",
        "A tanító minták elvárt kimenetét is felhasználja a tanulási folyamat.",
        "A tanulás folyamata nem teljesen automatikus.",
        "A tanulás folyamatát módosítani kell, ha az elvárt kimenet eltér a számítottól.",
        "A tanulási folyamatnak ki kell számolni a tanító minták elvárt kimenetét is.",
        [1]
    ],

    [
        "Mit jelent az, hogy egy tanulás felügyelet nélküli?",
        "A tanulás folyamata teljesen automatikus.",
        "A tanító minták elvárt kimenetét automatikusan számolja a tanulás módszere.",
        "A tanulásnak nincs szüksége a tanító minták elvárt kimenetére.",
        "A tanító mintákra kiszámolt kimenet eltérhet az elvárt kimenettől.",
        [3]
    ],

    [
        "Mit jelent a zaj a tanító minták esetén?",
        "Amikor két vagy több eltérő attribútumokkal rendelkező minta elvárt kimenetei megegyeznek.",
        "Amikor a tanítóminták elvárt kimenetének jelentése elmosódott.",
        "Amikor azonos attribútumokkal rendelkező minták eltérő elvárt kimenetekkel rendelkeznek.",
        "Amikor a tanítóminták elvárt kimenete hasonló.",
        [3]
    ],

    [
        "Különböző tanító minták halmazának mikor a legkisebb az információ (entrópia) tartalma a döntési fáknál?",
        "Ha a kimeneteik értékei mind különböznek.",
        "Ha a minták inputjai közötti legnagyobb távolság (valamilyen távolság metrika mellett) kisebb a legnagyobb input értéknél (ugyanazon metrika szerint).",
        "Ha a minták kimeneti értékei közötti legnagyobb távolság (valamilyen távolság metrika mellett) kisebb a legnagyobb kimeneti értéknél (ugyanazon metrika szerint).",
        "Ha mind azonos kimeneti értékkel rendelkezik.",
        [4]
    ],

    [
        "Hogyan értékelünk ki a döntési fa építése során egy levélcsúcsot akkor, ha nem tartoznak hozzá tanító minták?",
        "A szülőcsúcsához tartozó attribútumok alapján.",
        "A csúcshoz tartozó attribútumok alapján, ha vannak ilyenek, különben véletlenszerű értéket kap.",
        "A szülőcsúcsához tartozó tanítóminták alapján.",
        "Ilyen eset nem fordulhat elő.",
        [3]
    ],

    [
        "A döntési fa építése során az alábbiak közül milyen csúcsok fordulhatnak elő a fában ?",
        "Kiértékeletlen levélcsúcsok.",
        "Kiértékelt levélcsúcsok.",
        "Attribútummal címkézett belső csúcsok.",
        "Attribútummal címkézett levél csúcsok.",
        [1,2,3]
    ],

    [
        "Mely állítások igazak a döntési fára?",
        "Ágai egy probléma lehetséges megoldását adják.",
        "Gyökércsúcsa a kiinduló problémát reprezentálja.",
        "Egy csúcsból kivezető élei a csúcs attribútumának lehetséges értékeit szimbolizálják.",
        "Belső csúcsai egy-egy attribútumot reprezentálnak.",
        [3,4]
    ],

    [
        "Mely állítások igazak a döntési fa módszerére?",
        "Optimális megoldást ad.",
        "A mintákat a válaszadásnál is ismerni kell.",
        "A tanulási idő hosszú.",
        "A válaszadási idő rövid.",
        [3,4]
    ],

    [
        "Mely állítások igazak k-legközelebbi szomszéd módszerére?",
        "A megtanult paraméter a minták összessége.",
        "A tanulási idő hosszú.",
        "A válaszadási idő rövid.",
        "Egyszerű implementálni.",
        [1,4]
    ],

    [
        "Milyen felügyelt tanulási módszereket ismert meg a kurzuson?",
        "k-legközelebbi szomszéd módszere.",
        "k-közép módszer.",
        "Error backpropagation algoritmus.",
        "Véletlen erdő módszere.",
        [1,3,4]
    ],

    [
        "Hol jutott szerepe a véletlennek a véletlen erdő módszerében?",
        "Az erdő egy fájának felépítéséhez a minták attribútumai közül véletlen választott attribútumokat használ.",
        "Az erdő egy fájának felépítéséhez a minták véletlen választott részhalmazát használja.",
        "Az erdő fáinak számát véletlen módon határozzák meg.",
        "A fa egy csúcsához rendelt attribútumot véletlen módon választja ki.",
        [1,2]
    ],

    [
        "Az alábbiak közül melyik jellemzik a homogén többrétegű előrecsatolt hálózatot?",
        "Az i-dik réteg neuronjának kimenete csak az i+1-dik réteg neuronjának lehet bemeneti értéke",
        "A különböző rétegek neuronjainak aktivációs (kimeneti) függvénye eltérhet, de egy réteghez tartozó neuronok esetében nem.",
        "Az i-edik réteg egy neuronjának kimenete csak az i-1-dik réteg neuronjának lehet bemeneti értéke.",
        "Az azonos réteghez tartozó neuronok között nincs közvetlen kapcsolat.",
        [1,4]
    ],

    [
        "Mit jelent az input vektorizálása?",
        "A megoldandó probléma lineárisan szeparálható feladattá konvertálását.",
        "Egy inputot a jellemzői (attribútumai) segítségével egy számsorozattal ábrázolunk.",
        "Az inputok azonos hosszúságú számsorozatok.",
        "Az inputot egy síkvektorként fogjuk fel, amelynek kiinduló pontja az origó.",
        [2]
    ],

    [
        "Jellemezze a szigmoid kimeneti függvényt!",
        "Folytonos, majdnem mindenhol deriválható, monoton növekedő, ]0,1[ intervallumba képző függvény.",
        "Egyetlen szakadási ponttal rendelkező, máshol deriválható, monoton növekedő, [0,1] intervallumba képző függvény.",
        "Folytonos, mindenhol deriválható, monoton növekedő, [0,1] intervallumba képző függvény.",
        "Folytonos, mindenhol deriválható, szigorúan monoton növekedő, ]0,1[ intervallumba képző függvény.",
        [4]
    ],

    [
        "Az alábbiak közül melyik hálózatnak NEM lehet több rétegű topológiája?",
        "Hopfield neurális hálózat.",
        "Konvolúciós neurális hálózat.",
        "Backpropagation modell hálózata.",
        "Rekurrens neurális hálózat.",
        [1]
    ],

    [
        "Mi a delta tanulási szabály?",
        "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlyt tartalmazó neuron számított kimeneti értékének szorzatától függ.",
        "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlyt tartalmazó neuron várt kimeneti értékének szorzatától függ.",
        "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlyt tartalmazó neuron számított és várt kimeneti értékei különbségének szorzatától függ.",
        "Egy súly megváltoztatása a súlyhoz tartozó bemeneti értéknek, és a súlynak szorzatától függ.",
        [3]
    ],

    [
        "Mire alkalmazzák a lineárisan szeparálható kifejezést?",
        "Arra, hogy a mintapontokhoz a legkisebb négyzetek módszerével meghatározott egyenes elválasztja egymástól a mintapontokat.",
        "A Rosenblatt-féle perceptronokból épített neurális hálózatokra.",
        "Azokra a feladatokra, amelyek lehetséges bemeneti érték n-esei egy hipersíkkal elválaszthatók aszerint, hogy az ezekre elvárt válasz A vagy B.",
        "Arra, hogy a perceptronnal megoldható problémák két osztályba sorolhatóak be.",
        [3]
    ],

    [
        "A mesterséges neuron hálózatokra felügyelt vagy felügyelet nélküli tanulási módszer alkalmazható?",
        "Csak felügyelet nélkül.",
        "Csak felügyelt.",
        "Egyik sem.",
        "Mindkettő.",
        [4]
    ],

    [
        "Hogyan lehet Rosenblatt-féle perceptronok felhasználásával koordinátapárokat úgy osztályozni, hogy megmondjuk melyek esnek bele egy megadott háromszögbe, és melyek nem?",
        "Egy rétegű három neuront tartalmazó hálózattal.",
        "Nem lehet, mert többrétegű Rosenblatt-féle perceptronokból álló hálózathoz nem ismerünk tanuló algoritmust.",
        "Olyan kétrétegű előrecsatolt hálózattal, ahol az első rétegben három, a második rétegben egy neuron van.",
        "Nem lehet, mert a Rosenblatt-féle neuronokkal csak lineárisan szeparálható problémákat lehet megoldani.",
        [3]
    ],

    [
        "A mesterséges neuronhálózatot egy olyan paraméteres függvénynek tekinthetjük, amellyel a megoldandó problémát reprezentáló leképezést közelítjük. Melyek ebben a paraméterek?",
        "A neuronok „bias” bemenete.",
        "A tanító minták száma és a tanulási együttható.",
        "A neuronokban használt kimeneti függvények.",
        "A neuronok súlytényzői.",
        [4]
    ],

    [
        "Mit értünk a hiba-visszaterjesztés (error-backpropagation) módszere alatt?",
        "Azt a folyamatot, amellyel a Hopfield modell stabil konfigurációba jut.",
        "Azt, amikor egy többrétegű előrecsatolt hálózat kimeneti rétegének számított és várt outputjai alapján határozzuk meg, hogy hogyan kell a hálóbeli neuronok súlyait változtatni.",
        "Azt, amikor egy többrétegű előrecsatolt hálózat kimeneti rétegének elvárt kimenetei alapján határozzuk meg, hogy a hálóbeli neuronoknak milyen elvárt kimenete van.",
        "Olyan többrétegű hálózat építését, amelyben megengedjük a visszacsatolást a szomszédos rétegek között.",
        [2]
    ],

    [
        "Mit értünk a Hopfield modell konfigurációs terén?",
        "A neuronok súlyainak összességét.",
        "A neuronok kimeneteinek összességét.",
        "A neuronok bemeneteinek összességét.",
        "A neuronok által felvett állapotok összességét.",
        [2,4]
    ],

    [
        "Az alábbiak közül mely állítások igazak a mesterséges neuronhálózatokra?",
        "A tanulási idő hosszú.",
        "Optimális megoldást ad.",
        "A válaszadási idő rövid.",
        "A mintákat egyesével el kell tárolni.",
        [1,3]
    ],

]