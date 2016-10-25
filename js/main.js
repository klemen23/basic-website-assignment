// declare initial variables at the top
var $menu;
var $leftSidebar;
var $contentContainer;
var $iconElement;

var isClosed = true;

function init(){
    
    $menu = $('#menu');
    $leftSidebar = $('#left-sidebar');
    $contentContainer = $('#container');
    $iconElement = $('#icon-element');
    
    var width = $leftSidebar.attr('data-width');
    $leftSidebar.css({width:width});
    
    $('#fullpage').fullpage();
    
    setupMenu();
    
    $menu.on('click', toggleMenu);
    
}

function setupMenu(){
    
    $('#home-button').on('click', function(){
       
        $.fn.fullpage.moveTo('home', 0);
        
        toggleMenu();
        
    });
    
    $('.sidebar > a').on('click', function(){
       
        if($(this).attr('href') === '#home'){
             
            
        }
        
        toggleMenu();
        
    });
    
}

function toggleMenu(){
    
    var width = $leftSidebar.attr('data-width');
    
    if(isClosed){
    
        $leftSidebar.css({
            left:0
        });

        $contentContainer.css({
           marginLeft:width+'px'
        });
        
        isClosed = false;
        
    }else{
        
        $leftSidebar.css({
            left:-width+'px'
        });

        $contentContainer.css({
           marginLeft:0 
        });
        
        isClosed = true;
        
    }
    
    $iconElement.toggleClass('icon-menu');
    $iconElement.toggleClass('icon-close');
    
}

$(function(){
  $('.moto-container').show().animate({
    top: 50,
    left:200,
    width: '500px',
    height: '450px'
  }, 1000);
});



init();










