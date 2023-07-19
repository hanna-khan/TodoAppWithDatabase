import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAR_z47hf0Ur7TW-4dbfHVKSPCON7n9Mhs",
    authDomain: "itstodoapplication.firebaseapp.com",
    databaseURL: "https://itstodoapplication-default-rtdb.firebaseio.com",
    projectId: "itstodoapplication",
    storageBucket: "itstodoapplication.appspot.com",
    messagingSenderId: "19767021523",
    appId: "1:19767021523:web:ecfdf1244d43b2679be926",
    measurementId: "G-LVRG3J3VJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
console.log(app)
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const delAllButton = document.getElementById("del-button");
const alertDanger = document.getElementById("alertDanger");
const alertSuccess = document.getElementById("alertSuccess");
const cross = document.querySelectorAll('.cross');
addButton.addEventListener('click', addTask);
function addTask() {
    if (taskInput.value != "") {
        const list = document.createElement("li");
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        deleteBtn.innerHTML = "X";
        editBtn.innerHTML = "🖊";
        deleteBtn.style.position = "absolute";
        deleteBtn.style.right = "160px";
        list.innerHTML = taskInput.value;
        taskInput.value = "";
        list.appendChild(deleteBtn);
        list.appendChild(editBtn);
        taskList.appendChild(list);
        deleteBtn.addEventListener('click', function () {
            list.remove();
        });
        delAllButton.addEventListener('click', function () {
            taskList.innerHTML = '';
        })

        editBtn.addEventListener('click', function () {
            const editInput = document.createElement('input');
            const doneBtn = document.createElement('button');
            doneBtn.innerHTML = "Done";

            editInput.value = list.textContent;

            list.innerHTML = '';
            list.appendChild(editInput);
            list.appendChild(doneBtn);

            doneBtn.addEventListener('click', function () {
                const updatedText = editInput.value;

                list.innerHTML = updatedText;
                list.appendChild(deleteBtn);
                list.appendChild(editBtn);
            });
        });


        alertSuccess.classList.add('show');

        setTimeout(function () {
            alertSuccess.classList.remove('show');
        }, 3000);
    }
    else {
        alertDanger.classList.add('show');

        setTimeout(function () {
            alertDanger.classList.remove('show');
        }, 3000);
    }
}

taskInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener('click', function () {
        this.parentElement.classList.remove('show');
    });
}


