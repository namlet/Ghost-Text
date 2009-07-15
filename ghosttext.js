/**
 * Input field ghost text
 * 
 * Use to display ghost text in an input field until the field gets focus.
 * When field loses focus, if field is empty, ghost will be displayed.
 * @example
 * <.. ghost="Search..."> - Display "Search..." in this input field
 * 
 * @requires
 * jquery.js
 * jquery.livequery.js
 */

var ghostTag = 'ghost', ghostSelector = '['+ghostTag+']';

$(ghostSelector).livequery(function(){
	//set for first time
	var me = $(this);
	if (me.val() == "") {
		me.val(me.attr(ghostTag));
		me.css('color', '#999');
	}
	
	me.focus(function(){
		if (me.attr(ghostTag) == me.val()) {
			me.val("");
			me.css('color', '#000');
		}
	});
	me.blur(function(){
		if (me.val() == "") {
			me.val(me.attr(ghostTag));
			me.css('color', '#999');
		}
	});
});