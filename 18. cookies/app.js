//we can save data to cookie and use it in website - like user login info (not user pass cause its not safe)

let setCookie = document.querySelector("set-btn");
let getCookie = document.querySelector(".get-btn");
let removeCookie = document.querySelector(".remove-btn");

setCookie.addEventListener("load", () => {
    console.log(document.cookie); //show all cookies

    const now = new Date();
    console.log(now);
    let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 1000); //time for 2 days later

    //set cookie: name:username value:alireza-tayebi
    //its available in all pages because: ;path=/
    //can have an expire day with the help of Date() : ;expires=theDate;
    document.cookie = `username=alireza-tayebi;path=/;expires=${expireDay}`;
});

getCookie.addEventListener("load", () => {
    //get cookies:

    let mainCookieName = prompt("enter the cookie name: ");
    let cookieArray = document.cookie.split(";"); //turn it to array
    let mainCookie = null;

    cookieArray.some((cookie) => {
        if (cookie.includes(mainCookieName)) {
            mainCookie = cookie.substring(cookie.indexOf("=") + 1);
            return true;
        }
    });
    console.log(mainCookie);
});

removeCookie.addEventListener("load", () => {
    //for remove cookies: we reset that cookie with past time

    let mainCookieName = prompt("enter the cookie name: ");
    const now = new Date();
    console.log(now);
    now.setTime(now.getTime() - 2 * 24 * 60 * 1000); //time for 2 days ago

    document.cookie = `${mainCookieName}=alireza-tayebi;path=/;expires=${now}`;
});
