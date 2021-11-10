/*global QUnit*/

sap.ui.define([
	"odatav4/controller/Vista1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Vista1 Controller");

	QUnit.test("I should test the Vista1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
