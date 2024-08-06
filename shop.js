

//   fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

//   $.getJSON('https://fakestoreapi.com/products"', function(data) {

//     var resources = data.resources.map(resource => `<a href="${resource.url}">${resource.description}</a><br>`),
//         html = `<h2>${data.license_title}</h2><br>
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
            // $.each(data, function(index,value) {
            //     console.log(data)
            //     // console.log('index: ' + index + '   ' + 'value: ' + value['title']);
            //     // console.log('index: ' + index + '   ' + 'value: ' + value['price']);
            //     // console.log('index: ' + index + '   ' + 'value: ' + value['description']);
            //     // console.log('index: ' + index + '   ' + 'value: ' + value['image']);
            //     let title = value['title'];
            //     let price = value['price'];
                
            //     $("#img1").html(`<img height='150px' width='150px' src="${value['image']}">`)
            //     $(".play").off().click(function() {
            //         let link = $(this).data('link');
            //         $("#display").empty().append('<embed width="480" height="500" src="' + link + '">');
            //     });
            //     $('#t1').append(title[index]);
            //     $('#price1').append(price);
                
            //    entering datas into the card
            console.log(data.length);
            //    for (var i =0;i<data.id.length) 
            
            const qty = [];
            const user = data[i];
            const id = [];
            const title = [];
            const image = [];
            const price = [];
            for(var i =1; i<data.length; i ++)
            {
                const user = data[i];
                qty[i]=0;
                console.log(id[i])
                title[i] = user['title'];
                console.log(title[i]);
                image[i] = user['image'];
                console.log(image[i]);
                price[i] = user['price'];
                console.log(price[i]);
                $('#t'+i).append(title[i]);
                $("#img"+i).html(`<img height='150px' width='150px' src="${image[i]}" >`);
                $('#addc'+i).hide();
                $('#remc'+i).hide();
                $('#price'+i).append('$'+price[i]);
             
                $('#tc'+i).hide();
                $('#qtyc'+i).hide();
         


            }   
//add item1
            $('.item').click(function(){
                let price=$(this).prev('.price');
                console.log(price.text());
             
                let pricing =price.text();
                console.log(pricing);
                // $('#cart1').append('<img height="150p" width="150px" src='+image[1]+' >');
               $('#pricec').append('<h5 style=" margin-left: 200px ;margin-top: 20px;width: 500px;">'+pricing+'</h5>');
               

            })






            // $('#add1').off().click(function(){
            //     qty[1]=1;
            //     $('#cart1').empty().append('<img height="150p" width="150px" src='+image[1]+' >');
            //    $('#addc1').show();
            //     $('#pricec1').show();
            //     $('#remc1').show();
            //     $('#tc1').show();
            // })
            // $('#addc1').click(function(){
            //     qty[1]+=1;
            //     // $('#cart1').empty().append('<img height="150p" width="150px" src='+image[1]+' >');
            //     console.log("Quantity:"+qty); 
            //     $('#qtyc1').html('Qty:'+qty[1]);
            //     $('#qtyc1').show();

            // })    

            
//remove item1
            $('#remc1').click(function(){
                qty[1]-=1;
                if(qty[1]==-1){
                    qty[1]=0;
                }
                if(qty[1]==0){
                    $('#item1').hide();
                    $('#add1').click(function(){
                        qty[1]=1;
                    $('#item1').show();
                    $('#qtyc1').hide();
                    })
                    }
               console.log("Quantity:"+qty); 
                $('#qtyc1').html('Qty:'+qty[1]);
                $('#qtyc1').show();    
            })
//add item2
            // $('#add2').click(function(){
            //     qty[2]+=1;
            //     $('#cart2').empty().append('<img height="150p" width="150px" src='+image[2]+' >');
            //     $("#imgc2").html(`<img height='150px' width='150px' src='+image[2]+' >`);
            //     $('#pricec2').append('$ '+price[2]);
            // })
//remove item2
            $('#rem2').click(function(){
                qty[2]-=1;
                if(qty[2]==-1){
                    qty[2]=0;
                }
                $('#qty2').html('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/></svg>'+qty[2]);
                console.log("Quantity:"+qty); 
                $("#imgc2").html("<img height='150px' width='150px' src="+image[1]+" >");
                $('#pricec2').append('$ '+price[1]);
                  
            })
//add item3
            $('#add3').click(function(){
                qty[3]+=1;
                $('#cart3').empty().append('<img height="150p" width="150px" src='+image[3]+' >');
                console.log("Quantity:"+qty);   
                $("#imgc3").html(`<img height='150px' width='150px' src="${image[3]}" >`);
                $('#pricec3').append('$ '+price[3]);
            })
//remove item3
            $('#rem3').click(function(){
                qty[3]-=1;
                if(qty[3]==-1){
                    qty[3]=0;
                }
                $('#qty3').html('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/></svg>'+qty[3]);
                console.log("Quantity:"+qty); 
                $("#imgc3").html(`<img height='150px' width='150px' src="${image[1]}" >`);
                $('#pricec3').append('$ '+price[1]);  
            })
//add item 4
            $('#add4').click(function(){
                qty[4]+=1;
                $('#cart4').empty().append('<img height="150p" width="150px" src='+image[4]+'>');
                console.log("Quantity:"+qty);   
                $('#pricec4').append('$ '+price[4]);
            })
//remove item 4
            $('#rem4').click(function(){
                qty[4]-=1;
                if(qty[4]==-1){
                    qty[4]=0;
                }
                $('#qty4').html('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/></svg>'+qty[4]);
                console.log("Quantity:"+qty); 
                $("#imgc4").html(`<img height='150px' width='150px' src="${image[1]}" >`);
                $('#pricec4').append('$ '+price[1]);
                
            })
             //for calculation
             $('#calculate').click(function() {
                let totalPrice = 0;
                for (let i = 1; i < qty.length; i++) {
                    totalPrice += qty[i] * price[i];
                }
                $('#total').text('$' + totalPrice.toFixed(2));
                console.log('hi');
            });
            
            //cart
            

            
            
            
            
            
            
            
            //     console.log(data[1]);

                //     // $('#t1').empty().append(user['title']);

                //     // //  // Unbinding previous click events to avoid multiple bindings
                //     // // $("product1").off().show(function() {
                //     // //     $("#t1").empty().append("user['title']");
                //     // // });
                //     // $('#t2').empty().append(user['title']);
                // title1 = user['title']
                // $("#t1").append(title1);
            





                // }




            // })

        },
        error:function(error){
            console.log(error);
        }
    }
)



//inserting datas into the card
    
// $('#t1').append(title);






})