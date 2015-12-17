Template.modificaElemento.events({
  
  'click #chiudi' : function(e) {
	e.preventDefault();
	
    Modal.hide('modifica');
  }
});

Template.modificaElemento.helpers({
  
  elementoSelezionatoDoc: function () {
    return Archivi.findOne(Session.get("elementoselezionato"));
	
  },
  isSelectedPerson: function () {
    return Session.equals("elementoselezionato", this._id);
  },
  formType: function () {
    if (Session.get("elementoselezionato")) {
      return "update";
    } else {
      return "disabled";
    }
  }
});
