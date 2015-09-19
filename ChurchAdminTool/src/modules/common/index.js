'use strict';

module.exports =
  angular.module('ChurchAdminTool.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
