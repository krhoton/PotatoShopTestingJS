const assert = require ('assert').strict;

module.exports = {    
    comparacionPrecios: function(precioCarrito,precioProducto,numeroDeCompras){
        //hacemos la comprobacion conforme los precios corresponden con:
        //precio total que hay en el carrito = multiplicación del precio del producto comprado con numero de compras. 
        return (parseFloat(precioCarrito.replace("€",""))).toFixed(2)===(parseFloat(precioProducto.replace("€",""))*numeroDeCompras).toFixed(2);
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
/******************************************* TEST DE FUNCIONES *****************************************************/

function comparacionDePrecios(precioCarrito,precioProducto,numeroDeCompras){
   return (parseFloat(precioCarrito.replace("€",""))).toFixed(2)===(parseFloat(precioProducto.replace("€",""))*numeroDeCompras).toFixed(2);
}
assert.equal(module.exports.comparacionPrecios('0','1',0),true);
assert.equal(module.exports.comparacionPrecios('9','3',3),true);
assert.equal(module.exports.comparacionPrecios('9€','3€',3),true);
assert.equal(module.exports.comparacionPrecios('9.60€','3.20€',3),true);