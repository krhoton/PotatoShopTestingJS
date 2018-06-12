
module.exports = {    
    comparacionPrecios: function(precioCarrito,precioProducto,numeroDeCompras){
        //hacemos la comprobacion conforme los precios corresponden con:
        //precio total que hay en el carrito = multiplicación del precio del producto comprado con numero de compras. 
        return parseFloat(precioCarrito.replace("€",""))===parseFloat(precioProducto.replace("€",""))*parseFloat(numeroDeCompras);
    },
    buyProducts: function(){
        let comparar = browser.getText('#dropdownCart'); 
        if(comparar != '0.00€'){
            browser.click('#dropdownCart');
            browser.click('#purchase');
            browser.click('.btn.btn-outline-dark');            
            return true;
        }else{return false}
        
    }  
}