import jwt from "jsonwebtoken"
export default generateToken=(code)=>{
  const token=jwt.sign({code},process.env.JWT_SECRET);
  return token;
}