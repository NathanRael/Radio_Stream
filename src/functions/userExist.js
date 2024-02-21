const userExist = (allUser,email, username) => allUser.some(
    (user) =>
      user.name.toLowerCase() === username?.toLowerCase() ||
      user.email.toLowerCase() === email.toLowerCase() 
);

export default userExist;