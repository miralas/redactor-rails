window.init_redactor = function(){
  var csrf_token = $('meta[name=csrf-token]').attr('content');
  var csrf_param = $('meta[name=csrf-param]').attr('content');
  var params;
  if (csrf_param !== undefined && csrf_token !== undefined) {
    params = csrf_param + "=" + encodeURIComponent(csrf_token);
  }
  $('.redactor').redactor(
    { "lang":"ru",
      "plugins":["fontcolor","fontfamily","fontsize"],
      "fileUpload":"/redactor_rails/files?" + params,
      "imageUpload":"/redactor_rails/pictures?" + params,
      "imageGetJson":"/redactor_rails/pictures",
      "path":"/assets/redactor-rails",
      "css":"style.css"}
  );
}

$(document).ready( window.init_redactor );
$(window).bind('page:change', window.init_redactor);
