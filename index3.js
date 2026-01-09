let userdata

// userdata = [
//     {
//         gender: 'female',
//         name: { title: 'Mrs', first: 'Elizabeth', last: 'Patel' },
//         location: {
//             street: [Object],
//             city: 'Vanier',
//             state: 'Northwest Territories',
//             country: 'Canada',
//             postcode: 'A2Z 7T5',
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'elizabeth.patel@example.com',
//         login: {
//             uuid: '5b8b93e6-0b8a-4c6f-b3dc-57c756c10a9e',
//             username: 'smallfrog510',
//             password: 'steeler',
//             salt: 'SIOVA0Cm',
//             md5: 'fa3ccc71750c49775925b63db781f802',
//             sha1: '30371a8892f77dc8e475cbf8008c800bf73c0a77',
//             sha256: 'd90d594f878ba37b8ed2fbb4b3f4d8bc18bf3391eb61f2b9170a31cae65e779d'
//         },
//         dob: { date: '1989-05-29T02:23:49.738Z', age: 36 },
//         registered: { date: '2011-08-25T07:42:35.603Z', age: 14 },
//         phone: 'K70 A65-9908',
//         cell: 'M05 Y22-7855',
//         id: { name: 'SIN', value: '080401177' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/31.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/31.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/31.jpg'
//         },
//         nat: 'CA'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Mrs', first: 'Susan', last: 'Lopez' },
//         location: {
//             street: [Object],
//             city: 'Bath',
//             state: 'Grampian',
//             country: 'United Kingdom',
//             postcode: 'W72 9FX',
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'susan.lopez@example.com',
//         login: {
//             uuid: 'd708f43b-d882-4e5e-924b-47037674cf61',
//             username: 'crazytiger417',
//             password: 'jayhawks',
//             salt: 'ZShm5W6F',
//             md5: '966cb5631496db2da97ba56aca8be78e',
//             sha1: '8ec464b814bdebbfb48aeb3f0844e4eb4cb2fb05',
//             sha256: 'cfe21623896c2680abf9d91cf7320a71ce7a849b48ead1ce0d4a12d9db3c31fa'
//         },
//         dob: { date: '1959-05-13T04:39:01.092Z', age: 66 },
//         registered: { date: '2021-03-09T16:31:45.317Z', age: 4 },
//         phone: '01618 91737',
//         cell: '07372 628888',
//         id: { name: 'NINO', value: 'ZK 32 56 05 X' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/15.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg'
//         },
//         nat: 'GB'
//     },
//     {
//         gender: 'male',
//         name: { title: 'Mr', first: 'Rogelio', last: 'Rojo' },
//         location: {
//             street: [Object],
//             city: 'Bahía Bufadero',
//             state: 'Chiapas',
//             country: 'Mexico',
//             postcode: 97522,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'rogelio.rojo@example.com',
//         login: {
//             uuid: '1e67ed7a-ce8a-430c-a669-c91b6590361e',
//             username: 'angryrabbit614',
//             password: 'captain',
//             salt: 'eLCMxRiz',
//             md5: 'ba51672612694a6e5eb55183fb46ae57',
//             sha1: '7c306c0cdf20facd7b43d090c4aca24cd1eab1a4',
//             sha256: '1db40aa6337a5fb1f18e59624e58a17b65441dc5c7289b43b8ed68392e1ae93f'
//         },
//         dob: { date: '1951-07-31T03:22:58.007Z', age: 74 },
//         registered: { date: '2006-05-11T17:20:10.434Z', age: 19 },
//         phone: '(625) 440 3937',
//         cell: '(654) 229 0577',
//         id: { name: 'NSS', value: '39 29 82 6097 6' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/men/88.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/men/88.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/men/88.jpg'
//         },
//         nat: 'MX'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Ms', first: 'Susana', last: 'Benítez' },
//         location: {
//             street: [Object],
//             city: 'Guadalajara',
//             state: 'Asturias',
//             country: 'Spain',
//             postcode: 66227,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'susana.benitez@example.com',
//         login: {
//             uuid: '4902d6e8-4457-4a0e-a9d0-926ab5dd87b7',
//             username: 'silverpeacock752',
//             password: 'jockey',
//             salt: 'uZU8o90K',
//             md5: '51de83e5bce16391cf6ee92105946f52',
//             sha1: 'd7945e33cfa31ad9741affde663e1d036471841c',
//             sha256: '251ea962588c966c5b3f4e6fb8c354c6daa20ae9a7ce809f57323f7e11074970'
//         },
//         dob: { date: '1982-05-30T06:27:55.635Z', age: 43 },
//         registered: { date: '2015-03-30T13:39:15.269Z', age: 10 },
//         phone: '906-242-966',
//         cell: '689-250-198',
//         id: { name: 'DNI', value: '54686652-N' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/82.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/82.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'
//         },
//         nat: 'ES'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Miss', first: 'Anna', last: 'Ford' },
//         location: {
//             street: [Object],
//             city: 'Buncrana',
//             state: 'Monaghan',
//             country: 'Ireland',
//             postcode: 18772,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'anna.ford@example.com',
//         login: {
//             uuid: '9dd31b1b-6b0b-42c1-8428-5fc32b17fd48',
//             username: 'heavyswan984',
//             password: 'wizard1',
//             salt: 'QZbuxwR7',
//             md5: '2bed33b950fc4192f66314ef9eafd41d',
//             sha1: 'bc7c54c9b0dd8398f412769a3468cd4a0190d3da',
//             sha256: 'e93dabb762fcf1106849b350061a7ce41fedcd9222219ba2bfe2f26fac5e0986'
//         },
//         dob: { date: '1966-12-02T20:58:16.636Z', age: 59 },
//         registered: { date: '2022-03-21T23:36:03.358Z', age: 3 },
//         phone: '031-234-7406',
//         cell: '081-323-6288',
//         id: { name: 'PPS', value: '9441178T' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/27.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/27.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/27.jpg'
//         },
//         nat: 'IE'
//     },
//     {
//         gender: 'male',
//         name: { title: 'Mr', first: 'Elias', last: 'Faure' },
//         location: {
//             street: [Object],
//             city: 'Aulnay-sous-Bois',
//             state: 'Charente-Maritime',
//             country: 'France',
//             postcode: 29869,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'elias.faure@example.com',
//         login: {
//             uuid: 'ea6a583b-91e3-42e1-9161-21bb04fbb978',
//             username: 'orangeduck514',
//             password: '1115',
//             salt: 'HkVmVKad',
//             md5: '41053ada865763dbf8da56be0a531e88',
//             sha1: '7ec9c9e59bd03577360a1c7e11af5f935493b249',
//             sha256: '3020fc25bb644a769ffb65c83f395209ca85abd70db539b2c3110e0288fe2f84'
//         },
//         dob: { date: '1983-01-19T10:36:55.424Z', age: 42 },
//         registered: { date: '2010-05-29T20:24:12.719Z', age: 15 },
//         phone: '04-10-42-18-65',
//         cell: '06-99-32-64-17',
//         id: { name: 'INSEE', value: '1830037915148 72' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/men/21.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/men/21.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/men/21.jpg'
//         },
//         nat: 'FR'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Miss', first: 'Fátima', last: 'Soto' },
//         location: {
//             street: [Object],
//             city: 'Hospitalet de Llobregat',
//             state: 'Navarra',
//             country: 'Spain',
//             postcode: 55417,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'fatima.soto@example.com',
//         login: {
//             uuid: '89cd067d-b13e-4ce8-b4e5-4f2a2df2b5c1',
//             username: 'ticklishcat104',
//             password: 'bogus',
//             salt: 'Si3uQWsr',
//             md5: '99ac0d273a444278283944d37fb8aeed',
//             sha1: '89bf0fa7056086bdd4fc019dea0509a645fc2083',
//             sha256: 'e660f3d4acaefbca151ca1e58fac7bef5c428f16083ecf278a6eb2b9b2e0c860'
//         },
//         dob: { date: '1947-10-29T00:49:01.350Z', age: 78 },
//         registered: { date: '2015-06-21T09:33:09.093Z', age: 10 },
//         phone: '997-712-204',
//         cell: '652-271-579',
//         id: { name: 'DNI', value: '21942882-N' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/13.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/13.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/13.jpg'
//         },
//         nat: 'ES'
//     },
//     {
//         gender: 'male',
//         name: { title: 'Mr', first: 'اميرمحمد', last: 'سهيلي راد' },
//         location: {
//             street: [Object],
//             city: 'سنندج',
//             state: 'خراسان جنوبی',
//             country: 'Iran',
//             postcode: 22636,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'myrmhmd.shylyrd@example.com',
//         login: {
//             uuid: 'f8c4ca29-c1fe-43dd-aa5a-d754b308f86b',
//             username: 'blackrabbit822',
//             password: 'onetwo',
//             salt: 'rJTZcwgy',
//             md5: '04e3c3052404bcc6a3df1f769bbad242',
//             sha1: 'cb7e40d34721fbc4ea4b0d932e4983ecfb471cd0',
//             sha256: '027892f4aa9f786382a2192d053e28346e9219da4c3aa8732ec90ca69e41fb43'
//         },
//         dob: { date: '1966-11-27T22:39:13.439Z', age: 59 },
//         registered: { date: '2004-09-03T07:55:36.996Z', age: 21 },
//         phone: '087-70280001',
//         cell: '0982-176-3313',
//         id: { name: '', value: null },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/men/96.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/men/96.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/men/96.jpg'
//         },
//         nat: 'IR'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Miss', first: 'Felicia', last: 'Ramos' },
//         location: {
//             street: [Object],
//             city: 'Sacramento',
//             state: 'Louisiana',
//             country: 'United States',
//             postcode: 41802,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'felicia.ramos@example.com',
//         login: {
//             uuid: 'a562a2ef-812b-4500-bb74-bbd42358678f',
//             username: 'brownswan238',
//             password: 'faithful',
//             salt: 'kjccKCsM',
//             md5: 'cfebde0b2b46317eb941212c0f27c016',
//             sha1: 'fee400de59bc6ff5f3bfd64881fb7c0d3e7241f5',
//             sha256: '49d070f70c3c75e0e520e3453d056caaf485575628881edc9be29122a89f0817'
//         },
//         dob: { date: '1980-11-09T17:18:36.924Z', age: 45 },
//         registered: { date: '2014-07-25T11:14:27.731Z', age: 11 },
//         phone: '(461) 496-9134',
//         cell: '(358) 613-7396',
//         id: { name: 'SSN', value: '086-70-3006' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/21.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg'
//         },
//         nat: 'US'
//     },
//     {
//         gender: 'female',
//         name: { title: 'Ms', first: 'Ida', last: 'Carroll' },
//         location: {
//             street: [Object],
//             city: 'Anaheim',
//             state: 'Rhode Island',
//             country: 'United States',
//             postcode: 56408,
//             coordinates: [Object],
//             timezone: [Object]
//         },
//         email: 'ida.carroll@example.com',
//         login: {
//             uuid: '5f223d74-fe73-48bc-90c2-a41a626e3b70',
//             username: 'crazyostrich409',
//             password: 'trunks',
//             salt: 'FzSduxWc',
//             md5: '4d344687f79df9f09a80cc41ead1a222',
//             sha1: 'e84b840e3975714700edc0b23f1fe13234dc1ee1',
//             sha256: '861d975de607aae39dc179dbea41c809ffb2d8bdd94b9072311a4d6511e97e19'
//         },
//         dob: { date: '1998-03-16T04:47:24.105Z', age: 27 },
//         registered: { date: '2021-07-02T10:16:57.999Z', age: 4 },
//         phone: '(740) 420-0516',
//         cell: '(800) 532-8327',
//         id: { name: 'SSN', value: '314-55-2674' },
//         picture: {
//             large: 'https://randomuser.me/api/portraits/women/36.jpg',
//             medium: 'https://randomuser.me/api/portraits/med/women/36.jpg',
//             thumbnail: 'https://randomuser.me/api/portraits/thumb/women/36.jpg'
//         },
//         nat: 'US'
//     }
// ]



// let names = "F"
// let final = data.filter((d) => d.name.first.startsWith(names))
//                 .map((dat) => console.log(dat))
// console.log(final)



var username = document.getElementById("firstname");
var email = document.getElementById("email");
var tableBody = document.querySelector("#userTable");
var demos = document.getElementById("demo")



const url = async () => {
    let file = "https://randomuser.me/api/?results=20";
    let res = await fetch(file);
    let data = await res.json();
    userdata = data.results;
    // console.log(userdata);
}

url()

const debounce = (func, ms) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    }
}

const xyz = async(query) => {

    // await url();

    let queryTrim = query.trim()
    // document.getElementById("demo").innerHTML = queryTrim;
    demos.innerHTML = queryTrim;

    // const table = document.createElement("table");
    // const thead = document.createElement("thead");
    // const table = document.createElement("tr");
    // const tableBody = document.createElement("tbody");
    // table.appendChild(tableBody)

    tableBody.innerHTML = "";
    

    try {
            userdata.map((da) => {
                // console.log("Hello");
                let FirstName = da.name.first

                // console.log("Hello")
                renderUser(FirstName,queryTrim,da)

            })
    }
    catch (e) {
        console.log(e)
    }



    // try {
    //     userdata.filter((data) => {
    //         console.log("Hello")
    //         let FirstName = data.name.first
    //         FirstName.startsWith(queryTrim)
    //         // console.log("Hello")
    //     })
    //         .map((da) => {
    //             console.log("Hello")
    //             const row = document.createElement("tr");
    //             row.innerHTML = `
                
    //                 <td>
    //                     ${da.name.first} 
    //                 </td>    
    //             `
    //             tableBody.appendChild(row);
    //         })
    // }
    // catch (e) {
    //     console.log(e)
    // }
}

const debounceingp = debounce(xyz, 500);

// username.addEventListener("input", (e) => {
//     if (e.target.value == userdata.username) {
//         debounceingp(userdata.username);
//     }
// })

// email.addEventListener("input", (e) => {
//     debounceingp(e.target.value);
// })


username.addEventListener("input", (e) => {

    debounceingp(e.target.value);

})


email.addEventListener("input",(e) => {

    debounceingp(e.target.value);

})


function renderUser(FirstName,queryTrim,da) {

    if(FirstName.startsWith(queryTrim)) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>
                        ${da.name.first}  
                    </td>    
                    <td>
                        ${da.name.last}
                    </td>
                    <td>
                        ${da.email}
                    </td>
                    
                `
                tableBody.appendChild(row);
    }
}