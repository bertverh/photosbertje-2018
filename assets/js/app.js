//---- gallery ----//
var galleryThumb = $(".gallery-thumb ul li"),
gallery = $(".gallery ul li");

$(".gallery-thumb ul li:last-of-type").addClass("mage-active");
galleryThumb.on("click", function(){
    gallery.hide();
    var index = galleryThumb.index(this),
        el = gallery.get(index);
    $(el).show();
    var active = galleryThumb.get(index);
    $(galleryThumb).removeClass("mage-active");
    $(active).addClass("mage-active");
});

//----- disable right click -----//
/*$(document).bind("contextmenu",function(e){
    e.preventDefault();
  });*/

