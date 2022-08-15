let namefood;
let pricefood;
let namedrink;
let pricedrink;
let namedessert;
let pricedessert;
let total;


function selectfood(elemento, name, price){
    namefood = name;
    pricefood = price
    console.log(namefood)
    console.log(pricefood)
    let border = document.querySelector(".hot-food ",".select")
    console.log(border)
    if(border != null){
        border.classList.remove("select")
    }
    elemento.classList.add('select')
    changeConfirm()
}

function selectdrink(elemento,name,price){
    namedrink = name;
    pricedrink = price
    console.log(namedrink)
    console.log(pricedrink)

    let border = document.querySelector(".drink" , ".select")
    if(border != null){
        border.classList.remove('select')
    }
    elemento.classList.add('select')
    changeConfirm()

}
function selectdessert(elemento, name, price){
    namedessert = name;
    pricedessert = price;
    let border = document.querySelector(".dessert",".select" )
    if (border != null){
        border.classList.remove('select')
    }
    elemento.classList.add('select')
    changeConfirm()

}
function changeConfirm(){
    
    if(namefood && namedrink && namedessert){
        document.querySelector('.dorequest').innerHTML = "Fazer pedido"
        document.querySelector('.end').classList.add('ready')
        
    }
}
function confirmrequest() {
    total = pricedessert + pricefood + pricedrink
    

        let msg = `Olá, gostaria de fazer o pedido:
        - Prato: ${namefood}
        - Bebida: ${namedrink}
        - Sobremesa: ${namedessert}
        - Total: ${total},00
        `

        msg = encodeURIComponent(msg);

        const numeroAtendimento = '5542998645096'
        const linkZapvac = `https://wa.me/${numeroAtendimento}?text=${msg}`
        window.open(linkZapvac);
}