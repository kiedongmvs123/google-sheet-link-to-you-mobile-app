# google-sheet-link-to-you-mobile-app

function doGet(e){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1snfjJShGMKyg4wlqP0Afy6voFRmbLRzE4Fr1UGwLVfY/edit?usp=sharing");//edit this your google sheet link
  //Give your Sheet name here
  var sheet = ss.getSheetByName("Sheet2");// edit this your sheet name

  insert(e,sheet);

}

function doPost(e){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1snfjJShGMKyg4wlqP0Afy6voFRmbLRzE4Fr1UGwLVfY/edit?usp=sharing");//edit this your google sheet link
  //Give your Sheet name here
  var sheet = ss.getSheetByName("Sheet2"); // edit this your sheet name

  insert(e,sheet);

}



function insert(e,sheet){
 
  // reciving scanned data from client i.e android app
  var sdata = e.parameter.sdata;

  var location = e.parameter.location;

  var name = e.parameter.name;

   var plate = e.parameter.plate;

  var date = new Date();

  var data =[ sdata, name, plate, location, date, ];
  
  sheet.appendRow(data);
  
}
