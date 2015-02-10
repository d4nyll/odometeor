Template.api.rendered = function () {
	var opts = {
		value: 800,
		theme: 'train-station'
	};
	Odometeor.create('epicodometeor', 'beforethis', opts);
	randomChange();
};