var containerHeight = $("#cool").height();
var $text = $("#cool p");
 
while ( $text.outerHeight() > containerHeight ) {
        $text.text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
       });
}