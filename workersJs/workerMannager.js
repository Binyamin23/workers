import WorkerClass from "./workerClass.js";

export const doApi = async () => {
    document.querySelector("#id_row").innerHTML = "loading...";
    let myUrl = "https://randomuser.me/api/?results=12&seed=google";
    try {
        let res = await fetch(myUrl);
        let data = await res.json();
        console.log(data.results);
        createListOfWorker(data.results);
    }
    catch (err) {
        console.log(err);
        alert("there probem come back later");
    }
}

export const doApiSearch = async (searchQ) =>{
    document.querySelector("#id_row").innerHTML = "loading...";
    let myUrl = `https://randomuser.me/api/?results=12&seed=${searchQ}`
    try {
        let res = await fetch (myUrl);
        let data =await res.json();
        createListOfWorker(data.results)
    }
    catch(err){
       console.log(err);
       alert("there probem come back later");
    }
}

const createListOfWorker = (_ar) =>{
     document.querySelector("#id_row").innerHTML = "";
     _ar.forEach (item =>{
        
        let worker = new WorkerClass ("#id_row" , item);
        worker.render();
     })
}