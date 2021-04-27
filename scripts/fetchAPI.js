const setTestimonialName = data => {
    document.querySelectorAll(".testimonial__name").forEach((item, index) => {
        item.textContent = data[index].name
    })
}

const setTestimonialText = data => {
    document.querySelectorAll(".testimonial__text > i").forEach((item, index) => {
        item.textContent = `"${data[index].body}"`
    })
}

const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                setTestimonialName(data);
            }).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
    })
}

const getDescriptions = () => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                setTestimonialText(data);
            }).catch(error => {
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
    })
}

getUsers();
getDescriptions();