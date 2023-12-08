// Form-Registion
document.getElementById("container-form").addEventListener("submit", function(event) {
    event.preventDefault()

    let fullname = document.getElementById("fullname").value
    let lastname = document.getElementById("lastname").value
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let passwd = document.getElementById("passwd").value
    let cfpassword = document.getElementById("cfpassword").value

    if (passwd == cfpassword) {
        console.log("Login successfuly Fullname :" + fullname + "\n" +
        "Lastname :" + lastname + "\n" +
        "Username :" + username + "\n" +
        "Email :" + email + "\n" +
        "Password :" + passwd + "\n" +
        "Confirm password :" + cfpassword)
    } else {
        console.log("Login filed")
    };

    document.getElementById("fullname").value = ""
    document.getElementById("lastname").value = ""
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("passwd").value = ""
    document.getElementById("cfpassword").value = ""
})

// Checkbox Remember
function saveCheckboxState() {
    let checkbox = document.querySelector(".chceked");
    localStorage.setItem("rememberPreference", checkbox.checked);
}

function loadCheckboxState() {
    let checkbox = document.querySelector(".chceked");
    let rememberPreference = localStorage.getItem("rememberPreference");

    if(rememberPreference === "true") {
        checkbox.checked = true;
        console.log("OK");
    }
}

document.querySelector(".chceked").addEventListener("change", saveCheckboxState);

loadCheckboxState();