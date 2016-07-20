'use strict';

window._ = require('lodash');
require('angular-ui-router');
require('angular-local-storage');
require('angular-simple-logger');
require('angular-google-maps');
require('../blocks');

var amnessia = require('angular').module('amnessia.core', [
  'ui.router',
  'LocalStorageModule',
  'uiGmapgoogle-maps',
]).constant('_', window._);

amnessia.config( require('./config') );
