Template.search.helpers({
        'elencogenerale': function(){
			var filtro = Session.get("filtro");
		    if (filtro) {
				var elencogenerale =  Archivi.find({titolo: { $regex: filtro, $options: 'i' } });
			} else {
				// Otherwise, return all of the tasks
				var elencogenerale = Archivi.find();
			}
            return elencogenerale;
	}
});

Template.boxricerca.events({
    'keyup [name=search-box]': function(event) {
		var text = $(event.target).val().trim();
		Session.set("filtro", text);
  }

})	