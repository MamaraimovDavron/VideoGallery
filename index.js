const inputValue = document.getElementById("input");
const videoBox = document.getElementById("box");

let index = 2;
let lastLinks = "";
const testElement = document.createElement("div");


const checkLink = (link) => {
    const newLink = document.getElementsByClassName("iframeBox");

    testElement.src = link;

    // console.log(newLink);
    // link.replace("watch?v=","embed/");
    // console.log(testElement.src);

    for(const element of newLink){
        if(element.src.replace("watch?v=","embed/") == testElement.src.replace("watch?v=","embed/")){
            alert("Please, change your link!");
            return true;
            // console.log('qayatadan kriitin');
        }

        // console.log(element);
        // console.log(element.src)

    }

    return false;
};


const writeLink = () => {

    const link = inputValue.value;
    // let initialPart;
    // let middlePart;
    // let lastPart;
    // let newValue;

    if(link == "" || checkLink(link)) return;


    lastLinks = videoBox.innerHTML;

    // let changedValue = '';

    // if(inputValue.value){
        // changedValue = inputValue.value.replace("watch?v","embed/");
        // console.log(inputValue.value.replace("watch?v","embed/"));
        // // console.log(inputValue.value.slice(24,31));
        // let initialPart = inputValue.value.slice(0,24);
        // // console.log(initialPart);

        // let middlePart = inputValue.value.slice(24,31);
        // middlePart = "embed/";
        // // console.log(middlePart);

        // let lastPart = inputValue.value.slice(31);
        // // console.log(lastPart);

        // let newValue = initialPart + middlePart + lastPart;
        // // console.log(newValue);

    // }
    // else if(inputValue.value.replace("watch?v","embed/"))

    // videoBox.innerHTML += `
    //     <div class="col-lg-4 col-sm-1 col-md-4">
    //         <iframe height="315" 
    //             src=${inputValue.value.replace("watch?v","embed/")}
    //             title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    //     </div>
    // `;

    

    const col = document.createElement('div');
    col.className = "col col-lg-4 col-sm-1 col-md-4";
    col.id = index;
    console.log(index);
    col.innerHTML = `
        <button class="btn btn-danger" 
            onclick="removeVideo('${index++}')">
                <i class="bi bi-trash2-fill"></i>
        </button>

    `

    const iframe = document.createElement('iframe');
    iframe.className = "iframeBox";
    iframe.src = link.replace("watch?v=","embed/");
    // console.log(changedValue);
    // console.log(iframe.src)

    col.appendChild(iframe);
    videoBox.appendChild(col);
    // console.log(videoBox);
    // console.log(col)

}


// https://www.youtube.com/watch?v=4mvmzsp0QhA

const removeVideo = (id) => {
    const element = document.getElementById(id);
    element.remove();
    // console.log(index);
}

const clearAll = () => {
    lastLinks = videoBox.innerHTML;

    videoBox.innerHTML = "";
}

const back = () => {
    videoBox.innerHTML = lastLinks;
}
