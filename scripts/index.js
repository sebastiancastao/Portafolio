
let id=0;
class Activity{
    constructor(title,description,imgUrl){
    this.title=title,
    this.description=description,
    this.imgUrl=imgUrl
    this.id=id++;
    }

}

class Repository{
    constructor(){
        this.activities=[];
        //this.id=0;
        

    }

    createActivity(title,description,imgUrls){
        //let id=this.id++;

        let localactivity=new Activity(title,description,imgUrls);
        this.activities.push(localactivity);
    }
    getAllActivities(){
        return this.activities;
    }

    
    deleteActivity(...id){
        let m=0;
        let arraynuevo=this.activities;
        
         
        for(let j=0;j<arraynuevo.length;j++){
         m=0;

        for(let i=0; i<id.length;i++){  
            
        console.log(arraynuevo[j].id.id+"id");
        console.log(id[i]==arraynuevo[j].id.id);
        if(id[i]==arraynuevo[j].id.id){
 
            m++;
       
       

        }
        }
         
        if(m>0){
            this.activities.splice(j,1)
            j--;

        }
      
        
    }
}
}

let activity=new Activity("caminar","es un ejercicio de bajo impacto","C:\Users\sebas\OneDrive\Escritorio\PM1-sebastiancastao\assets\img\ciudad.png");




const activity2=new Activity("correr","es un ejercicio que ayuda al corazón","http");


const activity3=new Activity("nadar","es un ejercicio acuatico que consume muchas colorías ","http");


const activity4=new Activity("Fútbol","es el deporte grupal más famoso","http");

const rep=new Repository();




let titulo=document.getElementById("titulo");
let descripcion=document.getElementById("descripcion");
let url_de_imagen=document.getElementById("url_de_imagen");
const botonAgregar=document.getElementById("botonAgregar");

function formatoImagen(imagen){
    imag=`assets\img\ ${imagen}`
    return imag;
}


function activityToHtml(activity){
    const div = document.createElement("div");
    const titleDOM=document.createElement("h3");
    const descriptionDOM=document.createElement("p");
    const imageDOM=document.createElement("img");

    console.log(activity);

    const{elemento}=activity;

    const{title,description,imgUrl,id}=elemento;
    console.log(title);

    titleDOM.innerHTML=`Titulo: ${title}`;
    
    descriptionDOM.innerHTML=`Descripción: ${description}`;
    imageDOM.src=formatoImagen(imgUrl);
    div.classList.add("TarjetaActividad");
    imageDOM.classList.add("ImagenTarjeta");
    div.id=id;
    div.addEventListener("click",eliminar);
    div.appendChild(titleDOM);
    div.appendChild(descriptionDOM);
    div.appendChild(imageDOM);
    return div;

}



function activitiesToHtml(rep){
    const contenedor= document.getElementById("contenedorimagenes");
    
    
    console.log(contenedor.innerHTML+"hola");
    contenedor.innerHTML="";
    
  

    repo=rep.getAllActivities();

   console.log(contenedor.innerHTML+"hola2");
//   
   
    
    arrayactividades=repo.map(elemento=>activityToHtml({elemento}));

    
    arrayactividades.forEach((element) => {
        contenedor.append(element);
        
    }); 
    

    
}

function handler(){
    
    let titu=titulo.value;
    let desc=descripcion.value;
    let image=url_de_imagen.value;
    let letrero=document.getElementById("nohayactividades");
    letrero.style.display="none";

    

    if(titu==""||desc==""||image==""){
        return alert("Hay Campos Vacíos");
        
    }else{
    
     rep.createActivity(titu,desc,image);
     activitiesToHtml(rep);
     
    

     

    }

    titulo.value="";
    descripcion.value="";
    url_de_imagen.value="";
    


}
botonAgregar.addEventListener("click", handler);



function eliminar(event){
    id=event.target.id;
    div=document.getElementById(id);
    div.remove();
    

    



}

