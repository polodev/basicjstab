
function openCity(evt, city) {
  var tab = document.getElementsByClassName('tablink');
  for(var i=0; i < tab.length; i++) {
    tab[i].className = 'tablink';
  }
  var tabcontent = document.getElementsByClassName('tabcontent');
  for(var j=0; j < tabcontent.length; j++) {
    tabcontent[j].className = 'tabcontent'
  }
  document.getElementById(city).className += ' active'
  evt.target.className += ' active';
}