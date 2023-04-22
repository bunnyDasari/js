let car = {
     color : "black",
     value : "car",
     start : function(){
         setTimeout(function(){
             console.log(this)
         },1000)
     }
 }
  
  
 function Car(color,brand){
     this.color = color,
     this.brand = brand,
     this.start = () =>{
         console.log(this)
     }
 }
let a = new Car("blue","audi")
a.start()



let x = 9
x = 10
console.log(x)
x = 15 
console.log(x)