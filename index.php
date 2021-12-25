<!DOCTYPE html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>Exomoto Ecuador</title>
        <link rel="icon" type="image/png" href="resource/icon.jpg" />
        <link href="css/index.css" rel="stylesheet" type="text/css">
        <script src="js/index.js"></script>
    </head>
    <body>
        
        <article id="cjmenu">
            <div id="ttmenu">
                <div>
                    <p>MENU</p>
                </div>
                <div onclick="cerrarmenu();">
                    <p id="lbcerrar">X</p>
                </div>
            </div>
            <div id="cjlista">
               <ol id="listamenu">
                   <li onclick="verinfo();"><a>INFORMACIÓN</a></li>
                   <li onclick="abrirsubmenu();"><a>PRODUCTOS</a></li>
                        <ul id="submenu">
                            <li id="lbitem1" onclick="produc(1);"><a>ACCESORIOS</a></li>
                            <li id="lbitem2" onclick="produc(2);"><a>UTILITARIOS</a></li>
                            <li id="lbitem3" onclick="produc(3);"><a>VESTIMENTA</a></li>
                            <li id="lbitem4" onclick="produc(4);"><a>BISUTERIA</a></li>
                        </ul>
                    <li onclick="vercontact();"><a>CONTACTENOS</a></li>
                    <li onclick="verpagos();"><a>METODOS DE PAGO</a></li>
                    <li><a>ESTADO DE CUENTA</a></li>
                    <li onclick="verturis();"><a>DESTINOS TURISTICOS</a></li>
                    <li><a>POLITICAS DE VENTA</a></li>
                    <li><a>TRABAJA CON NOSOTROS</a></li>
               </ol> 
            </div>
            <div id="cjlogo">
                <img id="imglogo">
            </div>
        </article>

        <header id="lbcabeza">
            <nav id="cjnav">
                <article id="cjbtn">
                    <div onclick="abrirmenu();">
                        <img id="btnmenu">
                    </div>
                </article>
                <article id="cjtitle">
                    <div onclick="reload();"><h1>EXOMOTO</h1><img id="nomemp"></div>
                </article>
                <article id="cjnotif">
                    <div class="losbtones">
                        <img class="lasimgs"  id="btnbus">
                    </div>
                    <div class="losbtones">
                        <img class="lasimgs" id="btncarri">
                    </div>
                    <div class="losbtones">
                        <img class="lasimgs"  id="btnmens">
                    </div>
                    <div class="losbtones">
                        <img class="lasimgs" id="btnnotif">
                    </div>
                </article>
            </nav>
        </header>

        <section id="contenidos"></section>

        <footer id="lbpies">
            <article>
                <div class="btnabajo">
                    <img class="imgfooter" id="btnpost">
                </div>
                <div class="btnabajo">
                    <img class="imgfooter" id="btnimg">
                </div>
                <div class="btnabajo">
                    <img class="imgfooter" id="btnuser">
                </div>
                <div class="btnabajo">
                    <img class="imgfooter" id="btnyoutube">
                </div>
                <div class="btnabajo">
                    <img class="imgfooter" id="btnpodcast">
                </div>
            </article>
        </footer>
    </body>
</html>