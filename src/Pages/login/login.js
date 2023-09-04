import error from '../../Helpers/error.js';
import config from '../../Helpers/config.js';
// Mostrar el spinner
function showSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'block';
}

// Ocultar el spinner
function hideSpinner() {
    document.querySelector('.spinner-overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
   localStorage.removeItem("token");   
})

document.getElementById("frmLogin").addEventListener("submit" , e => {
    e.preventDefault();
    (async function(){

        try {  showSpinner();
            let body = new FormData(document.getElementById("frmLogin"));
            let request = await fetch(config.API + `auth/${body.get('email')}/${body.get('password')}/`);

            let response = await request.json();
            if (response.status == "error") {
               error("error","alert-danger",response.message);
            } else if (response.status == "ok") {
                localStorage.setItem("token" , response.message.token);
                let body1 = new FormData();
                body1.append("name", response.message.name);
                body1.append("rol", response.message.rol);
                body1.append("user[user_id]", response.message.user.user_id);
                body1.append("user[email]", response.message.user.email);
                body1.append("user[username]", response.message.user.username);
                body1.append("user[role_id]", response.message.user.role_id);
                body1.append("client[client_id]", response.message.client.client_id);
                body1.append("client[address]", response.message.client.address);
                body1.append("client[gender]", response.message.client.gender);
                body1.append("client[name]", response.message.client.name);
                body1.append("client[lastname]", response.message.client.lastname);
                body1.append("client[phone]", response.message.client.phone);
                let request1 = await fetch("./src/Core/dataUser.php",{method: "post", body: body1});
                //console.log(request1);
                let response1 = await request1.json();

                if (response1 == "vacio") {
                   error("error", "alert-danger","Campos vacios 2");
                } else if(response1 == "listo") {
                    location.reload();
                }
            } else {
                error("error","alert-danger","Algo salio mal");
            }
        } catch (e) {
           error("error","alert-success","waiting for connection..., Intente nuevamente");
            console.log(e);
        }finally {
            hideSpinner(); // Ocultar el spinner después de la petición fetch
        }
    })()
})
