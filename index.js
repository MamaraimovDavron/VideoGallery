const inputValue = document.getElementById("input");
const videoBox = document.getElementById("box");

let index = 1;

const writeLink = () => {

    // let initialPart;
    // let middlePart;
    // let lastPart;
    // let newValue;

    // if(inputValue.value == "") return;

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

    const iframeBox = document.createElement('div');
    iframeBox.className = "iframeBox";
    iframeBox.src = inputValue.value.replace("watch?v","embed/");
    // console.log(changedValue);
    console.log(iframeBox.src)

    col.appendChild(iframeBox);
    videoBox.appendChild(col);

}


// https://www.youtube.com/watch?v=4mvmzsp0QhA

const removeVideo = (index) => {
    const element = document.getElementById(index);
    element.remove();
    console.log(index);
}