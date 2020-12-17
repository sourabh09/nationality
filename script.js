var country_id="";
var probability=[];
var name="";

function getData() {
    var url = "";
    
    name = $("#name").val();
    if(name==""){
        alert("Enter name first!")
        return false
    }
    $(".dummy").css("display","block");
      $(".info").html("");
    $.ajax({

        url: 'https://api.nationalize.io/?name='+name,

        success: function(data) {

            console.log(data);

            if(data.country.length!=0){

                $('.message').text(name+" may be belongs from one of these countries");

            for (var i=0;i<=data.country.length-1;i++) {
             
            country_id=data.country[i].country_id;
            probability.push(data.country[i].probability.toFixed(2)*100+" %");

            $.ajax({

            url: 'https://restcountries.eu/rest/v2/alpha/'+country_id,

                 success: function(data) {

                 console.log(data);

              $('.info').append("<img src='"+data.flag+"'>"+"<br>"+data.name+"<br>");
              //$('.info').append(probability);
            
            }

    })

            }

        }else{

            $('.message').text("No idea :|");
        }



            }

    })
             $(".dummy").css("display","none");
            $(".info").fadeIn();
            $(".extra").text("");

}



function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
