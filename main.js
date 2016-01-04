Archivi = new Meteor.Collection('archivi');

Archivi.attachSchema(new SimpleSchema({
  livello: {
    type: String,
	allowedValues:["archivio","fondo","serie","fascicolo","unità"],
    label: "Livello di descrizione",
    max: 200
  },
  titolo: {
    type: String,
    label: "Titolo o denominazione",
  },
  fapartedi: {
    type: String,
    label: "Fa parte di:",
	optional: true
  },
  segnatura: {
    type: String,
    label: "Segnatura o codice identificativo",
    min: 0
  },

    data: {
    type: String,
    label: "Data/e",
  },
    consistenza: {
    type: String,
    label: "Consistenza e supporto dell'unità di descrizione (quantità, volume, dimensione fisica)",
  },
  produttore: {
    type: String,
    label: "Soggetto produttore",
    max: 1000
  }
}));




