/**
 * @file      index.js
 * @brief     Index the function for website translation
 * @author    Created by Victorien Montavon
 * @version   23-03-2023 - original
 */

//This function will be called when user click changing language
function translate(lang, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lang);
    translate.process();
    if(lang == 'en'){
      $("#enTranslator").css('color', '#f4623a');
      $("#frTranslator").css('color', '#212529');
    } 
    if(lang == 'fr'){
      $("#frTranslator").css('color', '#f4623a');
      $("#enTranslator").css('color', '#212529');
    }
    if(lang == 'de'){
        $("#deTranslator").css('color', '#f4623a');
        $("#enTranslator").css('color', '#212529');
    }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (French) with attribute lng-tag
  $("#frTranslator").click(function(){
    translate('fr', 'lng-tag');
  });
  //This is id of HTML element (German) with attribute lng-tag
  $("#deTranslator").click(function(){
    translate('de', 'lng-tag');
  });
});