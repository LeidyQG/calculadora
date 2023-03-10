function renderizarGUI(){

    //Div calculadora

    const divCalculadora= document.createElement("div");
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center");
    divCalculadora.setAttribute("style","width:50%; margin:0 auto;");
    document.body.appendChild(divCalculadora);

    //Div pantalla
    const divPantalla= document.createElement("div");
    divPantalla.setAttribute("id","pantalla");
    divCalculadora.appendChild(divPantalla); //Crea el divPantalla dentro del divCalculadora

    //Pantalla
    const pantalla= document.createElement("input");
    pantalla.setAttribute("id","pPantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disabled","true");
    divPantalla.setAttribute("class","form.control text-right");
    divPantalla.appendChild(pantalla);

    //Div botones
    const divBotones= document.createElement("div");
    divBotones.setAttribute("id","botones");
    divCalculadora.appendChild(divBotones);
}

renderizarGUI();