console.log("Hello there.")

const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 && hours < 4;

const welcome = document.querySelector("#welcome");

const message = document.createElement("h2");

if (isMorning)
{
    message.textContent = "Good morning!";
}
else if (isAfternoon)
{
    message.textContent = "Good afternoon!";
}
else
{
    message.textContent = "Good evening!";
}

welcome.append(message);

localStorage.setItem("It's a secret to everybody.", "Courage need not be remembered, for it is never forgotten.");