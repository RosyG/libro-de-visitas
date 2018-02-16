  var allComments = [];
  console.log(allComments);

  function addCommentToObject () {
    var textCommen = '';
    var containerText = '';

    textCommen = document.getElementsByClassName('new-text');
    containerText = document.getElementById('comment-real-time');

     console.log(textCommen[0].style);
     console.log(containerText.style);
     // console.log(contenedor);
     // containerComments.innerHTML = "";

  }



  //Función que guarda al objeto en un arreglo.
  function saveObjectToArray (ObjectComment) {

    allComments.push(ObjectComment);
    console.log(allComments);
  }
