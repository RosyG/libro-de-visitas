  var allComments = [];
  console.log(allComments);

  function addCommentToObject () {

    var textoToSave = $("div#comments > div.comment-to-publish > label");//Texto del comentario que se quiere guardar.
    var contentToSave = $("div#comments > div.comment-to-publish");//Texto del comentario que se quiere guardar.
    console.log(textCommen);
    console.log(textoToSave);

    var textCommen = textoToSave.text();
    console.log(textCommen);
    /*
    var styleText = textoToSave.attr('style');//Estilos del texto.
    console.log(styleText);

    var styleContent = contentToSave.attr('style');//Estilos del contenedor
    console.log(styleContent);
    */
    var styleText = textoToSave.attr('style');//Estilos del texto.
    console.log(styleText);
/*NECESITO ATRAER EL TAG PARA HACER .STYLE*/
    var styleContent = contentToSave.style;//Estilos del contenedor
    console.log(styleContent);

    //
    // var ObjectComment = {
    //   text : textCommen,
    //   styleLetter: styleText,
    //   styleConteiner : styleContent
    // }

  //  console.log(ObjectComment);//Objeto del texto del comentario con sus estilos
//    saveObjectToArray (textCommen, styleText, styleContent);
    //limpiando variables.

    textCommen.innerHTML = " ";
    styleText.innerHTML = " ";
    //styleContent.innerHTML = " ";
    //ObjectComment.innerHTML = {};
    console.log(textCommen);
    //console.log(ObjectComment);//Objeto del texto del comentario con sus estilos

  }

  //Función que guarda al objeto en un arreglo.
  function saveObjectToArray (text, textStyle, contentText) {

        var ObjectComment = {
          text : text,
          styleLetter: textStyle,
          styleConteiner : contentText
        }
    console.log(ObjectComment);//Objeto del texto del comentario con sus estilos
    allComments.push(ObjectComment);
    console.log(allComments);

  }
