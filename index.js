function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
}
function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city !== "NYC") {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  let message;
  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    case "thanks for everything":
      message = "Bye.";
      break;
  }
  return message
}
