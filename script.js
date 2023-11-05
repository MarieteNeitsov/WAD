window.onload = function() {
    fetch('https://raw.githubusercontent.com/MarieteNeitsov/WAD/main/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            json.posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                
                const postHeader = document.createElement('div');
                postHeader.classList.add('post-header');
                const postHeaderImage = document.createElement('img');
                postHeaderImage.src = 'icon.png'
                postHeaderImage.alt = 'icon';
                postHeaderImage.classList.add('post-header-img');
                const postDate = document.createElement('p');
                postDate.classList.add('post-date');
                postDate.textContent = post.create_time;
                const postHeaderAuthor = document.createElement('p');
                postHeaderAuthor.textContent = post.author;
                postHeaderAuthor.classList.add('post-author')
                postHeader.appendChild(postHeaderImage);
                postHeader.appendChild(postHeaderAuthor);
                postHeader.appendChild(postDate);
                
                
              

              
                postDiv.appendChild(postHeader);
                if(post.image != null) {
                    const postImage = document.createElement('img');
                    postImage.classList.add('post-image');
                    postImage.src = post.image;
                    postDiv.appendChild(postImage);
                }
                const postContent = document.createElement('p');
                postContent.classList.add('post-content');
                postContent.textContent = post.text;
                postDiv.appendChild(postContent);
                const postFooter = document.createElement('button');
                postFooter.type = "submit";
                postFooter.textContent = "Like"
                postFooter.classList.add('post-footer');
                postDiv.appendChild(postFooter)

                
                

                
                document.body.appendChild(postDiv);
            });
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.classList.add('post');
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
        
}



