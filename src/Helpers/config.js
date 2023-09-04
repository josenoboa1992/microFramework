const config = {};

config.API = "https://api.worldingfoods.com/";

config.token = localStorage.getItem("token");

config.validateToken = () => {
   if (localStorage.getItem("token") === null) {
      document.getElementById('closeSesion').click();
   }
}

export default config;
