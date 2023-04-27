async function addNavbar() {
    const resp = await fetch("https://smc-26.github.io/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}