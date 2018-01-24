
const LATERAL = document.querySelector("#lateral1");
const LATERAL1 = document.querySelector("#lateral");
const BODY=document.querySelector("body");
const ENCABEZADO=document.querySelector("#encabezado");

BODY.style.opacity =0;


BODY.animate({opacity:[0,1]},{queue: true, duration: 500,complete:BODY.style.opacity=1});
ENCABEZADO.animate({opacity:[0,1]},{queue: true, duration: 4000});
LATERAL1.animate({opacity:[0,1]},{queue: true, duration: 1000});
LATERAL.animate({opacity:[0,1]},{queue: true, duration: 1000});
