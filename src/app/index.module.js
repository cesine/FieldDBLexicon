/* globals FieldDB */

FieldDB.Database.prototype.BASE_DB_URL = 'http://localhost:5984';
FieldDB.Database.prototype.BASE_AUTH_URL = 'https://authdev.lingsync.org';

(function() {
	'use strict';

	angular.module('fielddbLexiconAngularApp', [
		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'isteven-multi-select',
		// 'mgcrea.ngStrap',
		'WordCloudApp',
		'fielddbAngular'
	]);

})();
