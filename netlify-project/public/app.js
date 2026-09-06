/* ============================================================
   Reading and Phonics Assessment (Debby Smit Educational Therapy)
   Single-file client app. No external libraries.
   ============================================================ */

/* ---------------- DATA: Foundation Phase (Grades 1-3) ----------------
   Everything in this section (letters, words and the three oral
   reading passages) is this tool's own material, written at the
   examiner's request so that none of it is a copy of her original
   EGRA-style booklet. Each part tests the same thing as her original
   at the same Foundation Phase level and difficulty: letter-sound
   knowledge, sight-word recognition, and short narrative passages
   with five comprehension questions each. See the notes above the
   letters/words and passages objects below for what changed. */

const FOUNDATION = {
  /* Letter Sound and Word Reading charts below are this tool's own
     material: a fresh multiset of letters and a fresh Foundation Phase
     sight-word pool, each shuffled into three chart orders. They test
     the same thing as the examiner's own EGRA-style instrument (letter-
     sound knowledge and rapid sight-word recognition) but are not a
     copy of it: the letter order and roughly two-thirds of the word
     list differ from her original document. All words start with a
     lower-case letter; the letter charts intentionally mix upper and
     lower case, since that is what a letter-sound chart is testing. */
  letters: {
    "1.1": ["s","h","x","q","w","v","g","k","y","a","R","p","C","I","n","a","e","d","h","b","N","r","c","e","j","O","D","f","z","t","u","T","u","l","m","s","M","o","l","i"],
    "1.2": ["d","G","N","m","h","u","E","a","e","l","z","q","y","c","D","R","j","t","U","A","s","o","n","x","v","r","s","t","k","c","M","o","f","w","h","l","i","b","p","i"],
    "1.3": ["t","m","s","h","u","G","w","a","s","d","i","f","e","A","m","x","b","e","I","y","n","Z","C","n","o","J","c","p","q","v","l","u","l","r","h","T","r","o","K","d"]
  },
  words: {
    "2.1": ["need","dry","ring","sing","book","wet","wind","red","girl","box","play","bag","that","home","and","kind","a","sun","they","to","mat","up","help","pig","at","is","star","feed","milk","sat","the","them","frog","green","best","are","wing","rest","this","so","rain","it","food","we","all","walk","was","for","find","her","hen","park","you","not","hop","jump","of","my","ran","run","camp","he","on","seed","ball","in","hat","boy","lamp","fox","fish","now","then","king","she","bed","blue","mind","his","nest"],
    "2.2": ["fish","are","a","star","walk","camp","sat","they","we","milk","he","is","ball","so","them","on","book","frog","my","need","in","help","feed","rain","seed","box","up","play","green","mind","ran","wind","of","for","find","the","fox","king","red","she","park","at","nest","this","home","bed","now","that","you","sun","and","boy","lamp","dry","blue","food","all","then","to","ring","not","sing","pig","his","wing","jump","rest","girl","kind","was","mat","hat","hen","it","hop","best","her","wet","bag","run"],
    "2.3": ["my","kind","mat","her","pig","it","wing","boy","fish","need","wind","green","food","hat","sat","of","we","red","then","hen","seed","walk","is","box","ran","star","he","play","all","now","help","ring","up","fox","milk","dry","a","girl","park","that","nest","king","she","find","frog","run","on","in","so","for","are","and","blue","this","them","book","rain","mind","the","bed","they","home","to","camp","you","feed","ball","best","bag","wet","not","hop","sing","rest","sun","lamp","at","his","jump","was"]
  },
  /* These three oral reading passages are this tool's own material,
     written fresh at the examiner's request so they are not a copy of
     her original EGRA-style booklet: different characters and plot in
     each, at the same Foundation Phase reading level and the same
     four-paragraph, five-question structure as her original. */
  passages: {
    "3.1": {
      title: "Thabo's Red Ball",
      paragraphs: [
        "Thabo had a red ball. He played with it every day after school. One afternoon he kicked the ball too hard and it rolled into the long grass behind his house.",
        "Thabo looked for his ball but he could not find it. He pushed the grass apart with his hands. He called his dog, Rex, to help him look. Rex ran into the grass and began to sniff around.",
        "After a little while, Rex found the ball under a bush. He picked it up in his mouth and carried it back to Thabo.",
        "Thabo was very happy. He gave Rex a big hug and a bone to say thank you. From that day on, Thabo always played with Rex whenever he played with his ball."
      ],
      markers: [31,69,93,125],
      total: 125,
      questions: [
        {q:"What colour was Thabo's ball?", a:"Red"},
        {q:"Where did the ball roll?", a:"Into the long grass, behind his house"},
        {q:"Who helped Thabo look for the ball?", a:"Rex, his dog"},
        {q:"Where did Rex find the ball?", a:"Under a bush"},
        {q:"What did Thabo give Rex to say thank you?", a:"A bone / a hug"}
      ]
    },
    "3.2": {
      title: "The Missing Lunch Box",
      paragraphs: [
        "It was lunch time at school. All the children lined up to fetch their lunch boxes from the shelf. Karabo looked for her lunch box, but it was not there.",
        "Karabo told her teacher, Mr Dube, that her lunch box was missing. Mr Dube asked the class if anyone had seen it. Nobody put up their hand.",
        "Then Lindiwe remembered something. She had picked up the wrong lunch box by mistake that morning. She looked inside her bag and found Karabo's lunch box.",
        "Lindiwe said sorry and gave Karabo her lunch box back. Karabo was happy to have her lunch again. The two girls sat together and shared their food."
      ],
      markers: [30,57,83,110],
      total: 110,
      questions: [
        {q:"What went missing at lunch time?", a:"Karabo's lunch box"},
        {q:"Who did Karabo tell?", a:"Her teacher, Mr Dube"},
        {q:"Who remembered where the lunch box was?", a:"Lindiwe"},
        {q:"Where was the lunch box?", a:"In Lindiwe's bag, she had taken it by mistake"},
        {q:"What did the two girls do at the end?", a:"Sat together and shared their food"}
      ]
    },
    "3.3": {
      title: "Zolani and the Big Dog",
      paragraphs: [
        "Zolani was walking home from the shop when a big brown dog began to follow her. She had never seen the dog before, and she felt a little afraid.",
        "The dog did not bark or growl. It just walked beside her, wagging its tail. When Zolani stopped, the dog sat down next to her and looked up at her.",
        "Zolani noticed the dog had no collar and looked hungry. She remembered she had a sandwich in her bag. She broke it in half and gave a piece to the dog.",
        "The dog ate the sandwich and licked her hand. Zolani smiled and walked the rest of the way home, with the big dog walking beside her the whole time."
      ],
      markers: [29,59,90,119],
      total: 119,
      questions: [
        {q:"What colour was the dog?", a:"Brown"},
        {q:"How did Zolani feel when the dog started following her?", a:"A little afraid"},
        {q:"What did the dog do when Zolani stopped?", a:"Sat down next to her and looked up at her"},
        {q:"What did Zolani give the dog?", a:"Half her sandwich"},
        {q:"What did the dog do after eating the sandwich?", a:"Licked her hand"}
      ]
    }
  }
};

/* ---------------- DATA: Grades 4-9 (Intermediate and Senior Phase) ----------------
   Original passages written for this tool. EGRA-style batteries are
   designed for the Foundation Phase; nothing equivalent was supplied
   for grades 4-9, so this section extends the same method (timed
   passage + comprehension + a decoding word list) with new material.
   These are NOT drawn from an official CAPS/DBE instrument. */

const GRADES = {
  4: {
    label: "Grade 4",
    title: "The Class Fish Tank",
    paragraphs: [
      "Mr Daniels kept a fish tank at the back of the classroom. Every learner had a turn to feed the fish on Fridays.",
      "One Monday morning, the class found the tank empty. The water was still there, but the little orange fish was gone. Everyone started to search the room.",
      "Priya looked behind the bookshelf. Thabo checked under the reading corner cushions. Then Zola noticed something moving near the window. The fish had jumped out of the tank and landed in a tray of wet paint!",
      "Mr Daniels laughed and gently lifted the fish back into the tank. From that day on, the class always kept a lid on top of the tank."
    ],
    markers: [23,50,86,113],
    total: 113,
    questions: [
      {q:"What pet did the class keep in the classroom?", a:"A fish, in a fish tank"},
      {q:"When did learners take turns feeding the fish?", a:"On Fridays"},
      {q:"Where did the class eventually find the fish?", a:"In a tray of wet paint, near the window"},
      {q:"Why do you think the class started keeping a lid on the tank?", a:"[Inference] So the fish could not jump out again"},
      {q:"What does the word 'empty' mean in this story?", a:"[Vocabulary] Having nothing inside"}
    ],
    decoding: ["classroom","learner","fridays","bookshelf","cushions","noticed","jumped","landed","gently","always","laughed","window"]
  },
  5: {
    label: "Grade 5",
    title: "A Trip to the Waterfall",
    paragraphs: [
      "During the autumn holidays, Karabo's family drove into the mountains to visit a waterfall near their campsite. The road was narrow and twisted between steep, rocky slopes.",
      "When they finally arrived, Karabo could hear the roar of the water long before he could see it. He raced ahead of his parents along the path, jumping over tree roots and ducking under low branches.",
      "The waterfall crashed down from a high cliff into a deep, green pool. Fine spray drifted through the air like mist, cooling Karabo's face. He noticed a rainbow forming where the sunlight touched the spray.",
      "His father warned him not to climb too close to the edge of the pool because the rocks were slippery. Karabo listened, and instead he sat on a warm, flat rock and ate the sandwiches his mother had packed."
    ],
    markers: [27,63,98,137],
    total: 137,
    questions: [
      {q:"Where did Karabo's family go during the autumn holidays?", a:"To a waterfall near their campsite in the mountains"},
      {q:"What did Karabo notice in the spray near the waterfall?", a:"A rainbow"},
      {q:"Why did Karabo's father warn him about the edge of the pool?", a:"Because the rocks were slippery"},
      {q:"Why do you think Karabo ran ahead of his parents?", a:"[Inference] He was excited to see/hear the waterfall"},
      {q:"What does the word 'drifted' mean in this passage?", a:"[Vocabulary] Moved slowly and gently"}
    ],
    decoding: ["waterfall","mountains","campsite","slippery","sandwiches","rainbow","forming","sunlight","listened","instead","narrow","twisted"]
  },
  6: {
    label: "Grade 6",
    title: "The Old Lighthouse",
    paragraphs: [
      "On the edge of the rocky point stood an old lighthouse, its white paint peeling and its lamp long since switched off. Local fishermen said the lighthouse had guided ships safely past the reef for almost a hundred years before it was replaced by a modern beacon.",
      "Nomvula's grandfather had once been the keeper of the lighthouse. He told her stories of climbing the spiral staircase every evening to light the lamp, no matter how strong the wind howled outside. On stormy nights, the light was the only thing separating a ship from the sharp rocks below.",
      "One Saturday, Nomvula persuaded her grandfather to take her up the lighthouse for the first time. The staircase was narrow and dusty, winding upward in tight circles. When they finally reached the top, Nomvula looked out over the ocean and understood, at last, why her grandfather loved this lonely job so much."
    ],
    markers: [47,97,149],
    total: 149,
    questions: [
      {q:"Who used to be the keeper of the lighthouse?", a:"Nomvula's grandfather"},
      {q:"What was the lighthouse replaced by?", a:"A modern beacon"},
      {q:"Why did the keeper climb the staircase every evening?", a:"To light the lamp"},
      {q:"Why do you think the writer describes the lighthouse job as 'lonely'?", a:"[Inference] The keeper worked alone, at night, far from other people"},
      {q:"What does the word 'persuaded' mean in this passage?", a:"[Vocabulary] Convinced someone to do something"}
    ],
    decoding: ["lighthouse","fishermen","staircase","separating","understood","persuaded","grandfather","spiral","beacon","howled","stormy","dusty"]
  },
  7: {
    label: "Grade 7",
    title: "Recycling at Our School",
    paragraphs: [
      "Last term, the Grade 7 learners at Ridgeview Primary started a recycling project to reduce the amount of waste going to landfill sites. Before the project began, the school produced several black bags of rubbish every single day, most of which could actually have been recycled or reused.",
      "The learners placed separate bins around the school for paper, plastic, and food waste. They also designed colourful posters explaining what could and could not be recycled, because many learners were unsure which items belonged in which bin. A local company agreed to collect the recycling bins twice a month, free of charge.",
      "Within three months, the amount of rubbish sent to landfill had dropped by almost half. The school also used the money it saved on waste collection to buy new sports equipment for the learners. Other schools in the area have since asked Ridgeview Primary for advice on starting their own recycling programmes."
    ],
    markers: [48,101,153],
    total: 153,
    questions: [
      {q:"Which grade started the recycling project?", a:"Grade 7"},
      {q:"What three types of bins did the learners set up?", a:"Paper, plastic, and food waste"},
      {q:"What did the school do with the money it saved?", a:"Bought new sports equipment"},
      {q:"Why do you think the learners made colourful posters?", a:"[Inference] To help others understand what could be recycled"},
      {q:"What does the word 'landfill' mean in this passage?", a:"[Vocabulary] A place where rubbish is buried or dumped"}
    ],
    decoding: ["recycling","landfill","separate","colourful","explaining","belonged","equipment","programmes","collection","unsure","reused","company"]
  },
  8: {
    label: "Grade 8",
    title: "The Power of the Wind",
    paragraphs: [
      "For centuries, people have found ways to harness the power of the wind. Sailors used it to cross oceans, farmers used windmills to pump water and grind grain, and today, engineers use enormous turbines to generate electricity. Unlike coal or oil, wind is a renewable resource, meaning it will never run out.",
      "A modern wind turbine can stand as tall as a thirty-storey building, with blades longer than a cricket pitch. As the wind pushes against the blades, they spin a shaft connected to a generator, which converts the movement into electrical energy. A single large turbine can produce enough electricity to power hundreds of homes.",
      "South Africa has built several large wind farms, particularly along the Eastern and Western Cape coastlines, where strong, steady winds blow throughout the year. Supporters of wind energy argue that it produces no harmful emissions once built. Critics point out that turbines can affect bird migration routes and are expensive to install, so most experts agree that wind power works best as one part of a wider mix of energy sources."
    ],
    markers: [52,106,177],
    total: 177,
    questions: [
      {q:"Name two historical uses of wind power mentioned in the passage.", a:"Any two: sailing ships / pumping water / grinding grain"},
      {q:"Where has South Africa built several large wind farms?", a:"Along the Eastern and Western Cape coastlines"},
      {q:"What is one criticism of wind turbines mentioned in the passage?", a:"They can affect bird migration / they are expensive to install"},
      {q:"Why is wind described as a 'renewable' resource?", a:"[Inference] Because it will never run out"},
      {q:"What does the word 'emissions' mean in this passage?", a:"[Vocabulary] Substances (such as gases) released into the air"}
    ],
    decoding: ["turbine","renewable","generator","emissions","migration","particularly","coastlines","harness","converts","electricity","engineers","supporters"]
  },
  9: {
    label: "Grade 9",
    title: "Facing the Storm",
    paragraphs: [
      "The sea had turned the colour of a bruise long before the first raindrop fell. Zanele stood on the deck of her uncle's fishing boat, gripping the railing so tightly her knuckles ached, watching the horizon fold itself into a wall of black cloud. Her uncle had promised her a calm afternoon of fishing, not this.",
      "Within minutes, the wind arrived, tearing at the sail and flinging spray across the deck like handfuls of gravel. Her uncle shouted instructions she could barely hear over the roar of the engine and the slap of waves against the hull. Zanele's stomach lurched with every drop as the boat climbed one swell and crashed into the next.",
      "She remembered what her uncle had taught her years before: in a storm, fight the panic first, and the water second. Zanele forced her breathing to slow, found the rope he had shown her, and lashed herself to the mast exactly as he had once demonstrated on a quiet, sunny day that had felt nothing like this one.",
      "By the time the coastguard boat found them, drenched and shaking but afloat, Zanele understood that her uncle's calm words meant more than any lesson he had ever taught her in the classroom. Some lessons, she realised, could only be learned with your knuckles white around a railing and the sea trying its best to take you under."
    ],
    markers: [56,114,172,230],
    total: 230,
    questions: [
      {q:"Whose fishing boat was Zanele on?", a:"Her uncle's"},
      {q:"What had her uncle taught her to do first in a storm?", a:"Fight the panic first"},
      {q:"What did Zanele do to keep herself safe on the deck?", a:"She lashed herself to the mast with a rope"},
      {q:"What does the simile 'the sea had turned the colour of a bruise' suggest about the coming storm?", a:"[Inference] Something dark, painful or dangerous was approaching"},
      {q:"What does the word 'lurched' mean in this passage?", a:"[Vocabulary] Moved suddenly and unsteadily"}
    ],
    decoding: ["coastguard","demonstrated","instructions","realised","drenched","lashed","horizon","gravel","panic","gripping","tightly","swell"]
  }
};

/* ---------------- DATA: Phonological and Phonemic Awareness (examiner only) ----------------
   Original items written for this tool, organised the way the examiner
   asked for (phonological level: rhyming, syllable segmentation,
   syllable blending, onset & rime; phonemic level: isolation, blending,
   segmentation, deletion, manipulation), with a pre-test form and a
   post-test form. These are NOT taken from any published test. */

const PHONO = [
  {
    key:"rhyme", level:"Phonological", name:"Rhyming",
    instruction:"I'll say a word, and you say a word that rhymes with it.",
    sample:"Listen: cat. A word that rhymes with cat is hat. What's another word that rhymes with cat?",
    scoring:"Accept any real word that rhymes, including nonsense-free invented words the learner clearly intends as a rhyme.",
    forms:{
      1:[{prompt:"What rhymes with hat?"},{prompt:"What rhymes with day?"},{prompt:"What rhymes with run?"},{prompt:"What rhymes with sea?"},{prompt:"What rhymes with big?"}],
      2:[{prompt:"What rhymes with man?"},{prompt:"What rhymes with night?"},{prompt:"What rhymes with fun?"},{prompt:"What rhymes with tree?"},{prompt:"What rhymes with dog?"}]
    }
  },
  {
    key:"syllableSeg", level:"Phonological", name:"Syllable Segmentation",
    instruction:"I'll say a word and you tell me how many pieces, or syllables, you hear.",
    sample:"Listen: window. Window has 2 pieces... win-dow. How many pieces do you hear in pony? (2)",
    forms:{
      1:[{prompt:"sunset",answer:"2"},{prompt:"cat",answer:"1"},{prompt:"pencil",answer:"2"},{prompt:"banana",answer:"3"},{prompt:"computer",answer:"3"}],
      2:[{prompt:"bathtub",answer:"2"},{prompt:"dog",answer:"1"},{prompt:"rabbit",answer:"2"},{prompt:"umbrella",answer:"3"},{prompt:"dinosaur",answer:"3"}]
    }
  },
  {
    key:"syllableBlend", level:"Phonological", name:"Syllable Blending",
    instruction:"I am going to say a word in pieces. Say it with a 1-second pause between syllables, then ask the learner to say the whole word.",
    sample:"I'll say a word in pieces... flow-er. That word is flower. What is this word? can-dle (candle)",
    forms:{
      1:[{prompt:"sun-flower",answer:"sunflower"},{prompt:"pic-nic",answer:"picnic"},{prompt:"kang-a-roo",answer:"kangaroo"},{prompt:"el-e-phant",answer:"elephant"},{prompt:"car-pet",answer:"carpet"}],
      2:[{prompt:"rain-bow",answer:"rainbow"},{prompt:"nap-kin",answer:"napkin"},{prompt:"oct-o-pus",answer:"octopus"},{prompt:"but-ter-fly",answer:"butterfly"},{prompt:"gar-den",answer:"garden"}]
    }
  },
  {
    key:"onsetRime", level:"Phonological", name:"Onset and Rime",
    instruction:"Let's divide words another way. Model with the sample, then ask each item.",
    sample:"If I say part, the sound before art is /p/. What sound comes before /ake/ in bake? (/b/)",
    forms:{
      1:[{prompt:"What sound comes before /at/ in cat?",answer:"/c/"},{prompt:"What sound comes before /ig/ in pig?",answer:"/p/"},{prompt:"What sound comes after /fl/ in flag?",answer:"/ag/"},{prompt:"What sounds come after /s/ in sand?",answer:"/and/"},{prompt:"What sounds come after /tr/ in train?",answer:"/ain/"}],
      2:[{prompt:"What sound comes before /an/ in van?",answer:"/v/"},{prompt:"What sound comes before /ig/ in wig?",answer:"/w/"},{prompt:"What sound comes after /sw/ in swim?",answer:"/im/"},{prompt:"What sounds come after /d/ in desk?",answer:"/esk/"},{prompt:"What sounds come after /gr/ in grape?",answer:"/ape/"}]
    }
  },
  {
    key:"phonemeIso", level:"Phonemic", name:"Phoneme Isolation",
    instruction:"Listen for one sound.",
    sample:"The first sound in cap is /k/. What's the first sound in fun? (/f/)",
    forms:{
      1:[{prompt:"What is the first sound in sun?",answer:"/s/"},{prompt:"What is the last sound in cat?",answer:"/t/"},{prompt:"What is the last sound in go?",answer:"/o/"},{prompt:"What is the middle sound in bed?",answer:"/e/"},{prompt:"What is the middle sound in top?",answer:"/o/"}],
      2:[{prompt:"What is the first sound in map?",answer:"/m/"},{prompt:"What is the last sound in dog?",answer:"/g/"},{prompt:"What is the last sound in toe?",answer:"/o/"},{prompt:"What is the middle sound in pin?",answer:"/i/"},{prompt:"What is the middle sound in hop?",answer:"/o/"}]
    }
  },
  {
    key:"phonemeBlend", level:"Phonemic", name:"Phoneme Blending",
    instruction:"Say each sound in the word with a 1-second pause between sounds, then ask what word they make.",
    sample:"/k/ /a/ /t/. This word is cat. What word do these sounds make? /s/ /e/ /t/? (set)",
    forms:{
      1:[{prompt:"/m/ /a/ /p/",answer:"map"},{prompt:"/s/ /i/ /t/",answer:"sit"},{prompt:"/f/ /l/ /a/ /g/",answer:"flag"},{prompt:"/t/ /r/ /ee/",answer:"tree"},{prompt:"/s/ /t/ /o/ /p/",answer:"stop"}],
      2:[{prompt:"/r/ /u/ /n/",answer:"run"},{prompt:"/h/ /o/ /p/",answer:"hop"},{prompt:"/s/ /l/ /i/ /p/",answer:"slip"},{prompt:"/d/ /r/ /i/ /p/",answer:"drip"},{prompt:"/s/ /p/ /o/ /t/",answer:"spot"}]
    }
  },
  {
    key:"phonemeSeg", level:"Phonemic", name:"Phoneme Segmentation",
    instruction:"Ask how many sounds are heard in the word.",
    sample:"Cat has 3 sounds: /k/ /a/ /t/. How many sounds do you hear in lip? (3)",
    forms:{
      1:[{prompt:"dog",answer:"3 (/d/ /o/ /g/)"},{prompt:"ship",answer:"3 (/sh/ /i/ /p/)"},{prompt:"black",answer:"4 (/b/ /l/ /a/ /k/)"},{prompt:"stamp",answer:"5 (/s/ /t/ /a/ /m/ /p/)"},{prompt:"plant",answer:"5 (/p/ /l/ /a/ /n/ /t/)"}],
      2:[{prompt:"cup",answer:"3 (/k/ /u/ /p/)"},{prompt:"fish",answer:"3 (/f/ /i/ /sh/)"},{prompt:"block",answer:"4 (/b/ /l/ /o/ /k/)"},{prompt:"crisp",answer:"5 (/k/ /r/ /i/ /s/ /p/)"},{prompt:"print",answer:"5 (/p/ /r/ /i/ /n/ /t/)"}]
    }
  },
  {
    key:"phonemeDel", level:"Phonemic", name:"Phoneme Deletion",
    instruction:"Ask the learner to say the word again, without a given sound.",
    sample:"Soap without the /p/ is 'so'. Say can. Say it again without the /k/. (an)",
    forms:{
      1:[{prompt:"Say seat. Say it again without /s/.",answer:"eat"},{prompt:"Say plane. Say it again without /p/.",answer:"lane"},{prompt:"Say stop. Say it again without /s/.",answer:"top"},{prompt:"Say clap. Say it again without /k/.",answer:"lap"},{prompt:"Say brand. Say it again without /b/.",answer:"rand"}],
      2:[{prompt:"Say train. Say it again without /t/.",answer:"rain"},{prompt:"Say smile. Say it again without /s/.",answer:"mile"},{prompt:"Say clip. Say it again without /k/.",answer:"lip"},{prompt:"Say trust. Say it again without /t/.",answer:"rust"},{prompt:"Say meat. Say it again without /m/.",answer:"eat"}]
    }
  },
  {
    key:"phonemeManip", level:"Phonemic", name:"Phoneme Manipulation",
    instruction:"Ask the learner to change one sound in the word, or to say the sounds backwards.",
    sample:"If I say ball and change the /b/ to /m/, I have mall. Say sink. Change the /s/ to /p/. What is the new word? (pink)",
    forms:{
      1:[{prompt:"Say cat. Change the /k/ to /b/. What is the new word?",answer:"bat"},{prompt:"Say pin. Change the /p/ to /w/. What is the new word?",answer:"win"},{prompt:"Say top. Change the /o/ to /i/. What is the new word?",answer:"tip"},{prompt:"Listen to each sound in the word pan: /p/ /a/ /n/. Say the sounds backwards.",answer:"nap"},{prompt:"Listen to each sound in the word tip: /t/ /i/ /p/. Say the sounds backwards.",answer:"pit"}],
      2:[{prompt:"Say hop. Change the /h/ to /t/. What is the new word?",answer:"top"},{prompt:"Say run. Change the /r/ to /s/. What is the new word?",answer:"sun"},{prompt:"Say big. Change the /i/ to /a/. What is the new word?",answer:"bag"},{prompt:"Listen to each sound in the word net: /n/ /e/ /t/. Say the sounds backwards.",answer:"ten"},{prompt:"Listen to each sound in the word top: /t/ /o/ /p/. Say the sounds backwards.",answer:"pot"}]
    }
  }
];

const READING_LEVEL_NOTE = "Estimated level uses a commonly cited general guideline for oral reading accuracy (roughly: 95%+ independent, 90-94% instructional, below 90% frustration level) together with comprehension of at least 60%. This is a widely used rule of thumb in reading education, not a CAPS/DBE-verified benchmark, and it is not tailored to South African norms. Use it as one input alongside your own clinical judgement.";

/* ---------------- DATA: Spelling, Dictation and Sentence Writing (Grades 1-9) ----------------
   Original word lists, dictation sentences and writing prompts, written for
   this tool. IMPORTANT (please read before relying on these for placement):
   this tool does not have the official CAPS Home Language spelling word
   lists, dictation texts or writing rubrics to transcribe from. What
   follows is a best-effort construction, grade words and sentences chosen
   to increase in orthographic and grammatical complexity in a way that
   roughly tracks the general CAPS phase progression (Foundation Phase:
   short, phonetic, high-frequency words and simple sentences; Intermediate
   and Senior Phase: multisyllabic words, more varied sentence and
   punctuation demands). Treat every word list, dictation sentence and
   writing prompt below as a first draft to check against your own CAPS
   documents and clinical judgement before using it to make a placement
   decision, the same way you would want to double check any word list you
   did not write yourself. */
const SPELLING_WRITING_NOTE = "These spelling words, dictation sentences and writing prompts are original material written for this tool, not a transcription of the official CAPS word lists. Please check them against your own CAPS/DBE resources before relying on them for a formal placement decision.";

const SPELLING = {
  1: ["cat","dog","sun","big","red","run","top","six","hop","wet"],
  2: ["shop","chin","that","plum","nest","frog","slip","when","drum","fast"],
  3: ["shape","tries","happy","chase","thank","sport","plant","smile","drive","spend"],
  4: ["sudden","remember","complete","mistake","chapter","thunder","expect","machine","hundred","distance"],
  5: ["journey","curious","decision","treasure","imagine","several","ordinary","gradual","direction","pleasant"],
  6: ["opportunity","achievement","environment","particular","immediately","necessary","communicate","celebrate","describe","imagination"],
  7: ["definitely","especially","government","experience","foreign","guarantee","occurred","privilege","recommend","separate"],
  8: ["analyse","consequence","significant","characteristic","controversy","entrepreneur","phenomenon","unnecessary","efficient","independence"],
  9: ["exaggerate","conscientious","questionnaire","miscellaneous","accommodate","embarrass","occurrence","rhythm","bureaucracy","unanimous"]
};

const DICTATION = {
  1: {text:"I can see a big red ball.", words:7},
  2: {text:"The dog ran fast to catch the small brown cat.", words:10},
  3: {text:"Every morning, Thabo walks to school with his little sister.", words:10},
  4: {text:"The excited children watched quietly as the colourful balloon slowly rose into the sky.", words:14},
  5: {text:"Although it was raining heavily, the determined hikers kept walking along the narrow path.", words:14},
  6: {text:"The scientist carefully recorded her results before sharing them with her curious classmates.", words:13},
  7: {text:"Despite the new regulations, many local businesses struggled to adapt their daily operations quickly.", words:14},
  8: {text:"The committee unanimously agreed that the proposed policy would significantly benefit future generations.", words:13},
  9: {text:"Her conscientious approach to the difficult questionnaire impressed the interviewers, who recommended her immediately.", words:14}
};

const WRITING = {
  1: {prompt:"Write about your family. Write at least 2 sentences.", minSentences:2},
  2: {prompt:"Write about your favourite game. Write at least 3 sentences.", minSentences:3},
  3: {prompt:"Write about a day at the beach. Write at least 3-4 sentences.", minSentences:3},
  4: {prompt:"Write a paragraph describing your best friend. Write at least 4-5 sentences.", minSentences:4},
  5: {prompt:"Write a paragraph about a time you helped someone. Write at least 5-6 sentences.", minSentences:5},
  6: {prompt:"Write a paragraph describing an important lesson you learned. Write at least 6-8 sentences.", minSentences:6},
  7: {prompt:"Give your opinion on whether learners should get homework, and why. Write at least 8-10 sentences.", minSentences:8},
  8: {prompt:"Discuss the advantages and disadvantages of social media for teenagers. Write at least 10-12 sentences, in paragraphs.", minSentences:10},
  9: {prompt:"Discuss a challenge facing your community and suggest a possible solution. Write a structured response of at least 12 sentences, in paragraphs.", minSentences:12}
};
const WRITING_CRITERIA = [
  "Ideas are relevant to and answer the prompt",
  "Complete sentences (no fragments or run-ons)",
  "Capital letters used correctly (sentence starts, names)",
  "End punctuation used correctly (. ? !)",
  "Vocabulary and sentence complexity appropriate for grade level"
];

/* ============================================================
   Graded word reading list: a SINGLE list of real, unrelated single
   words, arranged in bands of increasing difficulty (not tied to any
   grade's fluency passage), for untimed word identification with
   basal/ceiling stopping - in the spirit of how a test like the
   Woodcock-Johnson Word Identification subtest is structured. This
   is original material written for this tool: it is NOT the
   Woodcock-Johnson, does not reproduce any of its actual items, and
   the band numbers below are this tool's own rough ordering, not a
   normed grade or age equivalent from any published test. Treat a
   placement from it as an approximate, non-normed indicator to guide
   your own judgement, not as a substitute for a standardised
   instrument if one is required.
   ============================================================ */
const WORD_READING_LADDER = {
  1: ["map","pin","log","fun","wig","bud","den","cot","jam","rub","hut","pen"],
  2: ["trap","clock","spoon","chest","thick","brand","stack","grunt","flock","crisp","shrimp","plank"],
  3: ["cabin","tunnel","pencil","kitten","magnet","picture","insect","napkin","publish","plastic","mascot","contest"],
  4: ["monster","capture","harvest","blanket","whisper","thousand","chimney","mixture","pumpkin","contain","further","pattern"],
  5: ["courage","absence","promise","popular","kingdom","notable","dwelling","tension","vessel","humble","gesture","capable"],
  6: ["confident","tolerance","resemble","vigorous","quantity","obstacle","illusion","minimal","elevate","forecast","textile","vertical"],
  7: ["eloquent","diminish","ambiguous","plausible","arbitrary","coincide","integrity","momentum","novelty","precede","resilient","spontaneous"],
  8: ["meticulous","hypothesis","ambivalent","pragmatic","redundant","synthesis","trajectory","ubiquitous","discrepancy","feasible","inherent","paradigm"],
  9: ["idiosyncratic","juxtaposition","notwithstanding","quintessential","surreptitious","ostentatious","perfunctory","vicissitude","circumlocution","obfuscate","sycophant","magnanimous"]
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
function fmtDate(ms){ try{ return new Date(ms).toLocaleDateString('en-ZA',{day:'numeric',month:'short',year:'numeric'}); }catch(e){ return ""; } }
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
const API_BASE = "/api";
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
    el.textContent = "Saved";
  } else {
    el.className = "chip locked";
    el.textContent = "Not saved - check your connection";
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
    inner = '<div class="err">That code or link isn\'t valid. Please ask your examiner for a fresh one.</div>';
  } else if(payload.exp && nowMs() > payload.exp){
    inner = '<div class="err">This link has expired. Please ask your examiner for a fresh one.</div>';
  } else {
    inner = learnerContentHtml(payload);
  }
  app.innerHTML = `
    <div class="app">
      <div class="topbar no-print">
        <img class="logo" src="${LOGO_SRC}" alt="Debby Smit Educational Therapy logo" />
        <div class="title-block">
          <div class="brand">Reading and Phonics Assessment</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="col" style="align-items:center;width:100%;">
          ${inner}
          ${STATE.learnerItem ? `<button class="btn secondary small no-print" style="margin-top:16px;" onclick="STATE.learnerItem=null; STATE.learnerSessionCode=null; route();">${STATE.examinerAuthed ? "Done - back to examiner console" : "Enter a different code"}</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
function noSessionNoticeHtml(){
  if(STATE.learnerSessionCode) return "";
  return '<div class="err" style="margin:8px 0;">This code or link isn\'t tied to an assessment session, so what you type here won\'t reach your examiner. Please ask them for the correct code or link.</div>';
}
function learnerContentHtml(payload){
  const name = escapeHtml(payload.n || "there");
  if(payload.t === "welcome"){
    return `<div class="reading-sheet"><h1>Hi ${name}! 👋</h1><p style="font-size:1.3rem;">We're going to do some reading together. Wait for your examiner to tell you when to start.</p></div>`;
  }
  if(payload.t === "done"){
    return `<div class="reading-sheet"><h1>Well done, ${name}!</h1><p style="font-size:1.3rem;">You've finished today's reading assessment.</p></div>`;
  }
  if(payload.t === "letters"){
    const letters = (FOUNDATION.letters[payload.ref]||[]);
    return `<div class="reading-sheet"><h2>Letter Sounds</h2><div class="letters-grid">${letters.map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "words"){
    const words = (FOUNDATION.words[payload.ref]||[]);
    return `<div class="reading-sheet"><h2>Word Reading</h2><div class="words-grid">${words.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "fpassage"){
    const p = FOUNDATION.passages[payload.ref];
    if(!p) return '<div class="err">This passage could not be found.</div>';
    return `<div class="reading-sheet"><h2>${escapeHtml(p.title)}</h2><div class="passage-text">${p.paragraphs.map(x=>`<p>${escapeHtml(x)}</p>`).join("")}</div></div>`;
  }
  if(payload.t === "gpassage"){
    const g = GRADES[payload.ref];
    if(!g) return '<div class="err">This passage could not be found.</div>';
    return `<div class="reading-sheet"><h2>${escapeHtml(g.title)}</h2><div class="passage-text">${g.paragraphs.map(x=>`<p>${escapeHtml(x)}</p>`).join("")}</div></div>`;
  }
  if(payload.t === "decoding"){
    const g = GRADES[payload.ref];
    if(!g) return '<div class="err">This word list could not be found.</div>';
    return `<div class="reading-sheet"><h2>Word Reading</h2><div class="words-grid" style="grid-template-columns:repeat(3,1fr);">${g.decoding.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  if(payload.t === "spelling"){
    if(!SPELLING[payload.ref]) return '<div class="err">This spelling list could not be found.</div>';
    const n = SPELLING[payload.ref].length;
    return `<div class="reading-sheet"><h2>Spelling</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">Listen to your examiner say each word, then type it below.</p>
      <div class="col" style="gap:10px;width:100%;max-width:420px;">
        ${Array.from({length:n}).map((_,i)=>`<div class="row"><label style="width:70px;">Word ${i+1}</label><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;" oninput="captureSpellingWord('${payload.ref}',${i},this.value)" /></div>`).join("")}
      </div></div>`;
  }
  if(payload.t === "dictation"){
    return `<div class="reading-sheet"><h2>Dictation</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">Listen to your examiner read the sentence aloud, then write it below.</p>
      <textarea rows="4" style="width:100%;max-width:520px;font-size:1.1rem;" autocomplete="off" spellcheck="false" oninput="captureDictationText('${payload.ref}',this.value)"></textarea></div>`;
  }
  if(payload.t === "writing"){
    const w = WRITING[payload.ref];
    if(!w) return '<div class="err">This writing task could not be found.</div>';
    return `<div class="reading-sheet"><h2>Writing</h2>${noSessionNoticeHtml()}<p style="font-size:1.15rem;">${escapeHtml(w.prompt)}</p>
      <textarea rows="8" style="width:100%;max-width:600px;font-size:1.1rem;" oninput="captureWritingText('${payload.ref}',this.value)"></textarea></div>`;
  }
  if(payload.t === "wordladder"){
    const words = WORD_READING_LADDER[payload.ref];
    if(!words) return '<div class="err">This word list could not be found.</div>';
    return `<div class="reading-sheet"><h2>Word Reading</h2><div class="words-grid" style="grid-template-columns:repeat(3,1fr);">${words.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>`;
  }
  return '<div class="err">Nothing to show yet.</div>';
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
          <div class="brand">Reading and Phonics Assessment</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="card narrow col">
          <h2>Sign in</h2>
          <p class="muted">Assessor: enter your password below. Learner: enter the short code your assessor gave you.</p>
          <input type="text" id="pwInput" placeholder="Password or code" autocomplete="off" autocapitalize="characters" />
          <div id="pwErr"></div>
          <button class="btn" onclick="tryExaminerLogin()">Continue</button>
          <p class="note">A password or code here is a light gate to keep casual visitors out. It is not high-security encryption, so do not rely on it to protect sensitive records on a shared computer.</p>
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
  document.getElementById("pwErr").innerHTML = '<div class="err">That password or code isn\'t right. Try again.</div>';
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
            <h2>Start a new assessment</h2>
            <div class="row">
              <div class="col"><label>Learner's name</label><input type="text" id="newLearnerName" placeholder="e.g. Lindiwe M." /></div>
              <div class="col"><label>Current grade</label>
                <select id="newLearnerGrade">
                  ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}">Grade ${g}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col"><label>Date of birth</label><input type="date" id="newLearnerDob" /></div>
              <div class="col"><label>Date of assessment</label><input type="date" id="newAssessmentDate" value="${todayDateStr()}" /></div>
            </div>
            <p class="muted" style="font-size:.85rem;">Date of birth and assessment date are used to work out the learner's chronological age, so the report can compare their results to both their current grade and their age. You can edit these later from the Overview tab.</p>
            <div class="row" style="margin-top:10px;">
              <button class="btn" onclick="createSession()">Create session</button>
            </div>
            <p class="note">This creates a record to hold this learner's scores as you work through the tool. The codes you read out to the learner (like G7 or S4) are fixed, not tied to this session or time-limited, they always show the same item. See the Overview tab for details once a session is open.</p>
          </div>
          <div class="card">
            <h2>Reference booklet</h2>
            <p class="muted">A printable, examiner-only copy of every letter chart, word chart, reading passage, comprehension question and decoding list in this tool. Nothing on it ever goes to a learner. Print it once and keep it with your kit.</p>
            <button class="btn secondary small" onclick="openReferenceStandalone()">Open reference booklet</button>
          </div>
          <div class="card">
            <h2>Learner response sheets</h2>
            <p class="muted">Blank, paper-based answer sheets for spelling, dictation and sentence writing, one per grade, for when you'd rather have the learner write on paper than type. No answers are printed on these, only what the learner is meant to fill in themselves.</p>
            <button class="btn secondary small" onclick="openResponseSheetsStandalone()">Open response sheets</button>
          </div>
          <div class="card">
            <h2>Previous sessions</h2>
            <div id="sessionList" class="col">Loading…</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const sessions = await Store.listSessions();
  const list = document.getElementById("sessionList");
  if(!sessions.length){
    list.innerHTML = '<p class="muted">No sessions yet. Create your first one above.</p>';
  } else {
    list.innerHTML = sessions.map(s => `
      <div class="row" style="justify-content:space-between;border-bottom:1px solid var(--line);padding:8px 0;">
        <div>
          <strong>${escapeHtml(s.learnerName||"Unnamed learner")}</strong>
          <span class="muted"> · started Grade ${escapeHtml(s.gradeStart)} · ${fmtDate(s.createdAt)} · code ${escapeHtml(s.code)}</span>
        </div>
        <div class="row">
          <button class="btn small" onclick="openSession('${s.code}')">Open</button>
        </div>
      </div>
    `).join("");
  }
}
async function createSession(){
  const name = document.getElementById("newLearnerName").value.trim() || "Unnamed learner";
  const grade = document.getElementById("newLearnerGrade").value;
  const dob = document.getElementById("newLearnerDob").value || "";
  const assessmentDate = document.getElementById("newAssessmentDate").value || todayDateStr();
  const code = genCode(6);
  const sess = {
    code, learnerName: name, gradeStart: grade, dob, assessmentDate,
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
        <button class="btn secondary small no-print" onclick="closeReferenceStandalone()">&larr; Back</button>
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
        <button class="btn secondary small no-print" onclick="closeResponseSheetsStandalone()">&larr; Back</button>
        ${responseSheetsHtml()}
      </div>
    </div>
  `;
}

/* ============================================================
   Shared chrome
   ============================================================ */
function saveStatusChipHtml(){
  if(STATE.saveStatus === "error") return '<span class="chip locked" id="saveStatusChip">Not saved - check your connection</span>';
  if(STATE.saveStatus === "saved") return '<span class="chip" id="saveStatusChip">Saved</span>';
  return '<span class="chip waiting" id="saveStatusChip">Connecting…</span>';
}
function topbarHtml(showSession){
  return `
    <div class="topbar no-print">
      <img class="logo" src="${LOGO_SRC}" alt="logo" />
      <div class="title-block">
        <div class="brand">Reading and Phonics Assessment</div>
        <div class="tag">Debby Smit Educational Therapy</div>
      </div>
      <div class="spacer"></div>
      ${saveStatusChipHtml()}
      ${showSession && STATE.session ? `<span class="chip">${escapeHtml(STATE.session.learnerName)}</span>` : ""}
      <button class="btn secondary small" onclick="examinerLogout()">Sign out</button>
    </div>
  `;
}

/* ============================================================
   Examiner: console (sidebar + sections)
   ============================================================ */
const NAV = [
  {group:"Session", items:[["overview","Overview"]]},
  {group:"Resources", items:[["reference","Reference Booklet (print)"],["responsesheets","Learner Response Sheets (print)"]]},
  {group:"Foundation Phase (Gr 1–3)", items:[["letters","Letter Sounds"],["words","Word Reading"],["fpassages","Reading Passages"]]},
  {group:"Grades 4–9", items:[["gpassages","Reading Passages"],["decoding","Decoding Word Lists"]]},
  {group:"All grades", items:[["comprehension","Comprehension"],["phono","Phonological Awareness"]]},
  {group:"Grade-Level Placement", items:[["wordladder","Graded Word Reading List"],["spelling","Spelling Test"],["dictation","Dictation"],["writing","Sentence Writing"]]},
  {group:"Wrap up", items:[["report","Report"]]}
];

async function renderConsole(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(true)}
      <div class="shell">
        <div class="sidebar no-print">
          <button class="navitem" onclick="closeSession()">&larr; <span class="label-text">All sessions</span></button>
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
    default: c.innerHTML = "";
  }
}

function overviewHtml(s){
  const age = fmtAge(s.dob, s.assessmentDate || todayDateStr());
  return `
    <div class="grid" style="max-width:760px;">
      <div class="card">
        <h2>${escapeHtml(s.learnerName)}</h2>
        <p class="muted">Grade ${escapeHtml(s.gradeStart)}${age? " &middot; Age at assessment: "+age : ""} &middot; Session created ${fmtDate(s.createdAt)}</p>
        <h3 style="margin-top:4px;">Learner particulars</h3>
        <p class="muted" style="font-size:.85rem;">These are used in the report, so results can be read against both current grade and chronological age.</p>
        <div class="row">
          <div class="col"><label>Learner's name</label><input type="text" id="ovName" value="${escapeHtml(s.learnerName)}" /></div>
          <div class="col"><label>Current grade</label>
            <select id="ovGrade">${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(s.gradeStart)?'selected':''}>Grade ${g}</option>`).join("")}</select>
          </div>
        </div>
        <div class="row" style="margin-top:10px;">
          <div class="col"><label>Date of birth</label><input type="date" id="ovDob" value="${escapeHtml(s.dob||"")}" /></div>
          <div class="col"><label>Date of assessment</label><input type="date" id="ovAssessDate" value="${escapeHtml(s.assessmentDate||todayDateStr())}" /></div>
        </div>
        <div class="row" style="margin-top:10px;">
          <button class="btn small" onclick="saveParticulars()">Save particulars</button>
        </div>
      </div>
      <div class="card">
        <h3>How the learner joins</h3>
        <p>On the learner's device, open the same link you are using now (see any section on the left for a copy of it), and where it asks for a password or code, enter the short code for the item you want them to see, for example <strong>G7</strong> for the Grade 7 passage. Go to any section on the left and click <em>"Show learner code"</em> to see that item's code. You can read the code aloud over a video call, or type it in yourself if you're in the same room.</p>
        <p class="note">Each code shows the learner only that one item: never a menu, never other grades, and never the phonological awareness items, which have no learner code at all. On the learner's own screen, a small "Enter a different code" button lets you move them straight to the next item without reopening the link.</p>
        <p class="note">This is a practical safeguard, not bank-grade security, the same way the examiner password is. A code only ever reveals a letter chart, word chart, passage or word list, never a learner's name or scores, so there is nothing personal to protect if someone else sees or guesses one.</p>
      </div>
      <div class="card">
        <h3>Danger zone</h3>
        <button class="btn danger small" onclick="deleteThisSession()">Delete this session</button>
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
  persistSession().then(()=>renderConsoleContent());
}
async function deleteThisSession(){
  if(!confirm("Delete this learner's session and all recorded scores? This cannot be undone.")) return;
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
  const titleMap = {letters:"Letter Sounds (1 minute each)", words:"Word Reading (1 minute each)", fpassages:"Foundation Phase Reading Passages", gpassages:"Grade 4–9 Reading Passages", decoding:"Grade 4–9 Decoding Word Lists"};
  return `
    <div class="grid">
      <h2 style="margin:0;">${titleMap[kind]}</h2>
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
  if(kind==="letters") return "Chart "+id;
  if(kind==="words") return "Chart "+id;
  if(kind==="fpassages") return FOUNDATION.passages[id].title+" ("+id+")";
  if(kind==="gpassages") return GRADES[id].label+": "+GRADES[id].title;
  if(kind==="decoding") return GRADES[id].label+" decoding list";
}
function previewHtml(kind,id){
  if(kind==="letters") return `<div class="letters-grid" style="grid-template-columns:repeat(10,1fr);font-size:1.2rem;">${FOUNDATION.letters[id].map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div>`;
  if(kind==="words") return `<div class="words-grid" style="font-size:1.05rem;">${FOUNDATION.words[id].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>`;
  if(kind==="fpassages"){
    const p = FOUNDATION.passages[id];
    return `<div class="passage-text" style="font-size:1.05rem;">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} words</span></p>`).join("")}</div>`;
  }
  if(kind==="gpassages"){
    const g = GRADES[id];
    return `<div class="passage-text" style="font-size:1.05rem;">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} words</span></p>`).join("")}</div>`;
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
    return `<div class="reading-sheet"><h2>${escapeHtml(p.title)}</h2><div class="passage-text">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} words</span></p>`).join("")}</div></div>`;
  }
  if(kind==="gpassages"){
    const g = GRADES[id];
    return `<div class="reading-sheet"><h2>${escapeHtml(g.title)}</h2><div class="passage-text">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} words</span></p>`).join("")}</div></div>`;
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
        <span class="muted">Max ${max}</span>
      </div>
      <details open style="margin:10px 0;">
        <summary style="cursor:pointer;font-weight:bold;">Learner's screen (shown here too, so you can follow along while marking)</summary>
        <div class="mirror-frame">${mirrorHtml(kind,id)}</div>
      </details>
      <div class="row">
        <button class="btn small" onclick="showLearnerLink('${kind}','${id}')">Show learner code</button>
      </div>
      <div id="linkbox-${kind}-${id}"></div>
      <div class="row" style="margin-top:14px;align-items:flex-end;">
        <div class="col">
          <label>Timer</label>
          <div class="row">
            <span class="timer-display" id="timerDisplay-${timerKey}" style="font-size:1.6rem;">${fmtTime(0)}</span>
            <button class="btn small" onclick="toggleTimer('${timerKey}')" id="timerBtn-${timerKey}">Start</button>
            <button class="btn small secondary" onclick="resetTimer('${timerKey}')">Reset</button>
          </div>
        </div>
        <div class="col">
          <label>${isPassage ? "Words read correctly" : "Correct out of "+max}</label>
          <input type="number" min="0" max="${max}" id="correct-${kind}-${id}" value="${rec.correct!=null?rec.correct:''}" style="width:110px;" />
        </div>
        ${isPassage ? `<div class="col"><label>Words attempted (if stopped early)</label><input type="number" min="0" max="${max}" id="attempted-${kind}-${id}" value="${rec.attempted!=null?rec.attempted:max}" style="width:150px;" /></div>` : ""}
        <button class="btn small" onclick="saveStimulusScore('${kind}','${id}')">Save</button>
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
      <div class="score-tile"><span class="num">${pct(rec.correct,attempted)}%</span><span class="lbl">Accuracy</span></div>
      <div class="score-tile"><span class="num">${wcpm(rec.correct,rec.seconds)}</span><span class="lbl">Words correct / min</span></div>
      <div class="score-tile"><span class="num">${fmtTime(rec.seconds||0)}</span><span class="lbl">Time taken</span></div>
    </div>`;
  }
  return `<div class="score-box" style="margin-top:10px;">
    <div class="score-tile"><span class="num">${pct(rec.correct,max)}%</span><span class="lbl">Accuracy</span></div>
    <div class="score-tile"><span class="num">${wcpm(rec.correct,rec.seconds)}</span><span class="lbl">Correct / min</span></div>
    <div class="score-tile"><span class="num">${fmtTime(rec.seconds||0)}</span><span class="lbl">Time taken</span></div>
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
      ? ` What ${escapeHtml(s.learnerName||"the learner")} types on their own device will appear back here within a few seconds.`
      : ` Digital typing needs an open assessment session to report back to - open or start a session first, then come back to this code.`;
  }
  box.innerHTML = `
    <div class="linkbox" style="flex-direction:column;align-items:flex-start;gap:8px;">
      <div><span class="muted">Learner code:</span> <strong style="font-size:1.4rem;letter-spacing:3px;">${code}</strong></div>
      <div class="row" style="width:100%;">
        <input type="text" readonly value="${escapeHtml(url)}" onfocus="this.select()" id="linkinput-${kind}-${id}" />
        <button class="btn small" onclick="copyLink('linkinput-${kind}-${id}')">Copy link</button>
      </div>
      <button class="btn clay small" onclick="enterLearnerModeDirectly('${kind}','${id}')">Hand this screen to the learner now</button>
    </div>
    <p class="muted" style="font-size:.85rem;margin-top:4px;">On the learner's own device, open the link above, or go to this tool and enter the code <strong>${code}</strong> where it asks for a password or code.${captureNote} On THIS device, "Hand this screen to the learner now" switches straight to their view instead - best if you're handing the same laptop or tablet back and forth - with a button on their screen afterwards to switch back to your console.</p>
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
  if(btn) btn.textContent = t.running ? "Stop" : "Start";
}
function resetTimer(key){
  STATE.timers[key] = {accumMs:0, running:false, startedAt:0};
  const btn = document.getElementById("timerBtn-"+key);
  if(btn) btn.textContent = "Start";
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
  ["3.1","3.2","3.3"].forEach(id => opts.push([id, "Foundation: "+FOUNDATION.passages[id].title]));
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
      <h2 style="margin:0;">Comprehension</h2>
      <div class="card">
        <label>Passage</label>
        <select id="compPassageSelect" onchange="changeCompPassage(this.value)">
          ${allPassageOptions().map(([oid,label]) => `<option value="${oid}" ${oid===id?'selected':''}>${escapeHtml(label)}</option>`).join("")}
        </select>
        <p class="muted">Ask each question verbally after the learner has read (or listened to) the passage, and mark the response yourself.</p>
        ${qs.map((q,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(q.q)}<br/><span class="muted">Model answer: ${escapeHtml(q.a)}</span></div>
            <div class="marks">
              <button class="mark-btn correct ${rec[i]===true?'on':''}" onclick="markComp(${i},true)" title="Correct">&#10003;</button>
              <button class="mark-btn wrong ${rec[i]===false?'on':''}" onclick="markComp(${i},false)" title="Incorrect">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/5</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,5)}%</span><span class="lbl">Comprehension</span></div>
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
        <p class="note">Sample: ${escapeHtml(sub.sample)}</p>
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
      <h2 style="margin:0;">Phonological and Phonemic Awareness</h2>
      <p class="note">Examiner-administered only. Nothing in this section is ever sent to a learner link.</p>
      <div class="row">
        <label>Form:</label>
        <button class="btn small ${form==='1'?'':'secondary'}" onclick="changePhonoForm('1')">Form 1 (Pre-test)</button>
        <button class="btn small ${form==='2'?'':'secondary'}" onclick="changePhonoForm('2')">Form 2 (Post-test)</button>
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
    levelStatement = `Reading at or above a <strong>Grade ${highestGrade}</strong> instructional level on this tool's criteria.`;
  } else if(foundationMet){
    levelStatement = `Reading within the <strong>Foundation Phase range (Grade 1-3)</strong> on this tool's criteria. The forms used do not distinguish between Grade 1, 2 and 3 within that band.`;
  } else if(foundationRows.length || gradeRows.length){
    levelStatement = `Accuracy and/or comprehension on the sections attempted so far were below the instructional-level criteria. Consider testing an easier passage, or use this alongside your clinical observation.`;
  } else {
    levelStatement = `No reading passages have been scored yet.`;
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
      <h2 style="margin:0;">Graded Word Reading List</h2>
      <p class="note">A separate test from the fluency passages above: one continuous list of unrelated single words in bands of increasing difficulty, read aloud with no time limit, to estimate roughly where the learner's word-reading breaks down - in the style of a basal/ceiling word identification test such as the Woodcock-Johnson, though this is original, non-normed material, not that test (see the note under "Placement estimate" below).</p>
      <div class="card">
        <label>Word band (start near the learner's estimated level)</label>
        <select onchange="changeWordLadderBand(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(band)?'selected':''}>Band ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('wordladder','${band}')">Show learner code</button>
        </div>
        <div id="linkbox-wordladder-${band}"></div>
        <p class="note" style="margin-top:10px;">These words are fine for the learner to see (they read them aloud), so it's fine to show this band on their screen, hand it to them on paper, or just read from your own screen if they're sitting with you.</p>
        ${words.map((w,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(w)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markWordLadderWord('${band}',${i},true)" title="Read correctly">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markWordLadderWord('${band}',${i},false)" title="Not read correctly">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/12</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,12)}%</span><span class="lbl">Accuracy</span></div>
        </div>
      </div>
      <div class="card">
        <h3>Placement estimate</h3>
        <p class="muted">9/12 or more counts as a pass at that band (basal); 3/12 or fewer counts as a ceiling. Test up from a pass, down from a ceiling, until you find the highest band the learner passes.</p>
        ${allBands.length ? `<table><tr><th>Band</th><th>Correct</th><th>Result</th></tr>
          ${allBands.map(b => { const r=s.scores.wordladder[b]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Band ${b}</td><td>${c}/12</td><td>${wordLadderPass(r)?'Pass (basal)':wordLadderFail(r)?'Ceiling':'Borderline'}</td></tr>`; }).join("")}
        </table>` : `<p class="muted">No bands scored yet.</p>`}
        <p style="margin-top:8px;">${placementBand ? `<strong>Estimated word-reading band: Band ${placementBand}</strong>` : "Not enough data yet to estimate a band."}</p>
        <p class="note" style="margin-top:10px;">This word list and its band numbers are written for this tool, not taken from the Woodcock-Johnson or any other published test, and have not been normed against real learners. Treat "Band ${placementBand||'X'}" as an approximate, same-tool-only indicator of where independent word reading seems to break down, alongside your own judgement, the fluency passages above, and (where one is available and appropriate) a properly normed standardised instrument - not as a formal grade-equivalent score in its own right.</p>
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
      <h2 style="margin:0;">Spelling Test</h2>
      <p class="note">Say each word aloud (use it in a short sentence if helpful), the learner types it on their own screen using the code below, you mark each word here.</p>
      <div class="card">
        <label>Grade-level word list</label>
        <select onchange="changeSpellingGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('spelling','${grade}')">Show learner code</button>
        </div>
        <div id="linkbox-spelling-${grade}"></div>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digital typing (optional):</strong> the learner can type their words on their own device, using the code or link above, instead of writing on paper. What they type is checked automatically against the word list and marked below within a few seconds; you can still click a tick or cross to correct any word yourself.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digital entry last updated ${fmtCaptureTime(cap.updatedAt)}` : "No digital entry received yet for this grade."}</span>
            <button class="btn secondary small" onclick="clearCapture('spelling','${grade}')">Clear digital entry</button>
          </div>
        </div>
        ${words.map((w,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(w)}${cap && cap.words && cap.words[i] ? ` <span class="muted" style="font-size:.85rem;">(typed: "${escapeHtml(cap.words[i])}")</span>` : ""}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markSpellingWord('${grade}',${i},true)" title="Correct">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markSpellingWord('${grade}',${i},false)" title="Incorrect">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/10</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,10)}%</span><span class="lbl">Accuracy</span></div>
        </div>
      </div>
      <div class="card">
        <h3>Placement guide</h3>
        <p class="muted">7/10 or more counts as a pass at that grade (basal); 3/10 or fewer counts as a ceiling. Test up from a pass, down from a ceiling, until you find the highest grade the learner passes.</p>
        ${allGrades.length ? `<table><tr><th>Grade</th><th>Correct</th><th>Result</th></tr>
          ${allGrades.map(g => { const r=s.scores.spelling[g]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Grade ${g}</td><td>${c}/10</td><td>${spellingPass(r)?'Pass (basal)':spellingFail(r)?'Ceiling':'Borderline'}</td></tr>`; }).join("")}
        </table>` : `<p class="muted">No grade lists scored yet.</p>`}
        <p style="margin-top:8px;">${placementGrade ? `<strong>Estimated spelling grade level: Grade ${placementGrade}</strong>` : "Not enough data yet to estimate a spelling grade level."}</p>
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
const DICTATION_CRITERIA = ["Capital letter at the start of the sentence","Correct end punctuation (. ? !)","Correct spacing between words"];
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
      <h2 style="margin:0;">Dictation</h2>
      <p class="note">Read the sentence aloud (repeat once if needed), the learner writes what they hear, you mark it here.</p>
      <div class="card">
        <label>Grade level</label>
        <select onchange="changeDictationGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('dictation','${grade}')">Show learner code</button>
        </div>
        <div id="linkbox-dictation-${grade}"></div>
        <p class="note" style="margin-top:10px;"><strong>Sentence to read aloud (examiner only):</strong> "${escapeHtml(d.text)}" <span class="muted">(${d.words} words)</span></p>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digital typing (optional):</strong> the learner can type the sentence on their own device, using the code or link above, instead of writing on paper. What they type is automatically checked against the sentence above, word by word, and used to fill in "words spelled correctly" below within a few seconds. That simple word-by-word check can be thrown off if the learner adds or leaves out a whole word partway through, so please check it against what they actually typed, shown below, before relying on it.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digital entry last updated ${fmtCaptureTime(cap.updatedAt)}` : "No digital entry received yet for this grade."}</span>
            <button class="btn secondary small" onclick="clearCapture('dictation','${grade}')">Clear digital entry</button>
          </div>
          ${cap && cap.text ? `<div style="margin-top:8px;"><strong>Learner typed:</strong><div style="white-space:pre-wrap;margin-top:4px;">${escapeHtml(cap.text)}</div></div>` : ""}
        </div>
        <div class="row" style="align-items:flex-end;">
          <div class="col"><label>Words spelled correctly (out of ${d.words})${cap && cap.text ? ' <span class="muted" style="font-size:.8rem;">(auto-filled from digital entry, edit if needed)</span>' : ''}</label><input type="number" min="0" max="${d.words}" id="dictCorrect-${grade}" value="${rec.wordsCorrect!=null?rec.wordsCorrect:''}" style="width:120px;" /></div>
        </div>
        ${DICTATION_CRITERIA.map((c,i) => `
          <div class="item-row">
            <div class="item-text">${escapeHtml(c)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markDictationCriterion('${grade}',${i},true)" title="Yes">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markDictationCriterion('${grade}',${i},false)" title="No">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="col" style="margin-top:10px;">
          <label>Notes</label>
          <textarea rows="3" style="width:100%;" id="dictNotes-${grade}">${escapeHtml(rec.notes||"")}</textarea>
        </div>
        <div class="row" style="margin-top:10px;">
          <button class="btn small" onclick="saveDictationScore('${grade}')">Save</button>
        </div>
        ${rec.wordsCorrect!=null ? `<div class="score-box" style="margin-top:10px;"><div class="score-tile"><span class="num">${pct(rec.wordsCorrect,d.words)}%</span><span class="lbl">Words correct</span></div></div>` : ""}
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
      <h2 style="margin:0;">Sentence Writing</h2>
      <p class="note">The prompt is shown to the learner. Score their writing against the checklist below once they're done. Open-ended writing is best judged by reading it yourself, so nothing here is auto-marked.</p>
      <div class="card">
        <label>Grade level</label>
        <select onchange="changeWritingGrade(this.value)">
          ${[1,2,3,4,5,6,7,8,9].map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${g}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('writing','${grade}')">Show learner code</button>
        </div>
        <div id="linkbox-writing-${grade}"></div>
        <p class="note" style="margin-top:10px;"><strong>Prompt (shown to learner):</strong> ${escapeHtml(w.prompt)}</p>
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <strong>Digital typing (optional):</strong> the learner can type their writing on their own device, using the code or link above, instead of writing on paper. Their typed response will appear below within a few seconds for you to read and score yourself.
          <div class="row" style="margin-top:6px;justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digital entry last updated ${fmtCaptureTime(cap.updatedAt)}` : "No digital entry received yet for this grade."}</span>
            <button class="btn secondary small" onclick="clearCapture('writing','${grade}')">Clear digital entry</button>
          </div>
          ${cap && cap.text ? `<div style="margin-top:8px;"><strong>Learner's typed response:</strong><div style="white-space:pre-wrap;margin-top:4px;">${escapeHtml(cap.text)}</div></div>` : ""}
        </div>
        ${WRITING_CRITERIA.map((c,i) => `
          <div class="item-row">
            <div class="item-text">${escapeHtml(c)}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markWritingCriterion('${grade}',${i},true)" title="Yes">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markWritingCriterion('${grade}',${i},false)" title="No">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="col" style="margin-top:10px;">
          <label>Notes</label>
          <textarea rows="3" style="width:100%;" id="writeNotes-${grade}" oninput="autoSaveWritingNotes('${grade}',this.value)">${escapeHtml(rec.notes||"")}</textarea>
        </div>
        <div class="score-box" style="margin-top:10px;">
          <div class="score-tile"><span class="num">${correctCount}/5</span><span class="lbl">Criteria met</span></div>
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
function reportHtml(){
  const s = STATE.session;
  const {levelStatement, foundationRows, gradeRows} = computeReadingLevelStatement();

  const decodingRows = ["4","5","6","7","8","9"].map(id => {
    const rec = s.scores.decoding && s.scores.decoding[id];
    if(!rec || rec.correct==null) return null;
    return {grade:id, accuracy: pct(rec.correct, GRADES[id].decoding.length)};
  }).filter(Boolean);

  const phonoTable = ["1","2"].map(form => {
    const rec = (s.scores.phono && s.scores.phono[form]) || {};
    const rows = PHONO.map(sub => {
      const marks = rec[sub.key];
      if(!marks) return null;
      const raw = marks.filter(x=>x===true).length;
      return `<tr><td>${sub.name}</td><td>${raw}/5</td><td>${pct(raw,5)}%</td></tr>`;
    }).filter(Boolean);
    if(!rows.length) return "";
    return `<h4>${form==='1'?'Pre-test (Form 1)':'Post-test (Form 2)'}</h4><table><tr><th>Subtest</th><th>Raw score</th><th>%</th></tr>${rows.join("")}</table>`;
  }).join("");

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

  const age = fmtAge(s.dob, s.assessmentDate || todayDateStr());

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Report</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <div class="card" id="printableReport">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Reading and Phonics Assessment Report</h2>
            <p class="muted">Debby Smit Educational Therapy</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        <table style="margin-top:8px;">
          <tr><th>Learner</th><td>${escapeHtml(s.learnerName)}</td><th>Current grade</th><td>Grade ${escapeHtml(s.gradeStart)}</td></tr>
          <tr><th>Date of birth</th><td>${s.dob?fmtDate(new Date(s.dob+"T00:00:00").getTime()):"Not recorded"}</td><th>Age at assessment</th><td>${age||"Not recorded"}</td></tr>
          <tr><th>Date of assessment</th><td>${s.assessmentDate?fmtDate(new Date(s.assessmentDate+"T00:00:00").getTime()):fmtDate(nowMs())}</td><th>Report generated</th><td>${fmtDate(nowMs())}</td></tr>
        </table>

        <h3>Estimated reading level</h3>
        <p>${levelStatement}</p>
        <p class="note">${READING_LEVEL_NOTE}</p>

        ${gradeRows.length ? `<h3>Grade 4–9 passages</h3><table>
          <tr><th>Passage</th><th>Accuracy</th><th>Words correct / min</th><th>Comprehension</th></tr>
          ${gradeRows.map(r=>`<tr><td>${GRADES[r.id].label}: ${escapeHtml(GRADES[r.id].title)}</td><td>${r.accuracy}%</td><td>${r.rate}</td><td>${r.compPct!=null?r.compPct+'%':'N/A'}</td></tr>`).join("")}
        </table>` : ""}

        ${foundationRows.length ? `<h3>Foundation Phase passages</h3><table>
          <tr><th>Passage</th><th>Accuracy</th><th>Words correct / min</th><th>Comprehension</th></tr>
          ${foundationRows.map(r=>`<tr><td>${escapeHtml(r.label)}</td><td>${r.accuracy}%</td><td>${r.rate}</td><td>${r.compPct!=null?r.compPct+'%':'N/A'}</td></tr>`).join("")}
        </table>` : ""}

        ${decodingRows.length ? `<h3>Decoding word lists (Grades 4–9)</h3><table>
          <tr><th>Grade</th><th>Accuracy</th></tr>
          ${decodingRows.map(r=>`<tr><td>${GRADES[r.grade].label}</td><td>${r.accuracy}%</td></tr>`).join("")}
        </table>` : ""}

        ${phonoTable ? `<h3>Phonological and Phonemic Awareness</h3>${phonoTable}` : ""}

        ${wordLadderBands.length ? `<h3>Graded Word Reading List</h3>
        <table><tr><th>Band</th><th>Correct</th><th>Result</th></tr>
          ${wordLadderBands.map(b=>{const r=wordLadderScores[b]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Band ${b}</td><td>${c}/12</td><td>${wordLadderPass(r)?'Pass (basal)':wordLadderFail(r)?'Ceiling':'Borderline'}</td></tr>`;}).join("")}
        </table>
        <p>${wordLadderPlacementBand ? `<strong>Estimated word-reading band: Band ${wordLadderPlacementBand}</strong>` : "Not enough bands tested yet to estimate a placement."} <span class="muted">Original word list written for this tool; not the Woodcock-Johnson or any normed test, see the note in the tool itself.</span></p>` : ""}

        ${spellingGrades.length ? `<h3>Spelling</h3>
        <table><tr><th>Grade</th><th>Correct</th><th>Result</th></tr>
          ${spellingGrades.map(g=>{const r=spellingScores[g]; const c=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Grade ${g}</td><td>${c}/10</td><td>${spellingPass(r)?'Pass (basal)':spellingFail(r)?'Ceiling':'Borderline'}</td></tr>`;}).join("")}
        </table>
        <p>${spellingPlacementGrade ? `<strong>Estimated spelling grade level: Grade ${spellingPlacementGrade}</strong>` : "Not enough grade levels tested yet to estimate a spelling grade level."}</p>` : ""}

        ${dictationGrades.length ? `<h3>Dictation</h3>
        <table><tr><th>Grade</th><th>Words correct</th><th>Capitalisation/punctuation</th></tr>
          ${dictationGrades.map(g=>{const r=dictationScores[g]; const d=DICTATION[g]; const cm=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Grade ${g}</td><td>${r.wordsCorrect!=null? pct(r.wordsCorrect,d.words)+'% ('+r.wordsCorrect+'/'+d.words+')':'Not scored'}</td><td>${cm}/${DICTATION_CRITERIA.length}</td></tr>`;}).join("")}
        </table>` : ""}

        ${writingGrades.length ? `<h3>Sentence Writing</h3>
        <table><tr><th>Grade</th><th>Criteria met</th></tr>
          ${writingGrades.map(g=>{const r=writingScores[g]; const cm=(r.marks||[]).filter(x=>x===true).length; return `<tr><td>Grade ${g}</td><td>${cm}/${WRITING_CRITERIA.length}</td></tr>`;}).join("")}
        </table>` : ""}

        <h3>Examiner notes</h3>
        <textarea id="reportNotes" rows="5" style="width:100%;" class="no-print" oninput="autoSaveNotes(this.value)">${escapeHtml(s.report && s.report.notes || "")}</textarea>
        <div class="print-only" style="display:none;">${escapeHtml(s.report && s.report.notes || "")}</div>
      </div>
    </div>
    <style>@media print{ #reportNotes{display:none;} .print-only{display:block !important; white-space:pre-wrap;} }</style>
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
      <h3>Letter Sounds, Chart ${id}</h3>
      <div class="letters-grid" style="grid-template-columns:repeat(10,1fr);font-size:1.3rem;">${FOUNDATION.letters[id].map(l=>`<span>${escapeHtml(l)}</span>`).join("")}</div>
    </div>
  `).join("");
  const wordsSection = ["2.1","2.2","2.3"].map(id => `
    <div class="ref-block">
      <h3>Word Reading, Chart ${id}</h3>
      <div class="words-grid" style="font-size:1.05rem;">${FOUNDATION.words[id].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>
    </div>
  `).join("");
  const fPassageSection = ["3.1","3.2","3.3"].map(id => {
    const p = FOUNDATION.passages[id];
    return `
      <div class="ref-block ref-break">
        <h3>${escapeHtml(p.title)} (${id}), ${p.total} words</h3>
        <div class="passage-text" style="font-size:1rem;">${p.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${p.markers[i]} words</span></p>`).join("")}</div>
        <h4>Comprehension questions</h4>
        <ol>${p.questions.map(q=>`<li>${escapeHtml(q.q)} <span class="muted">(Model answer: ${escapeHtml(q.a)})</span></li>`).join("")}</ol>
      </div>
    `;
  }).join("");
  const gPassageSection = ["4","5","6","7","8","9"].map(id => {
    const g = GRADES[id];
    return `
      <div class="ref-block ref-break">
        <h3>${g.label}: ${escapeHtml(g.title)}, ${g.total} words</h3>
        <div class="passage-text" style="font-size:1rem;">${g.paragraphs.map((t,i)=>`<p>${escapeHtml(t)} <span class="tag">${g.markers[i]} words</span></p>`).join("")}</div>
        <h4>Comprehension questions</h4>
        <ol>${g.questions.map(q=>`<li>${escapeHtml(q.q)} <span class="muted">(Model answer: ${escapeHtml(q.a)})</span></li>`).join("")}</ol>
        <h4>Decoding word list</h4>
        <div class="words-grid" style="grid-template-columns:repeat(6,1fr);font-size:1rem;">${g.decoding.map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div>
      </div>
    `;
  }).join("");
  const wordLadderSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Band ${g}</h3><div class="words-grid" style="grid-template-columns:repeat(4,1fr);font-size:1.05rem;">${WORD_READING_LADDER[g].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>
  `).join("");
  const spellingSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Grade ${g}</h3><div class="words-grid" style="grid-template-columns:repeat(5,1fr);font-size:1.05rem;">${SPELLING[g].map(w=>`<span>${escapeHtml(w)}</span>`).join("")}</div></div>
  `).join("");
  const dictationSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Grade ${g}</h3><p>"${escapeHtml(DICTATION[g].text)}" <span class="tag">${DICTATION[g].words} words</span></p></div>
  `).join("");
  const writingSection = [1,2,3,4,5,6,7,8,9].map(g => `
    <div class="ref-block"><h3>Grade ${g}</h3><p>${escapeHtml(WRITING[g].prompt)}</p></div>
  `).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Reference booklet</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">This is a plain paper copy of every letter chart, word chart, reading passage, comprehension question and decoding list in this tool, for your own reference while you test. Nothing on this page is ever sent to a learner. Print it once and keep it with your kit.</p>
      <div id="printableReference" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Reading and Phonics Assessment, Reference Booklet</h2>
            <p class="muted">Debby Smit Educational Therapy. Examiner copy, not for learners.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        <h2 class="ref-break">Foundation Phase: Letter Sounds</h2>
        ${lettersSection}
        <h2 class="ref-break">Foundation Phase: Word Reading</h2>
        ${wordsSection}
        <h2 class="ref-break">Foundation Phase: Reading Passages</h2>
        ${fPassageSection}
        <h2 class="ref-break">Grades 4 to 9: Reading Passages and Decoding</h2>
        ${gPassageSection}
        <h2 class="ref-break">Graded Word Reading List (Bands 1-9)</h2>
        <p class="muted">These words are fine for a learner to see or read from directly, unlike the sections below.</p>
        ${wordLadderSection}
        <h2 class="ref-break">Spelling Word Lists (Grades 1-9)</h2>
        ${spellingSection}
        <h2 class="ref-break">Dictation Sentences (Grades 1-9)</h2>
        ${dictationSection}
        <h2 class="ref-break">Sentence Writing Prompts (Grades 1-9)</h2>
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
      <div>Name: <span style="display:inline-block;min-width:220px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Grade: <span style="display:inline-block;min-width:70px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Date: <span style="display:inline-block;min-width:140px;border-bottom:1px solid #333;">&nbsp;</span></div>
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
      <h3>Spelling Test, Grade ${g}</h3>
      ${sheetHeaderHtml()}
      <p class="muted" style="margin-bottom:14px;">Listen to your examiner say each word, then write it on the matching line.</p>
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
      <h3>Dictation, Grade ${g}</h3>
      ${sheetHeaderHtml()}
      <p class="muted" style="margin-bottom:14px;">Listen carefully to the sentence your examiner reads aloud, then write it below.</p>
      ${blankLinesHtml(4, 38)}
    </div>
  `).join("");
  const writingSheets = [1,2,3,4,5,6,7,8,9].map(g => {
    const w = WRITING[g];
    const lineCount = Math.max(8, (w.minSentences||4) + 4);
    return `
    <div class="ref-block ref-break">
      <h3>Sentence Writing, Grade ${g}</h3>
      ${sheetHeaderHtml()}
      <p style="margin-bottom:14px;"><strong>Prompt:</strong> ${escapeHtml(w.prompt)}</p>
      ${blankLinesHtml(lineCount, 32)}
    </div>
  `;
  }).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Learner response sheets</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">Blank, paper-based answer sheets for spelling, dictation and sentence writing, one per grade. These carry no answers, only what the learner writes themselves, so they are safe to print and hand out. Print just the page(s) you need for today's grade and subtest, or the whole set to keep on hand.</p>
      <div id="printableResponseSheets" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Reading and Phonics Assessment, Learner Response Sheets</h2>
            <p class="muted">Debby Smit Educational Therapy.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        <h2 class="ref-break">Spelling Test Sheets (Grades 1-9)</h2>
        ${spellingSheets}
        <h2 class="ref-break">Dictation Sheets (Grades 1-9)</h2>
        ${dictationSheets}
        <h2 class="ref-break">Sentence Writing Sheets (Grades 1-9)</h2>
        ${writingSheets}
      </div>
    </div>
    <style>@media print{ .ref-break{ page-break-before: always; } }</style>
  `;
}

