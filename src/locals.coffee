args2Obj = ->
  keys = Array::slice.apply(arguments)
  ->
    values = Array::slice.apply(arguments)
    keys.reduce ((result, key, index) ->
      result[key] = values[index]
      result
    ), {}

group = args2Obj("name", "items")
sponsor = partner = args2Obj("name", "href", "image")
language = args2Obj("url", "title")
person = args2Obj("id", "name", "position", "image", "links", "title")
link = args2Obj("icon", "on", "href")
t = (en,ka)->
  en:en, ka:ka || en

sponsorGroups = [
  group('peta',[
    sponsor("Shift", "http://driveshift.com/", "/images/sponsors/shift.svg")
  ]),
  group('tera',[
    sponsor("Zoomer", "http://zoommer.ge/", "/images/sponsors/zoommer.svg")
  ]),
  group('giga',[
    sponsor("Redberry", "http://redberry.ge/", "/images/sponsors/redberry.svg")
  ]),
  group('mega',[
    sponsor("Webintelligence", "http://webintelligence.de", "/images/sponsors/w3i.svg")
    sponsor("Alta Software", "http://altasoft.ge", "/images/sponsors/altasoftware.svg")
    sponsor("Vere Loft", "http://vereloft.ge", "/images/sponsors/vere.svg")
    sponsor("AzRy", "http://azry.com", "/images/sponsors/azry.svg")
    sponsor("Vivus.ge", "http://vivus.ge", "/images/sponsors/vivus.svg")
    sponsor("Innotec", "http://innotec.ge", "/images/sponsors/innotec.svg")
  ]),
  group('kilo',[
    sponsor("JetBrains", "http://jetbrains.com", "/images/sponsors/jetbrains.svg")
    sponsor("Social Sharks", "http://socialsharks.ge", "/images/sponsors/socialsharks.svg")
  ])
]


mediaPartners = [
  sponsor("DOU hackathon", "http://hack.dou.ua/", "/images/sponsors/DOU_Hackaton_revolution_big.svg")
  sponsor("IT KPI", "http://itkpi.pp.ua ", "/images/sponsors/it_kpi.svg")
  sponsor("AGHacks", "http://aghacks.com ", "/images/sponsors/aghacks.svg")
  sponsor("Marketer", "http://marketer.ge ", "/images/sponsors/marketer.svg")
  sponsor("ტაბულა", "http://www.tabula.ge ", "/images/sponsors/tabula.svg")
]

partners = [
  group('kilo',[
    sponsor("Major League Hacking", "http://mlh.io", "/images/sponsors/mlh.svg")
    sponsor("Bloomberg Business", "http://bloomberg.com", "/images/sponsors/bloomberg.svg")
  ])
  group('kilo',[
    sponsor("UG Lemondo Trainings", "http://trainings.edu.ge", "/images/sponsors/ug_lemondo.svg")
  ])
  group('kilo',[
    sponsor("Dash at HackTbilisi", "https://kapeli.com/hacktbilisi", "/images/sponsors/dash.png")
    sponsor("Microsoft", "https://www.microsoft.com", "/images/sponsors/microsoft.svg")
    sponsor("TBC Bank", "http://tbcbank.ge", "/images/sponsors/tbc.svg")
    sponsor("KISShack", "https://www.facebook.com/KISShack-626397297497066", "/images/sponsors/kisshack.svg")
    sponsor("Educare Georgia", "http://educaregeorgia.org", "/images/sponsors/educare.svg")
  ])
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
  person('gmamaladze', t('George Mamaladze', 'გიორგი მამალაძე'), t('Architect at Siemens'), '/images/speakers/mamaladze.jpeg', [
    link('twitter', 'twitter', 'https://twitter.com/gmamaladze')
    link('google-plus', 'google+', 'https://google.com/+GeorgeMamaladze')
  ], "Basics of Scalable Design"),
  person('shgiorgobiani', t('Shota Giorgobiani', 'შოთა გიორგობიანი'), t('Software Developer'), '/images/speakers/giorgobiani.jpg', [
    link('twitter', 'twitter', 'https://twitter.com/shgiorgobiani')
    link('facebook', 'facebook', 'https://www.facebook.com/shota.giorgobiani')
    link("linkedin", "linkedin", "https://www.linkedin.com/in/shotagiorgobiani")
  ], "More than Code"),
  person('ratigelashvili', t('Rati Gelashvili', 'რატი გელაშვილი'), t('Ph.D. Student at MIT, Multicore Algorithmics Group'), '/images/speakers/rati.jpg', [
    link('paper-plane', 'mit.edu', 'http://web.mit.edu/gelash/www/')
    link('facebook', 'facebook', 'https://www.facebook.com/rati.gelashvili')
  ], "Multicore Synchronization"),
  person('ioseb', t('Ioseb Dzmanashvili', 'იოსებ ძმანაშვილი'), t('Ph.D, Software Architect at AzRy'), '/images/speakers/ioseb.jpg', [
    link('twitter', 'twitter', 'http://twitter.com/iosebi')
    link('github', 'github', 'http://github.com/ioseb ')
  ], "Immutability and Persistent Data Structures with ES6"),
  person('chekurishvili', t('Otar Chekurishvili', 'ოთარ ჩეკურიშვილი'), t('Full Stack software developer'), '/images/speakers/chekurishvili.jpg', [
    link('paper-plane', 'otar.me', 'http://otar.me/')
    link('linkedin', 'linkedin', 'http://www.linkedin.com/in/otarch')
    link('twitter', 'twitter', 'http://twitter.com/otarch')
    link('github', 'github', 'https://github.com/otar')
  ], "Back to Basics with Static Websites"),
  person('guramkajaia', t('Guram Kajaia', 'გურამ ქაჯაია'), t('Software Developer at SHIFT'), '/images/speakers/kajaia.jpg', [
    link('linkedin', 'linkedin', 'https://www.linkedin.com/in/guramkajaia')
    link('twitter', 'twitter', 'https://twitter.com/guramkajaia')
  ], "Life of a Software Generalist")
]

host = sponsor("Kakha Bendukidze University Campus", "http://www.freeuni.edu.ge/", "/images/sponsors/campus.svg")

module.exports =
  data:
    sponsorGroups: sponsorGroups
    mediaPartners: mediaPartners
    partners: partners
    speakers: speakers
    team: team
    host: host
  defaultLanguageKey: 'en'
  locals:
    en:
      'META_SITE_URL': 'http://2015f.hacktbilisi.com'
      'META_TITLE': 'HackTbilisi 2015 Fall'
      'META_SITE_NAME': 'HackTbilisi.com'
      'META_DESCRIPTION': 'HackTBILISI - #HackathonThatLovesYou - DEC 18-20 - Free University, Tbilisi, Georgia',

      'Stay Tuned!': 'Stay Tuned!'
      'Your Email': 'Your Email'
      'Just a moment': 'Just a sec'
      'We\'ll be in touch!': 'We\'ll be in touch!'
      'dec':'dec'
      'contact us':'contact us'
      'nextLanguage': language('/','GEO')
      'languagePrefix': 'en'
      'languageKey': 'en'
      '%s on %s': '%s on %s'
      'Register': 'Register'
      'კითხვები': 'F.A.Q'
      'პარტნიორები': 'Partners'
      'მედია პარტნიორები': 'Media Partners'
      'სპონსორები': 'Sponsors'
      'Free university of Tbilisi': 'Free university of Tbilisi'
      'განრიგი': 'Agenda'
      'გუნდი': 'Team'
      'location': 'Location'
      'სპიკერები':'Speakers'
      'hours' : 'Hours'
      'hackers' : 'Hackers'
      'date' : 'December 18-20'
      'want_to_be_partner' : 'Want to partner with us?'
      'want_to_be_speaker' : 'Want to be a speaker?'
      'register_url' : 'https://hacktbilisi.typeform.com/to/v1fGHo'
      'მასპინძელი' : 'Host'
    ka:
      'მასპინძელი' : 'მასპინძელი'
      'register_url' : 'https://hacktbilisi.typeform.com/to/nfRq9x'
      'want_to_be_speaker' : 'გსურთ იყოთ სპიკერი?'
      'want_to_be_partner' : 'გსურთ ჩვენთან პარტნიორობა?'
      'hours' : 'საათი'
      'hackers' : 'მონაწილე'
      'date' : '18-20 დეკემბერი'
      'განრიგი': 'განრიგი'
      'გუნდი': 'გუნდი'
      'location': 'ადგილი'
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
      'languageKey': 'ka'
      '%s on %s': '%s %s-ზე'
      'Stay Tuned!': 'გამოიწერე!'
      'Your Email': 'თქვენი ელ-ფოსტა'
      'Just a moment': 'იტვირთება'
      'We\'ll be in touch!': 'დაგიკავშირდებით!'
