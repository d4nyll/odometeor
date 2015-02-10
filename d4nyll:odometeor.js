////////////
/* COMMON */
////////////

Odometeor = {};

// Object containing information for all created (not necessarily loaded) Odometeor
Odometeor.odometeorInstances = [];

// Returns all instances of Odometeor
Odometeor.getInstances = function() {
	return Odometeor.odometeorInstances;
}

////////////////
/* TEMPLATING */
////////////////

// From [Stack Overflow](http://stackoverflow.com/a/383245/3966682)
var MergeRecursive = function (obj1, obj2) {
	for (var p in obj2) {
		try {
			if (obj2[p].constructor == Object) {
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);
			} else {
				if(typeof obj1[p] === 'undefined') {
					obj1[p] = obj2[p];
				}
			}
		} catch(e) {
			obj1[p] = obj2[p];
		}
	}
	return obj1;
}

var opts = {theme: 'digital'};

Template.odometeor.rendered = function () {
	var params = this.data;
	var el = this.find('.odometeor');
	opts.el = el;
	
	// {{> odometeor "abc"}} - string
	if(typeof params == 'string') {
		opts.value = ~~params;
	}

	// {{> odometeor true}} - boolean
	if(typeof params == 'boolean') {
		opts.value = ~~params;
	}

	// {{> odometeor 123}} - number
	if(typeof params == 'number') {
		opts.value = ~~params;
	}

	if(typeof params == 'object') {
		// {{> odometeor}}, {{> odometeor abc}} - where abc is an undefined variable
		if(params == null) {
			opts.value = ~~params;
		}

		if(params != null) {
			// For parameters given as an array, passed in using template helpers
			// {{> odometeor abc}} - where abc is an array passed in using a helper
			if(typeof params[0] === 'string' || typeof params[0] === 'number') {
				opts.value = ~~params[0];
			}
			// For parameters given as key=value pairs, it will be turned into an object
			// {{odometeor abc="def" hij="klm"}} - key/value pairs, or
			// {{> odometeor obj}} - where obj is an object defined in a helper
			else {
				opts = MergeRecursive(params, opts);
			}	
		}
	}
	od = new Odometer(opts);
	Odometeor.odometeorInstances.push(od);
}

Odometeor.create = function(id, beforeId, options) {
	// Creates the div element to render odometeor
	var odoelement = document.createElement("div");
	var textnode = document.createTextNode(options.value);
	odoelement.appendChild(textnode);
	odoelement.id = id;
	odoelement.className += ' odometeor';
	var beforeElement = document.getElementById(beforeId);
	beforeElement.parentNode.insertBefore(odoelement, beforeElement);

	// Adds any user-defined options
	options = MergeRecursive(options, opts);
	options.el = odoelement;

	// Loads the odometer
	var odometeor = new Odometer(options);
	Odometeor.odometeorInstances.push(odometeor);
	return odometeor;
};