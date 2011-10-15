(function($){

  $.fn.helptext = function(){
    var $ele = this; 

    return this.each(function(){
        
      var $t = $(this);
      var $d = $t.attr('data-helptext');
      var c  = $t.css('color');
        
      $t.data('helptext.help', $d);
      $t.data('helptext.color', c);

      //if empty display the help text in gray
      if($t.val() == ''){
        $t.val($t.data('helptext.help')).css('color', 'gray');
      }

      $t.bind('focusin.helptext', function(){
        //here empty means val equals help text 
        //if empty clear out the help text and show cursor
        if($t.val() == $t.data('helptext.help')){
          $t.val("").css('color', $(this).data('helptext.color'));
        }
      })
      .bind('focusout.helptext', function(){
        //if empty show help help text
        if($t.val() == ''){
          $t.val($t.data('helptext.help')).css('color', 'gray');
        }
      });

      $t.parents('form').bind('submit.helptext', function(){
        //before submit, if they are truly empty, make them empty
        $ele.each(function(){
          var $t = $(this);
          if($t.val() == $t.data('helptext.help')){
            $t.val("").css('color', $t.data('helptext.color'));
          }
        }); 
      });
    });
  };
})(jQuery);
