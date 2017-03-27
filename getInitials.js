//"for your information" -> "FYI"
function getInitials(name){
   test;
   test1;
   return name.split('   ')
     .map(word => word.charAt(0).toUpperCase())
     .join('');

}