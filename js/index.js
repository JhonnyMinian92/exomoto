var i = 1;

function reload(){
    location.reload();
}

function abrirmenu() {
        document.getElementById("cjmenu").style.visibility = "visible";
        document.getElementById("cjmenu").style.width = "250px";
}

function cerrarmenu() {
    document.getElementById("cjmenu").style.width = "0px";
    document.getElementById("cjmenu").style.visibility = "hidden";
    cerrarsubmenu();
}

function recorrer(x){
    if(i==1)
    {
        for(var j = 1; j <= x; j++){
            document.getElementById("lbitem"+j).style.height = "35px";
            document.getElementById("lbitem"+j).style.visibility = "visible";
        }
    }
    else{
        for(var j = 1; j <= x; j++){
            document.getElementById("lbitem"+j).style.height = "0px";
            document.getElementById("lbitem"+j).style.visibility = "hidden";
        }
    }
}

function abrirsubmenu(){
    if(i == 1) {
        document.getElementById("submenu").style.display = "block";
        document.getElementById("submenu").style.height = "auto";
        recorrer(4);
        i = 2;
    }
    else{
        cerrarsubmenu();
    }
}

function cerrarsubmenu(){
    document.getElementById("submenu").style.display = "none";
    recorrer(4);
    document.getElementById("submenu").style.height = "0px";
    i = 1;
}

//Acerca de
var acerca = "Somos una empresa dedicada a la venta de accesorios para motociclistas y motocicletas para una mejor experiencia en ruta, creando contenido sobre rutas dentro del Ecuador para la revision y desempaquetado de los productos vendidos por la empresa. "+
"ofrecemos entretenimiento en el cual encontraran diferentes productos de excelente calidad y precio para una ruta mas comoda y equipados desde bisuteria, ropa, accesorios entre otros.";
//Mision
var mision = "Ofrecer nuestros servicios como empresa de venta de accesorios y entretenimiento a todos los bikers dentro del terrotorio ecuatoriano, ofreciendoles informacion verificada sobre las rutas y productos calidad precio para su seguridad y comodidad en sus viajes";
//Vision
var vision = "Ser una entidad de referencia a nivel mundial para la informacion veridica sobre motos y rutas turisticas dentro del Ecuador ofreciendo una variedad de productos de seguridad para los motociclistas y sus motocicletas creando una red digital para debatir y "+
"compartir experiencias de los viajes y reseñas de los productos.";
//Objetivos
var objetivos = "";

//variables
var contenido;
var cjacerca;
var ttacerca;
var titus;
var ttcontent;

function cajascontenido(x, y, n){
    //ocultar barra
    cerrarmenu();
    //seleccionar section
    contenido = document.getElementById("contenidos");
    //crear acerca de
    cjacerca = document.createElement("article");
    cjacerca.setAttribute("id", "cjacerca"+n);
    contenido.appendChild(cjacerca);
    //cjacerca titulo
    ttacerca = document.createElement("div");
    ttacerca.setAttribute('id', 'ttacerca'+n);
    document.getElementById("cjacerca"+n).appendChild(ttacerca);
    //insertar texto
    titus = document.createElement("a");
    titus.textContent = x;
    titus.setAttribute('id', 'titus'+n);
    document.getElementById("ttacerca"+n).appendChild(titus);
    //cjacerca contenido
    ttcontent = document.createElement("div");
    ttcontent.textContent = y;
    ttcontent.setAttribute('id', 'ttcontent'+n);
    document.getElementById("cjacerca"+n).appendChild(ttcontent);
}

function verinfo (){
    document.getElementById("contenidos").innerHTML = "";
        //colocar logo
        var contenido = document.getElementById("contenidos");
        var cjlogo = document.createElement("div");
        cjlogo.setAttribute("id", "cjlogo");
        contenido.appendChild(cjlogo);
        var ftlogo = document.createElement("div");
        ftlogo.setAttribute("id", "ftlogo");
        cjlogo.appendChild(ftlogo);
        //Crear secciones
    cajascontenido("ACERCA DE NOSOTROS", acerca, 1);
    cajascontenido("MISION", mision, 2);
    cajascontenido("VISION", vision, 3);
    cajascontenido("OBJETIVOS", objetivos, 4);
    document.getElementById("ttcontent4").innerHTML = "<ul id='listobj'>"+
    "<li>Venta de Bisuteria Biker</li>"+
    "<li>Venta de Ropa y Seguridad</li>"+
    "<li>Venta de Accesorios para Motociclistas</li>"+
    "<li>Venta de Accesorios de Motocicleta</li>"+
    "<li>Compartir Entretenimiento e Informacion</li>"+
    "</ul>";
}


function produc(x){
    //ocultar barra
    cerrarmenu();
    document.getElementById("contenidos").innerHTML = "";
    if(x == 1){  }
    if(x == 2){  }
    if(x == 3){  }
    if(x == 4){  }
}

function llamar(){
    window.location.href="tel:+593989748403";
}

function correo(){
    window.open('mailto:info@exomotoecuador.com?subject=subject&body=body');
}

function facepage(){
    window.open("https://www.facebook.com/exomotooficial/");
}

function instapage(){
    window.open("https://www.instagram.com/exomotoecuador/");
}

function twitpage(){
    window.open("https://twitter.com/ExomotoEcuador");
}

function enviarcorreo() {
    if(document.getElementById("textnom").value != "" && document.getElementById("textmail").value != "" && document.getElementById("textcel").value != ""){
        
    } else {  }
}

function vercontact(){
    //ocultar barra
    cerrarmenu();
    document.getElementById("contenidos").innerHTML = "";
    var contenido = document.getElementById("contenidos");
    //crear contenido contact
    var cjcontact = document.createElement("article");
    cjcontact.setAttribute("id", "cjcontact");
    contenido.appendChild(cjcontact);
    //crear div de titulo
    var ttcontact = document.createElement("div");
    ttcontact.setAttribute("id", "ttcontact");
    ttcontact.textContent = "DEJA TU MENSAJE";
    cjcontact.appendChild(ttcontact);
    //crear div contenido
    var concontac = document.createElement("div");
    concontac.setAttribute("id", "concontac");
    cjcontact.appendChild(concontac);
    //inner de textbox en concontac
    //nombre
    var nomcont = document.createElement("div");
    nomcont.setAttribute("id", "nomcont");
    nomcont.textContent = "Nombre";
    concontac.appendChild(nomcont);
    var textnom = document.createElement("input");
    textnom.setAttribute("id", "textnom");
    textnom.setAttribute("type", "text");
    //textnom.setAttribute("placeholder", "Nombre y Apellidos");
    concontac.appendChild(textnom);
    //correo
    var mailcont = document.createElement("div");
    mailcont.setAttribute("id", "mailcont");
    mailcont.textContent = "Correo";
    concontac.appendChild(mailcont);
    var textmail = document.createElement("input");
    textmail.setAttribute("id", "textmail");
    textmail.setAttribute("type", "email");
    //textmail.setAttribute("placeholder", "Correo Electronico");
    concontac.appendChild(textmail);
    //telefono
    var celcont = document.createElement("div");
    celcont.setAttribute("id", "celcont");
    celcont.textContent = "Teléfono";
    concontac.appendChild(celcont);
    var textcel = document.createElement("input");
    textcel.setAttribute("id", "textcel");
    textcel.setAttribute("type", "number");
    //textcel.setAttribute("placeholder", "Celular o Convencional");
    concontac.appendChild(textcel);
    //comentario
    var comencont = document.createElement("div");
    comencont.setAttribute("id", "comencont");
    comencont.textContent = "Comentario";
    concontac.appendChild(comencont);
    var textcomen = document.createElement("textarea");
    textcomen.setAttribute("id", "textcomen");
    textcomen.setAttribute("type", "text");
    //textcomen.setAttribute("placeholder", "Escribir la pregunta");
    concontac.appendChild(textcomen);
    //boton de envio
    var btnenviar = document.createElement("div");
    btnenviar.setAttribute("id", "btnenviar");
    btnenviar.setAttribute("onclick", "enviarcorreo();");
    btnenviar.textContent = "ENVIAR";
    cjcontact.appendChild(btnenviar);
    //crear botones de mensajeria
    var tfooter = document.createElement("div");
    tfooter.setAttribute("id", "tfooter");
    contenido.appendChild(tfooter);
    //crear ubicacion
    var tdir = document.createElement("div");
    tdir.setAttribute("id", "tdir");
    contenido.appendChild(tdir);
    //iconos
    //whatsapp
    var btwhats = document.createElement("div");
    btwhats.setAttribute("id", "btwhats");
    btwhats.setAttribute("onclick", "btnwhatsapp();");
    tfooter.appendChild(btwhats);
    //telegram
    var bttelem = document.createElement("div");
    bttelem.setAttribute("id", "bttelem");
    bttelem.setAttribute("onclick", "btntelegram();");
    tfooter.appendChild(bttelem);
    //messenger
    var btmensen = document.createElement("div");
    btmensen.setAttribute("id", "btmensen");
    btmensen.setAttribute("onclick","btnmessenger();");
    tfooter.appendChild(btmensen);
    //telefonos
    var lbtelef = document.createElement("div");
    lbtelef.setAttribute("id", "lbtelef");
    lbtelef.textContent = "SERVICIO AL CLIENTE";
    tfooter.appendChild(lbtelef);
    //texto celular
    var txttelf = document.createElement("div");
    txttelf.setAttribute("id", "txttelf");
    txttelf.setAttribute("onclick", "llamar();");
    txttelf.textContent = "Telefono: 0989748403";
    tfooter.appendChild(txttelf);
    //texto correo
    var txtemail = document.createElement("div");
    txtemail.setAttribute("id", "txtemail");
    txtemail.setAttribute("onclick", "correo();");
    txtemail.textContent = "E-mail: info@exomotoecuador.com";
    tfooter.appendChild(txtemail);
    //redes sociales
    //facebook
    var txtface = document.createElement("div");
    txtface.setAttribute("id", "txtface");
    txtface.setAttribute("onclick", "facepage();");
    txtface.textContent = "Facebook";
    tfooter.appendChild(txtface);
    //twitter
    var txttwit = document.createElement("div");
    txttwit.setAttribute("id", "txttwit");
    txttwit.setAttribute("onclick", "twitpage();");
    txttwit.textContent = "Twitter";
    tfooter.appendChild(txttwit);
    //instagram
    var txtinsta = document.createElement("div");
    txtinsta.setAttribute("id", "txtinsta");
    txtinsta.setAttribute("onclick", "instapage();");
    txtinsta.textContent = "Instagram";
    tfooter.appendChild(txtinsta);
    //caja mapa
    var titumapa = document.createElement("div");
    titumapa.setAttribute("id", "titumapa");
    tdir.appendChild(titumapa);

    var lbmapa = document.createElement("div");
    lbmapa.setAttribute("id", "lbmapa");
    tdir.appendChild(lbmapa);
    document.getElementById("lbmapa").innerHTML = "<iframe src='https://www.google.com/maps/d/embed?mid=1220T0LoZi1WkshE34Nw1aGyC6JXHX2yL&ehbc=2E312F' width='100%' height='220'></iframe>";
    //ubicacion de tienda
    var dvtienda = document.createElement("div");
    dvtienda.setAttribute("id", "dvtienda");
    dvtienda.textContent = "TIENDA EXOMOTO";
    titumapa.appendChild(dvtienda);

    var lb1tienda = document.createElement("div");
    lb1tienda.setAttribute("id", "lb1tienda");
    lb1tienda.textContent = "Sexta Avenida y Eloy Alfaro Esquina";
    titumapa.appendChild(lb1tienda);

    var lb2tienda = document.createElement("div");
    lb2tienda.setAttribute("id", "lb2tienda");
    lb2tienda.textContent = "Machala - El Oro - Ecuador";
    titumapa.appendChild(lb2tienda);

    //ubicacion de restaurante
    var dvrest = document.createElement("div");
    dvrest.setAttribute("id", "dvrest");
    dvrest.textContent = "EXOMOTO RESTAURANTE";
    titumapa.appendChild(dvrest);

    var lb1rest = document.createElement("div");
    lb1rest.setAttribute("id", "lb1rest");
    lb1rest.textContent = "Cristóbal Colón y 15 de Octubre";
    titumapa.appendChild(lb1rest);

    var lb2rest = document.createElement("div");
    lb2rest.setAttribute("id", "lb2rest");
    lb2rest.textContent = "Santa Rosa - El Oro - Ecuador";
    titumapa.appendChild(lb2rest);
}

function btnwhatsapp(){
    window.open("https://wa.me/+593989748403?text=Saludos");
}

function btntelegram(){
    window.open("https://t.me/exomotoecuador?text=Saludos");
}

function btnmessenger(){
    window.open("http://m.me/exomotoecuado?text=Saludos");
    /** https://www.messenger.com/t/100066830236055/ **/
}

function verpagos(){
    cerrarmenu();
    document.getElementById("contenidos").innerHTML = "";
    //crear portada
    var contenido = document.getElementById("contenidos");
    var portada = document.createElement("div");
    portada.setAttribute("id", "portada");
    contenido.appendChild(portada);
    //crear cuadro 1
    var subtt = document.createElement("div");
    subtt.setAttribute("id", "subtt");
    portada.appendChild(subtt);
    var lbtt = document.createElement("div");
    lbtt.setAttribute("id", "lbtt");
    lbtt.textContent = "METODOS DE PAGO";
    subtt.appendChild(lbtt);
    //crear cuadro 2
    var subtl = document.createElement("div");
    subtl.setAttribute("id", "subtl");
    portada.appendChild(subtl);
    var lbsub = document.createElement("div");
    lbsub.setAttribute("id", "lbsub");
    lbsub.textContent = "Tus COMPRAS EN LINEA con tu TARJETA favorita";
    subtl.appendChild(lbsub);
    //foto de pagos
    var fotopag = document.createElement("div");
    fotopag.setAttribute("id", "fotopag");
    contenido.appendChild(fotopag);
    //cuadro de depositos
    var tipop = document.createElement("div");
    tipop.setAttribute("id", "tipop");
    contenido.appendChild(tipop);
    var lbtipop = document.createElement("div");
    lbtipop.setAttribute("id", "lbtipop");
    lbtipop.textContent = "DEPOSITO / TRANSFERENCIA";
    tipop.appendChild(lbtipop);

    //cuadros de bancos
    var cajabancos = document.createElement("div");
    cajabancos.setAttribute("id","cajabancos");
    contenido.appendChild(cajabancos);
    //caja pichincha
    lacajabancos("idpich", "BANCO PICHINCHA",1);
    lacajabancos("idprod", "BANCO PRODUBANCO",2);
    lacajabancos("idpacif", "BANCO PACIFICO",3);
    lacajabancos("idguaya", "BANCO GUAYAQUIL",4);
    lacajabancos("idinter", "INTERNACIONAL",5);
    lacajabancos("idbol", "BOLIVARIANO",6);
    lacajabancos("idaust", "BANCO AUSTRO",7);
    lacajabancos("idjep", "COOPERATIVA JEP",8);

    //crear cuadro de politicas
    var subfood = document.createElement("div");
    subfood.setAttribute("id","subfood");
    contenido.appendChild(subfood);

    //crear divs de enlaces
    var lnk1 = document.createElement("div");
    lnk1.setAttribute("onclick","infosri();");
    lnk1.textContent = "Facturacion Electronica";
    subfood.appendChild(lnk1);
    var lnk2 = document.createElement("div");
    lnk2.setAttribute("onclick","cambdevol();");
    lnk2.textContent = "Cambios y Devoluciones";
    subfood.appendChild(lnk2);
    var lnk3 = document.createElement("div");
    lnk3.setAttribute("onclick","rutenvio();");
    lnk3.textContent = "Metodos de Envio";
    subfood.appendChild(lnk3);
}

function cerrarpagos(){
    document.getElementById("cajabancos").innerHTML = "";
    document.getElementById("portada").style.display = "none";
    document.getElementById("fotopag").style.display = "none";
    document.getElementById("tipop").style.display = "none";
}

function infosri(){
    cerrarpagos();
    //agregar foto
    var imgfact = document.createElement("div");
    imgfact.setAttribute("id","imgfact");
    cajabancos.appendChild(imgfact);
    //agregar contenido
    var ttfact = document.createElement("div");
    ttfact.setAttribute("id","ttfact");
    ttfact.textContent = "FACTURACIÓN ELECTRONICA";
    cajabancos.appendChild(ttfact);
    var txtfact = document.createElement("div");
    txtfact.setAttribute("id","txtfact");
    cajabancos.appendChild(txtfact);

    document.getElementById("txtfact").innerHTML = ""+
    "Exomoto Ecuador emite a sus cordiales clientes facturas electronicas para su comodidad y seguridad."+
    " Dichas facturas llegaran a sus correos electronicos instantaneamente despues de su compra con la respectiva autorizacion por el SRI.<br>"+
    "La facturación electrónica es otra forma de emisión de comprobantes de venta que cumple con los requisitos legales y reglamentarios exigibles para su autorización por parte del SRI, garantizando la autenticidad de su origen e integridad de su contenido, ya que incluye en cada comprobante la firma electrónica del emisor."+
    "<br><br><strong>Requisitos</strong><br>"+
    "<ul><li>Cedula de Identidad</li><li>Nombres y Apellidos</li><li>Correo Electronico</li></ul><br>"+
    "<strong>Beneficios</strong><br>"+
    "<ul><li>Facilidad</li><li>Rapidez</li><li>Confiabilidad</li></ul>";
}

function cambdevol(){
    cerrarpagos();
    var imgdevol = document.createElement("div");
    imgdevol.setAttribute("id","imgdevol");
    cajabancos.appendChild(imgdevol);
    var ttcambio = document.createElement("div");
    ttcambio.setAttribute("id","ttcambio");
    ttcambio.textContent = "POLITICA DE CAMBIOS";
    cajabancos.appendChild(ttcambio);
    var txtcambio = document.createElement("div");
    txtcambio.setAttribute("id","txtcambio");
    cajabancos.appendChild(txtcambio);
    //AGREGAR CONTENIDO
    document.getElementById("txtcambio").innerHTML = ""+
    "Exomoto Ecuador es una empresa interesada en la satisfaccion del cliente, por ello mantenemos una politica de cambio de productos en caso de que los mismos en transito sufran un siniestro. "+
    "Para ello tenemos un riguroso control para que los productos lleguen perfectamente a su destino pero en caso de siniestro Exomoto realiza cambios dentro de las 36 horas de haber enviado el producto.<br>"+
    "<br><strong>Requisitos</strong>"+
    "<ul><li>Dentro de las 36 horas desde su envio</li><li>No puede estar sucio o con algun defecto por uso</li><li>Enviar con la factura para su cambio</li></ul>";
    //DEVOLUCIONES
    var ttdevol = document.createElement("div");
    ttdevol.setAttribute("id","ttdevol");
    ttdevol.textContent = "POLITICA DE DEVOLUCIONES";
    cajabancos.appendChild(ttdevol);
    var txtdevol = document.createElement("div");
    txtdevol.setAttribute("id","txtdevol");
    cajabancos.appendChild(txtdevol);
    //AGREGAR CONTENIDO
    document.getElementById("txtdevol").innerHTML = ""+
    "Exomoto Ecuador es una empresa conciente de las diversas calamidades que se pueden ocasionar en transito o la diferencia entre las expectativas de ciertos productos y la realidad de los mismo. "+
    "Es por ello que Exomoto permite la devolucion total monetaria de sus productos en caso de siniestro en transito o por una diferencia muy superior de la realidad de nuestros productos y la expectativa de nuestros cientes.<br>"+
    "<br><strong>Requisitos</strong>"+
    "<ul><li>Dentro de las 36 horas desde su envio</li><li>Enviar el producto de igual manera en que se envio</li><li>No puede estar sucio o con algun defecto por uso</li><li>Enviar con la factura para su devolucion</li></ul>";
}

function rutenvio(){
    cerrarpagos();
    //agregar foto
    var imgenvio = document.createElement("div");
    imgenvio.setAttribute("id","imgenvio");
    cajabancos.appendChild(imgenvio);
    var ttenvio = document.createElement("div");
    ttenvio.setAttribute("id","ttenvio");
    ttenvio.textContent = "ENVIOS A TODO EL ECUADOR";
    cajabancos.appendChild(ttenvio);
    var txtenvio = document.createElement("div");
    txtenvio.setAttribute("id","txtenvio");
    cajabancos.appendChild(txtenvio);
    //cargar info de envios
    document.getElementById("txtenvio").innerHTML = ""+
    "Exomoto Ecuador realiza envios a nivel nacional a traves del servicio logistico de Servientrega, los horarios y dias de entrega se rigen por los horarios y disponibilidad de la empresa Servientrega.<br><br>"+
    "El gestionanmiento de envio de las encomiendas se realizan a las 3pm del dia en que se realiza la compra. El dia u hora de entrega depende del servicio de currier.<br>"+
    "<br><strong>Requisitos</strong>"+
    "<ul><li>Registrar la direccion completa</li><li>Registrar telefono de contacto</li><li>Encomienda a nombre del comprador</li><li>Se adjunta factura con encomienda</li></ul>"+
    "Los costos de envio dependen de la ubicacion y el peso del mismo, dicha informacion se remitira a los compradores antes de concretar la compra.";
}

function btncierrenof(){
    document.getElementById("cajabancos").innerHTML = "";
    //caja pichincha
    lacajabancos("idpich", "BANCO PICHINCHA",1);
    lacajabancos("idprod", "BANCO PRODUBANCO",2);
    lacajabancos("idpacif", "BANCO PACIFICO",3);
    lacajabancos("idguaya", "BANCO GUAYAQUIL",4);
    lacajabancos("idinter", "INTERNACIONAL",5);
    lacajabancos("idbol", "BOLIVARIANO",6);
    lacajabancos("idaust", "BANCO AUSTRO",7);
    lacajabancos("idjep", "COOPERATIVA JEP",8);
}

function vercuent(n){
    document.getElementById("cajabancos").innerHTML = "";
    //crear cuadros de banco
    var notif = document.createElement("div");
    notif.setAttribute("id","cajanotif");
    cajabancos.appendChild(notif);
    //boton de cerrar
    var nofcierre = document.createElement("div");
    nofcierre.setAttribute("id","nofcierre");
    notif.appendChild(nofcierre);
    var nofbtcierre = document.createElement("div");
    nofbtcierre.setAttribute("id","nofbtcierre");
    nofbtcierre.setAttribute("onclick","btncierrenof();");
    nofbtcierre.textContent = "X";
    nofcierre.appendChild(nofbtcierre);
    var contnotif = document.createElement("div");
    contnotif.setAttribute("id","contnotif");
    notif.appendChild(contnotif);
    //cargar info de bancos
    var fotonotif = document.createElement("div");
    fotonotif.setAttribute("id","icono"+n+"");
    fotonotif.setAttribute("class","fotonotif");
    contnotif.appendChild(fotonotif);
    //cargar datos
    var lbnof1 = document.createElement("div");
    lbnof1.setAttribute("class","lbnotifcaciones");
    lbnof1.setAttribute("id","lbnof1");
    contnotif.appendChild(lbnof1);
    var lbnof2 = document.createElement("div");
    lbnof2.setAttribute("class","lbnotifcaciones");
    lbnof2.setAttribute("id","lbnof2");
    contnotif.appendChild(lbnof2);
    var lbnof3 = document.createElement("div");
    lbnof3.setAttribute("class","lbnotifcaciones");
    lbnof3.setAttribute("id","lbnof3");
    contnotif.appendChild(lbnof3);
    var lbnof4 = document.createElement("div");
    lbnof4.setAttribute("class","lbnotifcaciones");
    lbnof4.setAttribute("id","lbnof4");
    contnotif.appendChild(lbnof4);
    if(n == 1){ darcontent("BANCO PICHINCHA", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 2){ darcontent("BANCO PRODUBANCO", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 3){ darcontent("BANCO PACIFICO", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 4){ darcontent("BANCO GUAYAQUIL", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 5){ darcontent("BANCO INTERNACIONAL", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 6){ darcontent("BANCO BOLIVARIANO", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 7){ darcontent("BANCO DEL AUSTRO", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
    if(n == 8){ darcontent("COOPERATIVA JEP", "CUENTA CORRIENTE", "Numero: 22000225674", "Titular: Exomoto Ecuador"); }
}

function darcontent(txt1, txt2, txt3, txt4){
    document.getElementById("lbnof1").textContent = ""+txt1+"";
    document.getElementById("lbnof1").style.fontWeight = "bold";
    document.getElementById("lbnof2").textContent = ""+txt2+"";
    document.getElementById("lbnof3").textContent = ""+txt3+"";
    document.getElementById("lbnof4").textContent = ""+txt4+"";
}

function lacajabancos(idnom, nombre, m){
    var id = document.createElement("div");
    id.setAttribute("id",""+idnom+"");
    id.setAttribute("onclick","vercuent("+m+");");
    id.setAttribute("class","lascajitas");
    cajabancos.appendChild(id);
    //crear div de imagen
    var ck = document.getElementById(""+idnom+"");
    var id2 = document.createElement("div");
    id2.setAttribute("id",""+idnom+"img");
    ck.appendChild(id2);
    //caja de imagen
    var cimg = document.getElementById(""+idnom+"img");
    var fto = document.createElement("div");
    fto.setAttribute("id","icono"+m+"");
    cimg.appendChild(fto);
    //crear div de nombre
    var id3 = document.createElement("div");
    id3.setAttribute("id",""+idnom+"nom");
    id3.textContent = ""+nombre+"";
    ck.appendChild(id3);
}

function verturis(){
    cerrarmenu();
    document.getElementById("contenidos").innerHTML = "";
    var contenido = document.getElementById("contenidos");
    //Crear boton de restaurante
    var btnrestau = document.createElement("div");
    btnrestau.setAttribute("id","btnrestau");
    contenido.appendChild(btnrestau);
    var btnres = document.createElement("div");
    btnres.setAttribute("id","btnres");
    btnrestau.appendChild(btnres);

    var lbnres = document.createElement("div");
    lbnres.setAttribute("id","lbnres");
    lbnres.textContent = "EXOMOTO RESTAURANTE";
    btnres.appendChild(lbnres);
    var iconres = document.createElement("div");
    iconres.setAttribute("id","iconres");
    btnres.appendChild(iconres);

    //crear div de botones
    var cjbtprov = document.createElement("section");
    cjbtprov.setAttribute("id","cjbtprov");
    contenido.appendChild(cjbtprov);

    var nuevdiv;
    var imgnuevdiv;
    var lbnuevdiv;

    //array de provincias
    const provin = ["Esmeraldas",
                    "Manabí",
                    "Los Ríos",
                    "Santa Elena",
                    "Guayas",
                    "Santo Domingo de los Tsáchilas",
                    "El Oro",
                    "Azuay",
                    "Bolívar",
                    "Cañar",
                    "Carchi",
                    "Cotopaxi",
                    "Chimborazo",
                    "Imbabura",
                    "Loja",
                    "Pichincha",
                    "Tungurahua",
                    "Morona Santiago",
                    "Napo",
                    "Orellana",
                    "Pastaza",
                    "Sucumbíos",
                    "Zamora Chinchipe",
                    "Galápagos"];

    //ciclo
    for (var i = 1; i <= 24; i++) {
        nuevdiv = document.createElement("div");
        nuevdiv.setAttribute("id","prov"+i+"");
        nuevdiv.setAttribute("class","nuevdiv");
        cjbtprov.appendChild(nuevdiv);
        //caja con imagen
        imgnuevdiv = document.createElement("div");
        imgnuevdiv.setAttribute("id","imgnuevdiv"+i+"");
        imgnuevdiv.setAttribute("class","imgnuevdiv");
        nuevdiv.appendChild(imgnuevdiv);
        //caja con texto
        lbnuevdiv = document.createElement("div");
        lbnuevdiv.setAttribute("id","lbnuevdiv"+i+"");
        lbnuevdiv.setAttribute("class","lbnuevdiv");
        lbnuevdiv.textContent = ""+provin[i-1]+"";
        nuevdiv.appendChild(lbnuevdiv);      
    }

}
