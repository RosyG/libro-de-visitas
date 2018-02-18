  var allComments = [];
  var accountant = 0;
  console.log(allComments);

  function addCommentToObject () {
    var textCommen = '';
    var containerText = '';
    var newStyleText = { };//Objeto que contiene los estilos del texto.
    var newStyleContent = { };//Objeto que contiene los estilos del contenedor del texto.
    var objComment = { };

    textCommen = document.getElementsByClassName('new-text');
    containerText = document.getElementsByClassName('comment-to-publish');
    console.log(textCommen);
    var text = textCommen[0].innerHTML;//Texto que el usuario ha introducido.
    Object.assign(newStyleText, textCommen[0].style);
    Object.assign(newStyleContent, containerText[0].style);

    objComment = {
       newTextComment : text,
       styleText : newStyleText,
       newStyleContent : newStyleContent
    }//Objeto que contiene el texto junto con sus estilo.
    console.log(objComment);
    saveObjectToArray(objComment);//Añadiedno el comentario al arreglo de objetos.
    var accountant;
    accountant = account();//Valor de la key que direnciará los comentarios hecho en Firebase.
    console.log(accountant);
    //console.log(account);
  }//Fin de la función addCommentToObject.

  function account() {
    //accountant = accountant + 1;
    return     accountant = accountant + 1;
  }

  //Función que guarda al objeto en un arreglo.
  function saveObjectToArray (ObjectComment) {
    allComments.push(ObjectComment);
    console.log(allComments);
  }
