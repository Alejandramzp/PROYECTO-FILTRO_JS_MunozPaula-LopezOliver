
![Logo](https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png)


# Proyecto JavaScript El Elico'tero


## Descripción
Una empresa aeroespacial recibe licitaciones públicas con el fin de realizar investigaciones enfocadas al turismo intergaláctico de los ciudadanos del planeta tierra.

Para subir sus ingresos, quieren crear un portafolio general, el cual permita visualizar todos los servicios realizados por los cohetes disponibles en esta empresa, desde la información técnica del producto hasta las posibles misiones a realizar.

Dicho esto, el equipo de diseño UI/UX, al igual que el equipo de sistemas, diseñó y proporcionó los diferentes *wireframes* y *endpoints* necesarios para que el diseñador *FullStack* lo vuelva realidad en un aplicativo web diseñado en HTML,CSS y JavaScript.
## API

- [API - SPACEX](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/one.md)

- [Recurso Base](https://github.com/CampusLands/spacex)
## Diseños Propuestos

Todos los diseños fueron realizados por medio de la herramienta Figma:

 - [Diseños en Figma](https://www.figma.com/design/kvIs4OLdgmfPpCE1xDs5yg/Untitled?node-id=0-1)


## Implementación

El proyecto se encuentra dividido en 4 diferentes módulos segun el consumo de la API.
- El primer modulo llamado "Company" que se implementó por medio de la URL de la Api en el apartado de Company (v4), llamando a cada uno de los datos con una funcion fetch e implementandolos al 100% en el DOM:   

```javascript
const companyUrl = 'https://api.spacexdata.com/v4/company';

fetch(companyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let companyInfo = document.getElementById("name");
        document.getElementById("info1").innerHTML=``;
    })
    .catch((error) => console.log(error));
```

- En el segundo módulo encontramos a "Rockets" que se implementó por medio de la URL de la Api en el apartado de Rockets (v4), en este módulo se consumieron los datos con la misma funcion que en Company, pero se implementó un ciclo que fuera iterando por todos los Rockets que en este caso son 4, para que los datos se pudieran apreciar al 100%:

```javascript
const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

fetch(rocketsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(rocketData => {
            let rocketsInfo = document.getElementById("infoRockets");
            rocketsInfo.innerHTML =``;
            displayRocketInfo(1)
        });
        
    })
    .catch((error) => console.log(error));
```
- Adicionalmente se agregaron los botones de la paginación de rockets por medio de WebComponents:

```javascript
class rocket4 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`
        <button id="botonRocket" onclick="displayRocketInfo(0)">1</button>
        <button id="botonRocket" onclick="displayRocketInfo(1)">2</button>
        <button id="botonRocket" onclick="displayRocketInfo(2)">3</button>
        <button id="botonRocket" onclick="displayRocketInfo(3)">4</button>`;
    }    
}
customElements.define('botones-rockets',rocket4)
```
- En el Tercer módulo encontramos a "Capsules" que se implementó por medio de la URL de la Api en el apartado de Capsule (v4), en este módulo se consumieron los datos con la misma funcion que en Company y Rockets, pero adicionalmente se implementó una segunda funcion que recolectara el ID de cada una de las capsulas y por medio de este ciclo fuera iterando por los lanzamientos en los que habian participado las diferentes capsulas (25), para que los datos se pudieran apreciar con mayor claridad y mostrar al 100% los datos: 

```javascript
launchesId = capsule.launches[0];
                launchesUrl = `https://api.spacexdata.com/v4/launches/${launchesId}`;
                fetch(launchesUrl)
                .then(response => response.json())
                .then(data2 => {
                    //--------------LANZAMIENTO--------------
                    document.getElementById("patch").innerHTML=`
                        <img src="${data2.links.patch.small}">
                    `;
                })
                .catch((error) => console.log(error)); 
            } 
```
- En este módulo tambien se agregaron los botones de la paginación de capsules por medio de WebComponents:

```javascript
class capsules25 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button id="botonCapsule" onclick="displayCapsuleInfo(0)">1</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(1)">2</button>
        `;
    }    
}
customElements.define('botones-capsules',capsules25)   
```

- En el cuarto módulo encontramos a "History" que se implementó por medio de la URL de la Api en el apartado de History (v4), en este módulo se consumieron los datos con la misma funcion que en los anteriores módulos, implementando un ciclo que fuera iterando por todos las history que en este caso son 15, para que los datos se pudieran apreciar al 100%:

```javascript
const historyUrl = 'https://api.spacexdata.com/v4/history';

fetch(historyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(historyData => {
            let historyInfo = document.getElementById("infoHistory");
            historyInfo.innerHTML =``;
            displayHistoryInfo(0);
        });
    })
    .catch((error) => console.log(error));
```

- En el módulo de history tambien se agregaron los botones de la paginación por medio de WebComponents:

```javascript
class history15 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`
        <button class="btn1" id="botonHistory" onclick="displayHistoryInfo(0)">1</button>
        `;
    }    
}
customElements.define('botones-history',history15)
```
## Navegación

- En la barra de navegación ubicada en la parte inferior de la página, encontrarás diferentes secciones del sitio web, como "Company", "Rockets", "Capsules" y "History". Puedes hacer clic en cualquiera de estas secciones para acceder a su contenido específico.

![App Screenshot](/storage/README/RM1.png)

- En las páginas de Rockets,Capsules y History encontrarás botones de acción que te permiten visualizar los diferentes datos de cada información almacenada en cada sección . Estos botones se encuentran ubicados en la parte inferior Izquierda y cuentan con una barra de deslizamiento para facilitar el acceso a cada uno de los botones de la paginación.

![App Screenshot](/storage/README/RM2.png)

- también encontrarás barras de deslizamiento en imagenes y contenido de cada sección para que puedas apreciar al 100% la informacion almacenada de esta API SpaceX:

![App Screenshot](/storage/README/RM3.png)

![App Screenshot](/storage/README/RM4.png)

- Dentro del contenido de cada página, encontrarás enlaces por medio de iconos coloridos que te llevarán a páginas relacionadas con la compañia SpaceX. Por ejemplo, en la página "Capsules", encontrarás enlaces a los diferentes lanzamientos por medio del icono de wikipedia y youtube.

![App Screenshot](/storage/README/RM5.png)
## Compatibilidad

Este proyecto está dirigido principalmente a:

- Resolución 1080p
- Iphone 14 Pro Max





## Desarrolladores

- [@Alejandramzp](https://github.com/Alejandramzp)
- [@Oliwashere](https://github.com/Oliwashere)

## Herramientas de Desarrollo

![App Screenshot](/storage/README/RM6.png)


## Agradecimientos

- Agradezco a Dios por darme la fortaleza y la sabiduría para completar este proyecto. Su guía y bendiciones han sido luz en mi camino, y estaré eternamente agradecida por su amor incondicional.

- Quiero agradecer a mi familia por su constante apoyo y comprensión durante este proyecto. Sus palabras de aliento y su paciencia infinita fueron fundamentales para mantenerme motivada en los momentos difíciles. Gracias por estar siempre a mi lado.

- Agradecezco a nuestros respectivos trainers, en especial a nuestro Trainer: Pedro Gómez, por brindarme orientación cuando me sentía perdida y sus invaluables consejos a lo largo de este proyecto. Gracias por inspirarme a alcanzar mis objetivos de manera satisfactoria.

- Quiero agradecer a mis compañeros por el tiempo que compartimos durante la realizacion de este proyecto,trabajar juntos ha sido algo muy valioso y gratificante. Juntos enfrentamos desafíos, celebramos logros y nos ayudamos mutuamente a superar obstáculos.

- Finalmente, gracias a mi querido amigo "Auto save", por salvarme de innumerables desastres. Sin él, habría borrado todo el proyecto al menos unas 20 veces. 
