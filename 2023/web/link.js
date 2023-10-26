function sendMail(){
    var  params = {
        name: document.getElementById("name").value,
        name: document.getElementById("email").value,
        name: document.getElementById("message").value,
        
    };

    const serviceID = "service_64zulnj"
    const templateID = "template_znnqee9"

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message is sent successfully");
    })
    .catch((err) => console.log(err));
}

