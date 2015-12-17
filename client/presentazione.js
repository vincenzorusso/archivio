  Template.elencoelementi.helpers({
	'elencoArchivi': function(){
        var elencoArchivi =  Archivi.find({livello: 'archivio'});
        return elencoArchivi;
	},
	'elencoFondi': function(){
		livelloSuperiore = this.titolo;
		var elencoFondi = Archivi.find({livello:'fondo', fapartedi: livelloSuperiore});
        return elencoFondi;
	},
       
	   'elencoSerie': function(){
			livelloSuperiore = this.titolo;
			var elencoSerie = Archivi.find({livello:'serie', fapartedi: livelloSuperiore});
            return elencoSerie;
		},
		
		'elencoFascicoli': function(){
			livelloSuperiore = this.titolo;
			var elencoFascicoli = Archivi.find({livello:'fascicolo', fapartedi: livelloSuperiore});
            return elencoFascicoli;
		},
		
		'elencoUnita': function(){
			livelloSuperiore = this.titolo;
			var elencoUnita = Archivi.find({livello:'unità', fapartedi: livelloSuperiore});
            return elencoUnita;
		}
        
    });
	
	Template.titoloelementi.rendered = function() {
   $('a[rel=tooltip]').tooltip() //initialize all tooltips in this template
};
Template.titoloelementi.helpers({
       'selectedClass': function(){
            var elementoid = this._id;
            var elementoselezionato = Session.get('elementoselezionato');
            if(elementoid == elementoselezionato){
                return "selected"
            }}
    });

Template.titoloelementi.events({
       'click #modifica': function(e) {
			e.preventDefault();
			Session.set('elementoselezionato', this._id);
			Modal.show('modificaElemento');
		},
		
		'click #inserisci': function(e) {
			e.preventDefault();
			Session.set('elementoselezionato', this._id);
			Modal.show('inserisciElemento');
		}
});

