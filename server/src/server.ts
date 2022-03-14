import dotenv from "dotenv";
dotenv.config();
const PORT: string | number = process.env.PORT || 5000;
console.log(PORT);
