var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Jakira",
    "number":"0141212",
    "likes": ["chicken","porota","korma"]
  },
  {
    "firstName": "Shuvo",
    "lastName": "Rahman",
    "number":"01341212",
    "likes": ["Polau","Meat","ruti"]
  },
  {
    "firstName": "Jisad",
    "lastName": "Rahman",
    "number":"01451545",
    "likes": ["Book","Study","writing"]
  }
 ];
function lookprofile(name,prop) {
  for (var i=0; i< contacts.length; i++){
    if (contacts[i].firstName=== name) {
      return contacts[i][prop] || "there is no proper" ;
      
    }
    }  
    return "there is no contact";
  
}
date=lookprofile("Shuvo","lastName")
console.log(date);