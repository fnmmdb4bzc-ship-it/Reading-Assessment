/* ============================================================
   FAL_ITEMS - Afrikaans First Additional Language item bank.

   CONTENT NOTE: the four content areas below (Luister en Praat / Listening
   and Speaking, Fonetiese Klanke / Letter and Phonic Sounds, Lees /
   Reading, Skryf / Writing) and the grade-by-grade skill progression they
   follow are grounded in the real DBE Foundation Phase First Additional
   Language CAPS document (education.gov.za/Portals/0/Documents/FAL.pdf).
   That document is the generic DBE template used whichever specific
   language is being taught as the learner's First Additional Language
   (English, Afrikaans, isiZulu, etc), with vocabulary substituted for the
   language in question - so the STRUCTURE and SKILL PROGRESSION here
   (Grade 1 almost entirely oral vocabulary with minimal reading/writing;
   Grade 2 introducing real phonics and short guided reading; Grade 3
   extending to short simple sentences, never full continuous passages)
   follows that real curriculum. The actual Afrikaans words, prompts and
   answer options below are original material written for this tool to
   fill in that structure - they are not a transcription of any published
   CAPS/DBE Afrikaans FAL test or workbook. Please check them against your
   own CAPS/DBE resources before relying on them for a formal placement
   decision.

   This is deliberately basic, picture-first content (per the brief: "it
   must have a lot of pictures") - every single "choice" item's options
   are concrete nouns, colours, sizes or numbers that app.js's ICON_MAP
   can draw a real picture for, never bare abstract text. Grades use plain
   keys "1", "2", "3" only - Afrikaans FAL on this tool is Grade 1-3 only,
   no Grade R.
   ============================================================ */
const FAL_ITEMS = {
  "luisterpraat": {
    "1": [
      { "type": "choice", "prompt": "Wys vir my: Pa", "visual": {"type": "img", "src": "family.png", "alt": "'n Gesin - oupa, 'n meisie, 'n dogtertjie, Pa, Ma wat 'n baba vashou, 'n seun, 'n kleinkind en ouma"}, "options": ["pa", "ma", "ouma", "oupa"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Ma", "visual": {"type": "img", "src": "family.png", "alt": "'n Gesin - oupa, 'n meisie, 'n dogtertjie, Pa, Ma wat 'n baba vashou, 'n seun, 'n kleinkind en ouma"}, "options": ["ma", "pa", "sussie", "boetie"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my jou neus.", "options": ["neus", "oog", "mond", "oor"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Hond", "options": ["hond", "kat", "vis", "voël"], "answer": 0 },
      { "type": "choice", "prompt": "Watter een is rooi?", "options": ["rooi", "blou", "groen", "geel"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Appel", "options": ["appel", "piesang", "brood", "melk"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Hemp", "options": ["hemp", "broek", "skoene", "hoed"], "answer": 0 },
      { "type": "choice", "prompt": "Doen wat ek sê: Klap jou hande!", "options": ["klap", "spring", "sit", "staan"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Die son", "options": ["son", "wolk", "maan", "reën"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Een", "options": ["een", "twee", "drie", "vier"], "answer": 0 }
    ],
    "2": [
      { "type": "choice", "prompt": "Wys vir my: 'n Bal", "options": ["bal", "fiets", "boek", "sak"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Kar", "options": ["kar", "bus", "trein", "fiets"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Geld", "options": ["geld", "boek", "bal", "hoed"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Koei", "options": ["koei", "skaap", "perd", "hond"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Dokter", "options": ["dokter", "onderwyser", "polisieman", "brandweerman"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Die see", "options": ["see", "boom", "huis", "wolk"], "answer": 0 },
      { "type": "choice", "prompt": "Doen wat ek sê: Spring!", "options": ["spring", "klap", "sit", "loop"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Vyf", "options": ["vyf", "drie", "twee", "vier"], "answer": 0 }
    ],
    "3": [
      { "type": "choice", "prompt": "Wys vir my: 'n Juffrou", "options": ["juffrou", "dokter", "polisieman", "boer"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Sebra", "options": ["sebra", "leeu", "olifant", "aap"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Leeu", "options": ["leeu", "aap", "olifant", "sebra"], "answer": 0 },
      { "type": "choice", "prompt": "Doen wat ek sê: Staan op!", "options": ["staan", "sit", "klap", "spring"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Ses", "options": ["ses", "vyf", "vier", "drie"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Winkel", "options": ["winkel", "skool", "huis", "kerk"], "answer": 0 }
    ]
  },
  "fonetiese": {
    "2": [
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /b/?", "options": ["bal", "kat", "vis", "son"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /k/?", "options": ["kat", "bal", "hond", "appel"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /h/?", "options": ["hond", "vis", "bal", "appel"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie het die klank /a/ in die middel?", "options": ["kat", "hond", "vis", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /s/?", "options": ["son", "bal", "kat", "hond"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /m/?", "options": ["melk", "bal", "vis", "son"], "answer": 0 }
    ],
    "3": [
      { "type": "choice", "prompt": "Watter woord begin met /sk/?", "options": ["skool", "kat", "bal", "vis"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord begin met /st/?", "options": ["stoel", "hond", "appel", "son"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord begin met /bl/?", "options": ["blou", "kat", "hond", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord begin met /gr/?", "options": ["groen", "kat", "vis", "son"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord het 'n lang \"oo\" klank?", "options": ["boom", "bal", "kat", "vis"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord het 'n lang \"aa\" klank?", "options": ["maan", "kat", "hond", "bal"], "answer": 0 }
    ]
  },
  "lees": {
    "1": [
      { "type": "choice", "prompt": "Wys:", "bigWord": "Kat", "options": ["kat", "hond", "vis", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Son", "options": ["son", "maan", "wolk", "boom"], "answer": 0 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Boom", "options": ["boom", "huis", "bal", "hoed"], "answer": 0 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Stop", "options": ["stopteken", "skool", "huis", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter een hoort nie by die ander nie?", "options": ["stoel", "appel", "peer", "piesang"], "answer": 0 }
    ],
    "2": [
      { "type": "choice", "prompt": "Die kat sit op die bed. Waar sit die kat?", "options": ["bed", "stoel", "boom", "kar"], "answer": 0 },
      { "type": "choice", "prompt": "Die hond loop in die tuin. Waar loop die hond?", "options": ["tuin", "huis", "skool", "winkel"], "answer": 0 },
      { "type": "choice", "prompt": "Ma koop brood by die winkel. Wat koop Ma?", "options": ["brood", "melk", "appel", "vleis"], "answer": 0 },
      { "type": "choice", "prompt": "Die kinders speel met die bal. Waarmee speel die kinders?", "options": ["bal", "boek", "fiets", "hoed"], "answer": 0 },
      { "type": "choice", "prompt": "Pa was die kar. Wat was Pa?", "options": ["kar", "bal", "huis", "boom"], "answer": 0 },
      { "type": "choice", "prompt": "Die voël sit op die boom. Waar sit die voël?", "options": ["boom", "huis", "bal", "kar"], "answer": 0 }
    ],
    "3": [
      { "type": "choice", "prompt": "Die meisie sien 'n hond. Die hond is bruin. Watter kleur is die hond?", "options": ["bruin", "rooi", "swart", "wit"], "answer": 0 },
      { "type": "choice", "prompt": "Die seun het 'n bal. Hy speel saam met sy boetie. Met wie speel die seun?", "options": ["boetie", "sussie", "ma", "pa"], "answer": 0 },
      { "type": "choice", "prompt": "Dit reën buite. Almal bly binne die huis. Waar bly almal?", "options": ["huis", "skool", "winkel", "tuin"], "answer": 0 },
      { "type": "choice", "prompt": "Die kat klim in die boom. Die hond blaf onder die boom. Waar is die hond?", "options": ["Onder die boom", "In die huis", "Op die bal", "By die kar"], "answer": 0 },
      { "type": "choice", "prompt": "Die juffrou gee 'n boek vir die seun. Wat gee die juffrou?", "options": ["'n Boek", "'n Bal", "'n Hoed", "'n Appel"], "answer": 0 },
      { "type": "choice", "prompt": "Oupa vang vis in die rivier. Wat vang Oupa?", "options": ["vis", "voël", "hond", "kat"], "answer": 0 },
      { "type": "choice", "prompt": "Watter een hoort nie by die ander nie?", "options": ["vis", "olifant", "tier", "sebra"], "answer": 0 }
    ]
  },
  "skryf": {
    "1": [
      { "type": "choice", "prompt": "Watter prentjie pas by die woord?", "bigWord": "Hond", "hideOptionCaptions": true, "options": ["hond", "kat", "vis", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie pas by die woord?", "bigWord": "Appel", "hideOptionCaptions": true, "options": ["appel", "piesang", "brood", "melk"], "answer": 0 }
    ],
    "2": [
      { "type": "choice", "prompt": "Voltooi: Ek sien 'n ___.", "visual": {"type": "pic", "icon": "bal"}, "options": ["bal", "boek", "hoed", "appel"], "answer": 0 },
      { "type": "choice", "prompt": "Voltooi: Dit is 'n ___.", "visual": {"type": "pic", "icon": "huis"}, "options": ["huis", "boom", "kar", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Voltooi: Ma het 'n ___.", "visual": {"type": "pic", "icon": "hoed"}, "options": ["hoed", "boek", "bal", "appel"], "answer": 0 },
      { "type": "choice", "prompt": "Voltooi: Die hond is ___.", "visual": {"type": "pic", "icon": "hond", "size": 130}, "options": ["groot", "klein", "rooi", "blou"], "answer": 0 }
    ],
    "3": [
      { "type": "choice", "prompt": "Voltooi: Die kat is ___.", "visual": {"type": "pic", "icon": "kat"}, "options": ["swart", "rooi", "blou", "geel"], "answer": 0 },
      { "type": "choice", "prompt": "Voltooi: Die bal is ___.", "visual": {"type": "pic", "icon": "bal"}, "options": ["rooi", "blou", "groen", "geel"], "answer": 0 },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "hond"}, "answer": "hond" },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "kat"}, "answer": "kat" },
      { "type": "choice", "prompt": "Voltooi: Die boom is ___.", "visual": {"type": "pic", "icon": "boom", "size": 36}, "options": ["klein", "groot", "rooi", "blou"], "answer": 0 },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "son"}, "answer": "son" }
    ]
  }
};
