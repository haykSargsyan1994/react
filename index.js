


class People {
    constructor(name){
       this.name=name;
    }
    
    RendeerName(){
        return this.name
    }

}


class Axjik extends People {
    constructor(name,age){
        super(name)
        this.age=age
    }
    renderAge(){
        return this.age + super.RendeerName()
    }

    
}

// const axjik1 = new Axjik("Narine",32)
// alert(axjik1.renderAge())




function helo (){
    alert("barev dzez")
}
function rendName (name){
    alert(name)
}
function rendfullName(name,lastname){
    alert(name + lastname)
}


                    //[name]
function infopeople (...elem){
    if(elem.length===0){
        alert("barev dzez")
    }else if(elem.length===1){
        alert(elem[0])
    }else if (elem.length===2){
        alert(elem[0] + elem[1])
    }

}

// infopeople("Karen")


// let people =[
//     {name:"David",age:20},
//     {name:"Vardan",age:58},
//     {name:"Hayko",age:11},

// ]


// people.filter((obj)=>{
//     return  obj.age === elem[0]
// })


// grel functia vory kaxvac stacvac parametric kkatari 2 
// gortcoxutyun arajiny ete poxancvi string kveradarcni objeci name vory 
// khamapatasxani trvac anunin isk ete parametry lini number tox veradarcni en obecty vori tariqy 
// hamapatasxanum e trvac tariqin




function infoPeop (name,lastname,age,id,soc,){
    this.name=name,
    this.lastname=lastname,
    this.age=age,
    this.id=id,
    this.soc=soc,
    this.frend=[],
    
     
    this.renderName=()=>{
        return this.name
    }
    this.renderlastnam=()=>{
        return this.lastname
    }
 }

 const pip1 =new infoPeop("Karen","Hakobyan","25","445545","78977979")
 let obj1={
    name:pip1.renderName(),
    lastname:pip1.renderlastnam()
};


 function info (obj){
    return obj.name + obj.lastname
}
alert(info(obj1))

incapsulacia























