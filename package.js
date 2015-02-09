Package.describe({
  name: 'd4nyll:odometeor',
  summary: 'A wrapper for odometer by HupSpot',
  version: '0.1.0',
  git: 'https://github.com/d4nyll/odometeor.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use(['templating'], 'client');
  api.addFiles('d4nyll:odometeor.html', 'client');
  api.addFiles('lib/odometer.js', 'client');
  api.addFiles('lib/themes/odometer-theme-car.css', 'client');
  api.addFiles('lib/themes/odometer-theme-default.css', 'client');
  api.addFiles('lib/themes/odometer-theme-digital.css', 'client');
  api.addFiles('lib/themes/odometer-theme-minimal.css', 'client');
  api.addFiles('lib/themes/odometer-theme-plaza.css', 'client');
  api.addFiles('lib/themes/odometer-theme-slot-machine.css', 'client');
  api.addFiles('lib/themes/odometer-theme-train-station.css', 'client');
  api.addFiles('d4nyll:odometeor.js', 'client');
  api.export('Odometeor', 'client');
});
