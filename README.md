### Features

- Práctica realizada de Web Components.
- Demostración de Home Web Page utilizando 2 componentes reutilizables.
- Utilizando tecnologías nativas del navegador HTML - CSS - JS.
- Por medio de APIs HTMLElement, customElement, shadowDOM, Template.
- Ciclos de vida utilizados en los componentes: constructor(), connectedCallback(), attributeChangeCallback().
- Diferentes métodos dentro de la clase para generar por separado el HTML, los estilos y el renderizado.
- Información y algunos estilos personalizados desde la etiqueta customizada en HTML por medio de los atributos.
- Uso de static get observedAttributes() para escuchar los cambios en los atributos de las etiquetas personalizadas.

# Telescopio Jammes Webb

![](https://mendohardware.com.ar/img/telescopioJammesWebb/telescopioJammesWebb.png)

###Images

Image Home:

![](https://mendohardware.com.ar/img/telescopioJammesWebb/webJammesWebb.webp)
                
----

###Links

[Repositorio Github](https://github.com/mrivero40/webComponents)

`<link>` : <https://github.com/mrivero40/webComponents>

####HTML code
componente navbar.js
```html

<!DOCTYPE html>
<html>
    <head>
        <meta charest="utf-8" />
        <title>Web Components</title>
    </head>
    <body>
        <h1>Web Components</h1>		
		<nav-bar
            backgroundcolor="#202020b8"
            logo="./icons/logoWebComponents.png"
            linkdocument="https://webcomponents.org"
            name="webcomponents.org"
            titleh1="Telescopio JAMES WEBB"
            icono="./icons/icon-email.png"
            email="matiasrivero40@hotmail.com"
            link="mailto:matiasrivero40@hotmail.com"
            bordersradius="var(--borders-radius-bottom)"
            titlecolor="#bbd941"
            backiconcolor="black"
            backimgcolor="#7f8694"
        ></nav-bar>
    </body>
</html>

```
####Atributos obligatorios: logo, linkdocument, name, title, icono, email y link.
- logo = logo left
- linkdocument = url de empresa o documentancion
- name = nombre de empresa o documentacion
- title = principal center
- icono = icono right contacto
- email = correo elect a mostrar o dato de contato
- link = email usando ( "mailto:correo@dominio.com" ) o otra página de contacto usando url ( "https://tuwebdecontacto.com" )

####Atributos opcionales: backgrouncolor, bordersradius, titlecolor, backiconcolor
- backgroundcolor = color de fondo de la barra
- bordersradius = puedes utilizar manualmente los bordes haciendo uso de los valores de border-radius de CSS o utilizando alguna de las variables predefinidas var(--variable-elegida);

 --borders-radius-top ( bordes redondeados 3rem arriba ambos )
 --border-radius-bottom ( bordes redondeados 3rem abajo ambos )

- titlecolor = color del título principal
- backiconcolor = color de fondo de los íconos right barra (usar imágenes fondo transparente)
- backimgcolor = color de fondo de las imágenes left barra (usar imágenes fondo transparente), afecta también al texto "span" left y right

#####*Los atributos opciones pueden omitirse y se establecen estilos por defecto.

componente cardElementWC.js
```html

<!DOCTYPE html>
<html>
    <head>
        <meta charest="utf-8" />
        <title>Web Components</title>
    </head>
    <body>
        <h1>Web Components</h1>		
		<web-component 
                img="https://www.semana.com/resizer/-hihB101SawevUgDnZAkiL6HFac=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/J73ARXYGYRBELJVD6XEBPXMZUE.jpg"
                title="Telescopio James Webb"
                parrafo="El telescopio espacial James Webb es un observatorio espacial desarrollado a través de la colaboración de 14 países​, construido y operado conjuntamente por la Agencia Espacial Europea, la Agencia Espacial Canadiense y la NASA para sustituir los telescopios Hubble y Spitzer. Wikipedia."
                cardcolor="#08101d"
                titlecolor="#b8699a"
                parrafocolor="#ebafb1"
            ></web-component>
    </body>
</html>

```
- Atributos obligatorios son: img, title, parrafo.
- Atributos opcionales son: cardcolor, titlecolor, parrafocolor. Pueden omitirse estos atributos y se cargarán colores por defecto del componente ej. card 1
