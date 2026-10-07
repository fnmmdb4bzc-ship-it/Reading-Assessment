/* ============================================================
   Lees- en Klankassessering (Afrikaans Huistaal)
   Debby Smit Educational Therapy
   Afrikaans version of the Reading and Phonics Assessment. Same
   design, layout and backend as the English site; all learner
   material below is original Afrikaans content written for this
   tool (not copied from any CAPS/DBE document or published test).
   Single-file client app. No external libraries.
   ============================================================ */

/* ---------------- DATA: Grondslagfase (Graad 1-3) ----------------
   Letter charts: every letter once plus extra high-frequency Afrikaans
   letters, mixed upper/lower case, three orders. Word charts: 80
   Foundation Phase high-frequency and decodable Afrikaans words in
   three orders. Passages: three original four-paragraph stories with
   five comprehension questions each. */
const FOUNDATION = {
  letters: {"1.1": ["l", "a", "M", "y", "s", "I", "p", "T", "D", "a", "s", "K", "N", "q", "m", "E", "f", "R", "b", "t", "k", "g", "u", "v", "b", "i", "O", "x", "C", "d", "r", "h", "n", "e", "w", "z", "l", "g", "o", "j"], "1.2": ["B", "E", "v", "S", "s", "R", "A", "q", "U", "i", "y", "w", "t", "l", "h", "u", "l", "x", "e", "f", "a", "i", "c", "N", "k", "G", "z", "p", "p", "j", "k", "o", "n", "r", "D", "o", "w", "t", "M", "d"], "1.3": ["r", "A", "v", "p", "G", "T", "l", "I", "n", "g", "d", "i", "u", "v", "h", "K", "b", "n", "E", "Z", "h", "O", "m", "a", "f", "o", "s", "t", "r", "q", "x", "C", "e", "s", "y", "l", "m", "k", "w", "J"]},
  words: {"2.1": ["bok", "ma", "sal", "kan", "perd", "die", "met", "pot", "groot", "het", "hond", "kop", "geel", "jy", "nes", "voet", "muis", "kar", "slaap", "boek", "huis", "eet", "pen", "lam", "vuur", "na", "sien", "klein", "vlag", "mat", "trein", "water", "op", "deur", "vir", "vark", "loop", "bed", "groen", "spring", "skool", "van", "by", "speel", "boom", "rooi", "in", "blou", "ons", "tafel", "koei", "stoel", "maan", "hand", "nie", "bal", "melk", "sy", "hoed", "kat", "brood", "oog", "neus", "bus", "wat", "sit", "vis", "lag", "eend", "rok", "slang", "is", "my", "drink", "en", "pa", "wil", "ek", "son", "hy"], "2.2": ["kar", "hond", "mat", "bok", "sien", "drink", "ma", "geel", "my", "is", "bus", "op", "brood", "vir", "hy", "blou", "ek", "by", "kop", "pot", "kan", "melk", "loop", "water", "lam", "tafel", "vuur", "het", "oog", "speel", "nie", "klein", "groot", "van", "deur", "kat", "hand", "koei", "pen", "vark", "maan", "wil", "lag", "muis", "huis", "son", "rooi", "eet", "jy", "trein", "en", "neus", "voet", "boom", "groen", "vlag", "na", "perd", "rok", "wat", "sy", "met", "stoel", "sit", "bal", "vis", "ons", "eend", "sal", "slang", "boek", "slaap", "pa", "skool", "nes", "bed", "die", "spring", "hoed", "in"], "2.3": ["bed", "nie", "en", "bus", "groen", "bok", "lag", "wil", "met", "rok", "hy", "ek", "huis", "my", "son", "by", "hand", "pen", "mat", "kar", "op", "eend", "vuur", "lam", "nes", "boek", "kat", "oog", "rooi", "vark", "pa", "slang", "van", "het", "perd", "die", "tafel", "water", "klein", "sy", "kop", "na", "vlag", "sal", "maan", "sien", "hond", "kan", "wat", "ma", "is", "voet", "muis", "spring", "neus", "blou", "vis", "bal", "in", "brood", "vir", "melk", "eet", "sit", "deur", "boom", "trein", "hoed", "koei", "jy", "slaap", "drink", "loop", "ons", "groot", "stoel", "pot", "speel", "skool", "geel"]},
  passages: {"3.1": {"title": "Lerato se nuwe fiets", "paragraphs": ["Lerato het vir haar verjaardag 'n nuwe blou fiets gekry. Sy was baie bly, maar sy kon nog nie ry nie. Elke keer as sy probeer het, het sy omgeval.", "Haar oupa het gesê hy sal haar help. Hy het agter die fiets geloop en die saal vasgehou. Lerato het hard getrap en reguit vorentoe gekyk.", "Na 'n rukkie het Oupa die saal stilletjies gelos. Lerato het dit nie geweet nie. Sy het alleen tot by die hek gery!", "Toe sy omdraai, het sy gesien dat Oupa ver agter haar staan. Hy het gelag en hande geklap. Van daardie dag af het Lerato elke middag saam met haar maats in die straat gery."], "markers": [30, 56, 79, 113], "total": 113, "questions": [{"q": "Watter kleur was Lerato se nuwe fiets?", "a": "Blou"}, {"q": "Wie het Lerato gehelp om te leer ry?", "a": "Haar oupa"}, {"q": "Wat het Oupa vasgehou?", "a": "Die saal (van die fiets)"}, {"q": "Tot waar het Lerato alleen gery?", "a": "Tot by die hek"}, {"q": "Wat het Oupa gedoen toe Lerato omdraai?", "a": "Hy het gelag en hande geklap"}]}, "3.2": {"title": "Mossie in die boom", "paragraphs": ["Ouma Rina het 'n klein grys kat met die naam Mossie. Een oggend het 'n groot hond in die straat geblaf. Mossie het geskrik en hoog in die boom in die tuin geklim.", "Mossie wou nie weer afkom nie. Sy het op 'n dun tak gesit en hard gemiaau. Ouma Rina het haar geroep, maar die kat het net vasgeklou.", "Toe kom Pieter van langsaan met 'n lang leer. Hy het die leer teen die boom gesit en versigtig opgeklim.", "Pieter het Mossie saggies opgetel en teen sy bors vasgehou. Hy het stadig afgeklim. Ouma Rina was so dankbaar dat sy vir Pieter 'n stuk warm melktert gegee het."], "markers": [33, 60, 80, 109], "total": 109, "questions": [{"q": "Wat is die naam van Ouma Rina se kat?", "a": "Mossie"}, {"q": "Hoekom het Mossie in die boom geklim?", "a": "'n Hond het geblaf en sy het geskrik"}, {"q": "Waar het Mossie in die boom gesit?", "a": "Op 'n dun tak"}, {"q": "Wat het Pieter saamgebring?", "a": "'n Lang leer"}, {"q": "Wat het Ouma Rina vir Pieter gegee?", "a": "'n Stuk warm melktert"}]}, "3.3": {"title": "Die groentetuin", "paragraphs": ["Die Graad 2-klas het besluit om 'n groentetuin by die skool te maak. Juffrou Adams het vir elke kind 'n pakkie saad gegee. Thandi het wortels gekry en Johan het boontjies gekry.", "Die kinders het die grond omgespit en klein gaatjies gemaak. Hulle het die saad in die gaatjies gesit en met grond toegemaak. Daarna het hulle alles mooi natgegooi.", "Elke dag het die kinders gaan kyk, maar niks het gebeur nie. Johan was bekommerd. Hy het gedink die saad is dood.", "Na twee weke het Thandi klein groen blaartjies uit die grond sien steek. Die hele klas het gejuig. Aan die einde van die kwartaal het hulle saam 'n groot pot groentesop gemaak."], "markers": [32, 60, 82, 114], "total": 114, "questions": [{"q": "Wat het die klas besluit om by die skool te maak?", "a": "'n Groentetuin"}, {"q": "Watter saad het Thandi gekry?", "a": "Wortels"}, {"q": "Hoe het Johan gevoel toe niks gebeur nie?", "a": "Bekommerd (hy het gedink die saad is dood)"}, {"q": "Na hoe lank het die blaartjies uitgekom?", "a": "Na twee weke"}, {"q": "Wat het die klas aan die einde van die kwartaal gemaak?", "a": "'n Groot pot groentesop"}]}}
};
const GRADES = {"4": {"label": "Graad 4", "title": "Die skoolkonsert", "paragraphs": ["Elke jaar hou Laerskool Bergsig 'n konsert vir die ouers. Vanjaar moes die Graad 4-klas 'n liedjie sing en 'n kort toneelstuk opvoer.", "Ayesha het die hoofrol gekry. Sy moes 'n koningin speel wat haar kroon verloor. Sy het elke aand voor die spieël geoefen totdat sy al haar woorde kon opsê.", "Op die aand van die konsert het die gordyn oopgegaan, maar Ayesha se kroon was weg! Die kinders het agter die verhoog gesoek. Uiteindelik het Daniel dit in die kostuumkis gekry.", "Ayesha het die kroon net betyds opgesit. Die toneelstuk was 'n groot sukses en die ouers het lank hande geklap."], "markers": [23, 52, 83, 103], "total": 103, "questions": [{"q": "Vir wie hou die skool elke jaar 'n konsert?", "a": "Vir die ouers"}, {"q": "Watter rol het Ayesha in die toneelstuk gespeel?", "a": "'n Koningin (die hoofrol)"}, {"q": "Waar het Daniel die kroon gekry?", "a": "In die kostuumkis"}, {"q": "Hoekom dink jy het Ayesha elke aand voor die spieël geoefen?", "a": "[Afleiding] Sodat sy haar woorde goed ken / sy wou goed vaar"}, {"q": "Wat beteken die woord 'betyds' in hierdie storie?", "a": "[Woordeskat] Net op die regte tyd, nie te laat nie"}], "decoding": ["konsert", "toneelstuk", "koningin", "spieël", "verhoog", "uiteindelik", "kostuumkis", "betyds", "gordyn", "geoefen", "sukses", "oopgegaan"]}, "5": {"label": "Graad 5", "title": "Kampeer in die Cederberg", "paragraphs": ["Gedurende die Septembervakansie het Sipho se gesin in die Cederberg gaan kampeer. Die grondpad na die kampterrein was smal en kronkelend, en die motor het oor elke klip gehobbel.", "Die eerste aand het Sipho se pa 'n vuur gemaak terwyl sy ma die tent opgeslaan het. Sipho moes hout aandra. Hy het tussen die rotse rondgeloop en droë takkies bymekaargemaak.", "Toe dit donker word, het Sipho na bo gekyk en sy asem opgehou. Die lug was vol sterre, baie meer as wat hy ooit in die stad gesien het. Sy pa het die Suiderkruis vir hom uitgewys.", "Later die nag het Sipho 'n vreemde geluid buite die tent gehoor. Hy het sy flitslig aangeskakel en versigtig uitgeloer. Dit was net 'n nuuskierige ystervark wat in die kossak rondgekrap het."], "markers": [29, 60, 97, 129], "total": 129, "questions": [{"q": "Waar het Sipho se gesin gaan kampeer?", "a": "In die Cederberg"}, {"q": "Wat moes Sipho vir die vuur aandra?", "a": "Hout / droë takkies"}, {"q": "Wat het Sipho se pa vir hom in die lug uitgewys?", "a": "Die Suiderkruis"}, {"q": "Hoekom dink jy kon Sipho meer sterre sien as in die stad?", "a": "[Afleiding] Daar is nie stadsligte in die Cederberg nie / dit is baie donkerder"}, {"q": "Wat beteken die woord 'kronkelend' in hierdie teks?", "a": "[Woordeskat] Met baie draaie"}], "decoding": ["kampeer", "kampterrein", "kronkelend", "gehobbel", "bymekaargemaak", "gedurende", "uitgewys", "flitslig", "versigtig", "nuuskierige", "ystervark", "rondgekrap"]}, "6": {"label": "Graad 6", "title": "Die ou watermeul", "paragraphs": ["Aan die rand van die dorp staan 'n ou watermeul wat al meer as honderd jaar oud is. Lank gelede het boere van heinde en verre hul koring hierheen gebring om tot meel gemaal te word. Vandag draai die groot houtwiel net nog op Saterdae vir toeriste.", "Marieke se oupagrootjie was die laaste meulenaar. Haar ouma vertel graag hoe hy elke oggend voor sonop opgestaan het om die sluis oop te maak sodat die water oor die wiel kon stroom. In droë jare moes hy soms weke lank wag voordat daar genoeg water in die sloot was.", "Vir 'n skoolprojek het Marieke besluit om die geskiedenis van die meul na te vors. Sy het ou foto's in die museum bestudeer en met inwoners gepraat wat die meul nog in werking onthou. Hoe meer sy uitgevind het, hoe trotser was sy op haar familie se deel in die dorp se verhaal."], "markers": [47, 97, 150], "total": 150, "questions": [{"q": "Hoe oud is die watermeul?", "a": "Meer as honderd jaar"}, {"q": "Wie was die laaste meulenaar?", "a": "Marieke se oupagrootjie"}, {"q": "Wat moes die meulenaar elke oggend oopmaak?", "a": "Die sluis"}, {"q": "Hoekom moes die meulenaar in droë jare soms weke lank wag?", "a": "[Afleiding] Daar was nie genoeg water om die wiel te laat draai nie"}, {"q": "Wat beteken 'na te vors' in hierdie teks?", "a": "[Woordeskat] Om iets te ondersoek / inligting daaroor te soek"}], "decoding": ["watermeul", "meulenaar", "oupagrootjie", "toeriste", "heinde", "sluis", "geskiedenis", "bestudeer", "inwoners", "werking", "sonop", "trotser"]}, "7": {"label": "Graad 7", "title": "Water spaar by ons skool", "paragraphs": ["Verlede jaar het die Graad 7-leerders van Laerskool Rivierpark 'n projek begin om water te bespaar. Die Wes-Kaap het pas 'n ernstige droogte beleef, en die leerders het besef dat hul skool elke dag duisende liters water vermors deur lekkende krane en toilette wat aanhoudend loop.", "Die leerders het eers 'n opname gedoen om uit te vind waar die meeste water verlore gaan. Daarna het hulle plakkate ontwerp wat ander leerders herinner om krane styf toe te draai, en 'n plaaslike loodgieter het aangebied om die lekkende pype gratis reg te maak. Hulle het ook 'n reënwatertenk langs die saal laat installeer.", "Binne ses maande het die skool se waterrekening met amper 'n derde gedaal. Die geld wat gespaar is, is gebruik om nuwe boeke vir die biblioteek te koop. Verskeie skole in die omgewing het sedertdien by Rivierpark kom kers opsteek oor hoe om hul eie waterverbruik te verminder."], "markers": [46, 102, 150], "total": 150, "questions": [{"q": "Watter graad het die waterprojek begin?", "a": "Graad 7"}, {"q": "Wat het die leerders eerste gedoen?", "a": "'n Opname om uit te vind waar die meeste water verlore gaan"}, {"q": "Waarvoor is die geld wat gespaar is, gebruik?", "a": "Nuwe boeke vir die biblioteek"}, {"q": "Hoekom dink jy het die leerders plakkate ontwerp?", "a": "[Afleiding] Om ander leerders te herinner om krane toe te draai en water te spaar"}, {"q": "Wat beteken die uitdrukking 'kom kers opsteek' in hierdie teks?", "a": "[Woordeskat] Kom raad of inligting vra"}], "decoding": ["bespaar", "droogte", "vermors", "aanhoudend", "opname", "plakkate", "loodgieter", "reënwatertenk", "installeer", "waterrekening", "verminder", "sedertdien"]}, "8": {"label": "Graad 8", "title": "Die krag van die son", "paragraphs": ["Die son is die grootste bron van energie op aarde. Plante gebruik sonlig om voedsel te vervaardig, die son verhit die oseane en dryf so die weer aan, en vandag benut mense sonkrag om elektrisiteit op te wek. Anders as steenkool is sonlig 'n hernubare hulpbron, wat beteken dat dit nooit sal opraak nie.", "'n Sonpaneel bestaan uit talle klein selle wat van silikon gemaak word. Wanneer sonlig op die selle val, maak dit elektrone los wat dan as 'n elektriese stroom deur drade vloei. Panele op die dak van 'n gewone huis kan genoeg elektrisiteit opwek om die meeste huishoudelike toestelle gedurende die dag aan te dryf.", "Suid-Afrika is een van die sonnigste lande ter wêreld, veral in die Noord-Kaap, waar groot sonkragsentrales gebou is. Voorstanders voer aan dat sonkrag geen skadelike uitlatings veroorsaak sodra die panele geïnstalleer is nie. Kritici wys egter daarop dat panele snags geen krag lewer nie en dat batterye om energie te stoor duur is. Die meeste kenners stem saam dat sonkrag die beste werk as deel van 'n breër mengsel van energiebronne."], "markers": [54, 108, 179], "total": 179, "questions": [{"q": "Noem twee maniere waarop die son volgens die teks energie verskaf.", "a": "Enige twee: plante maak voedsel / die son verhit die oseane en dryf die weer aan / sonkrag wek elektrisiteit op"}, {"q": "In watter provinsie is groot sonkragsentrales gebou?", "a": "Die Noord-Kaap"}, {"q": "Noem een kritiek teen sonkrag wat in die teks genoem word.", "a": "Panele lewer snags geen krag nie / batterye om energie te stoor is duur"}, {"q": "Hoekom word sonlig 'n 'hernubare' hulpbron genoem?", "a": "[Afleiding] Omdat dit nooit sal opraak nie"}, {"q": "Wat beteken die woord 'uitlatings' in hierdie teks?", "a": "[Woordeskat] Stowwe (soos gasse) wat in die lug vrygestel word"}], "decoding": ["hernubare", "sonpaneel", "silikon", "elektrone", "huishoudelike", "sonkragsentrales", "voorstanders", "uitlatings", "geïnstalleer", "batterye", "energiebronne", "vervaardig"]}, "9": {"label": "Graad 9", "title": "Vuur op die berg", "paragraphs": ["Die lug bo die berg het al die hele middag die kleur van ou koper gehad toe Ruan die eerste rookpluim sien opstyg. Hy het op die stoep van sy oom se plaashuis gestaan, met die tuinslang nog in sy hand, en gekyk hoe die wind die rook soos 'n donker vlag oor die kruin waai. Sy oom het hom 'n rustige naweek belowe, nie dit nie.", "Binne 'n halfuur het die vlamme die fynbos teen die hange begin verslind. Die wind het gloeiende stukkies as oor die kampe gestrooi, en die lug was so dik van die rook dat Ruan se oë getraan het. Sy oom het bevele geskree wat hy skaars bo die gedreun van die bakkie se enjin en die geknetter van die vuur kon hoor.", "Ruan het onthou wat sy oom hom jare gelede geleer het: in 'n noodgeval moet jy eers jou paniek beveg, en dan die vuur. Hy het sy asemhaling gedwing om stadiger te word, die nat sakke gegryp wat sy oom by die dam gestapel het, en die vonke langs die skuur doodgeslaan, presies soos hy dit eens op 'n kalm somersdag geoefen het.", "Teen die tyd dat die brandweer opdaag, was Ruan en sy oom swart van die roet en doodmoeg, maar ongedeerd. Ruan het besef dat sy oom se kalm woorde meer werd was as enige les wat hy ooit in 'n klaskamer geleer het. Sommige lesse, het hy gedink, kan 'n mens net leer met rook in jou longe en 'n vuur wat sy bes doen om alles wat jy liefhet, te verteer."], "markers": [67, 129, 192, 264], "total": 264, "questions": [{"q": "Op wie se plaas was Ruan?", "a": "Sy oom se plaas"}, {"q": "Wat moet jy volgens Ruan se oom in 'n noodgeval eerste beveg?", "a": "Jou paniek"}, {"q": "Wat het Ruan gebruik om die vonke langs die skuur dood te slaan?", "a": "Nat sakke"}, {"q": "Wat suggereer die beeld 'die lug het die kleur van ou koper gehad' oor wat gaan gebeur?", "a": "[Afleiding] Iets onheilspellends of gevaarliks was op pad / die lug was vreemd en onrustig"}, {"q": "Wat beteken die woord 'verslind' in hierdie teks?", "a": "[Woordeskat] Gulsig opeet / vinnig vernietig"}], "decoding": ["rookpluim", "plaashuis", "verslind", "gloeiende", "geknetter", "noodgeval", "asemhaling", "gestapel", "doodgeslaan", "brandweer", "ongedeerd", "verteer"]}};

/* ---------------- DATA: Fonologiese en fonemiese bewustheid (slegs assessor) ----------------
   Original Afrikaans items written for this tool, same structure as the
   English version (phonological level: rhyme, syllable segmentation,
   syllable blending, onset and rime; phonemic level: isolation, blending,
   segmentation, deletion, manipulation), with a pre-test and post-test
   form. Sounds are written the way they are usually taught in Afrikaans
   Foundation Phase classrooms: letter-sound notation (/v/, /g/), with
   two-letter sounds (aa, ee, oo, uu, ie, oe, ui, ei, ou, eu, ng) counted
   as ONE sound. NOT taken from any published test. */

const PHONO = [
  {
    key:"rhyme", level:"Fonologies", name:"Rym",
    instruction:"Ek gaan 'n woord sê, en jy moet vir my 'n woord sê wat daarmee rym.",
    sample:"Luister: kat. 'n Woord wat met kat rym, is mat. Watter ander woord rym met kat?",
    scoring:"Aanvaar enige woord wat rym, ook 'n opgemaakte woord as die leerder duidelik 'n rympie bedoel.",
    forms:{
      1:[{prompt:"Wat rym met kat?"},{prompt:"Wat rym met maan?"},{prompt:"Wat rym met bal?"},{prompt:"Wat rym met boom?"},{prompt:"Wat rym met huis?"}],
      2:[{prompt:"Wat rym met man?"},{prompt:"Wat rym met see?"},{prompt:"Wat rym met hond?"},{prompt:"Wat rym met pot?"},{prompt:"Wat rym met stoel?"}]
    }
  },
  {
    key:"syllableSeg", level:"Fonologies", name:"Lettergrepe verdeel",
    instruction:"Ek gaan 'n woord sê, en jy moet vir my sê hoeveel stukkies, of lettergrepe, jy hoor.",
    sample:"Luister: venster. Venster het 2 stukkies... ven-ster. Hoeveel stukkies hoor jy in ponie? (2)",
    forms:{
      1:[{prompt:"tafel",answer:"2 (ta-fel)"},{prompt:"kat",answer:"1"},{prompt:"potlood",answer:"2 (pot-lood)"},{prompt:"olifant",answer:"3 (o-li-fant)"},{prompt:"rekenaar",answer:"3 (re-ke-naar)"}],
      2:[{prompt:"appel",answer:"2 (ap-pel)"},{prompt:"hond",answer:"1"},{prompt:"konyn",answer:"2 (ko-nyn)"},{prompt:"kameelperd",answer:"3 (ka-meel-perd)"},{prompt:"skoenlapper",answer:"3 (skoen-lap-per)"}]
    }
  },
  {
    key:"syllableBlend", level:"Fonologies", name:"Lettergrepe saamvoeg",
    instruction:"Ek gaan 'n woord in stukkies sê. Sê dit met 'n pouse van 1 sekonde tussen lettergrepe, en vra dan die leerder om die hele woord te sê.",
    sample:"Ek sê 'n woord in stukkies... blom-me. Die woord is blomme. Watter woord is dit? kers-fees (kersfees)",
    forms:{
      1:[{prompt:"son-ne-blom",answer:"sonneblom"},{prompt:"piek-niek",answer:"piekniek"},{prompt:"kan-ga-roe",answer:"kangaroe"},{prompt:"o-li-fant",answer:"olifant"},{prompt:"mat-ras",answer:"matras"}],
      2:[{prompt:"re-ën-boog",answer:"reënboog"},{prompt:"ser-vet",answer:"servet"},{prompt:"see-kat",answer:"seekat"},{prompt:"skoen-lap-per",answer:"skoenlapper"},{prompt:"tui-nier",answer:"tuinier"}]
    }
  },
  {
    key:"onsetRime", level:"Fonologies", name:"Aanvangsklank en rym",
    instruction:"Kom ons verdeel woorde op 'n ander manier. Doen die voorbeeld eers, en vra dan elke item.",
    sample:"As ek pak sê, is die klank voor /ak/ die /p/. Watter klank kom voor /ak/ in bak? (/b/)",
    forms:{
      1:[{prompt:"Watter klank kom voor /at/ in kat?",answer:"/k/"},{prompt:"Watter klank kom voor /ok/ in bok?",answer:"/b/"},{prompt:"Watter klanke kom na /vl/ in vlag?",answer:"/ag/"},{prompt:"Watter klanke kom na /s/ in sand?",answer:"/and/"},{prompt:"Watter klanke kom na /tr/ in trein?",answer:"/ein/"}],
      2:[{prompt:"Watter klank kom voor /an/ in pan?",answer:"/p/"},{prompt:"Watter klank kom voor /is/ in vis?",answer:"/v/"},{prompt:"Watter klanke kom na /sw/ in swem?",answer:"/em/"},{prompt:"Watter klanke kom na /d/ in dek?",answer:"/ek/"},{prompt:"Watter klanke kom na /gr/ in groen?",answer:"/oen/"}]
    }
  },
  {
    key:"phonemeIso", level:"Fonemies", name:"Klanke isoleer",
    instruction:"Luister vir een klank.",
    sample:"Die eerste klank in pen is /p/. Wat is die eerste klank in mat? (/m/)",
    forms:{
      1:[{prompt:"Wat is die eerste klank in son?",answer:"/s/"},{prompt:"Wat is die laaste klank in kat?",answer:"/t/"},{prompt:"Wat is die laaste klank in ma?",answer:"/a/"},{prompt:"Wat is die middelste klank in bed?",answer:"/e/"},{prompt:"Wat is die middelste klank in pot?",answer:"/o/"}],
      2:[{prompt:"Wat is die eerste klank in maan?",answer:"/m/"},{prompt:"Wat is die laaste klank in bok?",answer:"/k/"},{prompt:"Wat is die laaste klank in see?",answer:"/ee/"},{prompt:"Wat is die middelste klank in pit?",answer:"/i/"},{prompt:"Wat is die middelste klank in boom?",answer:"/oo/"}]
    }
  },
  {
    key:"phonemeBlend", level:"Fonemies", name:"Klanke saamvoeg",
    instruction:"Sê elke klank in die woord met 'n pouse van 1 sekonde tussen klanke, en vra dan watter woord die klanke maak.",
    sample:"/k/ /a/ /t/. Die woord is kat. Watter woord maak hierdie klanke? /s/ /i/ /t/? (sit)",
    forms:{
      1:[{prompt:"/m/ /a/ /t/",answer:"mat"},{prompt:"/p/ /e/ /n/",answer:"pen"},{prompt:"/v/ /l/ /a/ /g/",answer:"vlag"},{prompt:"/b/ /oo/ /m/",answer:"boom"},{prompt:"/s/ /t/ /o/ /p/",answer:"stop"}],
      2:[{prompt:"/r/ /o/ /k/",answer:"rok"},{prompt:"/h/ /a/ /n/ /d/",answer:"hand"},{prompt:"/s/ /l/ /i/ /m/",answer:"slim"},{prompt:"/d/ /r/ /u/ /k/",answer:"druk"},{prompt:"/s/ /p/ /e/ /l/",answer:"spel"}]
    }
  },
  {
    key:"phonemeSeg", level:"Fonemies", name:"Klanke verdeel",
    instruction:"Vra hoeveel klanke die leerder in die woord hoor. Tel twee letters wat een klank maak (soos oo, oe, ie, ng) as een klank.",
    sample:"Kat het 3 klanke: /k/ /a/ /t/. Hoeveel klanke hoor jy in lip? (3)",
    forms:{
      1:[{prompt:"kat",answer:"3 (/k/ /a/ /t/)"},{prompt:"boek",answer:"3 (/b/ /oe/ /k/)"},{prompt:"vlag",answer:"4 (/v/ /l/ /a/ /g/)"},{prompt:"stamp",answer:"5 (/s/ /t/ /a/ /m/ /p/)"},{prompt:"plant",answer:"5 (/p/ /l/ /a/ /n/ /t/)"}],
      2:[{prompt:"pot",answer:"3 (/p/ /o/ /t/)"},{prompt:"vis",answer:"3 (/v/ /i/ /s/)"},{prompt:"blok",answer:"4 (/b/ /l/ /o/ /k/)"},{prompt:"spons",answer:"5 (/s/ /p/ /o/ /n/ /s/)"},{prompt:"klomp",answer:"5 (/k/ /l/ /o/ /m/ /p/)"}]
    }
  },
  {
    key:"phonemeDel", level:"Fonemies", name:"Klanke weglaat",
    instruction:"Vra die leerder om die woord weer te sê, sonder 'n sekere klank.",
    sample:"Slang sonder die /s/ is 'lang'. Sê vlag. Sê dit nou weer sonder die /v/. (lag)",
    forms:{
      1:[{prompt:"Sê slaan. Sê dit weer sonder /s/.",answer:"laan"},{prompt:"Sê klap. Sê dit weer sonder /k/.",answer:"lap"},{prompt:"Sê spot. Sê dit weer sonder /s/.",answer:"pot"},{prompt:"Sê smal. Sê dit weer sonder /s/.",answer:"mal"},{prompt:"Sê brand. Sê dit weer sonder /b/.",answer:"rand"}],
      2:[{prompt:"Sê trek. Sê dit weer sonder /t/.",answer:"rek"},{prompt:"Sê klok. Sê dit weer sonder /k/.",answer:"lok"},{prompt:"Sê glas. Sê dit weer sonder /g/.",answer:"las"},{prompt:"Sê graaf. Sê dit weer sonder /g/.",answer:"raaf"},{prompt:"Sê bloei. Sê dit weer sonder /b/.",answer:"loei"}]
    }
  },
  {
    key:"phonemeManip", level:"Fonemies", name:"Klanke manipuleer",
    instruction:"Vra die leerder om een klank in die woord te verander, of om die klanke agteruit te sê.",
    sample:"As ek bal sê en die /b/ na /m/ verander, kry ek mal. Sê sit. Verander die /s/ na /p/. Wat is die nuwe woord? (pit)",
    forms:{
      1:[{prompt:"Sê kat. Verander die /k/ na /m/. Wat is die nuwe woord?",answer:"mat"},{prompt:"Sê bed. Verander die /b/ na /r/. Wat is die nuwe woord?",answer:"red"},{prompt:"Sê bok. Verander die /o/ na /a/. Wat is die nuwe woord?",answer:"bak"},{prompt:"Luister na elke klank in die woord kat: /k/ /a/ /t/. Sê die klanke agteruit.",answer:"tak"},{prompt:"Luister na elke klank in die woord nek: /n/ /e/ /k/. Sê die klanke agteruit.",answer:"ken"}],
      2:[{prompt:"Sê hok. Verander die /h/ na /b/. Wat is die nuwe woord?",answer:"bok"},{prompt:"Sê mes. Verander die /m/ na /l/. Wat is die nuwe woord?",answer:"les"},{prompt:"Sê pit. Verander die /i/ na /o/. Wat is die nuwe woord?",answer:"pot"},{prompt:"Luister na elke klank in die woord pot: /p/ /o/ /t/. Sê die klanke agteruit.",answer:"top"},{prompt:"Luister na elke klank in die woord les: /l/ /e/ /s/. Sê die klanke agteruit.",answer:"sel"}]
    }
  }
];

const READING_LEVEL_NOTE = "Die geskatte vlak gebruik 'n algemeen aangehaalde riglyn vir mondelinge leesakkuraatheid (rofweg: 95%+ onafhanklik, 90-94% onderrigvlak, onder 90% frustrasievlak) saam met begrip van ten minste 60%. Hierdie riglyn kom grotendeels uit navorsing oor Engelse lees, is nie 'n KABV/DBO-geverifieerde maatstaf nie, en is nie op Suid-Afrikaanse norme aangepas nie. Afrikaanse spelling is baie meer klankgetrou as Engels, so leerders behaal dikwels hoër akkuraatheid as in Engels, en woorde korrek per minuut is nie direk met Engelse norme vergelykbaar nie. Gebruik dit as een inset saam met jou eie kliniese oordeel.";

// Short "wat dit toets / betekenis" definitions for each phonological and
// phonemic awareness subtest, used in the report's Vaardigheid/Omskrywing
// table. Kept separate from the PHONO administration data above so the
// examiner-facing instructions/sample items above are untouched.
const PHONO_DEFINITIONS = {
  rhyme: "Wat dit toets: Die vermoë om woorde te herken of te genereer wat rym (bv. om te herken dat \"kat\" met \"mat\" rym, maar nie met \"hond\" nie). Betekenis: Rym is 'n grondliggende fonologiese bewustheidsvaardigheid wat kinders help om klankpatrone in woorde raak te sien en te voorspel, 'n vroeë aanduiding van leesgereedheid.",
  syllableSeg: "Wat dit toets: Die vermoë om 'n woord in lettergrepe te verdeel (bv. \"venster\" na \"ven-ster\"). Betekenis: Lettergreepverdeling is noodsaaklik om die struktuur van woorde te verstaan en is 'n tussenstap na meer gevorderde foneembewustheid. Dit ondersteun ook die spelling en dekodering van veellettergrepige woorde.",
  syllableBlend: "Wat dit toets: Die vermoë om aparte lettergrepe saam te voeg om 'n woord te vorm (bv. om \"blom-me\" te hoor en dit as \"blomme\" te herken). Betekenis: Lettergreepsamevoeging wys 'n kind se vermoë om klankeenhede tot betekenisvolle woorde te integreer, 'n kritieke voorleesvaardigheid vir vlot woordherkenning.",
  onsetRime: "Wat dit toets: Die vermoë om die aanvangsklank (die eerste konsonantklank, bv. \"p\" in \"pak\") met die rymdeel (die klinker en oorblywende klanke, bv. \"ak\" in \"pak\") saam te voeg om woorde te vorm. Betekenis: Aanvangsklank-en-rym-bewustheid oorbrug groter klankeenhede (lettergrepe) met kleiner foneemeenhede, en ondersteun woorddekodering en spelling.",
  phonemeIso: "Wat dit toets: Die vermoë om individuele klanke (foneme) in woorde te identifiseer, soos die eerste, middelste of laaste klank (bv. die beginklank in \"mat\" is /m/). Betekenis: Foneemisolasie is noodsaaklik om klanke aan letters te koppel tydens lees en spelling.",
  phonemeBlend: "Wat dit toets: Die vermoë om individuele foneme (bv. /k/ /a/ /t/) saam te voeg om 'n hele woord te vorm (\"kat\"). Betekenis: Foneemsamevoeging is 'n kernvaardigheid vir dekodering (lees) en vereis sterk ouditiewe verwerking.",
  phonemeSeg: "Wat dit toets: Die vermoë om woorde in hul individuele klanke te verdeel (bv. \"kat\" na /k/ /a/ /t/). Betekenis: Segmentering is 'n grondliggende spelvaardigheid wat 'n kind in staat stel om klanke te identifiseer en te orden voordat dit in geskrewe letters omgeskakel word.",
  phonemeDel: "Wat dit toets: Die vermoë om die woord te identifiseer wat oorbly wanneer 'n sekere klank verwyder word (bv. \"slang\" sonder /s/ is \"lang\"). Betekenis: Foneemweglating weerspieël 'n kind se vermoë om foneme te manipuleer en voorspel vaardigheid in die lees en spelling van komplekse woorde.",
  phonemeManip: "Wat dit toets: Die vermoë om foneme by te voeg, te verwyder of te vervang om nuwe woorde te skep (bv. om die /b/ in \"bal\" na /m/ te verander om \"mal\" te vorm). Betekenis: Foneemmanipulasie verteenwoordig die hoogste vlak van fonologiese bewustheid en is krities vir gevorderde lees en spelling."
};

// Letterhead content shared across all three subjects' reports, matching
// Debby Smit Educational Therapy's own letterhead. Credential names are
// formal qualification titles and are not translated.
const PRACTICE_CREDENTIALS = [
  "Membership No: WC030",
  "B.Ed (Foundation Phase)",
  "BA Hons (Counselling Psychology)",
  "National Institute for Learning Development Level 1 Certification: NILD Level 1",
  "WCJ-V",
  "Optima School Readiness Assessment accreditation"
];
function letterheadHtml(reportTitle){
  return `
    <div class="report-letterhead">
      <div class="row" style="justify-content:space-between;align-items:flex-start;">
        <div>
          <h1 style="margin:0;font-size:1.8rem;">Debby Smit</h1>
          <p class="muted" style="margin:2px 0 0;letter-spacing:.06em;">NILD EDUCATIONAL THERAPY</p>
        </div>
        <img src="${LOGO_SRC}" style="height:64px;" alt="logo" />
      </div>
      <ul class="credentials-list">${PRACTICE_CREDENTIALS.map(c=>`<li>${escapeHtml(c)}</li>`).join("")}</ul>
      <hr class="letterhead-rule" />
      <p class="confidential-label">VERTROULIK</p>
      <h2 class="report-title">${reportTitle}</h2>
    </div>
  `;
}
function learnerInfoTableHtml(s){
  const age = fmtAgeFull(s.dob, s.assessmentDate || todayDateStr());
  return `
    <table class="learner-info-table">
      <tr><th>Leerder:</th><td>${escapeHtml(s.learnerName||"Nie aangeteken nie")}</td></tr>
      <tr><th>Geboortedatum:</th><td>${s.dob?fmtDate(new Date(s.dob+"T00:00:00").getTime()):"Nie aangeteken nie"}</td></tr>
      <tr><th>Ouderdom by Assessering:</th><td>${age}</td></tr>
      <tr><th>Huidige Graad:</th><td>Graad ${escapeHtml(s.gradeStart)}</td></tr>
      <tr><th>Datum van Assessering:</th><td>${s.assessmentDate?fmtDate(new Date(s.assessmentDate+"T00:00:00").getTime()):fmtDate(nowMs())}</td></tr>
      <tr><th>Verslag Gegenereer:</th><td>${fmtDate(nowMs())}</td></tr>
      <tr><th>Skool:</th><td>${escapeHtml(s.school||"Nie aangeteken nie")}</td></tr>
    </table>
  `;
}
// Generic editable narrative field used across all report sections: shows
// a textarea pre-filled with either the examiner's own saved edit, or (the
// first time a section is viewed) the freshly auto-generated narrative.
// A "regenerate" button lets the examiner discard their edits and pull the
// auto-generated text back in, without affecting other fields.
let LAST_GENERATED_NARRATIVE = {};
function editableNarrativeField(id, label, autoText, rows, container){
  container = container || "report";
  const saved = STATE.session[container] && STATE.session[container].fields && STATE.session[container].fields[id];
  const value = (saved!=null && saved!=="") ? saved : (autoText||"");
  LAST_GENERATED_NARRATIVE[id] = autoText||"";
  return `
    <div class="report-section">
      <div class="row" style="justify-content:space-between;align-items:baseline;">
        <h3 style="margin:0;">${label}</h3>
        <button class="btn secondary small no-print" onclick="regenerateReportField('${id}','${container}')">Genereer weer vanaf tellings</button>
      </div>
      <textarea id="rf_${id}" class="report-textarea no-print" rows="${rows||4}" oninput="autoSaveReportField('${id}', this.value, '${container}')">${escapeHtml(value)}</textarea>
      <div class="print-only" style="display:none;white-space:pre-wrap;">${escapeHtml(value)}</div>
    </div>
  `;
}
let reportFieldSaveTimeout = {};
function autoSaveReportField(id, val, container){
  container = container || "report";
  if(!STATE.session[container]) STATE.session[container] = {};
  if(!STATE.session[container].fields) STATE.session[container].fields = {};
  STATE.session[container].fields[id] = val;
  clearTimeout(reportFieldSaveTimeout[id]);
  reportFieldSaveTimeout[id] = setTimeout(() => persistSession(), 600);
}
function regenerateReportField(id, container){
  container = container || "report";
  const val = LAST_GENERATED_NARRATIVE[id] || "";
  const ta = document.getElementById("rf_"+id);
  if(ta) ta.value = val;
  autoSaveReportField(id, val, container);
}

/* ---------------- DATA: Spelling, diktee en sinskryf (Grade 1-9) ----------------
   Original Afrikaans word lists, dictation sentences and writing prompts,
   written for this tool. Grades 1-3 follow the general sound progression
   in the national Afrikaans Home Language teaching plans (Gr 1: short-
   vowel word families, early blends, aa/oo/ee/uu; Gr 2: ie/oe/ou/ui/eu/ei,
   initial and final clusters; Gr 3: plurals, diminutives and longer
   words). Grades 4-9 add the kappie, deelteken, compounds and longer
   abstract and borrowed words. The words themselves are NOT copied from
   any CAPS/DBE document. Treat them as a first draft to check against
   your own CAPS resources before using them for a placement decision. */
const SPELLING_WRITING_NOTE = "Hierdie spelwoorde, dikteesinne en skryfopdragte is oorspronklike materiaal wat vir hierdie hulpmiddel geskryf is, nie 'n afskrif van die amptelike KABV-woordelyste nie. Gaan dit asseblief na teen jou eie KABV/DBO-hulpbronne voordat jy dit vir 'n formele plasingsbesluit gebruik.";

const SPELLING = {
  1: ["kat","pen","sit","pot","rok","vis","stap","klip","brug","kaas"],
  2: ["vier","boek","koud","tuin","seun","klein","vlag","swem","warm","beker"],
  3: ["skoene","slange","vriende","katte","poppie","mandjie","kombers","gesels","spring","gister"],
  4: ["lekker","winkel","kinders","onthou","môre","tafel","gesien","verjaardag","vinger","bome"],
  5: ["wêreld","reën","geëet","voël","gehoor","nuuskierig","besluit","verskillende","vreemdeling","gewoonlik"],
  6: ["geleentheid","gebeurtenis","omgewing","onmiddellik","noodsaaklik","kommunikeer","gesondheid","verduidelik","beskrywing","ondersteun"],
  7: ["beslis","veral","regering","ervaring","buitelands","waarborg","voorreg","aanbeveel","afsonderlik","verantwoordelik"],
  8: ["ontleed","gevolglik","betekenisvol","kenmerkend","omstrede","entrepreneur","verskynsel","onnodig","doeltreffend","onafhanklikheid"],
  9: ["oordryf","pligsgetrou","vraelys","uiteenlopend","akkommodeer","verleentheid","chemikalieë","burokrasie","eenparig","ritme"]
};

const DICTATION = {
  1: {text:"Ek sien 'n groot rooi bal.", words:6},
  2: {text:"Die hond hardloop vinnig om die klein bruin kat te vang.", words:11},
  3: {text:"Elke oggend stap Thabo saam met sy klein sussie skool toe.", words:11},
  4: {text:"Die opgewonde kinders kyk stil hoe die kleurvolle ballon stadig in die lug opstyg.", words:14},
  5: {text:"Hoewel dit hard gereën het, het die vasberade stappers aangehou om met die smal paadjie te loop.", words:17},
  6: {text:"Die wetenskaplike het haar resultate noukeurig aangeteken voordat sy dit met haar nuuskierige klasmaats gedeel het.", words:16},
  7: {text:"Ten spyte van die nuwe regulasies het baie plaaslike besighede gesukkel om vinnig by die veranderinge aan te pas.", words:19},
  8: {text:"Die komitee het eenparig besluit dat die voorgestelde beleid toekomstige geslagte aansienlik sal bevoordeel.", words:14},
  9: {text:"Haar pligsgetroue benadering tot die moeilike vraelys het die onderhoudvoerders so beïndruk dat hulle haar onmiddellik aanbeveel het.", words:18}
};

const WRITING = {
  1: {prompt:"Skryf oor jou gesin. Skryf ten minste 2 sinne.", minSentences:2},
  2: {prompt:"Skryf oor jou gunstelingspeletjie. Skryf ten minste 3 sinne.", minSentences:3},
  3: {prompt:"Skryf oor 'n dag by die see. Skryf ten minste 3-4 sinne.", minSentences:3},
  4: {prompt:"Skryf 'n paragraaf waarin jy jou beste vriend of vriendin beskryf. Skryf ten minste 4-5 sinne.", minSentences:4},
  5: {prompt:"Skryf 'n paragraaf oor 'n keer toe jy iemand gehelp het. Skryf ten minste 5-6 sinne.", minSentences:5},
  6: {prompt:"Skryf 'n paragraaf oor 'n belangrike les wat jy geleer het. Skryf ten minste 6-8 sinne.", minSentences:6},
  7: {prompt:"Gee jou mening: moet leerders huiswerk kry? Verduidelik waarom. Skryf ten minste 8-10 sinne.", minSentences:8},
  8: {prompt:"Bespreek die voordele en nadele van sosiale media vir tieners. Skryf ten minste 10-12 sinne, in paragrawe.", minSentences:10},
  9: {prompt:"Bespreek 'n uitdaging in jou gemeenskap en stel 'n moontlike oplossing voor. Skryf 'n gestruktureerde antwoord van ten minste 12 sinne, in paragrawe.", minSentences:12}
};
const WRITING_CRITERIA = [
  "Idees is relevant en beantwoord die opdrag",
  "Volledige sinne met korrekte woordorde (geen sinsfragmente of lopende sinne nie)",
  "Hoofletters korrek gebruik (begin van sin, name)",
  "Leestekens aan die einde korrek gebruik (. ? !)",
  "Woordeskat en sinsbou pas by die graadvlak"
];

/* ============================================================
   Graded word reading list (Gegradeerde woordleeslys): a SINGLE list
   of real, unrelated Afrikaans words in bands of increasing difficulty,
   for untimed word identification with basal/ceiling stopping, in the
   spirit of a test like the Woodcock-Johnson Word Identification
   subtest. Original material: NOT the Woodcock-Johnson, not normed, and
   the band numbers are this tool's own rough ordering.
   ============================================================ */
const WORD_READING_LADDER = {
  1: ["kat","pen","sit","mot","bus","rok","lam","hen","dop","vel","nek","pit"],
  2: ["boom","maan","muur","been","huis","trein","koei","stoel","vlag","klip","skoen","brood"],
  3: ["tafel","venster","kombers","poppie","mandjie","honde","winkel","emmer","spring","vinger","haastig","gordyn"],
  4: ["skoenlapper","onthou","wêreld","môre","kombuis","verskil","geluk","dikwels","besoek","gesels","verander","uitnodig"],
  5: ["nuuskierig","gewoonlik","beroemd","ontdekking","versigtig","reënboog","verhouding","dapperheid","gehoorsaam","eienaardig","rustig","vreemdeling"],
  6: ["geleentheid","omgewing","verduidelik","noodsaaklik","ondersteun","beskrywing","bevolking","aangrensend","hoeveelheid","aanmoediging","gevaarlik","onverwags"],
  7: ["verantwoordelik","waarskynlik","aansienlik","onafwendbaar","buitengewoon","uitdrukking","vergelyking","afsonderlik","betroubaar","ooreenkoms","beginsel","voorkoms"],
  8: ["ondubbelsinnig","deurslaggewend","doeltreffendheid","onvermydelik","verskynsel","hipotese","sameloop","paradigma","teenstrydigheid","tegelykertyd","ontstellend","voortreflik"],
  9: ["onverbiddelik","eiesoortig","onomwonde","nietemin","skynheilig","ongeërgd","omslagtig","buitensporig","onderduims","vleiery","pretensieus","onherroeplik"]
};

/* ============================================================
   Helpers
   ============================================================ */
function escapeHtml(s){
  return String(s==null?"":s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function b64urlEncode(obj){
  const json = JSON.stringify(obj);
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function b64urlDecode(str){
  try{
    let b64 = str.replace(/-/g,'+').replace(/_/g,'/');
    while(b64.length % 4) b64 += '=';
    const json = decodeURIComponent(escape(atob(b64)));
    return JSON.parse(json);
  }catch(e){ return null; }
}
function genCode(len){
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ"; // no 0/O/1/I to avoid confusion
  let out = "";
  for(let i=0;i<(len||6);i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function fmtTime(totalSeconds){
  const m = Math.floor(totalSeconds/60), s = Math.floor(totalSeconds%60);
  return (m<10?"0":"")+m+":"+(s<10?"0":"")+s;
}
function pct(n,d){ if(!d) return 0; return Math.round((n/d)*1000)/10; }
function wcpm(correct,seconds){ if(!seconds) return 0; return Math.round((correct/(seconds/60))*10)/10; }
function nowMs(){ return Date.now(); }
function fmtDate(ms){ try{ return new Date(ms).toLocaleDateString('af-ZA',{day:'numeric',month:'short',year:'numeric'}); }catch(e){ return ""; } }
function ageAtDate(dobStr, atDateStr){
  if(!dobStr || !atDateStr) return null;
  const dob = new Date(dobStr+"T00:00:00");
  const at = new Date(atDateStr+"T00:00:00");
  if(isNaN(dob.getTime()) || isNaN(at.getTime()) || at < dob) return null;
  let years = at.getFullYear() - dob.getFullYear();
  let months = at.getMonth() - dob.getMonth();
  if(at.getDate() < dob.getDate()) months -= 1;
  if(months < 0){ years -= 1; months += 12; }
  return {years, months};
}
function fmtAge(dobStr, atDateStr){
  const a = ageAtDate(dobStr, atDateStr);
  if(!a) return "";
  return a.years+"y "+a.months+"m";
}
function fmtAgeFull(dobStr, atDateStr){
  const a = ageAtDate(dobStr, atDateStr);
  if(!a) return "Nie aangeteken nie";
  return a.years+" jaar "+a.months+" maand"+(a.months===1?"":"e");
}
function firstNameOf(fullName){
  const n = (fullName||"").trim();
  if(!n) return "Die leerder";
  return n.split(/\s+/)[0];
}
function joinList(items){
  if(!items.length) return "";
  if(items.length===1) return items[0];
  if(items.length===2) return items[0]+" en "+items[1];
  return items.slice(0,-1).join(", ")+" en "+items[items.length-1];
}
function todayDateStr(){
  const d = new Date();
  const pad = n => (n<10?"0":"")+n;
  return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
}

/* ============================================================
   Learner codes: a short, typeable code for each stimulus, so a
   second device can be sent straight to the right screen without
   any link at all. This tool is served inside a frame that the
   platform controls, and it does not forward a link's hash or
   query text into that frame, so a URL cannot carry information
   between devices here. Every code below maps to content that is
   already built into this page for every visitor, examiner and
   learner alike, so all a code has to do is say which piece to
   show. Nothing personal (a learner's name, a session, a score)
   is ever encoded in a code.
   ============================================================ */
function codeForStimulus(kind,id){
  if(kind==="letters" || kind==="words" || kind==="fpassages"){
    return ({letters:"L", words:"W", fpassages:"P"})[kind] + id.split(".")[1];
  }
  if(kind==="spelling" || kind==="dictation" || kind==="writing"){
    return ({spelling:"S", dictation:"T", writing:"N"})[kind] + id;
  }
  if(kind==="wordladder"){
    return "R" + id;
  }
  return ({gpassages:"G", decoding:"D"})[kind] + id;
}
const CODE_MAP = {};
(function buildCodeMap(){
  ["1.1","1.2","1.3"].forEach(id => { CODE_MAP[codeForStimulus("letters",id)] = {kind:"letters", id}; });
  ["2.1","2.2","2.3"].forEach(id => { CODE_MAP[codeForStimulus("words",id)] = {kind:"words", id}; });
  ["3.1","3.2","3.3"].forEach(id => { CODE_MAP[codeForStimulus("fpassages",id)] = {kind:"fpassages", id}; });
  ["4","5","6","7","8","9"].forEach(id => {
    CODE_MAP[codeForStimulus("gpassages",id)] = {kind:"gpassages", id};
    CODE_MAP[codeForStimulus("decoding",id)] = {kind:"decoding", id};
  });
  ["1","2","3","4","5","6","7","8","9"].forEach(id => {
    CODE_MAP[codeForStimulus("wordladder",id)] = {kind:"wordladder", id};
  });
  ["1","2","3","4","5","6","7","8","9"].forEach(id => {
    CODE_MAP[codeForStimulus("spelling",id)] = {kind:"spelling", id};
    CODE_MAP[codeForStimulus("dictation",id)] = {kind:"dictation", id};
    CODE_MAP[codeForStimulus("writing",id)] = {kind:"writing", id};
  });
})();

/* ============================================================
   Capture: lets a learner's typed spelling/dictation/writing answers
   reach the examiner console from a genuinely SEPARATE device, via
   the /api/capture serverless function (netlify/functions/capture.mjs),
   backed by Netlify Blobs. Every record is scoped by the session code
   the learner's link or compound code carried, so two different
   learners - even testing the same grade at the same time on two
   different devices - can never collide with each other.
   The examiner's console does not get pushed updates: it POLLS this
   endpoint every few seconds while a capture-relevant panel is open
   (see startCapturePolling below), so there is a short, normal delay
   (a few seconds) between the learner typing and it appearing here,
   not instant chat-style delivery.
   "Hand this screen to the learner now" still works too, for a
   single shared device: it just means both roles briefly share the
   same STATE.session, so the same read/write calls apply.
   ============================================================ */
const Capture = {
  async read(session, kind, grade){
    if(!session) return null;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${kind}&grade=${grade}`);
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async write(session, kind, grade, data){
    if(!session) return null;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${kind}&grade=${grade}`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(data)
      });
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async clear(session, kind, grade){
    if(!session) return false;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${kind}&grade=${grade}`, {method:"DELETE"});
      return res.ok;
    }catch(e){ return false; }
  }
};
async function clearCapture(kind, grade){
  const s = STATE.session;
  if(!s) return;
  await Capture.clear(s.code, kind, grade);
  STATE.captureCache[kind+"_"+grade] = null;
  if(kind==="spelling" && s.scores.spelling && s.scores.spelling[grade]){
    delete s.scores.spelling[grade].autoSeen;
  }
  if(kind==="dictation" && s.scores.dictation && s.scores.dictation[grade]){
    delete s.scores.dictation[grade].autoSeenText;
  }
  renderConsoleContent();
}
function fmtCaptureTime(ts){
  if(!ts) return "";
  const d = new Date(ts);
  const pad = n => (n<10?"0":"")+n;
  return pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds());
}
function normWord(w){ return (w||"").trim().toLowerCase().replace(/[.,!?;:'"]/g,""); }
// Recompute spelling marks from an already-fetched capture record,
// without stomping an examiner's manual override of a word the
// learner hasn't retyped since. Returns true if anything changed.
function applySpellingCaptureRecord(grade, cap){
  const s = STATE.session;
  if(!s || !cap || !cap.words) return false;
  if(!s.scores.spelling) s.scores.spelling = {};
  if(!s.scores.spelling[grade]) s.scores.spelling[grade] = {};
  const rec = s.scores.spelling[grade];
  if(!rec.marks) rec.marks = [];
  if(!rec.autoSeen) rec.autoSeen = [];
  const correctWords = SPELLING[grade] || [];
  let changed = false;
  cap.words.forEach((typed,i) => {
    if(typed==null || typed==="") return;
    if(rec.autoSeen[i] === typed) return;
    rec.marks[i] = normWord(typed) === normWord(correctWords[i]);
    rec.autoSeen[i] = typed;
    changed = true;
  });
  if(changed){
    rec.correct = rec.marks.filter(x=>x===true).length;
    persistSession();
  }
  return changed;
}
// A simple position-by-position word check for dictation: good enough
// to pre-fill a count the examiner can still adjust, but it can be
// thrown off if the learner adds or drops a whole word partway through,
// so the raw typed text is always shown alongside it too.
function autoScoreDictation(correctText, typedText){
  const correctWords = (correctText||"").trim().split(/\s+/).map(normWord);
  const typedWords = (typedText||"").trim().split(/\s+/).filter(Boolean).map(normWord);
  let correctCount = 0;
  for(let i=0;i<correctWords.length;i++){
    if(typedWords[i] && typedWords[i]===correctWords[i]) correctCount++;
  }
  return Math.min(correctWords.length, correctCount);
}
function applyDictationCaptureRecord(grade, cap){
  const s = STATE.session;
  if(!s || !cap || cap.text == null) return false;
  if(!s.scores.dictation) s.scores.dictation = {};
  if(!s.scores.dictation[grade]) s.scores.dictation[grade] = {};
  const rec = s.scores.dictation[grade];
  if(rec.autoSeenText === cap.text) return false;
  const d = DICTATION[grade];
  rec.wordsCorrect = autoScoreDictation(d.text, cap.text);
  rec.autoSeenText = cap.text;
  persistSession();
  return true;
}
// Polling loop: while a capture-relevant panel is open, check every
// 2.5s for new typing from the learner's device and, if the examiner
// isn't mid-keystroke themselves, re-render to show it.
function isExaminerTyping(){
  const active = document.activeElement;
  return !!(active && (active.tagName==="TEXTAREA" || (active.tagName==="INPUT" && active.type!=="button")));
}
function stopCapturePolling(){
  if(STATE.capturePollTimer){ clearInterval(STATE.capturePollTimer); STATE.capturePollTimer = null; }
}
function startCapturePolling(kind, grade){
  stopCapturePolling();
  const tick = async () => {
    const s = STATE.session;
    if(!s) return;
    const cap = await Capture.read(s.code, kind, grade);
    const cacheKey = kind+"_"+grade;
    const prevJson = JSON.stringify(STATE.captureCache[cacheKey] || null);
    STATE.captureCache[cacheKey] = cap;
    const recChanged = JSON.stringify(cap) !== prevJson;
    let scoreChanged = false;
    if(kind==="spelling") scoreChanged = applySpellingCaptureRecord(grade, cap);
    if(kind==="dictation") scoreChanged = applyDictationCaptureRecord(grade, cap);
    if((recChanged || scoreChanged) && !isExaminerTyping()){
      renderConsoleContent();
    }
  };
  tick();
  STATE.capturePollTimer = setInterval(tick, 2500);
}

/* ============================================================
   Store: session records live in Netlify Blobs, behind the two
   serverless functions in netlify/functions/ (sessions.mjs), reached
   here through the /api/sessions redirect in netlify.toml. This is
   what lets the SAME session be opened from more than one of the
   examiner's own devices, and is unrelated to the digital-capture
   channel below (Capture), which is about a LEARNER's device
   reaching the examiner, not the examiner's own devices reaching
   each other.
   STATE.saveStatus tracks whether the last save actually reached the
   server, and topbarHtml() below shows it plainly rather than
   pretending a failed save succeeded - see setSaveStatus().
   ============================================================ */
const API_BASE = "/api/afrikaans";
const Store = {
  async listSessions(){
    try{
      const res = await fetch(`${API_BASE}/sessions`);
      if(!res.ok) return [];
      return await res.json();
    }catch(e){ return []; }
  },
  async getSession(code){
    try{
      const res = await fetch(`${API_BASE}/sessions?code=${encodeURIComponent(code)}`);
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async saveSession(sess){
    try{
      const res = await fetch(`${API_BASE}/sessions`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(sess)
      });
      return res.ok;
    }catch(e){ return false; }
  },
  async deleteSession(code){
    try{
      const res = await fetch(`${API_BASE}/sessions?code=${encodeURIComponent(code)}`, {method:"DELETE"});
      return res.ok;
    }catch(e){ return false; }
  }
};
function setSaveStatus(ok){
  STATE.saveStatus = ok ? "saved" : "error";
  const el = document.getElementById("saveStatusChip");
  if(!el) return;
  if(ok){
    el.className = "chip";
    el.textContent = "Gestoor";
  } else {
    el.className = "chip locked";
    el.textContent = "Nie gestoor nie - kontroleer jou verbinding";
  }
}

/* ============================================================
   Global state
   ============================================================ */
const STATE = {
  examinerAuthed: (localStorage.getItem("dspet_examiner_authed") === "1"),
  session: null,       // currently open session object
  navSection: "overview",
  passageChoice: "3.1", // currently selected passage id for comprehension view
  phonoForm: "1",
  spellingGrade: null,
  dictationGrade: null,
  writingGrade: null,
  wordLadderBand: null,
  timers: {},          // key -> {startedAt, elapsedMs, running}
  standalonePage: null,// "reference" when viewing the reference booklet outside a session
  learnerItem: null,   // {kind,id} once a learner code has been entered on this device
  learnerSessionCode: null, // session this learner's typing should be captured into, if any
  saveStatus: "unknown",    // "unknown" | "saved" | "error" - see setSaveStatus()
  captureCache: {},    // "kind_grade" -> last-fetched capture record (or null)
  capturePollTimer: null
};

// This device's own address for the app - real now that this runs as an
// ordinary page (not inside a sandboxed preview frame), so it always
// matches whatever domain this was actually deployed to.
function baseUrl(){
  return location.origin + location.pathname;
}

/* ============================================================
   Router
   ============================================================ */
function route(){
  const hash = location.hash || "";
  const app = document.getElementById("app");
  if(hash.indexOf("#learner=") === 0){
    const payload = b64urlDecode(hash.slice(9));
    STATE.learnerSessionCode = (payload && payload.sc) ? payload.sc : null;
    renderLearner(app, payload);
    return;
  }
  if(STATE.learnerItem){
    const payload = linkPayloadFor(STATE.learnerItem.kind, STATE.learnerItem.id);
    STATE.learnerSessionCode = STATE.learnerItem.sc || null;
    renderLearner(app, payload);
    return;
  }
  if(!STATE.examinerAuthed){
    renderExaminerLogin(app);
    return;
  }
  if(STATE.standalonePage === "reference"){
    renderReferenceStandalone(app);
    return;
  }
  if(STATE.standalonePage === "responsesheets"){
    renderResponseSheetsStandalone(app);
    return;
  }
  if(STATE.session){
    renderConsole(app);
  } else {
    renderExaminerHome(app);
  }
}
window.addEventListener("hashchange", route);
document.addEventListener("DOMContentLoaded", route);

/* ============================================================
   Learner view: reads ONLY the URL, never the store.
   ============================================================ */
function renderLearner(app, payload){
  let inner = "";
  if(!payload){
    inner = '<div class="err">Daardie kode of skakel is nie geldig nie. Vra asseblief jou assessor vir \'n nuwe een.</div>';
  } else if(payload.exp && nowMs() > payload.exp){
    inner = '<div class="err">Hierdie skakel het verval. Vra asseblief jou assessor vir \'n nuwe een.</div>';
  } else {
    inner = learnerContentHtml(payload);
  }
  app.innerHTML = `
    <div class="app">
      <div class="topbar no-print">
        <img class="logo" src="${LOGO_SRC}" alt="Debby Smit Educational Therapy logo" />
        <div class="title-block">
          <div class="brand">Lees- en Klankassessering</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="col" style="align-items:center;width:100%;">
          ${inner}
          ${STATE.learnerItem ? `<button class="btn secondary small no-print" style="margin-top:16px;" onclick="STATE.learnerItem=null; STATE.learnerSessionCode=null; route();">${STATE.examinerAuthed ? "Klaar - terug na assessorkonsole" : "Tik 'n ander kode in"}</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
function noSessionNoticeHtml(){
  if(STATE.learnerSessionCode) return "";
  return '<div class="err" style="margin:8px 0;">Hierdie kode of skakel is nie aan \'n assesseringsessie gekoppel nie, so wat jy hier tik, sal nie jou assessor bereik nie. Vra hulle asseblief vir die regte kode of skakel.</div>';
}
function accentTipHtml(){
  return '<p class="muted" style="font-size:.95rem;margin:4px 0 10px;">Wenk: hou die e, o of i op die sleutelbord ingedruk om ê, ë, ô of ï te kry.</p>';
}
function learnerContentHtml(payload){
  const name = escapeHtml(payload.n || "daar");
  if(payload.t === "welcome"){
    return `<div class="reading-sheet"><h1>Hallo ${name}! 👋</h1><p style="font-size:1.3rem;">Ons gaan saam lees. Wag vir jou assessor om vir jou te sê wanneer om te begin.</p></div>`;
  }
  if(payload.t === "done"){
    return `<div class="reading-sheet"><h1>Mooi so, ${name}!</h1><p style="font-size:1.3rem;">Jy is klaar met vandag se leesassessering.</p></div>`;
  }
  if(payload.t === "letters"){
    const letters = (FOUNDATION.letters[payload.ref]||[]);
    return `<div class="reading-sheet"><h2>Letterklanke</h2><div class="letters-grid">${letters.map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "words"){
    const words = (FOUNDATION.words[payload.ref]||[]);
    return `<div class="reading-sheet"><h2>Woordlees</h2><div class="words-grid">${words.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "fpassage"){
    const p = FOUNDATION.passages[payload.ref];
    if(!p) return '<div class="err">Hierdie leesstuk kon nie gevind word nie.</div>';
    return `<div class="reading-sheet"><h2>${escapeHtml(p.title)}</h2><div class="passage-text">${p.paragraphs.map(x=>`<p>${escapeHtml(x)}</p>`).join("")}</div></div>`;
  }
  if(payload.t === "gpassage"){
    const g = GRADES[payload.ref];
    if(!g) return '<div class="err">Hierdie leesstuk kon nie gevind word nie.</div>';
    return `<div class="reading-sheet"><h2>${escapeHtml(g.title)}</h2><div class="passage-text">${g.paragraphs.map(x=>`<p>${escapeHtml(x)}</p>`).join("")}</div></div>`;
  }
  if(payload.t === "decoding"){
    const g = GRADES[payload.ref];
    if(!g) return '<div class="err">Hierdie woordelys kon nie gevind word nie.</div>';
    return `<div class="reading-sheet"><h2>Woordlees</h2><div class="words-grid" style="grid-template-columns:repeat(3,1fr);">${g.decoding.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "spelling"){
    if(!SPELLING[payload.ref]) return '<div class="err">Hierdie spellys kon nie gevind word nie.</div>';
    const n = SPELLING[payload.ref].length;
    return `<div class="reading-sheet"><h2>Spelling</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">Luister hoe jou assessor elke woord sê, en tik dit dan hieronder.</p>${accentTipHtml()}
      <div class="col" style="gap:10px;width:100%;max-width:420px;">
        ${Array.from({length:n}).map((_,i)=>`<div class="row"><label style="width:70px;">Woord ${i+1}</label><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;" oninput="captureSpellingWord('${payload.ref}',${i},this.value)" /></div>`).join("")}
      </div></div>`;
  }
  if(payload.t === "dictation"){
    return `<div class="reading-sheet"><h2>Diktee</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">Luister hoe jou assessor die sin hardop lees, en skryf dit dan hieronder.</p>${accentTipHtml()}
      <textarea rows="4" style="width:100%;max-width:520px;font-size:1.1rem;" autocomplete="off" spellcheck="false" oninput="captureDictationText('${payload.ref}',this.value)"></textarea></div>`;
  }
  if(payload.t === "writing"){
    const w = WRITING[payload.ref];
    if(!w) return '<div class="err">Hierdie skryftaak kon nie gevind word nie.</div>';
    return `<div class="reading-sheet"><h2>Skryf</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">${escapeHtml(w.prompt)}</p>${accentTipHtml()}
      <textarea rows="8" style="width:100%;max-width:600px;font-size:1.1rem;" oninput="captureWritingText('${payload.ref}',this.value)"></textarea></div>`;
  }
  if(payload.t === "wordladder"){
    const words = WORD_READING_LADDER[payload.ref];
    if(!words) return '<div class="err">Hierdie woordelys kon nie gevind word nie.</div>';
    return `<div class="reading-sheet"><h2>Woordlees</h2><div class="words-grid" style="grid-template-columns:repeat(3,1fr);">${words.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  return '<div class="err">Nog niks om te wys nie.</div>';
}
// Debounced writers used by the learner-facing inputs above to post into
// the Capture channel (see the Capture module above), tagged with whatever
// session this code or link was tied to. If there is no session tie
// (STATE.learnerSessionCode is empty - see the on-screen notice in
// learnerContentHtml), typing here is simply never sent anywhere; there is
// nothing to fall back to. Local buffers hold the in-progress values so a
// flush always sends the WHOLE record rather than a read-modify-write
// against the server, which would risk losing a word to two rapid edits
// racing each other.
const _captureTimers = {};
function _debounceCaptureWrite(timerKey, fn){
  clearTimeout(_captureTimers[timerKey]);
  _captureTimers[timerKey] = setTimeout(fn, 250);
}
const _spellingWordsBuffer = {}; // grade -> array of typed words so far
function captureSpellingWord(grade, idx, val){
  if(!_spellingWordsBuffer[grade]) _spellingWordsBuffer[grade] = [];
  _spellingWordsBuffer[grade][idx] = val;
  _debounceCaptureWrite("spelling_"+grade, () => {
    if(!STATE.learnerSessionCode) return;
    Capture.write(STATE.learnerSessionCode, "spelling", grade, {words: _spellingWordsBuffer[grade].slice()});
  });
}
function captureDictationText(grade, val){
  _debounceCaptureWrite("dictation_"+grade, () => {
    if(!STATE.learnerSessionCode) return;
    Capture.write(STATE.learnerSessionCode, "dictation", grade, {text: val});
  });
}
function captureWritingText(grade, val){
  _debounceCaptureWrite("writing_"+grade, () => {
    if(!STATE.learnerSessionCode) return;
    Capture.write(STATE.learnerSessionCode, "writing", grade, {text: val});
  });
}

/* ============================================================
   Examiner: login gate
   ============================================================ */
function renderExaminerLogin(app){
  app.innerHTML = `
    <div class="app">
      <div class="topbar">
        <img class="logo" src="${LOGO_SRC}" alt="logo" />
        <div class="title-block">
          <div class="brand">Lees- en Klankassessering</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="card narrow col">
          <h2>Teken in</h2>
          <p class="muted">Assessor: tik jou wagwoord hieronder in. Leerder: tik die kort kode in wat jou assessor vir jou gegee het.</p>
          <input type="text" id="pwInput" placeholder="Wagwoord of kode" autocomplete="off" autocapitalize="characters" />
          <div id="pwErr"></div>
          <button class="btn" onclick="tryExaminerLogin()">Gaan voort</button>
          <p class="note">'n Wagwoord of kode hier is 'n ligte hek om toevallige besoekers uit te hou. Dit is nie hoë-sekuriteit-enkripsie nie, so moenie daarop staatmaak om sensitiewe rekords op 'n gedeelde rekenaar te beskerm nie.</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById("pwInput").addEventListener("keydown", e => { if(e.key === "Enter") tryExaminerLogin(); });
}
function tryExaminerLogin(){
  const val = document.getElementById("pwInput").value.trim();
  if(val === EXAMINER_PASSWORD){
    STATE.examinerAuthed = true;
    localStorage.setItem("dspet_examiner_authed","1");
    route();
    return;
  }
  const upper = val.toUpperCase();
  const item = CODE_MAP[upper];
  if(item){
    STATE.learnerItem = item;
    STATE.learnerSessionCode = null;
    route();
    return;
  }
  // Compound code for a digital-capture item, e.g. "S5-K3F9QL": the part
  // before the dash is the item, the part after is the session it should
  // report back into.
  const dash = upper.indexOf("-");
  if(dash > 0){
    const baseItem = CODE_MAP[upper.slice(0, dash)];
    const sessionPart = upper.slice(dash+1);
    if(baseItem && sessionPart){
      STATE.learnerItem = Object.assign({}, baseItem, {sc: sessionPart});
      STATE.learnerSessionCode = sessionPart;
      route();
      return;
    }
  }
  document.getElementById("pwErr").innerHTML = '<div class="err">Daardie wagwoord of kode is nie reg nie. Probeer weer.</div>';
}
function examinerLogout(){
  stopCapturePolling();
  STATE.examinerAuthed = false;
  STATE.session = null;
  localStorage.removeItem("dspet_examiner_authed");
  route();
}

/* ============================================================
   Examiner: home (session list + new assessment)
   ============================================================ */
async function renderExaminerHome(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <div class="grid" style="max-width:900px;margin:0 auto;">
          <div class="card">
            <h2>Begin 'n nuwe assessering</h2>
            <div class="row">
              <div class="col"><label>Leerder se naam</label><input type="text" id="newLearnerName" placeholder="bv. Lindiwe M." /></div>
              <div class="col"><label>Huidige graad</label>
                <select id="newLearnerGrade">
                  ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}">Graad ${g}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col"><label>Geboortedatum</label><input type="date" id="newLearnerDob" /></div>
              <div class="col"><label>Datum van assessering</label><input type="date" id="newAssessmentDate" value="${todayDateStr()}" /></div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col" style="flex:1;"><label>Skool</label><input type="text" id="newLearnerSchool" placeholder="bv. Deliucim Privaatskool" /></div>
            </div>
            <p class="muted" style="font-size:.85rem;">Die geboortedatum en assesseringsdatum word gebruik om die leerder se kronologiese ouderdom te bereken, sodat die verslag hul resultate met beide hul huidige graad en hul ouderdom kan vergelyk. Jy kan dit later op die Oorsig-blad verander.</p>
            <div class="row" style="margin-top:10px;">
              <button class="btn" onclick="createSession()">Skep sessie</button>
            </div>
            <p class="note">Dit skep 'n rekord wat hierdie leerder se tellings hou terwyl jy deur die hulpmiddel werk. Die kodes wat jy vir die leerder voorlees (soos G7 of S4) is vas, nie aan hierdie sessie gekoppel of tydbeperk nie, en wys altyd dieselfde item. Sien die Oorsig-blad vir besonderhede sodra 'n sessie oop is.</p>
          </div>
          <div class="card">
            <h2>Naslaanboekie</h2>
            <p class="muted">'n Drukbare kopie, slegs vir die assessor, van elke letterkaart, woordkaart, leesstuk, begripsvraag en dekoderingslys in hierdie hulpmiddel. Niks daarop gaan ooit na 'n leerder nie. Druk dit een keer en hou dit by jou toerusting.</p>
            <button class="btn secondary small" onclick="openReferenceStandalone()">Maak naslaanboekie oop</button>
          </div>
          <div class="card">
            <h2>Leerder-antwoordblaaie</h2>
            <p class="muted">Leë antwoordblaaie op papier vir spelling, diktee en sinskryf, een per graad, vir wanneer jy verkies dat die leerder op papier skryf eerder as tik. Geen antwoorde word daarop gedruk nie, net wat die leerder self moet invul.</p>
            <button class="btn secondary small" onclick="openResponseSheetsStandalone()">Maak antwoordblaaie oop</button>
          </div>
          <div class="card">
            <h2>Vorige sessies</h2>
            <div id="sessionList" class="col">Laai tans…</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const sessions = await Store.listSessions();
  const list = document.getElementById("sessionList");
  if(!sessions.length){
    list.innerHTML = '<p class="muted">Nog geen sessies nie. Skep jou eerste een hierbo.</p>';
  } else {
    list.innerHTML = sessions.map(s => `
      <div class="row" style="justify-content:space-between;border-bottom:1px solid var(--line);padding:8px 0;">
        <div>
          <strong>${escapeHtml(s.learnerName||"Naamlose leerder")}</strong>
          <span class="muted"> · begin in Graad ${escapeHtml(s.gradeStart)} · ${fmtDate(s.createdAt)} · kode ${escapeHtml(s.code)}</span>
        </div>
        <div class="row">
          <button class="btn small" onclick="openSession('${s.code}')">Maak oop</button>
        </div>
      </div>
    `).join("");
  }
}
async function createSession(){
  const name = document.getElementById("newLearnerName").value.trim() || "Naamlose leerder";
  const grade = document.getElementById("newLearnerGrade").value;
  const dob = document.getElementById("newLearnerDob").value || "";
  const assessmentDate = document.getElementById("newAssessmentDate").value || todayDateStr();
  const school = document.getElementById("newLearnerSchool").value.trim() || "";
  const code = genCode(6);
  const sess = {
    code, learnerName: name, gradeStart: grade, dob, assessmentDate, school,
    createdAt: nowMs(), status: "active",
    scores: { letters:{}, words:{}, fpassages:{}, gpassages:{}, decoding:{}, comprehension:{}, phono:{}, spelling:{}, dictation:{}, writing:{}, wordladder:{} }
  };
  const ok = await Store.saveSession(sess);
  setSaveStatus(ok);
  STATE.session = sess;
  STATE.navSection = "overview";
  route();
}
async function openSession(code){
  stopCapturePolling();
  const sess = await Store.getSession(code);
  if(sess){
    STATE.session = sess;
    STATE.navSection = "overview";
    setSaveStatus(true);
    route();
  }
}
function closeSession(){
  stopCapturePolling();
  STATE.session = null;
  route();
}
async function persistSession(){
  if(!STATE.session) return;
  const ok = await Store.saveSession(STATE.session);
  setSaveStatus(ok);
}
function openReferenceStandalone(){
  STATE.standalonePage = "reference";
  route();
}
function closeReferenceStandalone(){
  STATE.standalonePage = null;
  route();
}
function renderReferenceStandalone(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <button class="btn secondary small no-print" onclick="closeReferenceStandalone()">&larr; Terug</button>
        ${referenceBookletHtml()}
      </div>
    </div>
  `;
}
function openResponseSheetsStandalone(){
  STATE.standalonePage = "responsesheets";
  route();
}
function closeResponseSheetsStandalone(){
  STATE.standalonePage = null;
  route();
}
function renderResponseSheetsStandalone(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <button class="btn secondary small no-print" onclick="closeResponseSheetsStandalone()">&larr; Terug</button>
        ${responseSheetsHtml()}
      </div>
    </div>
  `;
}

/* ============================================================
   Shared chrome
   ============================================================ */
function saveStatusChipHtml(){
  if(STATE.saveStatus === "error") return '<span class="chip locked" id="saveStatusChip">Nie gestoor nie - kontroleer jou verbinding</span>';
  if(STATE.saveStatus === "saved") return '<span class="chip" id="saveStatusChip">Gestoor</span>';
  return '<span class="chip waiting" id="saveStatusChip">Verbind tans…</span>';
}
function topbarHtml(showSession){
  return `
    <div class="topbar no-print">
      <img class="logo" src="${LOGO_SRC}" alt="logo" />
      <div class="title-block">
        <div class="brand">Lees- en Klankassessering</div>
        <div class="tag">Debby Smit Educational Therapy</div>
      </div>
      <div class="spacer"></div>
      ${saveStatusChipHtml()}
      ${showSession && STATE.session ? `<span class="chip">${escapeHtml(STATE.session.learnerName)}</span>` : ""}
      <button class="btn secondary small" onclick="examinerLogout()">Teken uit</button>
    </div>
  `;
}

/* ============================================================
   Examiner: console (sidebar + sections)
   ============================================================ */
const NAV = [
  {group:"Sessie", items:[["overview","Oorsig"]]},
  {group:"Hulpbronne", items:[["reference","Naslaanboekie (druk)"],["responsesheets","Leerder-antwoordblaaie (druk)"]]},
  {group:"Grondslagfase (Gr 1–3)", items:[["letters","Letterklanke"],["words","Woordlees"],["fpassages","Leesstukke"]]},
  {group:"Graad 4–9", items:[["gpassages","Leesstukke"],["decoding","Dekoderingswoordelyste"]]},
  {group:"Alle grade", items:[["comprehension","Begrip"],["phono","Fonologiese bewustheid"]]},
  {group:"Graadvlakplasing", items:[["wordladder","Gegradeerde woordleeslys"],["spelling","Speltoets"],["dictation","Diktee"],["writing","Sinskryf"]]},
  {group:"Afsluiting", items:[["report","Verslag"],["isp","Ondersteuningsplan"]]}
];

async function renderConsole(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(true)}
      <div class="shell">
        <div class="sidebar no-print">
          <button class="navitem" onclick="closeSession()">&larr; <span class="label-text">Alle sessies</span></button>
          ${NAV.map(g => `
            <div class="navgroup-label">${g.group}</div>
            ${g.items.map(([key,label]) => `<button class="navitem ${STATE.navSection===key?'active':''}" onclick="setNav('${key}')"><span class="label-text">${label}</span></button>`).join("")}
          `).join("")}
        </div>
        <div class="content" id="content"></div>
      </div>
    </div>
  `;
  renderConsoleContent();
}
function setNav(key){
  STATE.navSection = key;
  if(key==="spelling") startCapturePolling("spelling", STATE.spellingGrade || STATE.session.gradeStart);
  else if(key==="dictation") startCapturePolling("dictation", STATE.dictationGrade || STATE.session.gradeStart);
  else if(key==="writing") startCapturePolling("writing", STATE.writingGrade || STATE.session.gradeStart);
  else stopCapturePolling();
  renderConsole(document.getElementById("app"));
}
function renderConsoleContent(){
  const c = document.getElementById("content");
  const s = STATE.session;
  if(!s){ c.innerHTML = ""; return; }
  switch(STATE.navSection){
    case "overview": c.innerHTML = overviewHtml(s); break;
    case "reference": c.innerHTML = referenceBookletHtml(); break;
    case "responsesheets": c.innerHTML = responseSheetsHtml(); break;
    case "letters": c.innerHTML = stimulusListHtml("letters"); break;
    case "words": c.innerHTML = stimulusListHtml("words"); break;
    case "fpassages": c.innerHTML = stimulusListHtml("fpassages"); break;
    case "gpassages": c.innerHTML = stimulusListHtml("gpassages"); break;
    case "decoding": c.innerHTML = stimulusListHtml("decoding"); break;
    case "comprehension": c.innerHTML = comprehensionHtml(); break;
    case "phono": c.innerHTML = phonoHtml(); break;
    case "wordladder": c.innerHTML = wordLadderHtml(); break;
    case "spelling": c.innerHTML = spellingHtml(); break;
    case "dictation": c.innerHTML = dictationHtml(); break;
    case "writing": c.innerHTML = writingHtml(); break;
    case "report": c.innerHTML = reportHtml(); break;
    case "isp": c.innerHTML = ispHtml(); break;
    default: c.innerHTML = "";
  }
}

function overviewHtml(s){
  const age = fmtAge(s.dob, s.assessmentDate || todayDateStr());
  return `
    <div class="grid" style="max-width:760px;">
      <div class="card">
        <h2>${escapeHtml(s.learnerName)}</h2>
        <p class="muted">Graad ${escapeHtml(s.gradeStart)}${age? " &middot; Ouderdom by assessering: "+age : ""} &middot; Sessie geskep ${fmtDate(s.createdAt)}</p>
        <h3 style="margin-top:4px;">Leerder se besonderhede</h3>
        <p class="muted" style="font-size:.85rem;">Dit word in die verslag gebruik, sodat resultate teen beide huidige graad en kronologiese ouderdom gelees kan word.</p>
        <div class="row">
          <div class="col"><label>Leerder se naam</label><input type="text" id="ovName" value="${escapeHtml(s.learnerName)}" /></div>
          <div class="col"><label>Huidige graad</label>
            <select id="ovGrade">${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(s.gradeStart)?'selected':''}>Graad ${g}</option>`).join("")}</select>
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="col"><label>Geboortedatum</label><input type="date" id="ovDob" value="${escapeHtml(s.dob||"")}" /></div>
          <div class="col"><label>Datum van assessering</label><input type="date" id="ovAssessDate" value="${escapeHtml(s.assessmentDate||todayDateStr())}" /></div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="col" style="flex:1;"><label>Skool</label><input type="text" id="ovSchool" value="${escapeHtml(s.school||"")}" placeholder="bv. Deliucim Privaatskool" /></div>
        </div>
        <div class="row" style="margin-top:10px;">
          <button class="btn small" onclick="saveParticulars()">Stoor besonderhede</button>
        </div>
      </div>
      <div class="card">
        <h3>Hoe die leerder aansluit</h3>
        <p>Maak op die leerder se toestel dieselfde skakel oop wat jy nou gebruik (sien enige afdeling links vir 'n kopie daarvan), en waar dit vir 'n wagwoord of kode vra, tik die kort kode in vir die item wat jy wil hê hulle moet sien, byvoorbeeld <strong>G7</strong> vir die Graad 7-leesstuk. Gaan na enige afdeling links en klik <em>"Wys leerderkode"</em> om daardie item se kode te sien. Jy kan die kode tydens 'n video-oproep hardop lees, of dit self intik as julle in dieselfde vertrek is.</p>
        <p class="note">Elke kode wys vir die leerder net daardie een item: nooit 'n kieslys nie, nooit ander grade nie, en nooit die fonologiese bewustheid-items nie, wat glad nie 'n leerderkode het nie. Op die leerder se eie skerm laat 'n klein "Tik 'n ander kode in"-knoppie jou toe om hulle reguit na die volgende item te skuif sonder om die skakel weer oop te maak.</p>
        <p class="note">Dit is 'n praktiese voorsorgmaatreël, nie bankvlak-sekuriteit nie, net soos die assessorwagwoord. 'n Kode wys slegs 'n letterkaart, woordkaart, leesstuk of woordelys, nooit 'n leerder se naam of tellings nie, so daar is niks persoonliks om te beskerm as iemand anders een sien of raai nie.</p>
      </div>
      <div class="card">
        <h3>Gevaarsone</h3>
        <button class="btn danger small" onclick="deleteThisSession()">Skrap hierdie sessie</button>
      </div>
    </div>
  `;
}
function renameLearner(){
  STATE.session.learnerName = document.getElementById("ovName").value.trim() || STATE.session.learnerName;
  persistSession().then(()=>renderConsoleContent());
}
function saveParticulars(){
  const s = STATE.session;
  s.learnerName = document.getElementById("ovName").value.trim() || s.learnerName;
  s.gradeStart = document.getElementById("ovGrade").value;
  s.dob = document.getElementById("ovDob").value || "";
  s.assessmentDate = document.getElementById("ovAssessDate").value || todayDateStr();
  s.school = document.getElementById("ovSchool").value.trim() || "";
  persistSession().then(()=>renderConsoleContent());
}
async function deleteThisSession(){
  if(!confirm("Skrap hierdie leerder se sessie en alle aangetekende tellings? Dit kan nie ontdoen word nie.")) return;
  await Store.deleteSession(STATE.session.code);
  STATE.session = null;
  route();
}

/* ---- Generic learner-stimulus sections: letters / words / fpassages / gpassages / decoding ---- */
function stimulusListHtml(kind){
  const s = STATE.session;
  let ids = [];
  if(kind==="letters") ids = ["1.1","1.2","1.3"];
  if(kind==="words") ids = ["2.1","2.2","2.3"];
  if(kind==="fpassages") ids = ["3.1","3.2","3.3"];
  if(kind==="gpassages") ids = ["4","5","6","7","8","9"];
  if(kind==="decoding") ids = ["4","5","6","7","8","9"];
  const titleMap = {letters:"Letterklanke (1 minuut elk)", words:"Woordlees (1 minuut elk)", fpassages:"Grondslagfase-leesstukke", gpassages:"Graad 4–9-leesstukke", decoding:"Graad 4–9-dekoderingswoordelyste"};
  return `
    <div class="grid">
      <h2 style="margin:0;">${titleMap[kind]}</h2>
      ${kind==="letters" ? `<p class="note">Aanvaar die letterklank, nie die lettername nie. Let wel vir Afrikaans: g = /x/ soos in <em>gaan</em>, v = /f/ soos in <em>vis</em>, w = /v/ soos in <em>water</em>. Vir c, q, x en z aanvaar die klank wat die leerder in leenwoorde sou gebruik.</p>` : ""}
      ${ids.map(id => stimulusBlockHtml(kind, id)).join("")}
    </div>
  `;
}
function stimulusMax(kind,id){
  if(kind==="letters") return 40;
  if(kind==="words") return 80;
  if(kind==="fpassages") return FOUNDATION.passages[id].total;
  if(kind==="gpassages") return GRADES[id].total;
  if(kind==="decoding") return GRADES[id].decoding.length;
}
function stimulusScoreKey(kind){
  return {letters:"letters",words:"words",fpassages:"fpassages",gpassages:"gpassages",decoding:"decoding"}[kind];
}
function stimulusLabel(kind,id){
  if(kind==="letters") return "Kaart "+id;
  if(kind==="words") return "Kaart "+id;
  if(kind==="fpassages") return FOUNDATION.passages[id].title+" ("+id+")";
  if(kind==="gpassages") return GRADES[id].label+": "+GRADES[id].title;
  if(kind==="decoding") return GRADES[id].label+"-dekoderingslys";
}
function previewHtml(kind,id){
  if(kind==="letters") return `<div class="letters-grid" style="grid-template-columns:repeat(10,1fr);font-size:1.2rem;">${FOUNDATION.letters[id].map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div>`;
  if(kind==="words") return `<div class="words-grid" style="font-size:1.05rem;">${FOUNDATION.words[id].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>`;
  if(kind==="fpassages"){
    const p = FOUNDATION.passages[id];
    return `<div class="passage-text" style="font-size:1.05rem;">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} woorde</span></p>`).join("")}</div>`;
  }
  if(kind==="gpassages"){
    const g = GRADES[id];
    return `<div class="passage-text" style="font-size:1.05rem;">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} woorde</span></p>`).join("")}</div>`;
  }
  if(kind==="decoding") return `<div class="words-grid" style="grid-template-columns:repeat(6,1fr);font-size:1.05rem;">${GRADES[id].decoding.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>`;
}
function linkPayloadFor(kind,id){
  const map = {letters:"letters", words:"words", fpassages:"fpassage", gpassages:"gpassage", decoding:"decoding", spelling:"spelling", dictation:"dictation", writing:"writing", wordladder:"wordladder"};
  return {t: map[kind], ref: id};
}
function mirrorHtml(kind,id){
  const s = STATE.session;
  if(kind==="fpassages"){
    const p = FOUNDATION.passages[id];
    return `<div class="reading-sheet"><h2>${escapeHtml(p.title)}</h2><div class="passage-text">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} woorde</span></p>`).join("")}</div></div>`;
  }
  if(kind==="gpassages"){
    const g = GRADES[id];
    return `<div class="reading-sheet"><h2>${escapeHtml(g.title)}</h2><div class="passage-text">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} woorde</span></p>`).join("")}</div></div>`;
  }
  const payload = Object.assign({n: s ? s.learnerName : ""}, linkPayloadFor(kind,id));
  return learnerContentHtml(payload);
}
function stimulusBlockHtml(kind,id){
  const s = STATE.session;
  const skey = stimulusScoreKey(kind);
  const rec = (s.scores[skey] && s.scores[skey][id]) || {};
  const max = stimulusMax(kind,id);
  const timerKey = kind+"-"+id;
  const isPassage = (kind==="fpassages" || kind==="gpassages");
  return `
    <div class="card">
      <div class="row" style="justify-content:space-between;">
        <h3 style="margin:0;">${stimulusLabel(kind,id)}</h3>
        <span class="muted">Maks ${max}</span>
      </div>
      <details open style="margin:10px 0;">
        <summary style="cursor:pointer;font-weight:bold;">Leerder se skerm (ook hier gewys, sodat jy kan saamvolg terwyl jy merk)</summary>
        <div class="mirror-frame">${mirrorHtml(kind,id)}</div>
      </details>
      <div class="row">
        <button class="btn small" onclick="showLearnerLink('${kind}','${id}')">Wys leerderkode</button>
      </div>
      <div id="linkbox-${kind}-${id}"></div>
      <div class="row" style="margin-top:14px;align-items:flex-end;">
        <div class="col">
          <label>Tydhouer</label>
          <div class="row">
            <span class="timer-display" id="timerDisplay-${timerKey}" style="font-size:1.6rem;">${fmtTime(0)}</span>
            <button class="btn small" onclick="toggleTimer('${timerKey}')" id="timerBtn-${timerKey}">Begin</button>
            <button class="btn small secondary" onclick="resetTimer('${timerKey}')">Herstel</button>
          </div>
        </div>
        <div class="col">
          <label>${isPassage ? "Woorde korrek gelees" : "Korrek uit "+max}</label>
          <input type="number" min="0" max="${max}" id="correct-${kind}-${id}" value="${rec.correct!=null?rec.correct:''}" style="width:110px;" />
        </div>
        ${isPassage ? `<div class="col"><label>Woorde aangepak (as vroeg gestop)</label><input type="number" min="0" max="${max}" id="attempted-${kind}-${id}" value="${rec.attempted!=null?rec.attempted:max}" style="width:150px;" /></div>` : ""}
        <button class="btn small" onclick="saveStimulusScore('${kind}','${id}')">Stoor</button>
      </div>
      ${rec.correct!=null ? scoreSummaryHtml(kind,id,rec,max) : ""}
    </div>
  `;
}
function scoreSummaryHtml(kind,id,rec,max){
  const isPassage = (kind==="fpassages" || kind==="gpassages");
  if(isPassage){
    const attempted = rec.attempted || max;
    return `<div class="score-box" style="margin-top:10px;">
      <div class="score-tile"><span class="num">${pct(rec.correct,attempted)}%</span><span class="lbl">Akkuraatheid</span></div>
      <div class="score-tile"><span class="num">${wcpm(rec.correct,rec.seconds)}</span><span class="lbl">Woorde korrek / min</span></div>
      <div class="score-tile"><span class="num">${fmtTime(rec.seconds||0)}</span><span class="lbl">Tyd geneem</span></div>
    </div>`;
  }
  return `<div class="score-box" style="margin-top:10px;">
    <div class="score-tile"><span class="num">${pct(rec.correct,max)}%</span><span class="lbl">Akkuraatheid</span></div>
    <div class="score-tile"><span class="num">${wcpm(rec.correct,rec.seconds)}</span><span class="lbl">Korrek / min</span></div>
    <div class="score-tile"><span class="num">${fmtTime(rec.seconds||0)}</span><span class="lbl">Tyd geneem</span></div>
  </div>`;
}
const CAPTURE_KINDS = {spelling:1, dictation:1, writing:1};
function showLearnerLink(kind,id){
  const isCapture = !!CAPTURE_KINDS[kind];
  const s = STATE.session;
  const baseCode = codeForStimulus(kind,id);
  const code = (isCapture && s) ? (baseCode + "-" + s.code) : baseCode;
  const payload = Object.assign({n: s ? s.learnerName : ""}, linkPayloadFor(kind,id));
  if(isCapture && s) payload.sc = s.code;
  const url = baseUrl() + "#learner=" + b64urlEncode(payload);
  const box = document.getElementById("linkbox-"+kind+"-"+id);
  let captureNote = "";
  if(isCapture){
    captureNote = s
      ? ` Wat ${escapeHtml(s.learnerName||"die leerder")} op hul eie toestel tik, sal binne 'n paar sekondes hier verskyn.`
      : ` Digitale tik het 'n oop assesseringsessie nodig om na terug te rapporteer - maak eers 'n sessie oop of begin een, en kom dan terug na hierdie kode.`;
  }
  box.innerHTML = `
    <div class="linkbox" style="flex-direction:column;align-items:flex-start;gap:8px;">
      <div><span class="muted">Leerderkode:</span> <strong style="font-size:1.4rem;letter-spacing:3px;">${code}</strong></div>
      <div class="row" style="width:100%;">
        <input type="text" readonly value="${escapeHtml(url)}" onfocus="this.select()" id="linkinput-${kind}-${id}" />
        <button class="btn small" onclick="copyLink('linkinput-${kind}-${id}')">Kopieer skakel</button>
      </div>
      <button class="btn clay small" onclick="enterLearnerModeDirectly('${kind}','${id}')">Gee hierdie skerm nou vir die leerder</button>
    </div>
    <p class="muted" style="font-size:.85rem;margin-top:4px;">Maak op die leerder se eie toestel die skakel hierbo oop, of gaan na hierdie hulpmiddel en tik die kode <strong>${code}</strong> in waar dit vir 'n wagwoord of kode vra.${captureNote} Op HIERDIE toestel skakel "Gee hierdie skerm nou vir die leerder" eerder reguit oor na hul aansig - die beste as julle dieselfde skootrekenaar of tablet heen en weer aangee - met 'n knoppie op hul skerm daarna om terug te skakel na jou konsole.</p>
  `;
}
function enterLearnerModeDirectly(kind, id){
  const s = STATE.session;
  const isCapture = !!CAPTURE_KINDS[kind];
  STATE.learnerItem = (isCapture && s) ? {kind, id, sc: s.code} : {kind, id};
  route();
}
function copyLink(inputId){
  const inp = document.getElementById(inputId);
  inp.select();
  try{ navigator.clipboard.writeText(inp.value); }catch(e){ try{ document.execCommand('copy'); }catch(e2){} }
}
async function saveStimulusScore(kind,id){
  const s = STATE.session;
  const skey = stimulusScoreKey(kind);
  const max = stimulusMax(kind,id);
  const isPassage = (kind==="fpassages" || kind==="gpassages");
  const correctEl = document.getElementById(`correct-${kind}-${id}`);
  let correct = parseInt(correctEl.value,10);
  if(isNaN(correct)) correct = 0;
  correct = Math.max(0, Math.min(max, correct));
  const rec = { correct, seconds: Math.round(timerSeconds(kind+"-"+id)) };
  if(isPassage){
    const attEl = document.getElementById(`attempted-${kind}-${id}`);
    let att = parseInt(attEl.value,10);
    if(isNaN(att) || att<=0) att = max;
    rec.attempted = Math.min(max, att);
  }
  if(!s.scores[skey]) s.scores[skey] = {};
  s.scores[skey][id] = rec;
  await persistSession();
  renderConsoleContent();
}

/* ---- Timers ---- */
function timerSeconds(key){
  const t = STATE.timers[key];
  if(!t) return 0;
  const running = t.running ? (nowMs()-t.startedAt) : 0;
  return ((t.accumMs||0)+running)/1000;
}
function toggleTimer(key){
  if(!STATE.timers[key]) STATE.timers[key] = {accumMs:0, running:false, startedAt:0};
  const t = STATE.timers[key];
  if(t.running){
    t.accumMs += nowMs()-t.startedAt;
    t.running = false;
  } else {
    t.startedAt = nowMs();
    t.running = true;
  }
  const btn = document.getElementById("timerBtn-"+key);
  if(btn) btn.textContent = t.running ? "Stop" : "Begin";
}
function resetTimer(key){
  STATE.timers[key] = {accumMs:0, running:false, startedAt:0};
  const btn = document.getElementById("timerBtn-"+key);
  if(btn) btn.textContent = "Begin";
}
setInterval(() => {
  Object.keys(STATE.timers).forEach(key => {
    const t = STATE.timers[key];
    if(t && t.running){
      const el = document.getElementById("timerDisplay-"+key);
      if(el) el.textContent = fmtTime(timerSeconds(key));
    }
  });
}, 500);

/* ============================================================
   Comprehension
   ============================================================ */
function allPassageOptions(){
  const opts = [];
  ["3.1","3.2","3.3"].forEach(id => opts.push([id, "Grondslag: "+FOUNDATION.passages[id].title]));
  ["4","5","6","7","8","9"].forEach(id => opts.push([id, GRADES[id].label+": "+GRADES[id].title]));
  return opts;
}
function passageQuestions(id){
  return FOUNDATION.passages[id] ? FOUNDATION.passages[id].questions : GRADES[id].questions;
}
function comprehensionHtml(){
  const s = STATE.session;
  const id = STATE.passageChoice;
  const qs = passageQuestions(id);
  const rec = (s.scores.comprehension && s.scores.comprehension[id]) || [];
  const correctCount = rec.filter(x=>x===true).length;
  return `
    <div class="grid" style="max-width:760px;">
      <h2 style="margin:0;">Begrip</h2>
      <div class="card">
        <label>Leesstuk</label>
        <select id="compPassageSelect" onchange="changeCompPassage(this.value)">
          ${allPassageOptions().map(([oid,label]) => `<option value="${oid}" ${oid===id?'selected':''}>${escapeHtml(label)}</option>`).join("")}
        </select>
        <p class="muted">Vra elke vraag mondeling nadat die leerder die leesstuk gelees (of daarna geluister) het, en merk die antwoord self.</p>
        ${qs.map((q,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(q.q)}<br/><span class="muted">Modelantwoord: ${escapeHtml(q.a)}</span></div>
            <div class="marks">
              <button class="mark-btn correct ${rec[i]===true?'on':''}" onclick="markComp(${i},true)" title="Korrek">&#10003;</button>
              <button class="mark-btn wrong ${rec[i]===false?'on':''}" onclick="markComp(${i},false)" title="Verkeerd">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/5</span><span class="lbl">Korrek</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,5)}%</span><span class="lbl">Begrip</span></div>
        </div>
      </div>
    </div>
  `;
}
function changeCompPassage(id){
  STATE.passageChoice = id;
  renderConsoleContent();
}
async function markComp(i,val){
  const s = STATE.session;
  const id = STATE.passageChoice;
  if(!s.scores.comprehension) s.scores.comprehension = {};
  if(!s.scores.comprehension[id]) s.scores.comprehension[id] = [];
  s.scores.comprehension[id][i] = val;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   Phonological and Phonemic Awareness (examiner-only; never linked to learner)
   ============================================================ */
function phonoHtml(){
  const s = STATE.session;
  const form = STATE.phonoForm;
  const rec = (s.scores.phono && s.scores.phono[form]) || {};
  let totalRaw = 0, totalMax = 0;
  const blocks = PHONO.map(sub => {
    const marks = rec[sub.key] || [];
    const raw = marks.filter(x=>x===true).length;
    totalRaw += raw; totalMax += 5;
    return `
      <div class="subtest-block">
        <h4>${sub.name} <span class="tag">${sub.level}</span></h4>
        <p class="muted">${escapeHtml(sub.instruction)}</p>
        <p class="note">Voorbeeld: ${escapeHtml(sub.sample)}</p>
        ${sub.forms[form].map((item,i) => `
          <div class="item-row">
            <div class="item-text">${i+1}. ${escapeHtml(item.prompt)} ${item.answer? `<span class="muted">(${escapeHtml(item.answer)})</span>`:""}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markPhono('${sub.key}',${i},true)">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markPhono('${sub.key}',${i},false)">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <p style="margin-top:6px;"><strong>${raw}/5</strong> &middot; ${pct(raw,5)}%</p>
      </div>
    `;
  }).join("");
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Fonologiese en fonemiese bewustheid</h2>
      <p class="note">Word slegs deur die assessor afgeneem. Niks in hierdie afdeling word ooit na 'n leerderskakel gestuur nie. Klanke word geskryf soos dit gewoonlik in die Grondslagfase geleer word; twee letters wat een klank maak (aa, ee, oo, uu, ie, oe, ui, ei, ou, eu, ng) tel as een klank.</p>
      <div class="row">
        <label>Vorm:</label>
        <button class="btn small ${form==='1'?'':'secondary'}" onclick="changePhonoForm('1')">Vorm 1 (Voortoets)</button>
        <button class="btn small ${form==='2'?'':'secondary'}" onclick="changePhonoForm('2')">Vorm 2 (Natoets)</button>
        <span class="chip">${totalRaw}/${totalMax} &middot; ${pct(totalRaw,totalMax)}%</span>
      </div>
      ${blocks}
    </div>
  `;
}
function changePhonoForm(f){
  STATE.phonoForm = f;
  renderConsoleContent();
}
async function markPhono(key,i,val){
  const s = STATE.session;
  const form = STATE.phonoForm;
  if(!s.scores.phono) s.scores.phono = {};
  if(!s.scores.phono[form]) s.scores.phono[form] = {};
  if(!s.scores.phono[form][key]) s.scores.phono[form][key] = [];
  s.scores.phono[form][key][i] = val;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   Reading placement guide: reuses the existing gpassages/fpassages/
   comprehension scores already captured elsewhere in the console. It
   does not collect any new data, it just tells the examiner which
   grade-level passage to try next, using a basal-and-ceiling procedure,
   and shows the same criteria used in the Report.
   ============================================================ */
function readingMeets(r){ return r.accuracy>=90 && r.compPct!=null && r.compPct>=60; }
function getReadingRows(){
  const foundationRows = ["3.1","3.2","3.3"].map(id => passageReportRow("fpassages", id, FOUNDATION.passages[id].title, FOUNDATION.passages[id].total)).filter(Boolean);
  const gradeRows = ["4","5","6","7","8","9"].map(id => passageReportRow("gpassages", id, GRADES[id].title, GRADES[id].total)).filter(Boolean).map(r => Object.assign(r, {grade:r.id}));
  return {foundationRows, gradeRows};
}
function computeReadingLevelStatement(){
  const {foundationRows, gradeRows} = getReadingRows();
  let highestGrade = null;
  gradeRows.forEach(r => { if(readingMeets(r)) highestGrade = Math.max(highestGrade||0, parseInt(r.id,10)); });
  const foundationMet = foundationRows.some(readingMeets);
  let levelStatement;
  if(highestGrade){
    levelStatement = `Lees op of bo 'n <strong>Graad ${highestGrade}</strong>-onderrigvlak volgens hierdie hulpmiddel se kriteria.`;
  } else if(foundationMet){
    levelStatement = `Lees binne die <strong>Grondslagfase-reeks (Graad 1-3)</strong> volgens hierdie hulpmiddel se kriteria. Die vorms wat gebruik is, onderskei nie tussen Graad 1, 2 en 3 binne daardie reeks nie.`;
  } else if(foundationRows.length || gradeRows.length){
    levelStatement = `Akkuraatheid en/of begrip op die afdelings wat tot dusver aangepak is, was onder die onderrigvlak-kriteria. Oorweeg dit om 'n makliker leesstuk te toets, of gebruik dit saam met jou kliniese waarneming.`;
  } else {
    levelStatement = `Nog geen leesstukke is gemerk nie.`;
  }
  return {levelStatement, highestGrade, foundationMet, foundationRows, gradeRows};
}
function wordLadderPass(rec){ return rec && rec.correct!=null && rec.correct>=9; }
function wordLadderFail(rec){ return rec && rec.correct!=null && rec.correct<=3; }
function wordLadderHtml(){
  const s = STATE.session;
  if(!s.scores.wordladder) s.scores.wordladder = {};
  const band = STATE.wordLadderBand || s.gradeStart;
  const words = WORD_READING_LADDER[band] || [];
  const rec = s.scores.wordladder[band] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  const allBands = Object.keys(s.scores.wordladder).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let placementBand = null;
  allBands.forEach(b => { if(wordLadderPass(s.scores.wordladder[b])) placementBand = Math.max(placementBand||0, b); });
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Gegradeerde woordleeslys</h2>
      <p class="note">'n Aparte toets van die vlotheidsleesstukke hierbo: een deurlopende lys van onverwante enkelwoorde in bande van toenemende moeilikheid, hardop gelees sonder tydsbeperking, om rofweg te skat waar die leerder se woordlees opbreek - in die styl van 'n basis/plafon-woordidentifikasietoets soos die Woodcock-Johnson, hoewel dit oorspronklike, nie-genormeerde materiaal is en nie daardie toets nie (sien die nota onder "Plasingskatting" hieronder).</p>
      <div class="card">
        <label>Woordband (begin naby die leerder se geskatte vlak)</label>
        <select onchange="changeWordLadderBand(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(band)?'selected':''}>Band ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('wordladder','${band}')">Wys leerderkode</button>
        </div>
        <div id="linkbox-wordladder-${band}"></div>
        <p class="note" style="margin-top:10px;">Die leerder mag hierdie woorde sien (hulle lees dit hardop), so jy kan hierdie band op hul skerm wys, dit op papier vir hulle gee, of net van jou eie skerm lees as hulle by jou sit.</p>
        ${words.map((w,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(w)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markWordLadderWord('${band}',${i},true)" title="Korrek gelees">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markWordLadderWord('${band}',${i},false)" title="Nie korrek gelees nie">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/12</span><span class="lbl">Korrek</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,12)}%</span><span class="lbl">Akkuraatheid</span></div>
        </div>
      </div>
      <div class="card">
        <h3>Plasingskatting</h3>
        <p class="muted">9/12 of meer tel as 'n slaag op daardie band (basis); 3/12 of minder tel as 'n plafon. Toets op vanaf 'n slaag, af vanaf 'n plafon, totdat jy die hoogste band vind wat die leerder slaag.</p>
        ${allBands.length ? `<table><tr><th>Band</th><th>Korrek</th><th>Resultaat</th></tr>
          ${allBands.map(b => { const r=s.scores.wordladder[b]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Band ${b}</td><td>${c}/12</td><td>${wordLadderPass(r)?'Slaag (basis)':wordLadderFail(r)?'Plafon':'Grensgeval'}</td></tr>`; }).join("")}
        </table>` : `<p class="muted">Nog geen bande gemerk nie.</p>`}
        <p style="margin-top:8px;">${placementBand ? `<strong>Geskatte woordleesband: Band ${placementBand}</strong>` : "Nog nie genoeg data om 'n band te skat nie."}</p>
        <p class="note" style="margin-top:10px;">Hierdie woordelys en sy bandnommers is vir hierdie hulpmiddel geskryf, nie uit die Woodcock-Johnson of enige ander gepubliseerde toets geneem nie, en is nie teen werklike leerders genormeer nie. Beskou "Band ${placementBand||'X'}" as 'n benaderde aanduiding, slegs binne hierdie hulpmiddel, van waar onafhanklike woordlees blykbaar opbreek, saam met jou eie oordeel, die vlotheidsleesstukke hierbo en (waar beskikbaar en gepas) 'n behoorlik genormeerde gestandaardiseerde instrument - nie as 'n formele graadekwivalent-telling op sigself nie.</p>
      </div>
    </div>
  `;
}
function changeWordLadderBand(g){ STATE.wordLadderBand = g; renderConsoleContent(); }
async function markWordLadderWord(band,i,val){
  const s = STATE.session;
  if(!s.scores.wordladder) s.scores.wordladder = {};
  if(!s.scores.wordladder[band]) s.scores.wordladder[band] = {};
  if(!s.scores.wordladder[band].marks) s.scores.wordladder[band].marks = [];
  s.scores.wordladder[band].marks[i] = val;
  s.scores.wordladder[band].correct = s.scores.wordladder[band].marks.filter(x=>x===true).length;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   Spelling Test: word list is examiner-only (never sent to the
   learner view or link). Learner types each word into a blank input
   on their own screen; the examiner marks each word correct/incorrect
   herself, the same way she marks comprehension. Administered as a
   basal-and-ceiling test across grade-level lists to estimate a
   spelling grade level, at the examiner's request. See
   SPELLING_WRITING_NOTE for an important caveat on the word lists.
   ============================================================ */
function spellingPass(rec){ return rec && rec.correct!=null && rec.correct>=7; }
function spellingFail(rec){ return rec && rec.correct!=null && rec.correct<=3; }
function spellingHtml(){
  const s = STATE.session;
  if(!s.scores.spelling) s.scores.spelling = {};
  const grade = STATE.spellingGrade || s.gradeStart;
  const cap = STATE.captureCache["spelling_"+grade];
  const words = SPELLING[grade] || [];
  const rec = s.scores.spelling[grade] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  const allGrades = Object.keys(s.scores.spelling).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let placementGrade = null;
  allGrades.forEach(g => { if(spellingPass(s.scores.spelling[g])) placementGrade = Math.max(placementGrade||0, g); });
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Speltoets</h2>
      <p class="note">Sê elke woord hardop (gebruik dit in 'n kort sin as dit help), die leerder tik dit op hul eie skerm met die kode hieronder, en jy merk elke woord hier. Let op: 'n woord met 'n kappie of deelteken (ê, ë, ô) is net korrek as die teken ook reg is.</p>
      <div class="card">
        <label>Graadvlak-woordelys</label>
        <select onchange="changeSpellingGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Graad ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('spelling','${grade}')">Wys leerderkode</button>
        </div>
        <div id="linkbox-spelling-${grade}"></div>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digitale tik (opsioneel):</strong> die leerder kan hul woorde op hul eie toestel tik, met die kode of skakel hierbo, in plaas daarvan om op papier te skryf. Wat hulle tik, word outomaties teen die woordelys nagegaan en binne 'n paar sekondes hieronder gemerk; jy kan steeds 'n regmerkie of kruisie klik om enige woord self reg te stel.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digitale inskrywing laas bygewerk ${fmtCaptureTime(cap.updatedAt)}` : "Nog geen digitale inskrywing vir hierdie graad ontvang nie."}</span>
            <button class="btn secondary small" onclick="clearCapture('spelling','${grade}')">Vee digitale inskrywing uit</button>
          </div>
        </div>
        ${words.map((w,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(w)}${cap && cap.words && cap.words[i] ? ` <span class="muted" style="font-size:.85rem;">(getik: "${escapeHtml(cap.words[i])}")</span>` : ""}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markSpellingWord('${grade}',${i},true)" title="Korrek">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markSpellingWord('${grade}',${i},false)" title="Verkeerd">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/10</span><span class="lbl">Korrek</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,10)}%</span><span class="lbl">Akkuraatheid</span></div>
        </div>
      </div>
      <div class="card">
        <h3>Plasingsgids</h3>
        <p class="muted">7/10 of meer tel as 'n slaag op daardie graad (basis); 3/10 of minder tel as 'n plafon. Toets op vanaf 'n slaag, af vanaf 'n plafon, totdat jy die hoogste graad vind wat die leerder slaag.</p>
        ${allGrades.length ? `<table><tr><th>Graad</th><th>Korrek</th><th>Resultaat</th></tr>
          ${allGrades.map(g => { const r=s.scores.spelling[g]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Graad ${g}</td><td>${c}/10</td><td>${spellingPass(r)?'Slaag (basis)':spellingFail(r)?'Plafon':'Grensgeval'}</td></tr>`; }).join("")}
        </table>` : `<p class="muted">Nog geen graadlyste gemerk nie.</p>`}
        <p style="margin-top:8px;">${placementGrade ? `<strong>Geskatte spelgraadvlak: Graad ${placementGrade}</strong>` : "Nog nie genoeg data om 'n spelgraadvlak te skat nie."}</p>
      </div>
    </div>
  `;
}
function changeSpellingGrade(g){ STATE.spellingGrade = g; startCapturePolling("spelling", g); renderConsoleContent(); }
async function markSpellingWord(grade,i,val){
  const s = STATE.session;
  if(!s.scores.spelling) s.scores.spelling = {};
  if(!s.scores.spelling[grade]) s.scores.spelling[grade] = {};
  if(!s.scores.spelling[grade].marks) s.scores.spelling[grade].marks = [];
  s.scores.spelling[grade].marks[i] = val;
  s.scores.spelling[grade].correct = s.scores.spelling[grade].marks.filter(x=>x===true).length;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   Dictation: examiner reads the sentence aloud (text is examiner-only),
   learner writes what they hear. Marked by the examiner as words
   spelled correctly out of the total, plus a short punctuation and
   capitalisation checklist.
   ============================================================ */
const DICTATION_CRITERIA = ["Hoofletter aan die begin van die sin","Korrekte leesteken aan die einde (. ? !)","Korrekte spasiëring tussen woorde"];
function dictationHtml(){
  const s = STATE.session;
  if(!s.scores.dictation) s.scores.dictation = {};
  const grade = STATE.dictationGrade || s.gradeStart;
  const cap = STATE.captureCache["dictation_"+grade];
  const d = DICTATION[grade];
  const rec = s.scores.dictation[grade] || {};
  const marks = rec.marks || [];
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Diktee</h2>
      <p class="note">Lees die sin hardop (herhaal een keer indien nodig), die leerder skryf wat hulle hoor, en jy merk dit hier.</p>
      <div class="card">
        <label>Graadvlak</label>
        <select onchange="changeDictationGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Graad ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('dictation','${grade}')">Wys leerderkode</button>
        </div>
        <div id="linkbox-dictation-${grade}"></div>
        <p class="note" style="margin-top:10px;"><strong>Sin om hardop te lees (slegs assessor):</strong> "${escapeHtml(d.text)}" <span class="muted">(${d.words} woorde)</span></p>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digitale tik (opsioneel):</strong> die leerder kan die sin op hul eie toestel tik, met die kode of skakel hierbo, in plaas daarvan om op papier te skryf. Wat hulle tik, word outomaties woord vir woord teen die sin hierbo nagegaan en binne 'n paar sekondes gebruik om "woorde korrek gespel" hieronder in te vul. Daardie eenvoudige woord-vir-woord-kontrole kan deurmekaar raak as die leerder 'n hele woord byvoeg of uitlaat, so gaan dit asseblief na teen wat hulle werklik getik het, hieronder gewys, voordat jy daarop staatmaak.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digitale inskrywing laas bygewerk ${fmtCaptureTime(cap.updatedAt)}` : "Nog geen digitale inskrywing vir hierdie graad ontvang nie."}</span>
            <button class="btn secondary small" onclick="clearCapture('dictation','${grade}')">Vee digitale inskrywing uit</button>
          </div>
          ${cap && cap.text ? `<div style="margin-top:8px;"><strong>Leerder het getik:</strong><div style="white-space:pre-wrap;margin-top:4px;">${escapeHtml(cap.text)}</div></div>` : ""}
        </div>
        <div class="row" style="align-items:flex-end;">
          <div class="col"><label>Woorde korrek gespel (uit ${d.words})${cap && cap.text ? ' <span class="muted" style="font-size:.8rem;">(outomaties ingevul uit digitale inskrywing, wysig indien nodig)</span>' : ''}</label><input type="number" min="0" max="${d.words}" id="dictCorrect-${grade}" value="${rec.wordsCorrect!=null?rec.wordsCorrect:''}" style="width:120px;" /></div>
        </div>
        ${DICTATION_CRITERIA.map((c,i) => `
          <div class="item-row">
            <div class="item-text">${escapeHtml(c)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markDictationCriterion('${grade}',${i},true)" title="Ja">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markDictationCriterion('${grade}',${i},false)" title="Nee">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="col" style="margin-top:10px;">
          <label>Notas</label>
          <textarea rows="3" style="width:100%;" id="dictNotes-${grade}">${escapeHtml(rec.notes||"")}</textarea>
        </div>
        <div class="row" style="margin-top:10px;">
          <button class="btn small" onclick="saveDictationScore('${grade}')">Stoor</button>
        </div>
        ${rec.wordsCorrect!=null ? `<div class="score-box" style="margin-top:10px;"><div class="score-tile"><span class="num">${pct(rec.wordsCorrect,d.words)}%</span><span class="lbl">Woorde korrek</span></div></div>` : ""}
      </div>
    </div>
  `;
}
function changeDictationGrade(g){ STATE.dictationGrade = g; startCapturePolling("dictation", g); renderConsoleContent(); }
async function markDictationCriterion(grade,i,val){
  const s = STATE.session;
  if(!s.scores.dictation) s.scores.dictation = {};
  if(!s.scores.dictation[grade]) s.scores.dictation[grade] = {};
  if(!s.scores.dictation[grade].marks) s.scores.dictation[grade].marks = [];
  s.scores.dictation[grade].marks[i] = val;
  await persistSession();
  renderConsoleContent();
}
async function saveDictationScore(grade){
  const s = STATE.session;
  if(!s.scores.dictation) s.scores.dictation = {};
  if(!s.scores.dictation[grade]) s.scores.dictation[grade] = {};
  const d = DICTATION[grade];
  const el = document.getElementById(`dictCorrect-${grade}`);
  let v = parseInt(el.value,10);
  if(isNaN(v)) v = 0;
  s.scores.dictation[grade].wordsCorrect = Math.max(0, Math.min(d.words, v));
  s.scores.dictation[grade].notes = document.getElementById(`dictNotes-${grade}`).value;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   Sentence writing assessment: learner writes freely against a
   grade-level prompt (the prompt itself is fine for the learner to
   see). Examiner scores against a short, grade-general rubric.
   ============================================================ */
function writingHtml(){
  const s = STATE.session;
  if(!s.scores.writing) s.scores.writing = {};
  const grade = STATE.writingGrade || s.gradeStart;
  const cap = STATE.captureCache["writing_"+grade];
  const w = WRITING[grade];
  const rec = s.scores.writing[grade] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Sinskryf</h2>
      <p class="note">Die opdrag word vir die leerder gewys. Merk hul skryfwerk teen die kontrolelys hieronder sodra hulle klaar is. Oop skryfwerk word die beste beoordeel deur dit self te lees, so niks hier word outomaties gemerk nie.</p>
      <div class="card">
        <label>Graadvlak</label>
        <select onchange="changeWritingGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Graad ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('writing','${grade}')">Wys leerderkode</button>
        </div>
        <div id="linkbox-writing-${grade}"></div>
        <p class="note" style="margin-top:10px;"><strong>Opdrag (vir leerder gewys):</strong> ${escapeHtml(w.prompt)}</p>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digitale tik (opsioneel):</strong> die leerder kan hul skryfwerk op hul eie toestel tik, met die kode of skakel hierbo, in plaas daarvan om op papier te skryf. Hul getikte antwoord sal binne 'n paar sekondes hieronder verskyn sodat jy dit self kan lees en merk.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digitale inskrywing laas bygewerk ${fmtCaptureTime(cap.updatedAt)}` : "Nog geen digitale inskrywing vir hierdie graad ontvang nie."}</span>
            <button class="btn secondary small" onclick="clearCapture('writing','${grade}')">Vee digitale inskrywing uit</button>
          </div>
          ${cap && cap.text ? `<div style="margin-top:8px;"><strong>Leerder se getikte antwoord:</strong><div style="white-space:pre-wrap;margin-top:4px;">${escapeHtml(cap.text)}</div></div>` : ""}
        </div>
        ${WRITING_CRITERIA.map((c,i) => `
          <div class="item-row">
            <div class="item-text">${escapeHtml(c)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markWritingCriterion('${grade}',${i},true)" title="Ja">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markWritingCriterion('${grade}',${i},false)" title="Nee">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="col" style="margin-top:10px;">
          <label>Notas</label>
          <textarea rows="3" style="width:100%;" id="writeNotes-${grade}" oninput="autoSaveWritingNotes('${grade}',this.value)">${escapeHtml(rec.notes||"")}</textarea>
        </div>
        <div class="score-box" style="margin-top:10px;">
          <div class="score-tile"><span class="num">${correctCount}/5</span><span class="lbl">Kriteria bereik</span></div>
        </div>
      </div>
    </div>
  `;
}
function changeWritingGrade(g){ STATE.writingGrade = g; startCapturePolling("writing", g); renderConsoleContent(); }
async function markWritingCriterion(grade,i,val){
  const s = STATE.session;
  if(!s.scores.writing) s.scores.writing = {};
  if(!s.scores.writing[grade]) s.scores.writing[grade] = {};
  if(!s.scores.writing[grade].marks) s.scores.writing[grade].marks = [];
  s.scores.writing[grade].marks[i] = val;
  await persistSession();
  renderConsoleContent();
}
let writingNotesTimeout = null;
function autoSaveWritingNotes(grade,val){
  const s = STATE.session;
  if(!s.scores.writing) s.scores.writing = {};
  if(!s.scores.writing[grade]) s.scores.writing[grade] = {};
  s.scores.writing[grade].notes = val;
  clearTimeout(writingNotesTimeout);
  writingNotesTimeout = setTimeout(() => persistSession(), 600);
}

/* ============================================================
   Report
   ============================================================ */
function passageReportRow(kind,id,label,total){
  const s = STATE.session;
  const skey = kind;
  const rec = s.scores[skey] && s.scores[skey][id];
  if(!rec || rec.correct==null) return null;
  const attempted = rec.attempted || total;
  const accuracy = pct(rec.correct, attempted);
  const rate = wcpm(rec.correct, rec.seconds);
  const compRec = s.scores.comprehension && s.scores.comprehension[id];
  const compPct = compRec ? pct(compRec.filter(x=>x===true).length, 5) : null;
  return {label, accuracy, rate, seconds: rec.seconds, compPct, id};
}
// Returns the raw per-subtest scores (name, raw, total, pct) for the
// phonological/phonemic awareness form with the most data recorded, so
// the narrative and the Vaardigheid/Omskrywing/Telling/Opmerkings table
// both read from the same numbers. Prefers Form 1 (the pre-test) when
// both forms have data, since that is the form examiners use first.
function phonoNarrativeScores(s){
  const forms = ["1","2"].map(form => {
    const rec = (s.scores.phono && s.scores.phono[form]) || {};
    const rows = PHONO.map(sub => {
      const marks = rec[sub.key];
      if(!marks) return null;
      const raw = marks.filter(x=>x===true).length;
      return {key:sub.key, name:sub.name, level:sub.level, raw, total:5, pct: pct(raw,5)};
    }).filter(Boolean);
    return {form, rows};
  });
  const withData = forms.filter(f=>f.rows.length);
  if(!withData.length) return {form:null, rows:[]};
  withData.sort((a,b)=>b.rows.length-a.rows.length);
  return withData[0];
}
function subtestComment(sub){
  if(sub.pct===100) return "Plafontelling; hierdie vaardigheid is ten volle gevestig op hierdie vlak.";
  if(sub.pct>=80) return `Sterk prestasie (${sub.raw}/${sub.total}).`;
  if(sub.pct>=60) return `Ontluikend maar nog nie ten volle gevestig nie (${sub.raw}/${sub.total}).`;
  if(sub.pct>0) return `Een van die laer-telling areas (${sub.raw}/${sub.total}).`;
  return `Geen items korrek beantwoord op hierdie subtoets nie (${sub.raw}/${sub.total}).`;
}
// Builds the auto-generated narrative text for every editable section of
// the Afrikaans report, grounded strictly in the scores already recorded
// for this session - no numbers are invented here, only phrased into
// sentences. The examiner can edit or regenerate each section afterwards.
function generateAfrikaansNarrative(s){
  const name = firstNameOf(s.learnerName);
  const out = {};

  // Leesvlotheid en begrip
  const {foundationRows, gradeRows} = getReadingRows();
  const primary = gradeRows.length ? gradeRows[gradeRows.length-1] : (foundationRows.length ? foundationRows[foundationRows.length-1] : null);
  if(!primary){
    out.readingLevel = "Nog geen leesstuk is getel nie, so 'n leesvlaknarratief kan nie gegenereer word nie. Teken 'n leesstuk se akkuraatheid en begrip aan, en genereer dan hierdie afdeling weer.";
  } else {
    const accHigh = primary.accuracy>=95, accMid = primary.accuracy>=90 && primary.accuracy<95;
    let p1 = `${name} het ${primary.label?`die leesstuk "${primary.label}"`:"die leesstuk"} met ${accHigh?"hoë akkuraatheid":accMid?"goeie akkuraatheid":"akkuraatheid onder hierdie hulpmiddel se onderrigvlak-drempel"} (${primary.accuracy}%) gelees`;
    if(primary.compPct!=null){
      const compPass = primary.compPct>=60;
      if(accHigh && !compPass) p1 += `, wat op sigself aan die onafhanklike-vlak-akkuraatheidskriteria voldoen wat hierdie hulpmiddel gebruik. ${name} se begrip van die leesstuk was egter slegs ${primary.compPct}%, onder die 60%-drempel wat die toets gebruik. Dit is 'n beduidende gaping: ${name} dekodeer die woorde op die bladsy akkuraat, maar verstaan nog nie genoeg van wat gelees word nie.`;
      else if(compPass) p1 += `, met begrip van ${primary.compPct}%, wat aan hierdie hulpmiddel se 60%-begripsdrempel voldoen.`;
      else p1 += `, en begrip van ${primary.compPct}% was ook onder hierdie hulpmiddel se 60%-drempel.`;
    } else {
      p1 += `. Begrip is nie vir hierdie leesstuk aangeteken nie.`;
    }
    let p2 = `${name} se leestempo op hierdie leesstuk was ${primary.rate} woorde korrek per minuut. Hierdie hulpmiddel stel nie 'n vaste woorde-korrek-per-minuut-maatstaf per graad nie, so weeg hierdie syfer saam met jou eie kliniese oordeel, nie as 'n slaag/druip-telling nie.`;
    out.readingLevel = p1 + " " + p2;
  }

  // Fonologiese en fonemiese bewustheid
  const phonoData = phonoNarrativeScores(s);
  if(!phonoData.rows.length){
    out.phono = "Fonologiese en fonemiese bewustheid is nog nie geassesseer nie.";
  } else {
    const rows = phonoData.rows;
    const ceiling = rows.filter(r=>r.pct===100).map(r=>r.name);
    const sorted = [...rows].sort((a,b)=>a.pct-b.pct);
    const lowestPct = sorted[0].pct;
    const tiedLowest = sorted.filter(r=>r.pct===lowestPct).map(r=>r.name);
    let p = "";
    if(ceiling.length) p += `${name} het plafon bereik, wat beteken elke item is korrek beantwoord, op ${ceiling.length} van die ${rows.length} subtoetse geassesseer: ${joinList(ceiling)}. `;
    if(tiedLowest.length>1) p += `${name} se laagste tellings was ${joinList(tiedLowest)} (${lowestPct}% elk).`;
    else p += `${name} se laagste telling was ${sorted[0].name} (${lowestPct}%).`;
    const nextLowest = sorted.find(r=>r.pct!==lowestPct && r.pct<70);
    if(nextLowest) p += ` ${nextLowest.name} (${nextLowest.pct}%) is ook ontluikend maar nog nie gevestig nie.`;
    out.phono = p;
  }

  // Gegradeerde woordleeslys
  const wordLadderScores = s.scores.wordladder || {};
  const bands = Object.keys(wordLadderScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!bands.length){
    out.wordReading = "Die gegradeerde woordleeslys is nog nie toegepas nie.";
  } else {
    let placement = null;
    bands.forEach(b => { if(wordLadderPass(wordLadderScores[b])) placement = Math.max(placement||0, b); });
    const top = bands[bands.length-1];
    const topRec = wordLadderScores[top];
    const topCorrect = (topRec.marks||[]).filter(x=>x===true).length;
    out.wordReading = placement
      ? `${name} het die Band ${placement} woordelys op basisvlak geslaag (${wordLadderScores[placement] ? (wordLadderScores[placement].marks||[]).filter(x=>x===true).length : topCorrect}/12), wat 'n geskatte woordleesband van Band ${placement} gee. Dit is 'n aparte, ongetydde maatstaf van enkelwoord-dekodering, onafhanklik van lopende teks.`
      : `${name} het tot by Band ${top} op die gegradeerde woordleeslys probeer (${topCorrect}/12 korrek) maar het nog nie 'n duidelike basisvlak-slaagpunt op enige band bereik nie. Oorweeg om 'n makliker band te toets om 'n veilige basisvlak vas te stel.`;
  }

  // Spelling
  const spellingScores = s.scores.spelling || {};
  const spellingGrades = Object.keys(spellingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!spellingGrades.length){
    out.spelling = "Spelling is nog nie geassesseer nie.";
  } else {
    let placementGrade = null;
    spellingGrades.forEach(g => { if(spellingPass(spellingScores[g])) placementGrade = Math.max(placementGrade||0, g); });
    const currentGrade = parseInt(s.gradeStart,10);
    if(placementGrade!=null){
      const gap = currentGrade - placementGrade;
      out.spelling = gap<=0
        ? `${name} se spelling funksioneer tans op ongeveer 'n Graad ${placementGrade}-vlak, in lyn met die huidige Graad ${currentGrade}-plasing.`
        : `${name} se spelling funksioneer tans op ongeveer 'n Graad ${placementGrade}-vlak, ${gap} jaar${gap===1?"":""} agter die huidige Graad ${currentGrade}-plasing.`;
    } else {
      out.spelling = `${name} het nog nie 'n duidelike basisvlak-slaagpunt op die speltoetse tot dusver bereik nie. Oorweeg om 'n makliker graadvlak-lys te toets om 'n veilige basisvlak vas te stel.`;
    }
  }

  // Diktee
  const dictationScores = s.scores.dictation || {};
  const dictationGrades = Object.keys(dictationScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!dictationGrades.length){
    out.dictation = "Diktee is nog nie geassesseer nie.";
  } else {
    const topGrade = dictationGrades[dictationGrades.length-1];
    const r = dictationScores[topGrade];
    const d = DICTATION[topGrade];
    const wordPct = r.wordsCorrect!=null ? pct(r.wordsCorrect, d.words) : null;
    const cm = (r.marks||[]).filter(x=>x===true).length;
    out.dictation = wordPct!=null
      ? `${name} het ${wordPct}% van die gedikteerde woorde korrek gespel (${r.wordsCorrect}/${d.words}) op Graad ${topGrade}-vlak, en het hoofletter- en leestekengebruik korrek toegepas op ${cm} van ${DICTATION_CRITERIA.length} items wat getel is.`
      : `Diktee op Graad ${topGrade}-vlak is probeer maar woordakkuraatheid is nie aangeteken nie; hoofletter- en leestekengebruik was korrek op ${cm} van ${DICTATION_CRITERIA.length} items wat getel is.`;
  }

  // Sinskryf
  const writingScores = s.scores.writing || {};
  const writingGrades = Object.keys(writingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!writingGrades.length){
    out.writing = "Sinskryf is nog nie geassesseer nie.";
  } else {
    const topGrade = writingGrades[writingGrades.length-1];
    const r = writingScores[topGrade];
    const cm = (r.marks||[]).filter(x=>x===true).length;
    out.writing = `${name} het ${cm} van die ${WRITING_CRITERIA.length} kriteria wat op Graad ${topGrade}-vlak geassesseer is, bereik, wat aandui dat sinskonstruksie ${cm>=Math.ceil(WRITING_CRITERIA.length*0.8)?"aan":cm>=Math.ceil(WRITING_CRITERIA.length*0.5)?"ontluikend is maar nog nie ten volle aan":"nog aansienlik onder"} Graad ${topGrade}-verwagtinge voldoen nie.`;
  }

  // Sterkpunte / areas vir ontwikkeling / aanbevelings, saamgestel uit die
  // afdelingsvlak-syfers hierbo.
  const strengths = [], areas = [], recs = [];
  if(primary){
    if(primary.accuracy>=95) strengths.push(`Akkurate woordvlak-lees, met ${primary.accuracy}% akkuraatheid op die leesstuk wat probeer is.`);
    if(primary.compPct!=null && primary.compPct<60) { areas.push(`Leesbegrip was opvallend laag (${primary.compPct}%) op die leesstuk wat probeer is, ondanks akkurate woordlees.`); recs.push(`Ondersoek die begripsgaping direk: aangesien woordvlak-dekodering akkuraat is, oorweeg begripspesifieke strategieë (navertel, voorspel, bevraagtekening) saam met voortgesette leesoefening.`); }
  }
  if(phonoData.rows.length){
    const ceiling = phonoData.rows.filter(r=>r.pct===100);
    if(ceiling.length) strengths.push(`Fonologiese en fonemiese bewustheidsvaardighede was oor die algemeen sterk, met plafon (volpunte) op ${ceiling.length} van ${phonoData.rows.length} subtoetse: ${joinList(ceiling.map(r=>r.name))}.`);
    const weak = phonoData.rows.filter(r=>r.pct<60);
    if(weak.length){ areas.push(`${joinList(weak.map(r=>r.name))} was ${weak.length===1?"die":"onder die"} laagste fonologiese/fonemiese telling${weak.length===1?"":"s"} (${weak.map(r=>r.pct+"%").join(", ")}).`); recs.push(`Rig ${joinList(weak.map(r=>r.name.toLowerCase()))} direk met gestruktureerde, multisensoriese fonologiese bewustheidsaktiwiteite.`); }
  }
  if(spellingGrades.length){
    const g = parseInt(s.gradeStart,10);
    let placementGrade = null;
    spellingGrades.forEach(gr => { if(spellingPass(spellingScores[gr])) placementGrade = Math.max(placementGrade||0, gr); });
    if(placementGrade!=null && placementGrade<g){ areas.push(`Spelling word geskat om tans op ongeveer 'n Graad ${placementGrade}-vlak te funksioneer, ${g-placementGrade} jaar agter die huidige Graad ${g}-plasing.`); recs.push(`Verskaf gestruktureerde spelonderrig wat die gaping tussen die huidige graadplasing en die geskatte spelvlak sluit.`); }
    else if(placementGrade!=null) strengths.push(`Spelling het 'n basisvlak-slaagpunt op Graad ${placementGrade}-vlak bereik, in lyn met die huidige graadplasing.`);
  }
  if(dictationGrades.length){
    const topGrade = dictationGrades[dictationGrades.length-1];
    const r = dictationScores[topGrade];
    const d = DICTATION[topGrade];
    const wordPct = r.wordsCorrect!=null ? pct(r.wordsCorrect, d.words) : null;
    const cm = (r.marks||[]).filter(x=>x===true).length;
    if(wordPct!=null && wordPct<60) { areas.push(`Diktee-woordakkuraatheid op Graad ${topGrade}-vlak was laag (${wordPct}%).`); recs.push(`Rig woordvlak-spelling onder diktee spesifiek.`); }
    if(cm===DICTATION_CRITERIA.length) strengths.push(`Hoofletter- en leestekengebruik is korrek toegepas op elke item wat onder diktee getel is.`);
  }
  if(writingGrades.length){
    const topGrade = writingGrades[writingGrades.length-1];
    const r = writingScores[topGrade];
    const cm = (r.marks||[]).filter(x=>x===true).length;
    if(cm<WRITING_CRITERIA.length) areas.push(`Sinskryf op Graad ${topGrade}-vlak het slegs ${cm} van ${WRITING_CRITERIA.length} kriteria wat geassesseer is, bereik.`);
  }
  out.strengths = strengths.length ? strengths.map(x=>"- "+x).join("\n") : "Nog nie genoeg afdelings getel om sterkpunte op te som nie.";
  out.areas = areas.length ? areas.map(x=>"- "+x).join("\n") : "Nog nie genoeg afdelings getel om areas vir ontwikkeling op te som nie.";
  out.recommendations = recs.length ? recs.map(x=>"- "+x).join("\n") : "Nog nie genoeg afdelings getel om aanbevelings te genereer nie.";

  // Gevolgtrekking: 'n kort sintese, doelbewus konserwatief - dit is 'n
  // konsep-beginpunt vir die assessor se eie kliniese skryfwerk, nie 'n
  // diagnostiese stelling nie.
  if(!primary && !phonoData.rows.length && !spellingGrades.length){
    out.conclusion = `Assessering is nog aan die gang. 'n Gevolgtrekking kan gegenereer word sodra meer afdelings getel is.`;
  } else {
    const bits = [];
    if(primary) bits.push(primary.accuracy>=95 ? "akkurate woordvlak-lees" : "ontwikkelende woordvlak-leesakkuraatheid");
    if(phonoData.rows.length) bits.push(phonoData.rows.filter(r=>r.pct===100).length >= phonoData.rows.length/2 ? "'n goeie grondslag oor die meeste areas van fonologiese en fonemiese bewustheid" : "'n ontwikkelende grondslag in fonologiese en fonemiese bewustheid, met sommige areas wat meer ondersteuning benodig");
    out.conclusion = `${name} toon ${joinList(bits)} op hierdie assessering. ${areas.length ? `Die duidelikste area${areas.length===1?"":"s"} van behoefte wat geïdentifiseer is, word hierbo onder Areas vir Ontwikkeling opgesom. ` : ""}Met gefokusde ondersteuning in hierdie spesifieke areas het ${name} 'n goeie grondslag om op voort te bou.`;
  }

  return out;
}

/* ============================================================
   Geïndividualiseerde Ondersteuningsplan (GOP / ISP)
   'n 8-week, redigeerbare intervensieplan gegrond op hierdie sessie
   se eie aangetekende tellings (via getTargetAreas, wat dieselfde
   slaag/druip-drempels as die verslag se narratief hierbo gebruik)
   en gebou uit hierdie hulpmiddel se eie regte inhoudbanke
   (SPELLING, DICTATION, PHONO, WORD_READING_LADDER) eerder as
   uitgedinkte woordeskat. Les- en huiswerkteks gebruik dieselfde
   editableNarrativeField-infrastruktuur, gestoor in 'n aparte
   STATE.session.isp.fields-emmer sodat wysigings nooit met die
   Verslag se eie velde bots nie.
   ============================================================ */

// Algemeen-beskryfde, gepubliseerde Orton-Gillingham multisensoriese
// tegnieke (tik, Elkonin-blokkies, lugskryf, Gelyktydige Mondelinge
// Spelling, lettertegels), hier beskrywend gebruik om te sê HOE elke week
// multisensories aangebied word - nie 'n spesifieke kommersiële
// kurrikulum se eie materiaal nie.
const OG_TECHNIQUES = [
  "tik elke klank op die vingers uit terwyl dit hardop gesê word (gelyktydige ouditief-kinestetiese inset)",
  "Elkonin-blokkies: skuif 'n toonbankie in 'n blokkie vir elke klank wat in die woord gehoor word",
  "lugskryf van elke letter terwyl die klank hardop gesê word (visueel-kinesteties-ouditief)",
  "Gelyktydige Mondelinge Spelling: kyk na die woord, sê dit, noem elke letter terwyl dit geskryf word, gaan dan na",
  "bou en herbou die woord met lettertegels om die klank-simboolverband konkreet te maak",
  "trek die woord in sand, op 'n tekstuuroppervlak, of in die lug terwyl elke klank genoem word (tasbaar-kinesteties-ouditief)",
  "kleurkodering van vokale en konsonante wanneer die woord gebou of geskryf word om die klankpatroon visueel te maak"
];
function ogTechniqueFor(i){ return OG_TECHNIQUES[((i%OG_TECHNIQUES.length)+OG_TECHNIQUES.length)%OG_TECHNIQUES.length]; }

// Gestruktureerde, telling-gegronde lys van hierdie leerder se swakste
// areas - dieselfde slaag/druip-drempels as "Areas vir Ontwikkeling"
// hierbo, maar as gestruktureerde data teruggegee sodat die GOP 'n
// Doelareas/Doelwitte-tabel en 'n 8-week-volgorde daaruit kan bou, in
// plaas daarvan om dit weer uit prosa af te lei.
function getTargetAreas(s){
  const out = [];
  const {foundationRows, gradeRows} = getReadingRows();
  const primary = gradeRows.length ? gradeRows[gradeRows.length-1] : (foundationRows.length ? foundationRows[foundationRows.length-1] : null);
  if(primary && primary.compPct!=null && primary.compPct<60){
    out.push({id:"comprehension", label:"Leesbegrip", baseline:`${primary.compPct}% begrip op die leesstuk wat probeer is, ondanks ${primary.accuracy}% woordleesakkuraatheid`, goal:"Verhoog begrip tot minstens 60% deur navertel-, voorspel- en bevraagtekeningstrategieë saam met die leesstuk wat reeds akkuraat gelees is.", severity: 60-primary.compPct});
  }
  const phonoData = phonoNarrativeScores(s);
  phonoData.rows.filter(r=>r.pct<60).forEach(r=>{
    out.push({id:"phono_"+r.key, label:r.name, baseline:`${r.pct}% op ${r.name}`, goal:`Bereik minstens 80% op ${r.name} deur gestruktureerde, multisensoriese fonologiese bewustheidsoefening.`, severity: 60-r.pct, phonoKey:r.key});
  });
  const wordLadderScores = s.scores.wordladder || {};
  const wlBands = Object.keys(wordLadderScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(wlBands.length){
    let placement = null;
    wlBands.forEach(b=>{ if(wordLadderPass(wordLadderScores[b])) placement = Math.max(placement||0, b); });
    if(placement==null){
      const top = wlBands[wlBands.length-1];
      const topCorrect = (wordLadderScores[top].marks||[]).filter(x=>x===true).length;
      out.push({id:"wordReading", label:"Gegradeerde Woordlees (enkelwoord-dekodering)", baseline:`Geen basisvlak-slaagpunt bereik tot by Band ${top} nie (${topCorrect}/12)`, goal:"Vestig 'n veilige basisvlak-slaagpunt deur gestruktureerde woordfamilie- en aanvangsklank-en-rym-oefening.", severity:45, band: Math.max(1,top-1)});
    }
  }
  const spellingScores = s.scores.spelling || {};
  const spellingGrades = Object.keys(spellingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(spellingGrades.length){
    let placementGrade = null;
    spellingGrades.forEach(g=>{ if(spellingPass(spellingScores[g])) placementGrade = Math.max(placementGrade||0, g); });
    const currentGrade = parseInt(s.gradeStart,10);
    if(placementGrade!=null && placementGrade<currentGrade){
      const gap = currentGrade-placementGrade;
      out.push({id:"spelling", label:"Spelling", baseline:`Ongeveer Graad ${placementGrade}-vlak, ${gap} jaar agter die huidige Graad ${currentGrade}-plasing`, goal:`Sluit die gaping na Graad ${currentGrade} toe deur gestruktureerde, multisensoriese spelonderrig.`, severity: gap*10, grade: placementGrade});
    } else if(placementGrade==null){
      out.push({id:"spelling", label:"Spelling", baseline:"Het nog nie 'n duidelike basisvlak-slaagpunt op die speltoetse bereik nie", goal:"Vestig 'n veilige basisvlak-slaagpunt deur gestruktureerde, multisensoriese spelonderrig op 'n makliker graadvlak-lys.", severity:40, grade: Math.max(1, spellingGrades[0]-1)});
    }
  }
  const dictationScores = s.scores.dictation || {};
  const dictationGrades = Object.keys(dictationScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(dictationGrades.length){
    const topGrade = dictationGrades[dictationGrades.length-1];
    const r = dictationScores[topGrade]; const d = DICTATION[topGrade];
    const wordPct = r.wordsCorrect!=null ? pct(r.wordsCorrect, d.words) : null;
    if(wordPct!=null && wordPct<60) out.push({id:"dictation", label:"Diktee (woordvlak-spelling onder diktee)", baseline:`${wordPct}% woordakkuraatheid op Graad ${topGrade}-vlak`, goal:"Verhoog diktee-woordakkuraatheid tot minstens 60%.", severity:60-wordPct, grade: topGrade});
  }
  const writingScores = s.scores.writing || {};
  const writingGrades = Object.keys(writingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(writingGrades.length){
    const topGrade = writingGrades[writingGrades.length-1];
    const r = writingScores[topGrade]; const cm = (r.marks||[]).filter(x=>x===true).length;
    if(cm<WRITING_CRITERIA.length) out.push({id:"writing", label:"Sinskryf", baseline:`${cm}/${WRITING_CRITERIA.length} kriteria bereik op Graad ${topGrade}-vlak`, goal:"Bereik minstens 80% van die sinskryfkriteria deur gestruktureerde oefening van skryfmeganika.", severity: (WRITING_CRITERIA.length-cm)*10, grade: topGrade});
  }
  out.sort((a,b)=>b.severity-a.severity);
  return out;
}

// Verstek-terugvalvolgorde, slegs gebruik wanneer geen swak area uit
// aangetekende tellings geïdentifiseer kon word nie (bv. assessering nog
// aan die gang) - die plan sê dit duidelik sodat die terapeut weet om dit
// aan te pas, eerder as om uitgedinkte swakhede as regte bevindinge voor
// te hou.
const ISP_DEFAULT_SEQUENCE = [
  {id:"phono_rhyme", label:"Rym", baseline:"Nog nie geassesseer nie", goal:"Bevestig en vestig rymbewustheid.", phonoKey:"rhyme"},
  {id:"phono_phonemeSeg", label:"Klanke verdeel", baseline:"Nog nie geassesseer nie", goal:"Bevestig en vestig klankverdeling.", phonoKey:"phonemeSeg"},
  {id:"wordReading", label:"Gegradeerde Woordlees", baseline:"Nog nie geassesseer nie", goal:"Bevestig enkelwoord-dekodering op 'n geskikte band.", band:2},
  {id:"comprehension", label:"Leesbegrip", baseline:"Nog nie geassesseer nie", goal:"Bevestig begripstrategieë op graadvlak-teks."},
  {id:"spelling", label:"Spelling", baseline:"Nog nie geassesseer nie", goal:"Bevestig spelling op 'n geskikte graadvlak.", grade:2},
  {id:"dictation", label:"Diktee", baseline:"Nog nie geassesseer nie", goal:"Bevestig woordvlak-spelling onder diktee.", grade:2},
  {id:"writing", label:"Sinskryf", baseline:"Nog nie geassesseer nie", goal:"Bevestig sinskryf-meganika.", grade:2}
];

function buildWeekPlan(target, weekNum, name, repeatRound){
  const suffix = repeatRound>0 ? " (voortgesit en uitgebrei)" : "";
  const technique = ogTechniqueFor(weekNum-1);
  let materials = [], guided = [], independent = [], teachModel = "", warmUp = "", closure = "";
  if(target.phonoKey){
    const entry = PHONO.find(p=>p.key===target.phonoKey);
    const items = (entry.forms[1]||[]).concat(entry.forms[2]||[]);
    materials = ["Stil ruimte sonder visuele afleiding", "Hierdie hulpmiddel se Fonologiese Bewustheid-itemlys (gedruk of op skerm)"];
    warmUp = `Gaan gister se klanke kortliks deur, verduidelik dan vandag se fokus in een sin: "${entry.instruction}"`;
    teachModel = `Modelleer met die hulpmiddel se eie voorbeelditem: "${entry.sample}"`;
    guided = items.slice(0, Math.ceil(items.length/2)).map(it=>it.prompt + (it.answer?` (antwoord: ${it.answer})`:""));
    independent = items.slice(Math.ceil(items.length/2)).map(it=>it.prompt + (it.answer?` (antwoord: ${it.answer})`:""));
    closure = `Vra ${name} om in eie woorde te verduidelik wat vandag se vaardigheid (${entry.name}) beteken, en gee self een voorbeeld.`;
  } else if(target.id==="wordReading"){
    const band = target.band || 2;
    const words = WORD_READING_LADDER[band] || WORD_READING_LADDER[2];
    materials = ["Woordkaarte of 'n gedrukte woordelys (Band "+band+")", "Lettertegels of magnetiese letters"];
    warmUp = `Gaan 3-4 woorde van die vorige band wat ${name} al vasgestel het, deur.`;
    teachModel = `Stel 2-3 nuwe woorde van Band ${band} voor deur elkeen met lettertegels te bou terwyl elke klank genoem word, en dan saam te voeg.`;
    guided = words.slice(0,6);
    independent = words.slice(6,12);
    closure = `${name} lees 3 woorde van vandag se lys hardop sonder hulp, en gaan self na teen die tegel-bou.`;
  } else if(target.id==="spelling"){
    const grade = target.grade || 2;
    const words = SPELLING[grade] || SPELLING[2];
    materials = ["Spelwoordkaarte (Graad "+grade+")", "Lettertegels", "Witbord of sandbak"];
    warmUp = "Dikteer 2-3 woorde wat reeds vasgestel is, as 'n selfvertroue-opwarming.";
    teachModel = "Stel 2-3 nuwe woorde voor: sê die woord, verdeel dit in klanke, bou dit dan met lettertegels terwyl elke letterklank geplaas word.";
    guided = words.slice(0,5);
    independent = words.slice(5,10);
    closure = `${name} spel 2 van vandag se woorde uit die geheue, en gaan self letter-vir-letter na.`;
  } else if(target.id==="dictation"){
    const grade = target.grade || 2;
    const d = DICTATION[grade] || DICTATION[2];
    materials = ["Gelynde papier", "Potlood", "Hierdie hulpmiddel se Graad "+grade+" dikteesin"];
    warmUp = "Gaan hoofletter- en leestekenreëls kortliks deur met 'n vinnige voorbeeldsin.";
    teachModel = "Lees die sin een keer teen normale spoed hardop, dan frase vir frase, en modelleer hoe om na elke woord te luister voordat dit geskryf word.";
    guided = ["Skryf die sin saam, met 'n pouse na elke frase: \""+d.text+"\""];
    independent = ["Skryf dieselfde sin weer onafhanklik uit diktee, en gaan dan self na teen die model."];
    closure = `${name} gaan eie skryfwerk na teen die drie kriteria: hoofletter, eindleesteken, en spasiëring.`;
  } else if(target.id==="writing"){
    const grade = target.grade || 2;
    materials = ["Gelynde papier", "Potlood", "Hierdie hulpmiddel se Sinskryf-kriterialys"];
    warmUp = "Bedink mondeling 2-3 idees oor vandag se onderwerp voordat enigiets geskryf word.";
    teachModel = `Modelleer die bou van een volledige sin hardop, en gaan dit na teen die kriteria: ${WRITING_CRITERIA.join("; ")}.`;
    guided = ["Bou een sin saam oor vandag se onderwerp, en gaan dit as paar na teen die kriteria."];
    independent = [`Skryf ${Math.max(2, (WRITING[grade]&&WRITING[grade].minSentences)||3)} sinne onafhanklik oor vandag se onderwerp (sien die Sinskryf-afdeling vir die Graad ${grade}-opdrag), en gaan dan self na teen die kriteria.`];
    closure = `${name} lees eie sinne hardop en merk af welke kriteria bereik is.`;
  } else { // comprehension
    materials = ["'n Leesstuk op of net bo die leerder se huidige onderrigvlak", "'n eenvoudige navertel-/vraagraamwerk"];
    warmUp = "Kyk vooraf na die leesstuk se titel en enige prente; voorspel waaroor dit kan gaan.";
    teachModel = "Modelleer een begripstrategie uitdruklik (bv. stop na elke paragraaf en vra \"wat het nou net gebeur?\").";
    guided = ["Lees die leesstuk saam, met pouses om 2-3 begeleide begripsvrae te vra (wie/wat/waar/hoekom)."];
    independent = ["Die leerder lees 'n kort nuwe leesstuk onafhanklik, en beantwoord dan 2-3 vrae skriftelik of mondeling."];
    closure = `${name} vertel die leesstuk se hoofgebeure in eie woorde, in volgorde, na.`;
  }

  const lessonText =
`Fokus: ${target.label}${suffix}
Doelwit: ${target.goal}

Opwarming (5 min): ${warmUp}

Onderrig/Modelleer (10 min): ${teachModel}

Multisensoriese (Orton-Gillingham-Geïnformeerde) Tegniek: ${technique}.

Begeleide Oefening (werk saam deur):
${guided.map(g=>"- "+g).join("\n")}

Onafhanklike Oefening (leerder voltooi met ondersteuning beskikbaar indien nodig):
${independent.map(g=>"- "+g).join("\n")}

Afsluiting (5 min): ${closure}`;

  const homeworkText =
`Week ${weekNum} Huiswerk: ${target.label}
Oefen 10-15 minute, 3-4 keer hierdie week.

${independent.map(g=>"- "+g).join("\n")}

Nota vir ouers/voogde: Hou sessies kort en positief. As ${name} vashaak, sê die klank of woord self een keer en gaan aan - dit is oefening van wat reeds hierdie week geleer is, nie 'n toets nie.`;

  return {materials, lessonText, homeworkText};
}

function generateSupportPlanWeeks(s){
  const name = firstNameOf(s.learnerName);
  let targets = getTargetAreas(s);
  const usedDefault = targets.length===0;
  if(usedDefault) targets = ISP_DEFAULT_SEQUENCE;
  const weeks = [];
  for(let w=1; w<=7; w++){
    const target = targets[(w-1) % targets.length];
    const repeatRound = Math.floor((w-1)/targets.length);
    const built = buildWeekPlan(target, w, name, repeatRound);
    weeks.push({week:w, focus: target.label + (repeatRound>0?" (voortgesit)":""), objective: target.goal, materials: built.materials, lessonText: built.lessonText, homeworkText: built.homeworkText});
  }
  weeks.push({
    week:8, focus:"Integrasie en Vooruitgangstoets", objective:"Konsolideer alle doelareas en kontroleer vooruitgang teen elke basislyn.",
    materials:["Materiaal van enige van Week 1-7, soos nodig vir hersiening"],
    lessonText:
`Fokus: Integrasie en Vooruitgangstoets
Doelwit: Konsolideer vooruitgang oor alle doelareas hieronder en kontroleer elke basislyn informeel.

Opwarming (5 min): Gaan kortliks elke doelarea van hierdie program deur, en vra ${name} wat onthou word van die oefening.

Onderrig/Modelleer (10 min): Voer 'n kort, informele kontrole op elke doelarea uit ('n handvol items per area, met hierdie hulpmiddel se eie afdelings), en let op of die basislyntelling verbeter het.

Multisensoriese (Orton-Gillingham-Geïnformeerde) Tegniek: ${ogTechniqueFor(7)}.

Begeleide Oefening (werk saam deur):
${targets.slice(0,4).map(t=>"- Vinnige hersiening: "+t.label).join("\n")}

Onafhanklike Oefening (leerder voltooi met ondersteuning beskikbaar indien nodig):
${targets.slice(0,4).map(t=>"- Onafhanklike kontrole: "+t.label).join("\n")}

Afsluiting (5 min): Bespreek vooruitgang met ${name} op 'n aanmoedigende, konkrete wyse, en kom ooreen oor 1-2 areas om by die huis te bly oefen.`,
    homeworkText:
`Week 8 Huiswerk: Integrasie en Vooruitgangstoets
Hou aan om elke area hierbo 10-15 minute, 3-4 keer hierdie week te oefen.

Nota vir ouers/voogde: Hierdie week gaan oor die konsolidasie van wat al geleer is, nie oor die bekendstelling van nuwe materiaal nie. Vier die vooruitgang wat oor die afgelope 7 weke gemaak is.`
  });
  return {weeks, targets, usedDefault};
}

function ispInfoTableHtml(s){
  const start = (STATE.session.isp && STATE.session.isp.startDate) || todayDateStr();
  return `
    <table class="learner-info-table">
      <tr><th>Leerder:</th><td>${escapeHtml(s.learnerName||"Nie aangeteken nie")}</td></tr>
      <tr><th>Huidige Graad:</th><td>Graad ${escapeHtml(s.gradeStart)}</td></tr>
      <tr><th>Gebaseer op Assessering Gedateer:</th><td>${s.assessmentDate?fmtDate(new Date(s.assessmentDate+"T00:00:00").getTime()):fmtDate(nowMs())}</td></tr>
      <tr><th>Program Begindatum:</th><td><input type="date" id="ispStartDate" value="${escapeHtml(start)}" onchange="saveIspStartDate(this.value)" class="no-print" /><span class="print-only" style="display:none;">${fmtDate(new Date(start+"T00:00:00").getTime())}</span></td></tr>
      <tr><th>Programlengte:</th><td>8 weke</td></tr>
    </table>
  `;
}
function saveIspStartDate(val){
  if(!STATE.session.isp) STATE.session.isp = {};
  STATE.session.isp.startDate = val;
  persistSession();
}

function ispHtml(){
  const s = STATE.session;
  const name = firstNameOf(s.learnerName);
  const {weeks, targets, usedDefault} = generateSupportPlanWeeks(s);

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Geïndividualiseerde Ondersteuningsplan</h2>
        <button class="btn small" onclick="window.print()">Druk / Stoor as PDF</button>
      </div>
      <p class="note no-print">Elke les- en huiswerkafdeling hieronder is outomaties opgestel uit hierdie sessie se eie aangetekende tellings en inhoudbanke. Wysig enige afdeling direk, of gebruik "Genereer weer vanaf tellings" om jou wysigings te laat vaar en die outomatiese teks terug te kry. Gaan dit na en wysig dit voordat dit aangestuur word.</p>
      ${usedDefault ? `<p class="note no-print" style="color:var(--clay-dark);">Geen duidelike swak area kon nog uit hierdie sessie se aangetekende tellings geïdentifiseer word nie, so hierdie plan gebruik 'n algemene, verstekvolgorde van grondliggende vaardigheidsareas as 'n beginpunt. Teken meer afdelings aan, en kom dan weer na hierdie plan terug, of wysig dit direk hieronder.</p>` : ""}
      <div class="card" id="printableISP">
        ${letterheadHtml("GEÏNDIVIDUALISEERDE ONDERSTEUNINGSPLAN")}
        <h2 class="report-title" style="margin-top:-6px;">'n 8-Week Program vir ${escapeHtml(s.learnerName||"")}</h2>
        ${ispInfoTableHtml(s)}

        <p>Hierdie Geïndividualiseerde Ondersteuningsplan stel 'n 8-week program van gestruktureerde intervensie vir ${name} saam, gebaseer op die resultate van die assessering wat in hierdie leerder se Verslag opgesom word, om die spesifieke areas hieronder te rig.</p>

        <h3 class="section-num">'n Orton-Gillingham-Geïnformeerde Benadering</h3>
        <p>Hierdie plan bou op Orton-Gillingham-geïnformeerde beginsels: onderrig wat uitdruklik, sistematies en kumulatief is, en multisensories - wat visuele, ouditiewe, kinestetiese en tasbare weë saam betrek sodat ${name} elke vaardigheid wat onderrig word, hoor, sien, sê en skryf/bou, eerder as om op enige een weg alleen te steun. Elke week hieronder noem die spesifieke multisensoriese tegniek wat gebruik word.</p>

        <h3 class="section-num">Doelareas en Doelwitte</h3>
        <table>
          <tr><th>Vaardigheidsarea</th><th>Basislyn</th><th>8-Week Doelwit</th></tr>
          ${targets.map(t=>`<tr><td>${escapeHtml(t.label)}</td><td>${escapeHtml(t.baseline)}</td><td>${escapeHtml(t.goal)}</td></tr>`).join("")}
        </table>

        <h3 class="section-num">8-Week Oorsig</h3>
        <table>
          <tr><th>Week</th><th>Fokus</th></tr>
          ${weeks.map(w=>`<tr><td>Week ${w.week}</td><td>${escapeHtml(w.focus)}</td></tr>`).join("")}
        </table>

        ${weeks.map(w=>`
          <h3 class="section-num">Week ${w.week}: ${escapeHtml(w.focus)}</h3>
          <p><strong>Nodige Materiaal:</strong> ${w.materials.map(m=>escapeHtml(m)).join("; ")}</p>
          ${editableNarrativeField("isp_week"+w.week+"_lesson", "Lesplan (1 Uur)", w.lessonText, 16, "isp")}
          ${editableNarrativeField("isp_week"+w.week+"_homework", "Week "+w.week+" Huiswerk", w.homeworkText, 7, "isp")}
        `).join("")}

        <p class="signature-line">Program ontwerp deur: Debby Smit,<br/>Debby Smit Educational Therapy</p>
      </div>
    </div>
    <style>
      @media print{ .print-only{display:block !important; white-space:pre-wrap;} .report-textarea{display:none;} .report-section .btn{display:none;} }
      .report-letterhead .credentials-list{list-style:none;padding:0;margin:8px 0;font-size:.82rem;display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center;text-align:center;}
      .report-letterhead .credentials-list li{display:inline;}
      .report-letterhead .credentials-list li:not(:last-child)::after{content:" \\2022";margin-left:14px;color:var(--ink-soft);}
      .letterhead-rule{border:none;border-top:2px solid var(--line);margin:10px 0;}
      .confidential-label{text-align:center;font-weight:700;letter-spacing:.08em;margin:0;}
      .report-title{text-align:center;margin:4px 0 14px;font-size:1.1rem;}
      .learner-info-table th{text-align:left;width:220px;background:var(--paper);}
      .report-section{margin-top:10px;}
      .report-textarea{width:100%;}
      .signature-line{margin-top:18px;}
      .section-num{margin-top:18px;}
    </style>
  `;
}

function reportHtml(){
  const s = STATE.session;
  const name = firstNameOf(s.learnerName);
  const {foundationRows, gradeRows} = getReadingRows();

  const decodingRows = ["4","5","6","7","8","9"].map(id => {
    const rec = s.scores.decoding && s.scores.decoding[id];
    if(!rec || rec.correct==null) return null;
    return {grade:id, accuracy: pct(rec.correct, GRADES[id].decoding.length)};
  }).filter(Boolean);

  const phonoData = phonoNarrativeScores(s);
  const phonoFormLabel = phonoData.form==='1' ? 'Voortoets (Vorm 1)' : phonoData.form==='2' ? 'Natoets (Vorm 2)' : null;

  const spellingScores = s.scores.spelling || {};
  const spellingGrades = Object.keys(spellingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let spellingPlacementGrade = null;
  spellingGrades.forEach(g => { if(spellingPass(spellingScores[g])) spellingPlacementGrade = Math.max(spellingPlacementGrade||0, g); });

  const wordLadderScores = s.scores.wordladder || {};
  const wordLadderBands = Object.keys(wordLadderScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let wordLadderPlacementBand = null;
  wordLadderBands.forEach(b => { if(wordLadderPass(wordLadderScores[b])) wordLadderPlacementBand = Math.max(wordLadderPlacementBand||0, b); });

  const dictationScores = s.scores.dictation || {};
  const dictationGrades = Object.keys(dictationScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);

  const writingScores = s.scores.writing || {};
  const writingGrades = Object.keys(writingScores).map(g=>parseInt(g,10)).sort((a,b)=>a-b);

  const narrative = generateAfrikaansNarrative(s);

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Verslag</h2>
        <button class="btn small" onclick="window.print()">Druk / Stoor as PDF</button>
      </div>
      <p class="note no-print">Elke narratief-afdeling hieronder is outomaties opgestel vanuit die tellings in hierdie sessie aangeteken. Wysig enige afdeling direk, of gebruik "Genereer weer vanaf tellings" om jou wysigings te laat vaar en die outomaties-opgestelde teks terug te trek. Niks is finaal voordat jy druk of stoor nie - hersien en wysig die skryfwerk voordat jy dit aanstuur.</p>
      <div class="card" id="printableReport">
        ${letterheadHtml("LEES, FONETIEK, FONOLOGIESE BEWUSTHEID, SPELLING EN GESKREWE TAAL: ASSESSERINGSVERSLAG")}
        ${learnerInfoTableHtml(s)}

        <p>Hierdie verslag bied die resultate van 'n lees-, foneties-, fonologiese bewustheids-, spel- en geskrewe taalassessering met ${name}, om huidige vlakke van geletterdheidsvaardigheidsontwikkeling vas te stel en aanbevelings vir verdere ondersteuning te rig.</p>
        <p><strong>Assesseringshulpmiddels Gebruik:</strong> Grondslagfase- en Graad 4-9-gegradeerde leesstukke (akkuraatheid, tempo en begrip), Fonologiese en Fonemiese Bewustheid Voortoets, Gegradeerde Woordleeslys, Spelassessering (gegradeerde woordelyste), Diktee, en Sinskryf. Alle take is toegepas met behulp van die Lees- en Klankassesseringshulpmiddel (Debby Smit Educational Therapy).</p>
        <p><strong>Doel van die Assessering:</strong> Om ${name} se huidige leesakkuraatheid, vlotheid en begrip, fonologiese en fonemiese bewustheid, woordlees, spelling en geskrewe taalvaardighede te evalueer, en areas van sterkte en areas wat verdere ondersteuning benodig, te identifiseer.</p>
        <p class="muted" style="font-size:.85rem;">Hierdie verslag weerspieël 'n CAPS-kurrikulum-gebaseerde diagnostiese sifting, nie 'n formele, gestandaardiseerde psigometriese assessering nie. Dit is bedoel om te skat waar hierdie leerder se lees- en klankvaardighede teenoor graadvlak-CAPS-verwagtinge staan, om onderrig- en intervensiebeplanning te ondersteun - nie as 'n kliniese diagnose of 'n normgebaseerde telling nie.</p>

        <h3 class="section-num">1. Leesvlotheid en Begrip</h3>
        ${gradeRows.length ? `<table>
          <tr><th>Leesstuk</th><th>Akkuraatheid</th><th>Woorde korrek / min</th><th>Begrip</th></tr>
          ${gradeRows.map(r=>`<tr><td>${GRADES[r.id].label}: ${escapeHtml(GRADES[r.id].title)}</td><td>${r.accuracy}%</td><td>${r.rate}</td><td>${r.compPct!=null?r.compPct+'%':'N/A'}</td></tr>`).join("")}
        </table>` : ""}
        ${foundationRows.length ? `<table>
          <tr><th>Leesstuk</th><th>Akkuraatheid</th><th>Woorde korrek / min</th><th>Begrip</th></tr>
          ${foundationRows.map(r=>`<tr><td>${escapeHtml(r.label)}</td><td>${r.accuracy}%</td><td>${r.rate}</td><td>${r.compPct!=null?r.compPct+'%':'N/A'}</td></tr>`).join("")}
        </table>` : ""}
        ${decodingRows.length ? `<h4>Dekoderingswoordelyste (Graad 4-9)</h4><table>
          <tr><th>Graad</th><th>Akkuraatheid</th></tr>
          ${decodingRows.map(r=>`<tr><td>${GRADES[r.grade].label}</td><td>${r.accuracy}%</td></tr>`).join("")}
        </table>` : ""}
        <p class="note" style="margin-top:8px;">${READING_LEVEL_NOTE}</p>
        ${editableNarrativeField("readingLevel","Leesvlotheid en Begrip - narratief",narrative.readingLevel,5)}

        <h3 class="section-num">2. Fonologiese en Fonemiese Bewustheid</h3>
        ${phonoData.rows.length ? `<table>
          <tr><th>Vaardigheid</th><th>Omskrywing</th><th>Telling</th><th>Opmerkings</th></tr>
          ${phonoData.rows.map(r=>`<tr><td><strong>${escapeHtml(r.name)}</strong></td><td style="font-size:.9rem;">${escapeHtml(PHONO_DEFINITIONS[r.key]||"")}</td><td>${r.raw}/${r.total}<br/>(${r.pct}%)</td><td>${escapeHtml(subtestComment(r))}</td></tr>`).join("")}
        </table>
        <p class="muted" style="font-size:.85rem;">${phonoFormLabel} resultate getoon.</p>` : `<p class="muted">Nog nie geassesseer nie.</p>`}
        ${editableNarrativeField("phono","Fonologiese en Fonemiese Bewustheid - narratief",narrative.phono,4)}

        <h3 class="section-num">3. Gegradeerde Woordleeslys</h3>
        ${wordLadderBands.length ? `<table><tr><th>Band</th><th>Korrek</th><th>Resultaat</th></tr>
          ${wordLadderBands.map(b=>{const r=wordLadderScores[b]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Band ${b}</td><td>${c}/12</td><td>${wordLadderPass(r)?'Slaag (basis)':wordLadderFail(r)?'Plafon':'Grensgeval'}</td></tr>`;}).join("")}
        </table>
        <p class="muted" style="font-size:.85rem;">Hierdie is 'n oorspronklike woordelys vir hierdie hulpmiddel geskryf; dit is nie deel van enige ander gestandaardiseerde, genormeerde toets nie.</p>` : `<p class="muted">Nog nie geassesseer nie.</p>`}
        ${editableNarrativeField("wordReading","Gegradeerde Woordleeslys - narratief",narrative.wordReading,3)}

        <h3 class="section-num">4. Spelling</h3>
        ${spellingGrades.length ? `<table><tr><th>Graad</th><th>Korrek</th><th>Resultaat</th></tr>
          ${spellingGrades.map(g=>{const r=spellingScores[g]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Graad ${g}</td><td>${c}/10</td><td>${spellingPass(r)?'Slaag (basis)':spellingFail(r)?'Plafon':'Grensgeval'}</td></tr>`;}).join("")}
        </table>` : `<p class="muted">Nog nie geassesseer nie.</p>`}
        ${editableNarrativeField("spelling","Spelling - narratief",narrative.spelling,3)}

        <h3 class="section-num">5. Diktee</h3>
        ${dictationGrades.length ? `<table><tr><th>Graad</th><th>Woorde korrek</th><th>Hoofletters/leestekens</th></tr>
          ${dictationGrades.map(g=>{const r=dictationScores[g]; const d=DICTATION[g]; const cm=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Graad ${g}</td><td>${r.wordsCorrect!=null? pct(r.wordsCorrect,d.words)+'% ('+r.wordsCorrect+'/'+d.words+')':'Nie gemerk nie'}</td><td>${cm}/${DICTATION_CRITERIA.length}</td></tr>`;}).join("")}
        </table>` : `<p class="muted">Nog nie geassesseer nie.</p>`}
        ${editableNarrativeField("dictation","Diktee - narratief",narrative.dictation,3)}

        <h3 class="section-num">6. Sinskryf</h3>
        ${writingGrades.length ? `<table><tr><th>Graad</th><th>Kriteria bereik</th></tr>
          ${writingGrades.map(g=>{const r=writingScores[g]; const cm=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Graad ${g}</td><td>${cm}/${WRITING_CRITERIA.length}</td></tr>`;}).join("")}
        </table>` : `<p class="muted">Nog nie geassesseer nie.</p>`}
        ${editableNarrativeField("writing","Sinskryf - narratief",narrative.writing,3)}

        ${editableNarrativeField("strengths","Sterkpunte",narrative.strengths,4)}
        ${editableNarrativeField("areas","Areas vir Ontwikkeling",narrative.areas,4)}
        ${editableNarrativeField("recommendations","Aanbevelings",narrative.recommendations,4)}
        ${editableNarrativeField("conclusion","Gevolgtrekking",narrative.conclusion,4)}

        <h3>Assessor se Notas</h3>
        <textarea id="reportNotes" rows="4" style="width:100%;" class="no-print" oninput="autoSaveNotes(this.value)">${escapeHtml(s.report && s.report.notes || "")}</textarea>
        <div class="print-only" style="display:none;white-space:pre-wrap;">${escapeHtml(s.report && s.report.notes || "")}</div>

        <p class="signature-line">Geassesseer deur: Debby Smit,<br/>Debby Smit Educational Therapy</p>
      </div>
    </div>
    <style>
      @media print{ #reportNotes{display:none;} .print-only{display:block !important; white-space:pre-wrap;} .report-textarea{display:none;} .report-section .btn{display:none;} }
      .report-letterhead .credentials-list{list-style:none;padding:0;margin:8px 0;font-size:.82rem;display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center;text-align:center;}
      .report-letterhead .credentials-list li{display:inline;}
      .report-letterhead .credentials-list li:not(:last-child)::after{content:" \\2022";margin-left:14px;color:var(--ink-soft);}
      .letterhead-rule{border:none;border-top:2px solid var(--line);margin:10px 0;}
      .confidential-label{text-align:center;font-weight:700;letter-spacing:.08em;margin:0;}
      .report-title{text-align:center;margin:4px 0 14px;font-size:1.1rem;}
      .learner-info-table th{text-align:left;width:220px;background:var(--paper);}
      .report-section{margin-top:10px;}
      .report-textarea{width:100%;}
      .signature-line{margin-top:18px;}
      .section-num{margin-top:18px;}
    </style>
  `;
}
let notesSaveTimeout = null;
function autoSaveNotes(val){
  if(!STATE.session.report) STATE.session.report = {};
  STATE.session.report.notes = val;
  clearTimeout(notesSaveTimeout);
  notesSaveTimeout = setTimeout(() => persistSession(), 600);
}

/* ============================================================
   Reference booklet: a plain paper copy of every letter chart,
   word chart, reading passage, comprehension question and
   decoding list, for the examiner's own use. Never sent to a
   learner. Does not depend on any session, so it can be opened
   and printed before a session even exists.
   ============================================================ */
function referenceBookletHtml(){
  const lettersSection = ["1.1","1.2","1.3"].map(id => `
    <div class="ref-block">
      <h3>Letterklanke, Kaart ${id}</h3>
      <div class="letters-grid" style="grid-template-columns:repeat(10,1fr);font-size:1.3rem;">${FOUNDATION.letters[id].map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div>
    </div>
  `).join("");
  const wordsSection = ["2.1","2.2","2.3"].map(id => `
    <div class="ref-block">
      <h3>Woordlees, Kaart ${id}</h3>
      <div class="words-grid" style="font-size:1.05rem;">${FOUNDATION.words[id].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>
    </div>
  `).join("");
  const fPassageSection = ["3.1","3.2","3.3"].map(id => {
    const p = FOUNDATION.passages[id];
    return `
      <div class="ref-block ref-break">
        <h3>${escapeHtml(p.title)} (${id}), ${p.total} woorde</h3>
        <div class="passage-text" style="font-size:1rem;">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} woorde</span></p>`).join("")}</div>
        <h4>Begripsvrae</h4>
        <ol>${p.questions.map(q=>`<li>${escapeHtml(q.q)} <span class="muted">(Modelantwoord: ${escapeHtml(q.a)})</span></li>`).join("")}</ol>
      </div>
    `;
  }).join("");
  const gPassageSection = ["4","5","6","7","8","9"].map(id => {
    const g = GRADES[id];
    return `
      <div class="ref-block ref-break">
        <h3>${g.label}: ${escapeHtml(g.title)}, ${g.total} woorde</h3>
        <div class="passage-text" style="font-size:1rem;">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} woorde</span></p>`).join("")}</div>
        <h4>Begripsvrae</h4>
        <ol>${g.questions.map(q=>`<li>${escapeHtml(q.q)} <span class="muted">(Modelantwoord: ${escapeHtml(q.a)})</span></li>`).join("")}</ol>
        <h4>Dekoderingswoordelys</h4>
        <div class="words-grid" style="grid-template-columns:repeat(6,1fr);font-size:1rem;">${g.decoding.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>
      </div>
    `;
  }).join("");
  const wordLadderSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Band ${g}</h3><div class="words-grid" style="grid-template-columns:repeat(4,1fr);font-size:1.05rem;">${WORD_READING_LADDER[g].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>
  `).join("");
  const spellingSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Graad ${g}</h3><div class="words-grid" style="grid-template-columns:repeat(5,1fr);font-size:1.05rem;">${SPELLING[g].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>
  `).join("");
  const dictationSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Graad ${g}</h3><p>"${escapeHtml(DICTATION[g].text)}" <span class="tag">${DICTATION[g].words} woorde</span></p></div>
  `).join("");
  const writingSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Graad ${g}</h3><p>${escapeHtml(WRITING[g].prompt)}</p></div>
  `).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Naslaanboekie</h2>
        <button class="btn small" onclick="window.print()">Druk / Stoor as PDF</button>
      </div>
      <p class="note no-print">Dit is 'n eenvoudige papierkopie van elke letterkaart, woordkaart, leesstuk, begripsvraag en dekoderingslys in hierdie hulpmiddel, vir jou eie gebruik terwyl jy toets. Niks op hierdie bladsy word ooit na 'n leerder gestuur nie. Druk dit een keer en hou dit by jou toerusting.</p>
      <div id="printableReference" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Lees- en Klankassessering: Naslaanboekie</h2>
            <p class="muted">Debby Smit Educational Therapy. Assessorkopie, nie vir leerders nie.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        <h2 class="ref-break">Grondslagfase: Letterklanke</h2>
        ${lettersSection}
        <h2 class="ref-break">Grondslagfase: Woordlees</h2>
        ${wordsSection}
        <h2 class="ref-break">Grondslagfase: Leesstukke</h2>
        ${fPassageSection}
        <h2 class="ref-break">Graad 4 tot 9: Leesstukke en dekodering</h2>
        ${gPassageSection}
        <h2 class="ref-break">Gegradeerde woordleeslys (Bande 1-9)</h2>
        <p class="muted">Die leerder mag hierdie woorde sien of direk daarvan lees, anders as die afdelings hieronder.</p>
        ${wordLadderSection}
        <h2 class="ref-break">Spelwoordelyste (Graad 1-9)</h2>
        ${spellingSection}
        <h2 class="ref-break">Dikteesinne (Graad 1-9)</h2>
        ${dictationSection}
        <h2 class="ref-break">Sinskryfopdragte (Graad 1-9)</h2>
        ${writingSection}
      </div>
    </div>
    <style>@media print{ .ref-break{ page-break-before: always; } }</style>
  `;
}

/* ============================================================
   Learner response sheets: blank, paper-based answer sheets for
   spelling, dictation and sentence writing, one per grade. Unlike
   the reference booklet above, these carry NO answers - only what
   a learner is meant to fill in by hand - so they are safe to hand
   to a learner or leave on a desk. Each sheet is its own printed
   page (.ref-break).
   ============================================================ */
function sheetHeaderHtml(){
  return `
    <div class="row" style="gap:28px;flex-wrap:wrap;margin-bottom:14px;font-size:1.05rem;">
      <div>Naam: <span style="display:inline-block;min-width:220px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Graad: <span style="display:inline-block;min-width:70px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Datum: <span style="display:inline-block;min-width:140px;border-bottom:1px solid #333;">&nbsp;</span></div>
    </div>
  `;
}
function blankLinesHtml(n, heightPx){
  return Array.from({length:n}).map(() =>
    `<div style="border-bottom:1px solid #999;height:${heightPx||34}px;margin-bottom:8px;"></div>`
  ).join("");
}
function responseSheetsHtml(){
  const spellingSheets = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block ref-break">
      <h3>Speltoets, Graad ${g}</h3>
      ${sheetHeaderHtml()}
      <p class="muted" style="margin-bottom:14px;">Luister hoe jou assessor elke woord sê, en skryf dit dan op die ooreenstemmende lyn.</p>
      <div class="col" style="gap:12px;max-width:480px;">
        ${Array.from({length:10}).map((_,i) => `
          <div class="row" style="align-items:baseline;gap:10px;">
            <span style="width:26px;">${i+1}.</span>
            <span style="flex:1;border-bottom:1px solid #333;height:26px;"></span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
  const dictationSheets = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block ref-break">
      <h3>Diktee, Graad ${g}</h3>
      ${sheetHeaderHtml()}
      <p class="muted" style="margin-bottom:14px;">Luister mooi na die sin wat jou assessor hardop lees, en skryf dit dan hieronder.</p>
      ${blankLinesHtml(4, 38)}
    </div>
  `).join("");
  const writingSheets = [1,2,3,4,5,6,7,8,9].map(g => {
    const w = WRITING[g];
    const lineCount = Math.max(8, (w.minSentences||4) + 4);
    return `
    <div class="ref-block ref-break">
      <h3>Sinskryf, Graad ${g}</h3>
      ${sheetHeaderHtml()}
      <p style="margin-bottom:14px;"><strong>Opdrag:</strong> ${escapeHtml(w.prompt)}</p>
      ${blankLinesHtml(lineCount, 32)}
    </div>
  `;
  }).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Leerder-antwoordblaaie</h2>
        <button class="btn small" onclick="window.print()">Druk / Stoor as PDF</button>
      </div>
      <p class="note no-print">Leë antwoordblaaie op papier vir spelling, diktee en sinskryf, een per graad. Daar is geen antwoorde op nie, net wat die leerder self skryf, so dit is veilig om te druk en uit te deel. Druk net die bladsy(e) wat jy vir vandag se graad en subtoets nodig het, of die hele stel om byderhand te hou.</p>
      <div id="printableResponseSheets" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Lees- en Klankassessering: Leerder-antwoordblaaie</h2>
            <p class="muted">Debby Smit Educational Therapy.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        <h2 class="ref-break">Speltoetsblaaie (Graad 1-9)</h2>
        ${spellingSheets}
        <h2 class="ref-break">Dikteeblaaie (Graad 1-9)</h2>
        ${dictationSheets}
        <h2 class="ref-break">Sinskryfblaaie (Graad 1-9)</h2>
        ${writingSheets}
      </div>
    </div>
    <style>@media print{ .ref-break{ page-break-before: always; } }</style>
  `;
}

