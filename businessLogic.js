// businessLogic/businessLogic.js
export const processData = (data) => {
    // Business logic processing
    return data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));
  };
  