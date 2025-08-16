
/* 
core features: 
    -user auth
    -user profile, addresses, order history 
    -product catalog (
        static seed data 
        search & categories filters
        product details (title, price, description, images)
    )
    cart system (
        add/remove/update quantities 
        local persistance (localstorage until checkout)
    )
    checkouts flow (
        stripe (test mode)
        on "pay" → show a dummy stripe popup - mark order as 'placed' in db
        dummy order confirmation page

    )
    admin panel (
        add/edit/delete products 
        view dummy orders 
    )
*/