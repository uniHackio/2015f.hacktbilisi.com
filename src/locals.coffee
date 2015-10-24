args2Obj = ->
  keys = Array::slice.apply(arguments)
  ->
    values = Array::slice.apply(arguments)
    keys.reduce ((result, key, index) ->
      result[key] = values[index]
      result
    ), {}

group = args2Obj("name", "sponsors")
sponsor = partner = args2Obj("name", "href", "image")
language = args2Obj("url", "title")
person = args2Obj("id", "name", "position", "image", "links")
link = args2Obj("icon", "on", "href")
t = (en,ka)->
  en:en, ka:ka || en

sponsorGroups = [
  group('giga',[
    sponsor('BasisBank','http://www.basisbank.ge/','/images/sponsors/basisbank.png')
  ]),
  group('mega',[
    sponsor("Alta Software", "http://altasoft.ge", "/images/sponsors/altasoft.png")
    sponsor("GAU", "http://gau.edu.ge/", "/images/sponsors/gau.jpg")
    sponsor("APEX", "http://apex.ge", "/images/sponsors/apex.png")
    sponsor("Mobility", "http://mobility.ge", "/images/sponsors/mobility.png")
    sponsor("JetBrains", "http://jetbrains.com", "/images/sponsors/jetbrains.png")
  ]),
  group('kilo',[
    sponsor("B.A.G", "http://bag.ge", "/images/sponsors/bag.png")
    sponsor("AZRY", "http://azry.com", "/images/sponsors/azri.png")
    sponsor("Money Movers", "http://mm.ge", "/images/sponsors/mm.png")
  ])
]


mediaPartners = [
  partner('ideahub',"http://ideahub.ge","/images/sponsors/idea.png")
  partner('Marketer',"http://marketer.ge","/images/sponsors/marketer.png")
  partner('tabula',"http://tabula.ge","/images/sponsors/tabula.png")
]

partners = [
  partner('GitHub','http://github.com','/images/sponsors/github.png')
]

team = [
  person("gtkesh", t("Giorgi Tkeshelashvili"), t("Co-Director"), "/images/team/gtkesh.jpg", [
    link("facebook", "facebook", "https://www.facebook.com/gtkesh")
    link("twitter", "twitter", "https://twitter.com/gtkesh")
    link("google-plus", "google+", "https://plus.google.com/u/0/+GiorgiTkeshelashvili")
    link("github", "github", "https://github.com/gtkesh")
  ])
  person("safareli", t("Irakli Safareli"), t("Co-Director"), "/images/team/safareli.jpg", [
    link("twitter", "twitter", "https://twitter.com/safareli")
    link("google-plus", "google+", "https://google.com/+IrakliSafareli")
    link("youtube-play", "youtube", "https://www.youtube.com/isafareli")
    link("linkedin", "linkedin", "https://www.linkedin.com/in/safareli")
    link("github", "github", "https://github.com/safareli")
  ])
  person("otarza", t("Otar Zakalashvili"), t("Director of Operations"), "/images/team/otarza.jpeg", [
    link("facebook", "facebook", "https://www.facebook.com/otarza")
    link("twitter", "twitter", "https://twitter.com/otarza")
    link("linkedin", "linkedin", "https://www.linkedin.com/pub/otar-zakalashvili/15/3a8/547/")
    link("google-plus", "google+", "https://plus.google.com/109734750145229671001")
  ])
  person("demonno", t("Demur Nodia"), t("Special Ops"), "/images/team/demonno.jpg", [
    link("facebook", "facebook", "https://www.facebook.com/demuri.nodia")
    link("twitter", "twitter", "https://twitter.com/demurnodia")
    link("google-plus", "google+", "https://plus.google.com/u/0/+DemurNodia")
    link("youtube-play", "youtube", "https://www.youtube.com/demurnodia")
  ])
]
speakers = [
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens.'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ]),
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens.'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ]),
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens.'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ]),
  person('rimnadze', t('Rezo Imnadze', 'რეზო იმნაძე'), t('Qarva'), '/images/speakers/imnadze.jpeg', [
    
  ]),
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens.'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ]),
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens.'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ]),
  person('shgiorgobiani', t('Shota Giorgobiani', 'შოთა გიორგობიანი'), t('Deputy Director at UGT.'), '/images/speakers/giorgobiani.jpg', [
    link('twitter', 'twitter', 'https://twitter.com/shgiorgobiani')
  ]),
  person('nnanitashvili', t('Ninutsa Nanitashvili', 'ნინუცა ნანიტაშვილი'), t('Manager at GDG Tbilisi.'), '/images/speakers/nanitashvili.jpg', [
    link('twitter', 'twitter', 'https://twitter.com/NinoNanitashvil')
  ])
]



module.exports = 
  data:
    sponsorGroups: sponsorGroups
    mediaPartners: mediaPartners
    partners: partners
    speakers: speakers
    team: team
  defaultLanguageKey: 'en'
  locals:
    en:
      'META_SITE_URL': 'http://hacktbilisi.com'
      'META_TITLE': 'hackTBILISI'
      'META_SITE_NAME': 'hackTbilisi.com'
      'META_DESCRIPTION': 'Uniting Hackers from Europe and Asia, Tbilisi, Georgia , Dec 19-21 .uniHack',

      'Stay Tuned!': 'Stay Tuned!'
      'Your Email': 'Your Email'
      'Just a moment': 'Just a sec'
      'We\'ll be in touch!': 'We\'ll be in touch!'
      'dec':'dec'
      'contact us':'contact us'
      'nextLanguage': language('/','GEO')
      'languagePrefix': 'en'
      '%s on %s': '%s on %s'
      'Register': 'Register'
      'კითხვები': 'F.A.Q'
      'პარტნიორები': 'Partners'
      'მედია პარტნიორები': 'Media Partners'
      'სპონსორები': 'Sponsors'
      'Free university of Tbilisi': 'Free university of Tbilisi'
      'განრიგი': 'Agenda'
      'გუნდი': 'Team'
      'სპიკერები':'Speakers'
    ka:
      'განრიგი': 'განრიგი'
      'გუნდი': 'გუნდი'
      'სპიკერები':'სპიკერები'
      'Free university of Tbilisi': 'თავისუფალი უნივერსიტეტი'
      'პარტნიორები': 'პარტნიორები'
      'მედია პარტნიორები': 'მედია პარტნიორები'
      'სპონსორები': 'სპონსორები'
      'კითხვები': 'კითხვები'
      'Register': 'რეგისტრაცია'
      'dec':'დეკ'
      'contact us':'დაგვიკავშირდით'
      'nextLanguage': language('/en','ENG')
      'languagePrefix': ''
      '%s on %s': '%s %s-ზე'
      'Stay Tuned!': 'გამოიწერე!'
      'Your Email': 'თქვენი ელ-ფოსტა'
      'Just a moment': 'იტვირთება'
      'We\'ll be in touch!': 'დაგიკავშირდებით!'
