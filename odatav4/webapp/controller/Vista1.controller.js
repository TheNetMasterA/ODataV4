sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, MessageBox, JSONModel) {
		"use strict";

		return Controller.extend("odatav4.controller.Vista1", {
			onInit : function () {
				var oJSONData = {
					busy : false
				};
				var oModel = new JSONModel(oJSONData);
				this.getView().setModel(oModel, "appView");
			},
	
			onRefresh : function () {
				var oBinding = this.byId("peopleList").getBinding("items");
	
				if (oBinding.hasPendingChanges()) {
					MessageBox.error(this._getText("refreshNotPossibleMessage"));
					return;
				}
				oBinding.refresh();
				MessageToast.show(this._getText("refreshSuccessMessage"));
			},
	
			_getText : function (sTextId, aArgs) {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sTextId, aArgs);
	
			}
		});
});
