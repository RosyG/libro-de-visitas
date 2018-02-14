//Funcionalidad
$('#textarea').keyup(keyupLetters);
var $commentToSend = $('#comment-real-time');
$('#b-send').click(showComment);



//Función que detecta las letras que se van escribiendo.
function keyupLetters() {
  var letter = $('#textarea').val();
  paintLetters(letter);//Pinta comentario en tiempo real.
}

//Función que muestra el comentario en tiempo real.
function paintLetters(texto) {
  var center = 'left';
  console.log(center);
   $('#comment-real-time').empty();//Borra contenido para que no se sobre escriba y existan repeticiones.
  var $containerText = $('<div />',
  {'class':'comment-to-publish'
  });
  var textUs = document.createElement('label');
  textUs.innerHTML = texto;//Añadiendo texto que el usuario va tecleando.
  $containerText.append(textUs);//Añadiendo texto al div que tendra el estilo y el texto que el usuario acaba de introducir.
  $('#comment-real-time').prepend($containerText);
}

//Función que muetra los comentarios pasado
function showComment() {

  console.log('paso por aqui');
  var $sendComment = $('.comment-to-publish');
  $('#comments').prepend($sendComment);
  cleanText ();
}

//Función que limpia el campo de textarea.
function cleanText () {
$('#textarea').val(' ');//limpiando el campo del text área.
}
