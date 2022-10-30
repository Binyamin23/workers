import { doApiSearch } from "./workerMannager.js";


export const declareEvents = () =>{
    let btn_search = document.querySelector("#id_button");
    let input_search = document.querySelector("#id_input");

    btn_search.addEventListener("click" , () =>{
       let input_val = btn_search.value;
       doApiSearch(input_val);
    }) 

    input_search.addEventListener("keydown" , (e)=>{
        if(e.key == "Enter"){
        let input_val = input_search.value;
        doApiSearch(input_val);
        }
    })
}