var saveComments = [];
console.log(saveComments);

function addCommentToObject () {
  var textoToSave = '';
  console.log(textoToSave);
  var textoToSave = $("div#comments > div.comment-to-publish > label");//Texto del comentario que se quiere guardar.
  var contentToSave = $("div#comments > div.comment-to-publish");//Texto del comentario que se quiere guardar.

  var textCommen = textoToSave.text();
  console.log(textCommen);
  var styleText = textoToSave.attr('style');
  console.log(styleText);

  var styleContent = contentToSave.attr('style');
  console.log(styleContent);
  //Obteniendo los atributos con dataset.
  /*
  console.log(contentToSave.dataset.background);
  console.log(contentToSave.dataset.aling);

  console.log(textoToSave.dataset.color);
  console.log(textoToSave.dataset.size);
*/

/*
  var ObjectComment = {
    text : textoCommented,
    style: {
      color : colorText,
      fontSize : fontSizeText,
      textAling : aling
    }
  }
  */

}
