const templeDataB = [
  {
    id:'mahadev-ambewadi', name:'Mahadev Mandir · Ambewadi', deity:'Shiva', tradition:'Hindu',
    lat:19.7333125, lng:75.0260625, area:'Ambewadi · Gangapur', taluka:'Gangapur',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:42,
    era:'Local living temple', architecture:'Local Shiva temple', type:'Neighbourhood / village temple',
    summary:'A local Mahadev temple in the Gangapur area, mapped to extend the atlas beyond the city–Ellora–Paithan axis. Public information supports the location and active worship, not a construction chronology.',
    notes:'Historical score is intentionally modest until stronger evidence is found.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Mahadev+Mandir+Ambewadi+Gangapur+Maharashtra']]
  },
  {
    id:'shantinath-city', name:'Shri 1008 Shantinath Digambar Jain Temple', deity:'Shantinath', tradition:'Jain',
    lat:19.8863125, lng:75.3350625, area:'Shahgunj · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:52,
    era:'Living urban Jain tradition', architecture:'Digambar Jain temple', type:'City temple',
    summary:'A prominent central-city Digambar Jain temple serving the Sambhajinagar Jain community. The atlas maps it as a living religious institution rather than assigning an unsupported historical age.',
    notes:'Further archival research can raise or revise its historical score.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Shantinath+Digambar+Jain+Temple+Shahgunj+Aurangabad']]
  },
  {
    id:'varad-ganesh', name:'Shri Varad Ganesh Mandir', deity:'Ganesha', tradition:'Hindu',
    lat:19.8788125, lng:75.3180625, area:'Samarth Nagar · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Modern city temple · date not established', ageBasis:'Undocumented', confidence:'Low', score:45,
    era:'Modern city devotion', architecture:'Urban Ganesh temple', type:'City temple',
    summary:'A popular Ganesh temple in Samarth Nagar and an important everyday devotional stop for city residents. It is mapped for coverage, while its age remains intentionally unclaimed.',
    notes:'High current devotional value does not automatically imply high historical value.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Varad+Ganesh+Mandir+Samarth+Nagar+Aurangabad']]
  },
  {
    id:'bhakti-ganesh', name:'Shree Bhakti Ganesh Mandir', deity:'Ganesha', tradition:'Hindu',
    lat:19.8831875, lng:75.3655625, area:'CIDCO N-1 · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Modern city temple · date not established', ageBasis:'Undocumented', confidence:'Low', score:46,
    era:'Modern city devotion', architecture:'Urban Ganesh temple', type:'City temple',
    summary:'A major neighbourhood Ganesh temple in CIDCO N-1, noted by visitors for its distinctive black-stone Ganesh murti and active festival life.',
    notes:'Mapped as a living temple; no construction year is asserted.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Bhakti+Ganesh+Mandir+CIDCO+Aurangabad']]
  },
  {
    id:'ashtavinayak-usmanpura', name:'AshtaVinayak Temple · New Usmanpura', deity:'Ganesha', tradition:'Hindu',
    lat:19.8708125, lng:75.3316875, area:'New Usmanpura · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Modern neighbourhood temple', ageBasis:'Undocumented', confidence:'Low', score:40,
    era:'Modern city devotion', architecture:'Urban Ganesh temple', type:'City temple',
    summary:'A resident-oriented Ganesh temple in New Usmanpura. Included to make the atlas useful for everyday temple discovery as well as heritage exploration.',
    notes:'Historical value score is low because firm antiquity evidence has not been established.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=AshtaVinayak+Temple+New+Usmanpura+Aurangabad']]
  },
  {
    id:'ganapathi-shahgunj', name:'Shree Sansthan Ganapathi Swamy Alayam', deity:'Ganesha', tradition:'Hindu',
    lat:19.8860625, lng:75.3356875, area:'Raja Bazar · Shahgunj', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Long-standing city shrine · exact date undocumented', ageBasis:'Undocumented', confidence:'Low', score:50,
    era:'Urban devotional tradition', architecture:'Compact city temple', type:'City temple',
    summary:'A traditional Ganesh shrine in the historic Raja Bazar–Shahgunj area, closely woven into local Ganesh festival life and the old-city urban fabric.',
    notes:'Its old-city context raises research interest, but the score avoids assuming age from location alone.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Ganapathi+Swamy+Alayam+Raja+Bazar+Aurangabad']]
  },
  {
    id:'ganesh-maharaj', name:'Shri Ganesh Maharaj Mandir', deity:'Ganesha', tradition:'Hindu',
    lat:19.8755625, lng:75.3243125, area:'Shiwaji Colony · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:43,
    era:'Modern city devotion', architecture:'Multi-shrine city temple', type:'City temple',
    summary:'A neighbourhood Ganesh temple known locally for a right-trunk Ganesh image and multiple shrines within the complex.',
    notes:'Mapped as an active city temple rather than a dated monument.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Shri+Ganesh+Maharaj+Mandir+Shiwaji+Colony+Aurangabad']]
  },
  {
    id:'siddhivinayak-begumpura', name:'Shree Siddhivinayak Ganesh Mandir', deity:'Ganesha', tradition:'Hindu',
    lat:19.8960625, lng:75.3178125, area:'Jaisingpura · Begumpura', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:42,
    era:'Modern city devotion', architecture:'Urban Ganesh temple', type:'City temple',
    summary:'A local Siddhivinayak shrine in the Begumpura–Jaisingpura area, mapped for city-level completeness and searchable everyday use.',
    notes:'No reliable historical construction date found.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Siddhivinayak+Ganesh+Mandir+Begumpura+Aurangabad']]
  },
  {
    id:'durga-sindhi-colony', name:'Jay Durga Mata Mandir', deity:'Durga', tradition:'Hindu',
    lat:19.8730625, lng:75.3453125, area:'Sindhi Colony · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:40,
    era:'Modern city devotion', architecture:'Neighbourhood Durga temple', type:'City temple',
    summary:'A community Durga temple near Jawahar Colony Road, especially active around Navratri and local devotional events.',
    notes:'Its cultural activity is captured separately from historical-age evidence.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Jay+Durga+Mata+Mandir+Sindhi+Colony+Aurangabad']]
  },
  {
    id:'ahinsa-shiv-ganesh', name:'Ahinsa Nagar Shiv-Ganesh Temple', deity:'Shiva / Ganesha', tradition:'Hindu',
    lat:19.8790625, lng:75.3449375, area:'Ahinsa Nagar · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:39,
    era:'Modern city devotion', architecture:'Neighbourhood multi-shrine temple', type:'City temple',
    summary:'A calm Shiv–Ganesh neighbourhood temple just off Jalna Road, with a garden-like community setting.',
    notes:'Mapped for utility; historical score remains conservative.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Ahinsa+Nagar+Shiv+Ganesh+Temple+Aurangabad']]
  },
  {
    id:'datta-deolali', name:'Shree Datta Mandir · Deolali Chowk', deity:'Dattatreya', tradition:'Hindu',
    lat:19.8500625, lng:75.3549375, area:'Satara Deolai · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:43,
    era:'Modern city devotion', architecture:'Urban Datta temple', type:'City temple',
    summary:'A well-used Dattatreya temple on the Beed Bypass corridor, serving regular worship and larger devotional gatherings.',
    notes:'Historical chronology is not yet documented in the atlas.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Datta+Mandir+Deolali+Chowk+Aurangabad']]
  },
  {
    id:'datta-banjara', name:'Datta Mandir · Banjara Colony', deity:'Dattatreya', tradition:'Hindu',
    lat:19.8790625, lng:75.3339375, area:'Banjara Colony · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:36,
    era:'Modern city devotion', architecture:'Small neighbourhood shrine', type:'City temple',
    summary:'A small central-city Datta shrine used for everyday prayer and neighbourhood worship.',
    notes:'Included for searchable coverage; historical evidence is limited.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Datta+Mandir+Banjara+Colony+Aurangabad']]
  },
  {
    id:'datta-ulkanagari', name:'Shri Datta Temple · Shrikrishna Nagar', deity:'Dattatreya', tradition:'Hindu',
    lat:19.8604375, lng:75.3379375, area:'Ulkanagari · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:36,
    era:'Modern city devotion', architecture:'Small neighbourhood shrine', type:'City temple',
    summary:'A quiet Datta temple in the Ulkanagari–Shrikrishna Nagar area, valued primarily for local daily worship.',
    notes:'No antiquity claim is made.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Datta+Temple+Shrikrishna+Nagar+Aurangabad']]
  },
  {
    id:'sinhagad-ganesh', name:'Sinhagad Ganesh Mandir', deity:'Ganesha', tradition:'Hindu',
    lat:19.8845625, lng:75.3581875, area:'CIDCO N-6 · City', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:37,
    era:'Modern city devotion', architecture:'Neighbourhood Ganesh temple', type:'City temple',
    summary:'A community Ganesh temple in N-6 CIDCO noted for its greenery, open space and calm devotional atmosphere.',
    notes:'Mapped as a local place of worship; date remains unknown.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Sinhagad+Ganesh+Mandir+CIDCO+Aurangabad']]
  },
  {
    id:'gurudev-datta-harsul', name:'Shree Gurudev Datta Temple · Harsul', deity:'Dattatreya', tradition:'Hindu',
    lat:19.9324375, lng:75.3571875, area:'Harsul · City edge', taluka:'Chhatrapati Sambhajinagar',
    dateYear:null, dateLabel:'Date undocumented', ageBasis:'Undocumented', confidence:'Low', score:44,
    era:'Living Datta tradition', architecture:'Local temple', type:'Pilgrimage / local temple',
    summary:'A Datta shrine in Harsul with strong local devotional activity, especially around Datta Jayanti.',
    notes:'Current popularity is documented more clearly than historical chronology.',
    sources:[['Google Maps place','https://www.google.com/maps/search/?api=1&query=Gurudev+Datta+Temple+Harsul+Aurangabad']]
  }
];

const temples = [...templeDataA, ...templeDataB];
