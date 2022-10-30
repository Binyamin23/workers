import { declareEvents } from "./workerEventsView.js";
import { light_boxInit } from "./workerLightbox.js";
import { doApi } from "./workerMannager.js";

const init = () =>{
    
    doApi();
    declareEvents();
    light_boxInit();
}

init();