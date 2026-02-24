const url = async () => {
    let file = "https://randomuser.me/api/?results=10";
    
    let res = await fetch(file);
    let data = await res.json();
    let userdata = data.results;
    console.log(userdata[0].gender);

    userdata.map((data) => console.log(data.gender))
}


url()