import { showLightBox } from "./workerLightbox.js";

export default class WorkerClass {
    constructor(_parent , _item){
        this.parent = _parent;
        this.name = _item.name;
        this.img = _item.picture;
        this.country = _item.location;
        this.age = _item.dob;
       this.email = _item.email;
       this.phone = _item.phone;
       this.addres =_item.location;
    }
    render(){
        let myDiv = document.createElement("div");
        myDiv.className = "col-sm-6 col-md-4 col-lg-3 p-3" ;
        document.querySelector(this.parent).append(myDiv);
        myDiv.innerHTML = `
        <div class=" row text-center shadow hoverflow-hidden p-2 h-100  d-flex align-items-center text-center"  style = "border-radius:5px "> 
        <div>
          <img src="${this.img.large}" class="w-50 border border-dark border-4 mb-2 " alt="worker" style="border-radius:100% ">
          <h5>name : ${this.name.first} ${this.name.last}</h5>
          <div>country : ${this.country.country}</div>
          <div>age : ${this.age.age}</div>
          <button class="btn btn-dark mt-1 my-btn">more info</button>
        </div>
        </div>
        `
        let btn = myDiv.querySelector(".my-btn");
        btn.addEventListener("click" , () =>{
                showLightBox(this);
        })
    }
}
