sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel", "sap/m/MessageBox",'sap/ui/core/BusyIndicator'
], function (Controller, JSONModel, MessageBox,BusyIndicator) {
	"use strict";

	return Controller.extend("com.ui.ui.controller.View1", {
		onInit: function () {
			var timeRecordingModel = new JSONModel({
				user_id: "",
				calendar_week: "",
				user_name: "",
				edu_duration: 0,
				comment: "",
				edu_source: "",
				edu_topic: "",
				edu_area: "",
				certificate_source: "",
				certificate_topic: "",
				certificate_area: ""
			});
			this.getView().setModel(timeRecordingModel, "timeRecordingModel");
		},
		submit: function () {
			console.log(this.getView().getModel("timeRecordingModel"));
			var dataObject = this.getView().getModel("timeRecordingModel").getData();
			var oContext=this;
		BusyIndicator.show();
			$.ajax({
				method: "POST",
				data: JSON.stringify(dataObject),
				contentType: "application/json",
				url: "https://product-listdemo.cfapps.us10.hana.ondemand.com/educationTime",
				dataType: "JSON"
			}).done(function (data) {
				MessageBox.success("Project 1234567 was created and assigned to team \"ABC\".");
				oContext.onInit();
				BusyIndicator.hide();
			});
	
		}
	});
});