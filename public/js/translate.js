/**
 * @file      translator.js
 * @brief     Translate function for website
 * @author    Created by Victorien Montavon
 * @version   23-03-2023 - original
 */


function Translate() { 
	//initialization
	this.init =  function(attribute, lang){
		this.attribute = attribute;
		this.lang = lang;	
	}
	//translate 
	this.process = function(){
		_self = this;
		var xrhFile = new XMLHttpRequest();
		//load content data 
		xrhFile.open("GET", "lang/"+this.lang+".json", false);
		xrhFile.onreadystatechange = function ()
		{
			if(xrhFile.readyState === 4)
			{
				if(xrhFile.status === 200 || xrhFile.status == 0)
				{
					var LngObject = JSON.parse(xrhFile.responseText);
					var allDom = document.getElementsByTagName("*");
					for(var i =0; i < allDom.length; i++){
						var elem = allDom[i];
						var key = elem.getAttribute(_self.attribute);
						if(key != null) {
							elem.innerHTML = LngObject[key]  ;
						}
					}
				
				}
			}
		}
		xrhFile.send();
    }
}