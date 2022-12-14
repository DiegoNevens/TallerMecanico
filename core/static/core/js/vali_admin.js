function valida_form(x, y) {
  return $(x).val().match(y) ? true : false;
}
var correo_admin = "admin@gmail.com";
var contra_admin = "TokinoSora";
var a = "";

function escapeHtml(text) {
  var caracteres = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, function(m) { return caracteres[m]; });
}

$(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#floatingInput", correo_admin)) {
      valido = false;
      $("#floatingInput").addClass("error_input");
    }
    if (!valida_form("#floatingPassword", contra_admin)) {
      valido = false;
      $("#floatingPassword").addClass("error_input");
    }
    if (!valido) {
      e.preventDefault();
    } else {
      window.location.href = "{% url 'index2' %}";
      alert("Login correcto");
    }
  });
});

$(function () {
  $("#form2").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#firstName", a)) {
      valido = false;
    }
    if (!valida_form("#lastName", a)) {
      valido = false;
    }
    if (!valida_form("#username", a)) {
      valido = false;
    }
    if (!valida_form("#address", a)) {
      valido = false;
    }
    if (!valido) {
      e.preventDefault();
    } else {
      alert("Trabajo subido");
    }
  });
});

$(function () {
  $("#form3").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#username", a)) {
      valido = false;
    }
    if (!valido) {
      e.preventDefault();
    } else {
      alert("Comentario subido");
    }
  });
});

$(function () {
  $("#form4").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#firstName", a)) {
      valido = false;
    }
    if (!valida_form("#rut", a)) {
      valido = false;
    }
    if (!valida_form("#mail", a)) {
      valido = false;
    }
    if (!valida_form("#msg", a)) {
      valido = false;
    }
    if (!valido) {
      e.preventDefault();
    } else {
      alert("Comentario subido");
    }
  });
});

$(function () {
  $("#form6").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#nombre", a)) {
      valido = false;
    }
    if (!valida_form("#apellido", a)) {
      valido = false;
    }
    if (!valida_form("#email", a)) {
      valido = false;
    }
    if (!valida_form("#contra", a)) {
      valido = false;
    }
    if (!valida_form("#contra2", a)) {
      valido = false;
    }
    if (!valido) {
      e.preventDefault();
    } else {
      alert("Se a registrado correctamente");
    }
  });
});

$(function () {
  $("#form7").submit(function (e) {
    e.preventDefault();
    var valido = true;
    if (!valida_form("#user", a)) {
      valido = false;
    }
    if (!valida_form("#contra9", a)) {
      valido = false;
    }
    if (!valido) {
      e.preventDefault();
    } else {
      alert("Login Correcto");
    }
  });
});

$(function () {
  $("#test").submit(function (e) {
    e.preventDefault(); 
    var valido = true;
    if (!valida_form("#texto", a)) {
      valido = false;
    } if (!valido) {
      e.preventDefault();
    } else {
      var pre = 'Hola ';
      var texto = '';
      $("#pre").text(pre);


      pre = document.getElementById("pre").innerHTML;
      texto = $("#texto").val();
      texto = escapeHtml(texto);
      $("#pre").text(pre + texto);
    }
  });
});

