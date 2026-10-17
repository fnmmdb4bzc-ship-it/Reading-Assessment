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
      { "type": "choice", "prompt": "Wys vir my: Pa", "visual": {"type": "img", "src": "family.png", "alt": "'n Gesin - oupa, 'n meisie, 'n dogtertjie, Pa, Ma wat 'n baba vashou, 'n seun, 'n kleinkind en ouma"}, "options": ["ouma", "ma", "oupa", "pa"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: Ma", "visual": {"type": "img", "src": "family.png", "alt": "'n Gesin - oupa, 'n meisie, 'n dogtertjie, Pa, Ma wat 'n baba vashou, 'n seun, 'n kleinkind en ouma"}, "options": ["boetie", "sussie", "ma", "pa"], "answer": 2 },
      { "type": "choice", "prompt": "Wys vir my jou neus.", "options": ["oog", "oor", "mond", "neus"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Hond", "options": ["kat", "vis", "hond", "voël"], "answer": 2 },
      { "type": "choice", "prompt": "Watter een is rooi?", "options": ["blou", "groen", "geel", "rooi"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Appel", "options": ["piesang", "melk", "brood", "appel"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Hemp", "options": ["skoene", "broek", "hemp", "hoed"], "answer": 2 },
      { "type": "choice", "prompt": "Doen wat ek sê: Klap jou hande!", "options": ["spring", "staan", "klap", "sit"], "answer": 2 },
      { "type": "choice", "prompt": "Wys vir my: Die son", "options": ["son", "maan", "wolk", "reën"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Een", "options": ["drie", "vier", "een", "twee"], "answer": 2 }
    ],
    "2": [
      { "type": "choice", "prompt": "Wys vir my: 'n Bal", "options": ["boek", "fiets", "sak", "bal"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Kar", "options": ["fiets", "trein", "bus", "kar"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: Geld", "options": ["hoed", "boek", "geld", "bal"], "answer": 2 },
      { "type": "choice", "prompt": "Wys vir my: 'n Koei", "options": ["perd", "hond", "skaap", "koei"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Dokter", "options": ["dokter", "onderwyser", "brandweerman", "polisieman"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Die see", "options": ["wolk", "see", "huis", "boom"], "answer": 1 },
      { "type": "choice", "prompt": "Doen wat ek sê: Spring!", "options": ["klap", "loop", "sit", "spring"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: Vyf", "options": ["drie", "vier", "vyf", "twee"], "answer": 2 }
    ],
    "3": [
      { "type": "choice", "prompt": "Wys vir my: 'n Juffrou", "options": ["boer", "polisieman", "dokter", "juffrou"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Sebra", "options": ["sebra", "leeu", "olifant", "aap"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: 'n Leeu", "options": ["leeu", "olifant", "sebra", "aap"], "answer": 0 },
      { "type": "choice", "prompt": "Doen wat ek sê: Staan op!", "options": ["staan", "spring", "klap", "sit"], "answer": 0 },
      { "type": "choice", "prompt": "Wys vir my: Ses", "options": ["vyf", "drie", "vier", "ses"], "answer": 3 },
      { "type": "choice", "prompt": "Wys vir my: 'n Winkel", "options": ["huis", "kerk", "winkel", "skool"], "answer": 2 }
    ]
  },
  "fonetiese": {
    "1": [
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /k/?", "options": ["hond", "kat", "vis", "bal"], "answer": 1 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /h/?", "options": ["vis", "bal", "hond", "son"], "answer": 2 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /v/?", "options": ["vis", "kat", "hond", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /b/?", "options": ["kat", "vis", "hond", "bal"], "answer": 3 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /s/?", "options": ["son", "maan", "wolk", "kat"], "answer": 0 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /m/?", "options": ["wolk", "kat", "son", "maan"], "answer": 3 }
    ],
    "2": [
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /b/?", "options": ["vis", "bal", "kat", "son"], "answer": 1 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /k/?", "options": ["bal", "appel", "kat", "hond"], "answer": 2 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /h/?", "options": ["appel", "bal", "vis", "hond"], "answer": 3 },
      { "type": "choice", "prompt": "Watter prentjie het die klank /a/ in die middel?", "options": ["hond", "melk", "kat", "vis"], "answer": 2 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /s/?", "options": ["hond", "bal", "son", "kat"], "answer": 2 },
      { "type": "choice", "prompt": "Watter prentjie begin met die klank /m/?", "options": ["melk", "bal", "vis", "son"], "answer": 0 }
    ],
    "3": [
      { "type": "choice", "prompt": "Watter woord begin met /sk/?", "options": ["bal", "skool", "vis", "kat"], "answer": 1 },
      { "type": "choice", "prompt": "Watter woord begin met /st/?", "options": ["stoel", "son", "appel", "hond"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord begin met /bl/?", "options": ["blou", "kat", "hond", "bal"], "answer": 0 },
      { "type": "choice", "prompt": "Watter woord begin met /gr/?", "options": ["kat", "son", "groen", "vis"], "answer": 2 },
      { "type": "choice", "prompt": "Watter woord het 'n lang \"oo\" klank?", "options": ["bal", "kat", "boom", "vis"], "answer": 2 },
      { "type": "choice", "prompt": "Watter woord het 'n lang \"aa\" klank?", "options": ["kat", "hond", "bal", "maan"], "answer": 3 }
    ]
  },
  "lees": {
    "1": [
      { "type": "choice", "prompt": "Wys:", "bigWord": "Kat", "options": ["hond", "kat", "vis", "bal"], "answer": 1 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Son", "options": ["son", "wolk", "maan", "boom"], "answer": 0 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Boom", "options": ["huis", "boom", "hoed", "bal"], "answer": 1 },
      { "type": "choice", "prompt": "Wys:", "bigWord": "Stop", "options": ["bal", "skool", "huis", "stopteken"], "answer": 3 },
      { "type": "choice", "prompt": "Watter een hoort nie by die ander nie?", "options": ["piesang", "appel", "stoel", "peer"], "answer": 2 }
    ],
    "2": [
      { "type": "choice", "prompt": "Die kat sit op die bed. Waar sit die kat?", "options": ["boom", "stoel", "bed", "kar"], "answer": 2 },
      { "type": "choice", "prompt": "Die hond loop in die tuin. Waar loop die hond?", "options": ["winkel", "huis", "skool", "tuin"], "answer": 3 },
      { "type": "choice", "prompt": "Ma koop brood by die winkel. Wat koop Ma?", "options": ["vleis", "brood", "appel", "melk"], "answer": 1 },
      { "type": "choice", "prompt": "Die kinders speel met die bal. Waarmee speel die kinders?", "options": ["boek", "bal", "hoed", "fiets"], "answer": 1 },
      { "type": "choice", "prompt": "Pa was die kar. Wat was Pa?", "options": ["huis", "kar", "boom", "bal"], "answer": 1 },
      { "type": "choice", "prompt": "Die voël sit op die boom. Waar sit die voël?", "options": ["kar", "huis", "bal", "boom"], "answer": 3 }
    ],
    "3": [
      { "type": "choice", "prompt": "Die meisie sien 'n hond. Die hond is bruin. Watter kleur is die hond?", "options": ["rooi", "swart", "bruin", "wit"], "answer": 2 },
      { "type": "choice", "prompt": "Die seun het 'n bal. Hy speel saam met sy boetie. Met wie speel die seun?", "options": ["pa", "boetie", "sussie", "ma"], "answer": 1 },
      { "type": "choice", "prompt": "Dit reën buite. Almal bly binne die huis. Waar bly almal?", "options": ["skool", "winkel", "tuin", "huis"], "answer": 3 },
      { "type": "choice", "prompt": "Die kat klim in die boom. Die hond blaf onder die boom. Waar is die hond?", "options": ["By die kar", "In die huis", "Op die bal", "Onder die boom"], "answer": 3 },
      { "type": "choice", "prompt": "Die juffrou gee 'n boek vir die seun. Wat gee die juffrou?", "options": ["'n Bal", "'n Appel", "'n Hoed", "'n Boek"], "answer": 3 },
      { "type": "choice", "prompt": "Oupa vang vis in die rivier. Wat vang Oupa?", "options": ["vis", "kat", "hond", "voël"], "answer": 0 },
      { "type": "choice", "prompt": "Watter een hoort nie by die ander nie?", "options": ["vis", "tier", "sebra", "olifant"], "answer": 0 }
    ]
  },
  "skryf": {
    "1": [
      { "type": "choice", "prompt": "Watter prentjie pas by die woord?", "bigWord": "Hond", "hideOptionCaptions": true, "options": ["bal", "hond", "vis", "kat"], "answer": 1 },
      { "type": "choice", "prompt": "Watter prentjie pas by die woord?", "bigWord": "Appel", "hideOptionCaptions": true, "options": ["appel", "melk", "piesang", "brood"], "answer": 0 }
    ],
    "2": [
      { "type": "choice", "prompt": "Voltooi: Ek sien 'n ___.", "visual": {"type": "pic", "icon": "bal"}, "options": ["bal", "boek", "hoed", "appel"], "answer": 0 },
      { "type": "choice", "prompt": "Voltooi: Dit is 'n ___.", "visual": {"type": "pic", "icon": "huis"}, "options": ["boom", "kar", "bal", "huis"], "answer": 3 },
      { "type": "choice", "prompt": "Voltooi: Ma het 'n ___.", "visual": {"type": "pic", "icon": "hoed"}, "options": ["bal", "appel", "boek", "hoed"], "answer": 3 },
      { "type": "choice", "prompt": "Voltooi: Die hond is ___.", "visual": {"type": "pic", "icon": "hond", "size": 130}, "options": ["blou", "groot", "rooi", "klein"], "answer": 1 }
    ],
    "3": [
      { "type": "choice", "prompt": "Voltooi: Die kat is ___.", "visual": {"type": "pic", "icon": "kat"}, "options": ["rooi", "blou", "geel", "swart"], "answer": 3 },
      { "type": "choice", "prompt": "Voltooi: Die bal is ___.", "visual": {"type": "pic", "icon": "bal"}, "options": ["geel", "groen", "rooi", "blou"], "answer": 2 },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "hond"}, "answer": "hond" },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "kat"}, "answer": "kat" },
      { "type": "choice", "prompt": "Voltooi: Die boom is ___.", "visual": {"type": "pic", "icon": "boom", "size": 36}, "options": ["groot", "blou", "klein", "rooi"], "answer": 2 },
      { "type": "short", "prompt": "Skryf die woord vir die prentjie.", "visual": {"type": "pic", "icon": "son"}, "answer": "son" }
    ]
  }
};
