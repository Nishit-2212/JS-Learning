// let URL = "https://jsonplaceholder.typicode.com/users"
// let URL1 = "https://jsonplaceholder.typicode.com/todos"


// const getData = async() => {

//     let allUser = await fetch(URL);
//     allUser = await allUser.json();
//     let allTodos = await fetch(URL1);
//     allTodos = await allTodos.json();

//     console.log(allUser);
//     console.log(allTodos);

// }


// getData()




const URL = "https://randomuser.me/api/?results=10"

let countryTotal = async() => {

    try {
        const resultdata = await fetch(URL);
        const response = await resultdata.json();
        // console.log(response.results[0].location.country);
        // console.log(response)
        const users = await response.results;
        const countryCount = {};
        users.forEach(user => {
            let countries = user.location.country;
            
            
            if(countries in countryCount) {
                countryCount[countries]++;
            }
            else {
                countryCount[countries] = 1
            }
        })
        console.log(countryCount)
    }
    catch (error) {
        console.log(error)
    }

}

// countryTotal()


let oldestUser = async() => {

    try {
        const resultdata = await fetch(URL);
        const response = await resultdata.json();
        // console.log(response.results[0].dob.age);
        // console.log(response)
        const users = await response.results;
        let max=0;
        let oldUser;
        for(let use of users) {
            let age = use.dob.age;
            if(age > max) {
                max = age
                oldUser = use;
            }
        }
        // const userAge = {};
        // users.forEach(user => {
        //     let countries = user.location.country;
            
            
        //     if(countries in countryCount) {
        //         countryCount[countries]++;
        //     }
        //     else {
        //         countryCount[countries] = 1
        //     }
        // })
        console.log(max)
        console.log(oldUser)
    }
    catch (error) {
        console.log(error)
    }

}

// oldestUser()


let calculateAverage = async() => {

    try {
        const resultdata = await fetch(URL);
        const response = await resultdata.json();
        // console.log(response.results[0].dob.age);
        // console.log(response)
        const users = await response.results;
        

        // let count =0;
        // let total = users.reduce((accu,curr) => {
        //     // console.log(curr.dob.age)
        //     count++;
        //     return accu+curr.dob.age;
        // },0)
        // console.log(total)
        // let avg = total/count

        // console.log(avg)
    }
    catch (error) {
        console.log(error)
    }

}

// calculateAverage()




let calculateAverageByGender = async() => {

    try {
        const resultdata = await fetch(URL);
        const response = await resultdata.json();
        // console.log(response.results[0].dob.age);
        // console.log(response)
        const users = await response.results;
        
        let male = [];
        let female = [];
        let cnt1 = 0, cnt2 = 0 ;
        let sum1 = 0, sum2 = 0 ;


        for(let use of users) {
            let gender = use.gender;

            let userss = {
                name : use.name.first + " " + use.name.last,
                age : use.dob.age
            }

            

            if(gender == "male") {
                male.push(userss);
                sum1 += use.dob.age;
                cnt1++;
            }
            else {
                male.push(userss);
                sum2 += use.dob.age;
                cnt2++;
            }
        }

        let avg1 = sum1/cnt1;
        let avg2 = sum2/cnt2;

        console.log(male)
        console.log(female)
        console.log(`Male average :- ${avg1}`)
        console.log(`Female average :- ${avg2}`)
    }
    catch (error) {
        console.log(error)
    }

}

calculateAverageByGender()





