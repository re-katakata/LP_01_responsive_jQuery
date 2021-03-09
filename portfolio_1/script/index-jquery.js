(()=>{
    'use strict';


    const introScroller=()=>{
        $(function(){
            $('.intro').click(()=>{
                $('html,body').animate({
                    scrollTop:$('#introductionContents').offset().top
                },
                500,
                'swing'
                );
            });
        });

        $(function(){
            $('.works').click(function(){
                $('html,body').animate({
                    scrollTop:$('#worksContents').offset().top
                },
                500,
                'swing'
                );
            });
        });

        $(function(){
            $('.product').click(function(){
                $('html,body').animate({
                    scrollTop:$('#productContents').offset().top
                },
                500,
                'swing'
                );
            });
        });

        $(function(){
            $('.contact').click(function(){
                $('html,body').animate({
                    scrollTop:$('#contactContents').offset().top
                },
                500,
                'swing'
                );
            });
        });
    };
    introScroller();

})();