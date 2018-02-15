  var allComments = [];
  console.log(allComments);

  function addCommentToObject () {

    var textoToSave = $("div#comments > div.comment-to-publish > label");//Texto del comentario que se quiere guardar.
    var contentToSave = $("div#comments > div.comment-to-publish");//Texto del comentario que se quiere guardar.
    console.log(textCommen);

    var textCommen = textoToSave.text();
    console.log(textCommen);
    var styleText = textoToSave.attr('style');//Estilos del texto.
    console.log(styleText);

    var styleContent = contentToSave.attr('style');//Estilos del contenedor
    console.log(styleContent);


    var ObjectComment = {
      text : textCommen,
      styleLetter: styleText,
      styleConteiner : styleContent
    }

    console.log(ObjectComment);//Objeto del texto del comentario con sus estilos
    saveObjectToArray (ObjectComment);
    //limpiando variables.
    textCommen = ' ';
    styleText = ' ';
    styleContent = ' ';
    ObjectComment = {};
  }

  //Función que guarda al objeto en un arreglo.
  function saveObjectToArray (objComment) {
    allComments.push(objComment);
    console.log(allComments);

  }
