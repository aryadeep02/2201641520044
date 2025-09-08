import fetch from "node-fetch";
const body = {
  email: "aryadeepvarshney85@gmail.com",
  name: "Aryadeep Varshney",
  mobileNo: "6392853068",
  githubUsername: "aryadeep02",
  rollNo: "2201641520044",
  accessCode: "sAWTuR"
};
async function register() {
  const response = await fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  console.log("REGISTER RESPONSE:", data);
}
register();