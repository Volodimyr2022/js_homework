// const postXhr = new XMLHttpRequest();
// postXhr.onreadystatechange = () => {
//     const { readyState } = postXhr;
//     console.log(readyState)
//     }
// console.log(postXhr)
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// postXhr.open('GET', `${BASE_URL}/posts/1`);
// postXhr.responseType = 'json';
// postXhr.send();

// postXhr.onload = () => {
//     const { response: posts } = postXhr;
//     const { response: id } = postXhr;
//     console.log(posts);
//     renderPost(posts, cont);
//     const commentsXhr = new XMLHttpRequest()
//     commentsXhr.onreadystatechange = () => {
//         const { readyState } = commentsXhr;
//         console.log(readyState);
//         }
//     console.log(commentsXhr)
//     commentsXhr.open('GET', `${BASE_URL}/posts/1/comments`);
//     commentsXhr.responseType = 'json';
//     commentsXhr.send();
//     commentsXhr.onload = () => {
//         const { response: comments } = commentsXhr;
//         console.log(comments);
//     }
    
// }

// Pабочий вариант отображения одного поста posts/1 и кнопки.

// const renderPost = (post, container) => {

//     const { title, body } = post;
//         const postContainer = document.createElement('div');
//         const postTitle = document.createElement('h2');
//         const postText = document.createElement('p');
//       const button = document.createElement('button')

        
//         button.innerText = 'Show comments';
//         postTitle.innerText = title;
//         postText.innerText = body;
       
//         postContainer.append(postTitle, postText, button)
   
//     container.append(postContainer)  
// }

const cont = document.createElement('div')

const postXhr = new XMLHttpRequest();
postXhr.onreadystatechange = () => {
    const { readyState } = postXhr;
    console.log(readyState)
    }
console.log(postXhr)
const BASE_URL = 'https://jsonplaceholder.typicode.com';
postXhr.open('GET', `${BASE_URL}/posts`);
postXhr.responseType = 'json';
postXhr.send();

postXhr.onload = () => {
    const { response } = postXhr;
    const { response: id } = postXhr;
    console.log(response);
    renderPost(response, cont);
    const commentsXhr = new XMLHttpRequest()
    commentsXhr.onreadystatechange = () => {
        const { readyState } = commentsXhr;
        console.log(readyState);
        }
    console.log(commentsXhr)
    commentsXhr.open('GET', `${BASE_URL}/posts/${id}/comments`);
    commentsXhr.responseType = 'json';
    commentsXhr.send();
    commentsXhr.onload = () => {
        const { response: comments } = commentsXhr;
        console.log(comments);
    }
    
}



const renderPost = (postsList, container) => {

    const posts = postsList.map((post) => {
        
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postText = document.createElement('p');
        const button = document.createElement('button')

        postTitle.innerText = post.title;
        postText.innerText = post.body;
        button.innerText = 'Show comments';
        postContainer.classList.add('post-container');
        button.classList.add('button');

        postContainer.append(postTitle, postText, button);
         
        let postsId = post.id;
        
        button.addEventListener('click', (event) => {
            getPostComments(postsId, event)
        })
        
    })
    
    container.append(...posts)
   
}





// const cont = document.createElement('cont');

// const postXhr = new XMLHttpRequest();
// postXhr.onreadystatechange = () => {
//     const { readyState } = postXhr;
//     console.log(readyState)
//     }
// console.log(postXhr)
// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// postXhr.open('GET', `${BASE_URL}/posts`);
// postXhr.responseType = 'json';
// postXhr.send();

// const hideComments = (div) => {
//     let comments = div.lastElementChild
//     comments.remove()
// }

// const showComments = (comments, div) => {

//     const divComment = document.createElement('div');

//     comments.forEach((obj) => {
//         let { body: comment } = obj;

//         const p = document.createElement('p');
//         p.innerText = comment

//         divComment.append(p)
//     })
//     div.append(divComment)       
// }

// const getPostComments = (id, event) => {

//     const xhrComments = new XMLHttpRequest();
//     xhrComments.open('GET', `${BASE_URL}/posts/${id}/comments`);
//     xhrComments.responseType = 'json';
//     xhrComments.send();

//     let button = event.target;
//     let parent = event.target.parentNode;

//     xhrComments.onload = () => {

//         let result = xhrComments.response;
//         console.log(result);
//         if(button.innerText === 'Show comments') {
//             button.innerText = 'Hide comments'
//             showComments(result, parent)

//         } else if(button.innerText === 'Hide comments') {
//             button.innerText = 'Show comments'
//             hideComments(parent)
//         }
//     }
// }

// const renderPost = (postsList, container) => {

//     const posts = postsList.map((post) => {
//         const postContainer = document.createElement('div');
//         const postTitle = document.createElement('h2');
//         const postText = document.createElement('p');
//         const button = document.createElement('button')

//         postTitle.innerText = post.title;
//         postText.innerText = post.body;
//         button.innerText = 'Show comments';
//         postContainer.classList.add('post-container');
//         button.classList.add('button');

//         postContainer.append(postTitle, postText, button);

//         let postsId = post.id;

//         button.addEventListener('click', (event) => {
//             getPostComments(postsId, event)
//         })
//     })
//     container.append(...posts)
// }


// postXhr.onload = () => {
//     const { response } = postXhr;
//     console.log(response);
//     renderPost(response, cont);
// }





