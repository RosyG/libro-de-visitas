//Funcionalidad
$('#textarea').keyup(keyupLetters);
$('#b-send').click(showComment);//Muestra comentario en el contenedor de comentarios pasados.
//$('#b-send').click(Guarda el comentario en un objeto.
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
  $('#comment-real-time').empty();//Borra contenido para que no se sobre escriba y existan repeticiones.
  var $containerText = $('<div />',
  {'class':'comment-to-publish'
  });
  var textUs = document.createElement('label');
  textUs.className += "new-text";//Creando una clase en el texto.
  textUs.innerHTML = texto;//Añadiendo texto que el usuario va tecleando.
  $containerText.append(textUs);//Añadiendo texto al div que tendra el estilo y el texto que el usuario acaba de introducir.
  $('#comment-real-time').prepend($containerText);


}

//Función que muetra los comentarios pasado
function showComment() {
  $('#comments').empty();
  addCommentToObject();

  allComments.forEach((comment, index) => {
    var commentHtml = createComment(index);//iterando el arreglo para ir pintando cada comentario.
    $('#comments').prepend(commentHtml);
   });
   cleanText ();//Limpiando text área
   $('#comment-real-time').empty();//Limpiando el contenedor de los comentarios en tiempo real.
  /*var $sendComment = $('.comment-to-publish');
  $('#comments').prepend($sendComment);
  */
}

//Función que crea un elemento por medio de DOM y le añade estoiñps al texto.
function createComment(index) {
  var containerText = document.createElement('div');
  containerText.className += "past-comments";//Creando una clase en el texto.
  var textUs = document.createElement('label');
  var comment = allComments[index];
  console.log(comment);
  textUs.innerHTML = comment.newTextComment;
  Object.assign(textUs.style, comment.styleText);
  Object.assign(containerText.style, comment.newStyleContent);

  //Añadiendo div que contiene el texto al contenedo de los coentarios pasados.
  containerText.append(textUs);
  $('#comments').prepend(containerText);
  return containerText
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
