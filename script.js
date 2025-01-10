document.addEventListener("DOMContentLoaded", () => {
    const newPostBtn = document.getElementById("new-post-btn");
    const modal = document.getElementById("post-modal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("post-form");
    const postList = document.getElementById("post-list");

    newPostBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = document.getElementById("post-title").value;
        const content = document.getElementById("post-content").value;

        const response = await fetch('/new_post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            const post = await response.json();
            renderPost(post);
            modal.style.display = "none";
            form.reset();
        } else {
            alert("Failed to save the post.");
        }
    });

    function renderPost(post) {
        const postElement = document.createElement("div");
        postElement.className = "post";

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <small>${post.created_at}</small>
            <p>${post.content}</p>
        `;

        postList.prepend(postElement);
    }
});
