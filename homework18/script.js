

const cont = document.getElementById('cont');

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

const hideComments = (div) => {
    let comments = div.lastElementChild
    comments.remove()
}

const showComments = (comments, div) => {

    const divComment = document.createElement('div');

    comments.forEach((obj) => {
        let { body: comment } = obj;

        const p = document.createElement('p');
        p.innerText = comment

        divComment.append(p)
    })
    div.append(divComment)       
}
const getPostComments = (id, event) => {

    const xhrComments = new XMLHttpRequest();
    xhrComments.onreadystatechange = () => {
        const { readyState } = xhrComments;
        console.log(readyState)
        }
    xhrComments.open('GET', `${BASE_URL}/posts/${id}/comments`);
    xhrComments.responseType = 'json';
    xhrComments.send();

    let button = event.target;
    let parent = event.target.parentNode;

    xhrComments.onload = () => {

        let result = xhrComments.response;
        console.log(result);
        if(button.innerText === 'Show comments') {
            button.innerText = 'Hide comments'
            showComments(result, parent)

        } else if(button.innerText === 'Hide comments') {
            button.innerText = 'Show comments'
            hideComments(parent)
        }
    }
}


const renderPost = (postsList, container) => {

    const posts = postsList.map((post) => {
        console.log(post)
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postText = document.createElement('p');
        const button = document.createElement('button')

        postTitle.innerText = post.title;
        console.log(postTitle)
        postText.innerText = post.body;
        console.log(postText)
        button.innerText = 'Show comments';
        console.log(button)
        postContainer.classList.add('post-container');
        button.classList.add('button');

        postContainer.append(postTitle, postText, button);
         console.log(postContainer)
         
        let postsId = post.id;
        
        button.addEventListener('click', (event) => {
            getPostComments(postsId, event)
        });
        return postContainer;
    })
    container.append(...posts)
}

postXhr.onload = () => {
    const { response } = postXhr;
    const { response: id } = postXhr;
    console.log(response);
    renderPost(response, cont)}
