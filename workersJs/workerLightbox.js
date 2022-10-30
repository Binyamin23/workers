
export const light_boxInit = () => {
    createLightbox();
    hideLightbox();
}

const createLightbox = () => {
    let divLight = document.createElement("div");
    divLight.className = "class_lightbox" ;
    divLight.id = "id_lightbox";
    document.body.append(divLight);
    divLight.innerHTML = `
    <div class="class_inside_lightbox" >
        <img id="id_img_lightbox" src="#" alt="worker">
        <h4>name : <span id="id_nameLightbox"></span></h4>
        <h6>email: <span id="id_emailLightbox"></span></h6>
        <h6>phone : <span id="id_phoneLightbox"></span></h6>
        <h6>addres : <span id="id_addresLightbox"></span></h6>
        <button id="cal_button">call me</button>
        <button id="id_close_buttonLight">close</button>
    </div>
    `
    let close_buttonLight = divLight.querySelector("#id_close_buttonLight");
    close_buttonLight.addEventListener("click",hideLightbox);
  
}

const hideLightbox = () => {
    let id_hide_show_lightbox = document.querySelector("#id_lightbox");
    id_hide_show_lightbox.style.display = "none";
    
}


export const showLightBox = (_item) =>{
    let id_hide_show_lightbox = document.querySelector("#id_lightbox");
    id_hide_show_lightbox.style.display = "flex";
    document.querySelector("#id_img_lightbox").src = _item.img.large;
    document.querySelector("#id_nameLightbox").innerHTML = _item.name.first +" "+ _item.name.last;
    document.querySelector("#id_emailLightbox").innerHTML = _item.email;
    document.querySelector("#id_phoneLightbox").innerHTML = _item.phone;
    document.querySelector("#id_addresLightbox").innerHTML = _item.addres.street.name +" "+ _item.addres.street.number;
    console.log("chipopo");
}