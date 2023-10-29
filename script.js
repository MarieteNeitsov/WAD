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
                postHeader.appendChild(postHeaderImage);
                postHeader.appendChild(postDate);

              

              
                postDiv.appendChild(postHeader);
                

                
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
