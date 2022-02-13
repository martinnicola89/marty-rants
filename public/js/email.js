function sendMail(params) {
    var tempParams = {
        name: document.getElementById('name').value,
        user_email: document.getElementById('user_email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }
    emailjs.send('service_jf3kppf','template_jfw9p29', tempParams)
    .then(function(res){
        console.log('success',res.status)
    })
}

function clearField(params) {
    document.getElementById('name').value = ""
    document.getElementById('user_email').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('message').value = ""
}

function success() {
    Swal.fire({
      icon: "success",
      title: "Thank you...",
      text: "We'll brew your reply shortly!",
    });
  }