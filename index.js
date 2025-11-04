// Fetching data from endpoint
// async function fetchData() {
//     const url = 'https://api.myjson.online/v1/records/15692323-ec97-4db7-9681-6b537d0e1498';
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`)
//         }

//         const json = await response.json();

//         return json;

//     } catch (error) {
//         console.error(error.message);
//     }
// }


window.onload = async function () {
    // Desktop dropdown
    const profileToggle = document.getElementById('header-profile');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (profileToggle && dropdownMenu) {
        profileToggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        // Close desktop dd when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.user-menu')) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Mobile dropdown
    const profileToggleMobile = document.getElementById('header-profile-small');
    const dropdownMenuMobile = document.getElementById('dropdownMenuMobile');

    if (profileToggleMobile && dropdownMenuMobile) {
        profileToggleMobile.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownMenuMobile.classList.toggle('show');
        });

        // Close mobile dd when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.user-menu-mobile')) {
                dropdownMenuMobile.classList.remove('show');
            }
        });
    }

    // const data = await fetchData();
    const data = await fetch("Data/posts.json");

    const postsContainer = document.getElementsByClassName('posts-container')[0];

    data.forEach(postData => {
        var postElement = this.document.createElement('div');
        postElement.classList.add("post");

        var postHeaderContainer = this.document.createElement('div');
        postHeaderContainer.classList.add("post-header-container");

        var postAuthorContainer = this.document.createElement('div');
        postAuthorContainer.classList.add("post-author-container");

        var postProfileElement = this.document.createElement('img');
        postProfileElement.classList.add("post-profile");
        postProfileElement.src = "images/profile.jpg";

        var postAuthorElement = this.document.createElement('div');
        postAuthorElement.classList.add("post-author");
        postAuthorElement.innerHTML = postData.author;

        var timestamp = new Date(postData.time).toLocaleString();

        var postTimeElement = this.document.createElement('div');
        postTimeElement.classList.add("post-time");
        postTimeElement.innerHTML = timestamp;

        postAuthorContainer.appendChild(postProfileElement);
        postAuthorContainer.appendChild(postAuthorElement);
        postHeaderContainer.appendChild(postAuthorContainer);
        postHeaderContainer.appendChild(postTimeElement);
        postElement.appendChild(postHeaderContainer);

        if (postData.image != "") {
            var postImageElement = this.document.createElement('img');
            postImageElement.classList.add("post-image");
            postImageElement.src = postData.image;
            postElement.appendChild(postImageElement);
        }
        
        var postFooterContainer = this.document.createElement('div');
        postFooterContainer.classList.add("post-footer-container");

        var postMessageElement = this.document.createElement('div');
        postMessageElement.classList.add("post-message");
        postMessageElement.innerHTML = postData.message;

        var postThumbsupElement = this.document.createElement('div');
        postThumbsupElement.classList.add("post-thumbsup");
        postThumbsupElement.innerHTML = "👍";

        postFooterContainer.appendChild(postMessageElement);
        postFooterContainer.appendChild(postThumbsupElement);

        postElement.appendChild(postFooterContainer);

        postsContainer.appendChild(postElement);

    });
}