$(function(){

	var note = $('#note'),
		ts = new Date(2012, 12, 10),
		newYear = true;

	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " jour" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " heure" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " et ";
			message += seconds + " seconde" + ( seconds==1 ? '':'s' ) + " <br />";

			if(newYear){
				message += "avant l'Agile Tour Bordeaux 2012 !";
			}
			else {
				message += "moins de 10 jours avant l'Agile Tour Bordeaux 2012 !";
			}

			note.html(message);
		}
	});

});