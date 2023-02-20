export default async function logoutsys(user) {
  const $thelogins = document.querySelectorAll(".thelogins");
  const $thelogouts = document.querySelectorAll(".thelogouts");
 
  if (user) {console.log(user)
    $thelogouts.forEach((links) => (links.style.display = "initial"));
    $thelogins.forEach((links) => (links.style.display = "none"));
  } else {console.log(user)
    $thelogins.forEach((links) => (links.style.display = "initial"));
    $thelogouts.forEach((links) => (links.style.display = "none"));
  }
}
