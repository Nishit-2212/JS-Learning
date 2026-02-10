
const form = document.querySelector('form');
const getPhoto = document.getElementById('getPhoto');


const assertFilesValid = (file) => {

    const maxLimit = 1024 * 1024; // 1 MegaByte
    const allowedFiles = ['image/jpeg', 'image/png', 'image/webp'];

    // for (const file of fileList) {
    console.log('File type', file.type);
    console.log('File Size', file.size);


    if (!allowedFiles.includes(file.type)) {
        // alert(`Please choose this file format only ${allowedFiles}`);
        throw new Error(`Please choose this file format only ${allowedFiles}`)
    }

    if (file.size > maxLimit) {
        // alert(`Please select <${maxLimit} file`);
        throw new Error(`Please select <${maxLimit} file`)
    }
}


const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Entered Submit");

    const url = "http://127.0.0.1:3000/normal-upload";

    const fileInput = document.getElementById("imag");
    const file = fileInput.files[0];

    try {
        assertFilesValid(file)
    }
    catch (err) {
        alert(err);
        return;
    }

    console.log(file)

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("name", "jainam");
    formData.append("id", 2);

    console.log(formData)
    console.log("Upload unction");



    try {
        const option = {
            method: "POST",
            body: formData
        }
        await fetch(url, option);
    }
    catch (err) {
        console.log("Error in fetch", err)
    }
}


const renderPhoto = () => {



}



form.addEventListener('submit', handleSubmit);