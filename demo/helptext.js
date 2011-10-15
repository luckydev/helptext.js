(function($){

  $.fn.helptext = function(){
    var $ele = this; 

    return this.each(function(){
      $(this).data('helptext.help', $(this).attr('data-helptext'));
      $(this).data('helptext.color', $(this).css('color'));

      //if empty display the help text in gray
      if($(this).val() == ''){
        $(this).val($(this).data('helptext.help')).css('color', 'gray');
      }

      $(this).bind('focusin.helptext', function(){
        //here empty means val equals help text 
        //if empty clear out the help text and show cursor
        if($(this).val() == $(this).data('helptext.help')){
          $(this).val("").css('color', $(this).data('helptext.color'));
        }
      })
      .bind('focusout.helptext', function(){
        //if empty show help help text
        if($(this).val() == ''){
          $(this).val($(this).data('helptext.help')).css('color', 'gray');
        }
      });

      $(this).parents('form').bind('submit.helptext', function(){
        //before submit, if they are truly empty, make them empty
        $ele.each(function(){
          if($(this).val() == $(this).data('helptext.help')){
            $(this).val("").css('color', $(this).data('helptext.color'));
          }
        }); 
      });
    });
  };
})(jQuery);
