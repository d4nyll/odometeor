Router.route('/', function () {
  this.render('main');
});

Router.route('/theme/', function () {
  this.render('theme');
});

Router.route('/api/', function () {
  this.render('api');
});