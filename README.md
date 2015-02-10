# odometeor
A wrapper for odometer by HubSpot.

## Demo

* [Basic](http://odometeor.meteor.com/)
* [Different Theme](http://odometeor.meteor.com/theme/)
* [Using API](http://odometeor.meteor.com/api/)

## How to use

### Initiate
#### In a template

Pass in a number into the template to initiate odometeor. You can then change the value inside.

	{{> odometeor 800}}

#### API-style

Call the `Odometeor.create(id, beforeId, options)` function, where:
* `id` is the ID of the odometer
* `beforeId` is the ID of the element you want to insert the odometer before
* `options` is an object, all valid options are demonstrated below

	Template.api.rendered = function () {
		var opts = {
			value: 87123, // REQUIRED
			format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
			duration: 3000, // Change how long the javascript expects the CSS animation to take
			theme: 'car', // Specify the theme (if you have more than one theme css file on the page)
			animation: 'count' // Count is a simpler animation method which just increments the value
		};
		Odometeor.create('epicodometeor', 'beforethis', opts);
	};

### Changing value

The value of the odometer can be changed either:

**Using jQuery**

	$('.odometeor').html(845);

**Just Javascript**

	document.getElementsByClassName('odometeor')[0].innerHTML = 489;

### Get all odometeor

To get all instances of Odometeor, simply run `Odometeor.getInstances()`.

## Features

If you want a feature in the [library](https://github.com/HubSpot/odometer) that is not in this package, please open up an issue.