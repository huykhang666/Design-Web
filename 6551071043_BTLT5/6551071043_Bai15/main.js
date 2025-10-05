let User = {"Name":"Max","Age":"20"};


let infoDiv = document.getElementById("info");
let content = "";
for(let i in User) {
    content += i + ":" + User[i] + "<br>"
}

infoDiv.innerHTML = "Thông tin ban đầu <br>" + content;

User.Surname = "Lee";
User.Age = "30";
updateContent = ""
for(let i in User) {
    updateContent += i + ":" + User[i] + "<br>"
}

infoDiv.innerHTML += "Thông tin lúc sau:<br>" + updateContent;

      