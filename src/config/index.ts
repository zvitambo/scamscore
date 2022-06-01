export const PORT =  process.env.PORT || 5000;

export const DATA_ANALYSIS_ENDPOINT_URL =
  process.env.DATA_ANALYSIS_ENDPOINT_URL ||
  "https://www.virustotal.com/api/v3/urls/";

  export const DATA_ANALYSIS_ENDPOINT_API_KEY =
    process.env.DATA_ANALYSIS_ENDPOINT_API_KEY ||
    "0913c4a236239fda53f8a8b972676414a71f86467bb68ae26573a6882a56b3fe";


  export const DB_USER =
       process.env.DB_USER ||
        "postgres"; 


  export const DB_USER_PASSWORD =
       process.env.DB_USER_PASSWORD ||
        "root"; 

 export const DB_HOST =
       process.env.DB_HOST ||
        "localhost"; 

 export const DB_PORT =
       process.env.DB_PORT ||
        5432; 

  export const DB_DATABASE = process.env.DB_DATABASE || "domaindb"; 
  

  