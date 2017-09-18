var tab = document.getElementsByClassName('tablink');
for(var i=0; i < tab.length; i++) {
  tab[i].addEventListener('click', function(evt) {
    for(var j=0; j < tab.length; j++) {
      tab[j].className = 'tablink';
    }
    evt.target.className += ' active';
    var city = evt.target.getAttribute('data-city');
    var tabcontent = document.getElementsByClassName('tabcontent');
    for(var j=0; j < tabcontent.length; j++) {
      tabcontent[j].className = 'tabcontent'
    }
    document.getElementById(city).className += ' active'

  })
}
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