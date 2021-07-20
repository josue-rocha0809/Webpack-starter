import '../css/componentes.css'
//import Webpacklogo from '../assets/img/webpack-logo.png'


export const saludo =(nombre)=>{
      
    console.log('creando etiqueta h1');

    const h1=document.createElement('h1');
    h1.innerText=`Hola,${nombre}!!!`;
    document.body.append(h1);    

    /*const img= document.createElement('img');
    img.src=Webpacklogo;
    document.body.append(img);*/
}