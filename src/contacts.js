const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
let itemHeight;
const contactsCount = 5000;

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < contactsCount; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", (e) => {
  if (!itemHeight) {
    item = contacts.getElementsByClassName("contact")[0];
    itemHeight = item.clientHeight;
  }
  stickyHeader.textContent = Math.floor(contacts.scrollTop / itemHeight);
});

addContacts();