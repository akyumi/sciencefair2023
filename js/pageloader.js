async function addNavbar() {
    const resp = await fetch("navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}