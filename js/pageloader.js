async function addNavbar() {
    const resp = await fetch("https://smc-26.github.io/sciencefair2023/navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);
}