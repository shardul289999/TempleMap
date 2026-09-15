const CURRENT_YEAR = new Date().getFullYear();

const templeDataA = [
  {
    id:'kailasa-ellora', name:'Kailasa Temple · Ellora Cave 16', deity:'Shiva', tradition:'Hindu',
    lat:20.0236875, lng:75.1793125, area:'Verul · Ellora', taluka:'Khuldabad',
    dateYear:760, dateLabel:'8th century CE · Rashtrakuta period', ageBasis:'Approximate construction era', confidence:'High', score:100,
    era:'Rashtrakuta', architecture:'Monolithic rock-cut · Dravidian influence', type:'Cave temple',
    summary:'Ellora’s monumental centrepiece: an entire freestanding temple complex excavated downward from a single mass of basalt. It is one of the district’s strongest combinations of age, architecture, archaeology and global heritage value.',
    notes:'UNESCO-listed as part of Ellora; commonly attributed to Rashtrakuta king Krishna I.',
    sources:[
      ['District Sambhajinagar · Ellora & Ghrishneshwar','https://aurangabad.gov.in/en/tourist-place/ellora-leni-and-ghrishneshwar-jyotirlinga-temple-verul/'],
      ['UNESCO · Ellora Caves','https://whc.unesco.org/en/list/243/']
    ]
  },
  {
    id:'dashavatara-ellora', name:'Dashavatara Temple · Ellora Cave 15', deity:'Shiva / Vishnu imagery', tradition:'Hindu',
    lat:20.0228125, lng:75.1793125, area:'Verul · Ellora', taluka:'Khuldabad',
    dateYear:780, dateLabel:'8th century CE · early Rashtrakuta phase', ageBasis:'Approximate archaeological dating', confidence:'High', score:94,
    era:'Rashtrakuta', architecture:'Two-storeyed rock-cut temple', type:'Cave temple',
    summary:'A richly carved two-level rock-cut temple immediately beside Kailasa. Its sculptural programme combines Vaishnava narrative imagery with a Shaiva sanctum and an important Rashtrakuta inscription.',
    notes:'Part of the protected Ellora Caves complex.',
    sources:[['Ellora district tourism page','https://aurangabad.gov.in/en/tourist-place/ellora-leni-and-ghrishneshwar-jyotirlinga-temple-verul/']]
  },
  {
    id:'chhota-kailasa', name:'Chhota Kailasa · Ellora Cave 30', deity:'Jain Tirthankaras', tradition:'Jain',
    lat:20.0323125, lng:75.1753125, area:'Verul · Ellora', taluka:'Khuldabad',
    dateYear:900, dateLabel:'c. 9th–10th century CE', ageBasis:'Approximate archaeological phase', confidence:'Medium', score:91,
    era:'Late Ellora Jain phase', architecture:'Rock-cut monolithic Jain temple', type:'Cave temple',
    summary:'A smaller monolithic temple in Ellora’s Jain group, often called “Little Kailasa”. It extends the site’s rock-cut engineering tradition into a distinct Jain sculptural and devotional programme.',
    notes:'Date is shown as an era estimate rather than an exact construction year.',
    sources:[['District Sambhajinagar · Ellora','https://aurangabad.gov.in/en/tourist-place/ellora-leni-and-ghrishneshwar-jyotirlinga-temple-verul/']]
  },
  {
    id:'aurangabad-caves', name:'Chhatrapati Sambhajinagar Caves', deity:'Buddhist sacred imagery', tradition:'Buddhist',
    lat:19.9175625, lng:75.3161875, area:'Begumpura hills · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:600, dateLabel:'6th–7th century CE', ageBasis:'Archaeological dating of cave group', confidence:'High', score:96,
    era:'Early medieval Deccan', architecture:'Rock-cut Buddhist caves', type:'Sacred cave complex',
    summary:'A protected group of rock-cut Buddhist shrines overlooking the city. Their sculptural programme and early date make them a major sacred-heritage layer in Sambhajinagar beyond the better-known Ellora complex.',
    notes:'Included because the atlas covers sacred heritage, not only active Hindu temples.',
    sources:[['District Sambhajinagar · History','https://aurangabad.gov.in/history/']]
  },
  {
    id:'ghrishneshwar', name:'Shri Ghrishneshwar Jyotirlinga', deity:'Shiva', tradition:'Hindu',
    lat:20.024886, lng:75.168714, area:'Verul · Ellora', taluka:'Khuldabad',
    dateYear:1750, dateLabel:'Present form substantially 18th century', ageBasis:'Reconstruction / restoration period', confidence:'High', score:94,
    era:'Maratha / Holkar restoration', architecture:'Red-stone temple · Hemadpanti influence', type:'Jyotirlinga pilgrimage temple',
    summary:'One of the twelve Jyotirlinga shrines and a living pilgrimage centre beside Ellora. The site has older sacred traditions, while the surviving temple is strongly associated with later Maratha-period rebuilding and Ahilyabai Holkar’s restoration patronage.',
    notes:'The atlas separates the antiquity of the sacred site from the date of the present structure.',
    sources:[
      ['Maharashtra Tourism · Ghrishneshwar','https://maharashtratourism.gov.in/temple/ghrishneshwar/'],
      ['District Sambhajinagar · Ellora & Ghrishneshwar','https://aurangabad.gov.in/en/tourist-place/ellora-leni-and-ghrishneshwar-jyotirlinga-temple-verul/']
    ]
  },
  {
    id:'khandoba-satara', name:'Shri Khandoba Temple · Satara', deity:'Khandoba / Shiva', tradition:'Hindu',
    lat:19.8408125, lng:75.3245625, area:'Satara Parisar · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:1766, dateLabel:'Older stone shrine · restored in 1766', ageBasis:'Documented restoration marker', confidence:'Medium', score:82,
    era:'Pre-modern / Maratha restoration', architecture:'Stone Hemadpanti-style temple', type:'Historic active temple',
    summary:'A historic Khandoba shrine at the foot of the Satara hills. Local archaeological reporting records a major restoration by Ahilyabai Holkar in 1766 and notes protected-heritage importance.',
    notes:'Its original fabric is older than the 1766 restoration date, but a precise construction year is not asserted here.',
    sources:[['TV9 Marathi · archaeological survey report','https://www.tv9marathi.com/maharashtra/aurangabad/archaeological-department-to-prepare-dpr-for-restoration-of-khandoba-temple-in-satara-aurangabad-566470.html']]
  },
  {
    id:'bhadra-maruti', name:'Shri Bhadra Maruti Temple', deity:'Hanuman', tradition:'Hindu',
    lat:20.0096875, lng:75.1965625, area:'Khuldabad', taluka:'Khuldabad',
    dateYear:1965, dateLabel:'Current marble temple · 1960s', ageBasis:'Current structure', confidence:'High', score:74,
    era:'Modern structure · older devotional tradition', architecture:'White-marble active temple', type:'Pilgrimage temple',
    summary:'A major Hanuman pilgrimage shrine known for the rare reclining “Bhava Samadhi” image. Its devotional tradition is older, while the present marble temple was built in the 1960s.',
    notes:'Historical value reflects cultural significance as well as physical age.',
    sources:[
      ['Incredible India · Bhadra Maruti','https://www.incredibleindia.gov.in/en/maharashtra/chhatrapati-sambhaji-nagar/bhadra-maruti'],
      ['Bhadra Maruti Mandir · temple history','https://bhadramaruti.com/']
    ]
  },
  {
    id:'kachner-jain', name:'Chintamani Parshvanath Jain Atishaya Kshetra', deity:'Parshvanath', tradition:'Jain',
    lat:19.7011875, lng:75.4518125, area:'Kachner', taluka:'Chhatrapati Sambhajinagar district',
    dateYear:1775, dateLabel:'Temple tradition established around 250 years ago', ageBasis:'Traditional history of idol discovery', confidence:'Medium', score:79,
    era:'Late 18th century tradition', architecture:'Digambar Jain pilgrimage complex', type:'Jain Atishaya Kshetra',
    summary:'A significant Digambar Jain pilgrimage site centred on Chintamani Parshvanath. Jain tirth sources consistently describe the principal idol as having been recovered from an underground chamber roughly 250 years ago.',
    notes:'The age shown follows the documented pilgrimage tradition, not a precisely dated archaeological building phase.',
    sources:[
      ['Bharat Varshiya Jain Tirth Kshetra directory','https://jaintirthkshetra.com/tirth_detail.php?tempId=MTYz'],
      ['Encyclopedia of Jainism · Kachner Ji','https://encyclopediaofjainism.com/?p=119270']
    ]
  },
  {
    id:'eknath-samadhi', name:'Sant Eknath Maharaj Samadhi Mandir', deity:'Sant Eknath', tradition:'Warkari',
    lat:19.4761875, lng:75.3840625, area:'Paithan · Godavari precinct', taluka:'Paithan',
    dateYear:1599, dateLabel:'Sacred association from 1599 · structure altered later', ageBasis:'Date of Sant Eknath’s samadhi tradition', confidence:'Medium', score:87,
    era:'Late 16th century Bhakti tradition', architecture:'Living samadhi / pilgrimage shrine', type:'Warkari pilgrimage shrine',
    summary:'Paithan’s major Warkari pilgrimage site associated with Sant Eknath Maharaj. The atlas uses 1599 as the start of the samadhi tradition while avoiding the claim that every part of the present building dates to that year.',
    notes:'Location is mapped to the samadhi precinct in Paithan.',
    sources:[['Google Maps place / local pilgrimage listing','https://www.google.com/maps/search/?api=1&query=Shree+Sant+Eknath+Maharaj+Samadhi+Mandir+Paithan']]
  },
  {
    id:'eknath-wada', name:'Eknath Maharaj Temple Wada', deity:'Sant Eknath', tradition:'Warkari',
    lat:19.4706875, lng:75.3850625, area:'Nath Galli · Paithan', taluka:'Paithan',
    dateYear:1600, dateLabel:'16th-century association · present fabric later', ageBasis:'Historic association', confidence:'Medium', score:80,
    era:'Bhakti / early modern Maharashtra', architecture:'Historic wada-temple precinct', type:'Heritage pilgrimage site',
    summary:'A temple-wada precinct closely associated with Sant Eknath’s life in Paithan. Its value comes from the continuity of the Eknath tradition and the historic urban fabric of Nath Galli.',
    notes:'Approximate age reflects the historical association, not an assertion that the whole current structure is original.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Eknath+Maharaj+Temple+Wada+Paithan']]
  },
  {
    id:'munisuvratnath-paithan', name:'Shri 1008 Munisuvratnath Digambar Jain Atishaya Kshetra', deity:'Munisuvratnath', tradition:'Jain',
    lat:19.4729375, lng:75.3846875, area:'Jainpura · Paithan', taluka:'Paithan',
    dateYear:null, dateLabel:'Ancient pilgrimage tradition · structure date undocumented', ageBasis:'No reliable construction year found', confidence:'Medium', score:76,
    era:'Undated living Jain tradition', architecture:'Digambar Jain temple', type:'Jain Atishaya Kshetra',
    summary:'A major Digambar Jain tirth in ancient Paithan (Pratishthan), dedicated to the 20th Tirthankara Munisuvratnath. The pilgrimage tradition is described as ancient, but this atlas leaves the building age blank without firm architectural dating.',
    notes:'The registered trust dates from 1962, which should not be confused with the age of the pilgrimage tradition.',
    sources:[['Maharashtra Minority Development · trust summary','https://mddtrust.mahaonline.gov.in/InstituteDetails/TrustSummary.aspx?str=%2Fsho7NhKfh7LPKzAUkXhezfP%2FOMmFnEL']]
  },
  {
    id:'parshwanath-pahad', name:'Parshwanath Digambar Jain Pahad Temple', deity:'Parshvanath', tradition:'Jain',
    lat:20.0351875, lng:75.1733125, area:'Verul hills', taluka:'Khuldabad',
    dateYear:null, dateLabel:'Historic Jain pilgrimage setting · date undocumented', ageBasis:'No reliable construction year found', confidence:'Medium', score:72,
    era:'Living Jain pilgrimage tradition', architecture:'Hill temple / Atishaya Kshetra', type:'Jain hill temple',
    summary:'A revered Digambar Jain hill shrine in the Verul landscape, closely connected geographically with Ellora’s Jain heritage. Its exact construction chronology is not presented as settled.',
    notes:'Mapped separately from Ellora Cave 30 and the modern Jain mandir near the highway.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Parshwanath+Digambar+Jain+Pahad+Temple+Verul']]
  },
  {
    id:'parshwanath-verul', name:'Shri Parshwanath Digambar Jain Mandir · Verul', deity:'Parshvanath', tradition:'Jain',
    lat:20.0244375, lng:75.1613125, area:'Verul', taluka:'Khuldabad',
    dateYear:null, dateLabel:'Current temple date not established', ageBasis:'Undocumented', confidence:'Low', score:58,
    era:'Modern living temple', architecture:'Digambar Jain temple campus', type:'Active Jain temple',
    summary:'A well-used Jain temple campus near the Ellora pilgrimage circuit, often serving visitors to the wider Jain cave heritage. No reliable construction date is asserted in this catalogue.',
    notes:'Useful as a living religious stop even though its historical chronology is unclear.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Shri+Parshwanath+Digambar+Jain+Mandir+Verul']]
  },
  {
    id:'laksha-vinayak', name:'Shree Laksha Vinayak Ganapati · Verul', deity:'Ganesha', tradition:'Hindu',
    lat:20.0218125, lng:75.1670625, area:'Verul', taluka:'Khuldabad',
    dateYear:null, dateLabel:'Construction date undocumented', ageBasis:'Undocumented', confidence:'Low', score:56,
    era:'Living pilgrimage tradition', architecture:'Active Ganesh temple', type:'Pilgrimage temple',
    summary:'A Ganesh shrine in the Verul pilgrimage cluster, commonly visited alongside Ghrishneshwar and Ellora. Its value here is primarily devotional and geographic rather than archaeological.',
    notes:'Age deliberately left unknown.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Laksha+Vinayak+Ganapati+Temple+Verul']]
  },
  {
    id:'sulibhanjan-datta', name:'Sulibhanjan Datta Mandir', deity:'Dattatreya', tradition:'Hindu',
    lat:19.9774375, lng:75.1521875, area:'Sulibhanjan hills', taluka:'Khuldabad',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:58,
    era:'Living hill pilgrimage', architecture:'Hilltop shrine', type:'Pilgrimage temple',
    summary:'A hilltop Dattatreya pilgrimage stop in the scenic Sulibhanjan landscape west of Khuldabad. Public sources support the active shrine and pilgrimage setting, but not a firm construction date.',
    notes:'Included for geographic completeness of the district’s pilgrimage circuit.',
    sources:[['Google Maps area','https://www.google.com/maps/search/?api=1&query=Sulibhanjan+Datta+Mandir+Maharashtra']]
  },
  {
    id:'mhasoba-sillod', name:'Mhasoba Maharaj Mandir · Sillod', deity:'Mhasoba', tradition:'Hindu',
    lat:20.2960625, lng:75.6473125, area:'Sillod', taluka:'Sillod',
    dateYear:null, dateLabel:'Locally described as ancient · no verified date', ageBasis:'Undocumented', confidence:'Low', score:61,
    era:'Local folk-deity tradition', architecture:'Active regional temple', type:'Local pilgrimage temple',
    summary:'A well-known Sillod-region shrine to Mhasoba, a guardian deity in Maharashtrian folk practice. Visitor accounts repeatedly describe it as old, but a reliable construction date was not found, so the age remains blank.',
    notes:'A good example of why the map separates local tradition from verified chronology.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Mhasoba+Maharaj+Mandir+Sillod']]
  },
];
