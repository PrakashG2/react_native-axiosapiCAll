// common/logger.js
export const logMessage = (message) => {
    console.log(`[LOG] ${message}`);
  };
  
  export const logError = (error) => {
    console.error(`[ERROR] ${error.message}`);
  };
  