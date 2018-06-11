
module.exports = {    
    comparacionPrecios: function(precioCarrito,precioProducto,numeroDeCompras){
        //Me falta pasarle los precios de los productos
        return precioCarrito===parseInt(precioProducto)*parseInt(numeroDeCompras);
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