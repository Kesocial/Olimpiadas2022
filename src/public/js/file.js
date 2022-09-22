const fileUploadImage = document.getElementById("file_input");
const dataImg = document.getElementById("file_input");
const prevImg = document.getElementById("prevImg");
fileUploadImage.addEventListener("change", (event) => {
    const e = event.target
    const file = e.files[0];
    let data = {};
    try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async() => {
            const dataSplit = await reader.result;
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