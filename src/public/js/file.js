const fileUploadImage = document.getElementById("file-uploadImage");
const dataImg = document.getElementById("dataImg");
const prevImg = document.getElementById("prevImg");
console.log(prevImg);
fileUploadImage.addEventListener("change", (event) => {
    const e = event.target
    const file = e.files[0];
    let data = {};
    try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async() => {
            const dataSplit = reader.result;
            data = {
                name: file.name,
                size: file.size,
                type: file.type,
                encode: dataSplit,
            };
            prevImg.src = dataSplit;
            prevImg.alt = file.name;
            dataImg.value = dataSplit;

        };
    } catch (err) {
        console.log(err);
    }
    return data.encode;
});