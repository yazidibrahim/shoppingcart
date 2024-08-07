$(document).ready(function(){

    $.ajax(
        {
            url:"https://fakestoreapi.com/products",
            method:'get',
            success:function(data){
   
                console.log(data.length);
                const id = [];
                const title = [];
                const image = [];
                const price = [];
                for(var i =1; i<5; i ++)
                {
                    const user = data[i];   
                    console.log(id[i])
                    title[i] = user['title'];
                    console.log(title[i]);
                    image[i] = user['image'];
                    console.log(image[i]);
                    price[i] = user['price'];
                    console.log(price[i]);
                    $('#append').append('<div class="card prcard" id ="product1" style="width: 18rem; margin-left: 100px; margin-top: 100px;"><div  style="margin-left: 57px; margin-top: 20px;" class="img" ><img height="150px" width="150px" src="'+image[i]+'" id="image"></div><div class="card-body d-flex flex-column "><h5 class="card-title name">'+title[i]+'</h5><h5 class="card-title mt-auto d-flex flex-column" id="price" >$'+price[i]+'</h5><a href="#" id="add" class="btn btn-primary  align-text-bottom mt-auto bclass" id="add" style="background-color:black;"  >ADD TO CART</a></div></div>');
                }   
                let a =0;
                let b=0;
                let nanprice=0
                $('.bclass').click(function(){  
                    let $price =$(this).prev();  
                    let $image=$(this).parent().prev().find('#image');
                    let $name = $(this).prev().prev();
                    //appending to the cart
                    $('#cart').append('<div class="row"><div class="block" style="display: flex;"><div id="cart1" style="margin-top: auto;  margin-left: 60px ;"><div style="margin-top:10px"><h5 style = "margin-left:10px; margin-top:20px; width:500px;"><img height="150px" width="150px" src="'+$image.attr('src')+'" id="image"></h5></div></div></div><div class="block"><h5  style=" margin-left: 60px; width: 10px;" ><div style="margin-top:117px"><h5 style = "margin-left:80px; margin-top:10px; width:500px;">Price:'+$price.text()+'</h5></div></h5></div><div class="block"><h5  style=" margin-left: 30px ;width: 500px;;" id="tt1"><div style="margin-top:55px"><h5 style = "margin-left:10px; margin-top:20px; width:500px;">'+$name.text()+'</h5></div></h5></div><div class="block" ><h5 id ="addc" style="margin-top:10px;">QTY:<input type="number" class="inp" value=1 style="margin-top:10px; width:50px;" ><input type="text" class="price" value="$"  style="margin-left:600px;width:150px;margin-top:0px" ><div style="margin-top:23px"><a href="#"   class="btn btn-primary  align-text-bottom mt-auto addbutton" style="background-color:black ; margin-left: 600px ;width: 50px; margin-top: 10px; "  >+</a></div></h5></div><div class="block" ><h5 id = "remc"><div style="margin-top:103px"><a href="#"  class="btn btn-primary  align-text-bottom mt-auto  removebutton" style="background-color:black ; margin-left: 600px ;width: 50px; margin-top: 70px; "  >-</a></div></h5></div></div></div>')
                    //Bringing selected item to the cart
                    $(this).parent().parent().hide()
                    //unitprice is identified
                    let unitp = ($(this).prev().text());
                    console.log(unitp)
                    let priceValue = parseFloat(unitp.replace('$', ''));   
                    console.log(priceValue)
                    let unitpr=0;
                   
                    
                    a+=priceValue;

                    $('.addbutton').click(function(){
                        //quantity
                        qty=parseInt($(this).parent().prev().prev().val());
                        qty=qty+1;
                        $(this).parent().prev().prev().val(qty);
                        //price
                        unitpr = (priceValue*qty);
                        $(this).parent().prev().val(unitpr);
                        a += unitpr;   

                    })
                    $('.removebutton').click(function(){
                          //quantity
                          rqty=parseInt($(this).parent().parent().parent().parent().find('.inp').val());
                          rqty= rqty-1;
                          console.log(rqty);
                          //price
                          unitpr = (unitpr-priceValue);
                          //if negative
                          if(rqty==-1||unitpr<0){
                            rqty=0;
                            unitpr=0;
                        }   

                          $(this).parent().parent().parent().parent().find('.inp').val(rqty)
                          $(this).parent().parent().parent().parent().find('.price').val(unitpr.toFixed(2));
                          b+= unitpr;
                          
                    })
                    // let p=console.log('a+b'+a+b)
                    // $(this).parent().parent().parent().parent().parent().find('.price').val(a+b);
                   
                    //         if(isNaN(totalPrice)){
                                
                    // $(this).parent().parent().parent().parent().parent().find('.price').val()
                    //         }
                       
            })
            $('#calculate').click(function() {
                let totalPrice = 0;
                $('.price').each(function() {
                    let priceText = $(this).val();
                    let priceValue = parseFloat(priceText.replace('$', ''));
                    totalPrice += priceValue;
                })
                $('#total').text('$' + totalPrice.toFixed(2));
            

        })

            //     console.log('a+b'+nanprice);
            //     nanprice = a+b;
            //        //for calculation
            // $('#calculate').click(function() {
            //     let totalPrice = 0;
            //     $('.price').each(function() {
            //         let priceText = $(this).val();
            //         let priceValue = parseFloat(priceText.replace('$', ''));
            //         totalPrice += priceValue;
            //         // if(isNaN(totalPrice)){
            //         //     totalPrice += a+b;
            //         // }
            //     });
            //     $('#total').text('$' + totalPrice.toFixed(2));
               
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