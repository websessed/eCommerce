
/* 
core features: 
    -user auth
    -user profile, addresses, order history 
    -product catalog (
        static seed data 
        product listing with category filters + keyword search
        product attributes: title, price, description, stock, category, images
        product detail page (with multiple images, price, description, stock availability)
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
    orders {
        order statuses: placed → processing → shipped 
    }
    admin panel (
        auth restricted to admin users
        add/edit/delete products 
        view dummy orders 
    )
*/