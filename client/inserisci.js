Template.inserisciElemento.events({
  
  'click #chiudi' : function(e) {
	e.preventDefault();
	
    Modal.hide('inserisci');
  }
});