import jwt from "jsonwebtoken"
 const generateToken =(code)=>{
  const token=jwt.sign({code},process.env.JWT_SECRET);
  return token;
}
export default generateToken;