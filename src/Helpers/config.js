const config = {};

config.API = "http://localhost:8080/api/";

config.token = localStorage.getItem("token");

config.validateToken = () => {
   if (localStorage.getItem("token") === null) {
      document.getElementById('closeSesion').click();
   }
}

export default config;
