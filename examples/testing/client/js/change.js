Template.main.rendered = function () {
	Meteor.setTimeout(function () {
		$('.odometeor').html(845);
	}, 4000);
	Meteor.setTimeout(function () {
		document.getElementsByClassName('odometeor')[0].innerHTML = 489;
	}, 4000);
	Meteor.setInterval(function () {
		$('.odometeor').html(~~(Math.random()*1000));
	}, 4000);
}