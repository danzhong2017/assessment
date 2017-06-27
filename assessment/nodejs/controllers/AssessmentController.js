'use strict';

var url = require('url');

var AssessmentController = require('./AssessmentControllerService');

module.exports.assessmentPOST = function assessmentPOST (req, res, next) {
  AssessmentController.assessmentPOST(req.swagger.params, res, next);
};

module.exports.attemptGET = function attemptGET (req, res, next) {
  AssessmentController.attemptGET(req.swagger.params, res, next);
};
