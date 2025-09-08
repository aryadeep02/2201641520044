import fetch from "node-fetch";
const body = {
  email: "aryadeepvarshney85@gmail.com",
  name: "Aryadeep Varshney",
  rollNo: "2201641520044",
  accessCode: "sAWTuR",
  clientID: "29b63f22-3a25-444d-aac3-23b1f6aa81a6",
  clientSecret: "cTcZKPvTUvPxuNcE"
};

async function getToken() {
  const response = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  console.log("AUTH RESPONSE:", data);
}

getToken();