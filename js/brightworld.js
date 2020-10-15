
/*<!--popup ads-->*/
    function hide_float_left() {
        var content = document.getElementById('float_content_left');
        var hide = document.getElementById('hide_float_left');
        if (content.style.display == "none") { content.style.display = "block"; hide.innerHTML = '<a href="javascript:hide_float_left()">Close [X]</a>'; }
        else {
            content.style.display = "none"; hide.innerHTML = '<a href="javascript:hide_float_left()">Advertise......</a>';
        }
    }
    /*<!-- Footer -->*/
    
        //return top button
        //Get the button:
        mybutton = document.getElementById("ontop");
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }  
        $(document).ready(function () {
            //showFeedback[btShow]
            $("#btToggle").click(function () {
                $("strong").toggle(1000);
                
            });
        });


    
