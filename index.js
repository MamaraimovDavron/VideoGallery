const inputValue = document.getElementById("input");
const videoBox = document.getElementById("box");



const writeLink = () => {

    // let initialPart;
    // let middlePart;
    // let lastPart;
    // let newValue;

    // if(inputValue.value == "") return;

    if(inputValue.value.replace("watch?v","embed/")){
        console.log(inputValue.value.replace("watch?v","embed/"));
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

    }
    // else if(inputValue.value.replace("watch?v","embed/"))

    videoBox.innerHTML += `
        <div class="col-lg-3 col-sm-1 col-md-4">
            <iframe height="315" 
                src=${inputValue.value.replace("watch?v","embed/")}
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    `;
}

// https://www.youtube.com/watch?v=4mvmzsp0QhA