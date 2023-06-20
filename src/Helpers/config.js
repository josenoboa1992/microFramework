const config = {};

config.API = "http://api.local/";

config.token = localStorage.getItem("token");

config.validateToken = () => {
   if (localStorage.getItem("token") === null) {
      document.getElementById('closeSesion').click();
   }
}

export default config;