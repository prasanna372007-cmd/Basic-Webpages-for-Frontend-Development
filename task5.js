function loadNatureData() {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {

            let output = document.getElementById("output");
            output.innerHTML = "";

            data.slice(0, 6).forEach(post => {
                output.innerHTML += `
                    <div class="card">
                        <h3>🌱 ${post.title}</h3>
                        <p>🌿 ${post.body}</p>
                    </div>
                `;
            });

        })
        .catch(error => {
            console.log("Error:", error);
        });

}