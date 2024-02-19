let idArray=[];
let k;
class Activity{
    constructor(id,title,description,imgUrl){
    this.title=title,
    this.description=description,
    this.imgUrl=imgUrl
    
    console.log(idArray);
    
    if(idArray.length>0){
        for(let i=0;i<idArray.length;i++){
        if(idArray[i]==id){
            throw new Error("Ya existe el id");
        

        }else{
        k++;
        }
        }
        if(k>0){
        idArray.push(id); 
        this.id=id;

        }else{
            throw new Error("Ya existe el id");
            

        }
    
    } 
    else{
        idArray.push(id); 
        this.id=id;
        k=0;
    }
    //let repository=Repository.retornarActividades();
    
    
    }

}

class Repository{
    constructor(){
        this.activities=[];
        

    }

    createActivity(Activityparam){
        let localactivity=new Activity({...Activityparam});
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

const activity1=new Activity(1,"caminar","es un ejercicio de bajo impacto","http");




const activity2=new Activity(2,"correr","es un ejercicio que ayuda al corazón","http");


const activity3=new Activity(3,"nadar","es un ejercicio acuatico que consume muchas colorías ","http");


const activity4=new Activity(4,"Fútbol","es el deporte grupal más famoso","http");

const rep=new Repository();
rep.createActivity(activity1);
rep.createActivity(activity2);
rep.createActivity(activity3);
rep.createActivity(activity4);
rep.deleteActivity(2,3);
console.log(rep.getAllActivities());
