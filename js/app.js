//Funcionalidad
$('#textarea').keyup(keyupLetters);
var $commentToSend = $('#comment-real-time');
$('#b-send').click(showComment);//Muestra comentario en el contenedor de comentarios pasados.
$('#b-send').click(addCommentToObject);//Guarda el comentario en un objeto.
$('#large').click(changeSize);
$('#medium').click(changeSize);
$('#small').click(changeSize);
$('#back-ground').click(changeBackGround);
$('#left').click(changeAling);
$('#center').click(changeAling);
$('#justify').click(changeAling);
$('#right').click(changeAling);
$('.color-text').click(changeColor);
$('.background').click(changeBackGround);

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
  var textUs = document.createElement('label', {
    'id' : 'style-text'
  });
  textUs.innerHTML = texto;//Añadiendo texto que el usuario va tecleando.
  $containerText.append(textUs);//Añadiendo texto al div que tendra el estilo y el texto que el usuario acaba de introducir.
  $('#comment-real-time').prepend($containerText);
}

//Función que muetra los comentarios pasado
function showComment() {
  var $sendComment = $('.comment-to-publish');
  $('#comments').prepend($sendComment);
  cleanText ();
}

//Función que limpia el campo de textarea.
function cleanText () {
$('#textarea').val(' ');//limpiando el campo del text área.
}

//Función que canbia el tamaño del texto
function changeSize() {
  var dataSize = this.dataset.size;//this es el elemento, .dataset.size obtiene el tamaño definido en ese elemento con el nombre size (asignado por mí).
  //console.log(typeof(dataSize));//Comprobando que la variable sea un string.
  $("div#comment-real-time > div.comment-to-publish > label").css({
    fontSize: dataSize
    });
}

//Función que canbia el color del texto
function changeColor() {
  var colorText = this.dataset.color;//this es el elemento, .dataset.color obtiene el color definido en ese elemento con el nombre color (asignado por mí).
  $("div#comment-real-time > div.comment-to-publish > label").css({
    //Es bueno especificar la ubicación del texto en tiempo real para que no modifique al los textos anteriores, ya que coinciden en parte en estructura.
    color: colorText
    });
}

//Función que canbia la posición del texto
function changeAling() {
  var position = this.dataset.aling;
  $("div#comment-real-time > div.comment-to-publish").css({
    //Es bueno especificar la ubicación del texto en tiempo real para que no modifique al los textos anteriores, ya que coinciden en parte en estructura.
    'text-align' : position
    });
}

//Cambia el color del fondo
function changeBackGround () {
  var backgroundColor = this.dataset.background;
  $("div#comment-real-time > div.comment-to-publish").css({
    //Es bueno especificar la ubicación del texto en tiempo real para que no modifique al los textos anteriores, ya que coinciden en parte en estructura.
    'background-color' : backgroundColor
    });
}
