document.addEventListener('DOMContentLoaded', () => {

    const BASE_URL = 'https://type.fit/api/quotes'

    // GENERATE RANDOM QUOTE:
    fetch(BASE_URL)
        .then((res) => res.json())
        .then(data => {
            dropDownMenu(data)
        })



    // DROP DOWN MENU:

    const dropDownMenu = (data) => {
        const randomIndex = Math.floor(Math.random()*data.length);
        document.getElementById("quote").textContent = data[randomIndex].text;
        const dropEl = document.querySelector('#quote-dropdown')
        const myIndex = 4;
        const myIndex2 = 6;
        const myIndex3 = 17;

        dropEl.addEventListener('change', e => {
            if (e.target.value == 'x'){
                // console.log(e.target.value)
                return document.getElementById("quote").textContent = data[randomIndex].text;
            } else if (e.target.value == 'a') {
                return document.getElementById("quote").textContent = data[myIndex].text;
            } else if (e.target.value == 'b'){
                return document.getElementById("quote").textContent = data[myIndex2].text;
            } else if (e.target.value = 'c'){
                return document.getElementById("quote").textContent = data[myIndex3].text;
            }
        })
    };




    // SUBMIT A COMMENT:
    // const postForm = document.querySelector('#post-container')
    const formContainer = document.querySelector('#form-container')
    const commentList = document.querySelector('#comment-list')
    const commentContainer = document.querySelector('#comment-container')
    formContainer.addEventListener('submit', newCommentAndlikes)


    function newCommentAndlikes (e) {
        e.preventDefault();
        const div = document.createElement('div')
        div.id = "commentsAndLikes-container"

        let li = document.createElement('li')
        li.textContent = e.target.addComment.value

        const commentLikesNum = document.createElement('h3')
        commentLikesNum.textContent = "0"

        const likesBttn = document.createElement("button")
        likesBttn.className = 'like-bttn'
        likesBttn.textContent = "♥"

        likesBttn.addEventListener('click', () => increaseLikes(commentLikesNum))


        li.appendChild(commentLikesNum)
        li.appendChild(likesBttn)
        commentList.append(li)
        commentContainer.appendChild(commentList)

        formContainer.reset()
    }

    function increaseLikes(commentLikesNum){
        // Increments number of likes
        ++commentLikesNum.textContent
      }

})