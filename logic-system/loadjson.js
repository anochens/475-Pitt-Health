function loadfile(success, primarykey, action, filename){
	//var url='data/sampledata.json';
	var url=filename;
	window.jsondata=[]; //creates a global array to store JSON elements
	$.getJSON(url, function(data){
		for(var i=0;i<data.length;i++){
			window.jsondata[data[i].pk]=data[i]; //the primarykey will be the index in which the JSON element is st
		}
		success(primarykey, action);
	});
}

function displayInfo(primarykey, action, filename) {
	if(typeof window.jsondata === "undefined"){
		return loadfile(doDisplay, primarykey, action, filename);
	}
	doDisplay(primarykey, action);
}

function doDisplay(primarykey, action){
	var objectofinterest = null;
	if(primarykey in window.jsondata){
		objectofinterest = window.jsondata[primarykey];
	}
	if(objectofinterest==null){
		return null;
	}
	if(objectofinterest.type=="MENU"){
		elementNum = action.split("ITEM")[1]; //expecting ITEMx, where x = the primary key of the action
		if(objectofinterest.items[elementNum]!=null){
			pk = objectofinterest.items[elementNum];
			console.log(window.jsondata[pk]);
			return window.jsondata[pk];
		}
	}
	if(objectofinterest.type=="ENDPAGE"){
		//Bookmark (figure out if it already exists in bookmark)
			// add if not in bookmark, remove if already in bookmark
	}
}