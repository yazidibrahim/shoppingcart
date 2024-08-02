

//   fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//   $.getJSON('https://fakestoreapi.com/products"', function(data) {

//     var resources = data.resources.map(resource => `<a href="${resource.url}">${resource.description}</a><br>`),
//         text = `<h2>${data.license_title}</h2><br>
//                ${resources.join('')}`;

//     $(".mypanel").html(text);
//   });


// $.getJSON( "https://fakestoreapi.com/products", function( data ) {
//     var items = [];

//     $.each( data, function( key, val ) {

//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//       console.log(items)
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });

$(document).ready(function(){

    $.ajax(
        {
            url:"https://fakestoreapi.com/products",
            method:'get',
            success:function(data){
                $.each(data, function(index,value) {
                    console.log('index: ' + index + '   ' + 'value: ' + value['price']);
                })

            },
            error:function(error){
                console.log(error);

            }


        }
    )
})