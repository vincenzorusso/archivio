if (Meteor.isClient) {
	
Template.index.onCreated( function() {
  this.currentTab = new ReactiveVar( "consulta" );
});

Template.index.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  } 
});

Template.index.events({
  'click .nav-pills li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );
  }
	
});
  
}