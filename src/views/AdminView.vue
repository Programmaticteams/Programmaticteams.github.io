<script setup>
window.onload = function () {

    const loginButton = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');
    const main = document.getElementById('main')
    const loginform = document.getElementById('login-form')

    loginButton.addEventListener('click', async (event) => {
        event.preventDefault()
        const user = usernameInput.value;
        const pwd = passwordInput.value;
       
        const response = await fetch('http://localhost:5050/form/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, pwd })
        });
        if (response.status === 200) {
            messageElement.textContent = 'Login successful';
            usernameInput.value = "";
            passwordInput.value = "";
            console.log("success")
            main.classList.add("flex")
            main.classList.remove("hidden")
            loginform.classList.add("hidden")
        } else {
            messageElement.textContent = 'Login failed. Please check your credentials.';
            passwordInput.value = "";
        }
    });
}
</script>

<template>
    <form id="login-form" class="bg-white p-8 shadow-md rounded-md w-80 mt-36 mb-36" >
        <h1 class="text-2xl font-semibold mb-4 text-black">Authentication:</h1>
        <input type="text" id="username" class="border rounded w-full py-2 px-3 mb-2 text-gray-700" placeholder="Username" />
        <input type="password" id="password" class="border rounded w-full py-2 px-3 mb-4 text-gray-700" placeholder="Password" />
        <button type="submit" id="login-btn" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
        <p id="message" class="text-red-500 mt-2"></p>
    </form>
    <main id="main" class="gap-x-80 top-44 hidden">
        <section class="fixed">
            <h1 class="font-extrabold text-gray-200 text-6xl mt-32">Pass</h1>

        </section>
        <hr class="px-20" />
        <div class="border border-gray-600"></div>
        <section class="flex flex-col gap-20 mt-36 mb-10">
            <div class="row">
                <div class="column">
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>

                    </table>
                </div>
            </div>

        </section>
    </main>
</template>
<style scoped>
* {
    box-sizing: border-box;
}

.row {
    margin-left: -5px;
    margin-right: -5px;
}

.column {
    float: left;
    width: 50%;
    padding: 5px;
}


.row::after {
    content: "";
    clear: both;
    display: table;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}

th,
td {
    text-align: left;
    padding: 16px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>