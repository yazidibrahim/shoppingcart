$(document).ready(function() {
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: 'get',
        success: function(data) {
            const id = [];
            const title = [];
            const image = [];
            const price = [];
            for (var i = 1; i < 5; i++) {
                const user = data[i];
                title[i] = user['title'];
                image[i] = user['image'];
                price[i] = user['price'];
                $('#append').append(`
                    <div class="card prcard" id="product1" style="width: 18rem; margin: 20px;">
                        <div style="margin: 20px auto;" class="img">
                            <img height="150px" width="150px" src="${image[i]}" id="image">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title name">${title[i]}</h5>
                            <h5 class="card-title mt-auto d-flex flex-column" id="price">$${price[i]}</h5>
                            <a href="#" class="btn btn-primary align-text-bottom mt-auto bclass" style="background-color:black;">ADD TO CART</a>
                        </div>
                    </div>
                `);
            }

            $('#append').on('click', '.bclass', function() {
                let priceText = $(this).prev().text();
                let priceValue = parseFloat(priceText.replace('$', ''));
                let imageSrc = $(this).closest('.card').find('img').attr('src');
                let nameText = $(this).closest('.card-body').find('.name').text();

                $('#cart').append(`
                    <div class="row cart-item">
                        <div class="col-md-3">
                            <img height="150px" width="150px" src="${imageSrc}" id="image">
                        </div>
                        <div class="col-md-3">
                            <h5>${nameText}</h5>
                        </div>
                        <div class="col-md-2">
                            <input type="number" class="inp form-control" value="1" min="1">
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="unit-price form-control" value="${priceValue.toFixed(2)}" readonly>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="price form-control" value="${priceValue.toFixed(2)}" readonly>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-success addbutton">+</button>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-danger removebutton">-</button>
                        </div>
                    </div>
                `);

                $(this).closest('.card').hide();
            });

            $('#cart').on('click', '.addbutton', function() {
                let $row = $(this).closest('.row');
                let $qtyInput = $row.find('.inp');
                let qty = parseInt($qtyInput.val());
                let unitPrice = parseFloat($row.find('.unit-price').val());

                qty++;
                $qtyInput.val(qty);
                $row.find('.price').val((unitPrice * qty).toFixed(2));
            });

            $('#cart').on('click', '.removebutton', function() {
                let $row = $(this).closest('.row');
                let $qtyInput = $row.find('.inp');
                let qty = parseInt($qtyInput.val());
                let unitPrice = parseFloat($row.find('.unit-price').val());

                if (qty > 1) {
                    qty--;
                    $qtyInput.val(qty);
                    $row.find('.price').val((unitPrice * qty).toFixed(2));
                }
            });

            $('#calculate').click(function() {
                let totalPrice = 0;
                $('.price').each(function() {
                    totalPrice += parseFloat($(this).val());
                });
                $('#total').text('$' + totalPrice.toFixed(2));
            });
            $('#clear-cart').click(function() {
                $('#cart').empty();
                $('#total').text('$0.00');
                $('.prcard').show();
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
});
