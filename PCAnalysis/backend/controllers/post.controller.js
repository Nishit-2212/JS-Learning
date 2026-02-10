const { LocalStorage } = require('node-localstorage')


localStorage = new LocalStorage('./data');



const fethAndStore = async (req, res) => {

    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

        console.log(data);
        localStorage.setItem('posts', JSON.stringify(data));

        return res.status(200).json({
            message: "Post Store Successfully"
        })
    }
    catch (err) {

        console.log("Error in storing data", err)
        res.status(400).json({
            message: "Error in storing data"
        })
    }
}




const generateAnalysis = (req, res) => {

    try {
        const Allpost = JSON.parse(localStorage.getItem('posts'));

        let totalPost = 0;
        let totalLength = 0;
        let longPostIndex = 0;
        let maxLength = 0;

        for (const post of Allpost) {
            totalPost++;
            let title = post.title;
            let body = post.body;
            totalLength += title.length;

            if (body.length > maxLength) {
                maxLength = body.length;
                longPostIndex = totalPost;
            }

        }

        const averageTitleLength = totalLength / totalPost;
        const longestPost = Allpost[[longPostIndex - 1]];

        console.log(`Total Post ${totalPost}`)
        console.log(`Average Length`, averageTitleLength)
        // console.log("Long Post Inde")

        console.log("maxLength", maxLength);
        console.log("index of maxlength", longPostIndex);
        console.log("Object of long post", Allpost[[longPostIndex]]);

        localStorage.setItem('analysis', JSON.stringify({
            "totalPosts": totalPost,
            "averageTitleLength": averageTitleLength,
            "longestPost": longestPost
        }));

        res.status(200).json({
            "totalPosts": totalPost,
            "averageTitleLength": averageTitleLength,
            "longestPost": longestPost
        })


    }
    catch (err) {
        console.log('Error in Analysisc', err);

    }

}




const postsPerId = (req,res) => {

    const Allpost = JSON.parse(localStorage.getItem('posts')) || [];
    try {
        const userPost = [];
        const id = req.params.id;
        console.log("id",id);

        Allpost.forEach(post => {
            let userId = post.userId;
            if(userId == id) {
                userPost.push(post)
            }
        });

        res.status(200).json({
            body: userPost
        })



    }
    catch (Err) {
        console.log("Error in geting posts per id",Err);
        res.status(400).json({
            message:"Error in getting post by id"
        })
    }

}



module.exports = { fethAndStore, generateAnalysis, postsPerId };