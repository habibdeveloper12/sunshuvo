//nested arrays 
var collection={
  "2548":{
   "album":"cinamatic",
   "artist":"Bon Jovi",
   "Tracks":
   [
     "red",
      "orenge",
     "green"
     ]
    },
"2468":{
  "album":"1999",
  "artist":"prince",
  "Tracks":
  [
    "1999",
     "Little Orange",
    ]
    },
"1245":{
  
  "artist":"Rovert Palm",
  "Tracks": [ ]
    },
"5439":{
  
 "album":"ABBA Gold"
   }
}
var collectioncopy = JSON.parse(JSON.stringify(collection));
function updaterecords(id,  prop, value)
{
 if(value=== ""){
   delete collection [id][prop];
 }else if(prop==="tracks"){
   collection[id][prop] = collection[id][prop]|| [];
   collection[id][prop].push(value);
 }else{
   collection[id][prop]=value;
 }
 return collection;
}
 console.log(updaterecords(5439,"tracks","1211"));
 