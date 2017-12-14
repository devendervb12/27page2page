sap.ui.controller("zpage2page.Page1", {


	onPress : function(){
    
		//	var page1View = this.getView();
		
	//	var oApp = page1View.getParent();
		
	//	oApp.to("idPage12");
		
		this.getView().getParent().to("idPage12");
		
	}
});