const example_website = document.getElementById("example_website");
const login_page = document.getElementById("login_page");
const set_timeout = document.getElementById("set_timeout");
const set_interval = document.getElementById("set_interval");
const sync = document.getElementById("sync");
const async = document.getElementById("async");
const promises = document.getElementById("promises");
const promises_all = document.getElementById("promises_all");
const async_await = document.getElementById("async_await");
const axios = document.getElementById("axios");

example_website.addEventListener("click", () => {
  location.href = "https://example.com";
});
login_page.addEventListener("click", () => {
  location.href = "login.html";
});
set_timeout.addEventListener("click", () => {
  location.href = "set_timeout.html";
});
set_interval.addEventListener("click", () => {
  location.href = "set_interval.html";
});
sync.addEventListener("click", () => {
  location.href = "sync.html";
});
async.addEventListener("click", () => {
  location.href = "async.html";
});
promises.addEventListener("click", () => {
  location.href = "promises.html";
});
promises_all.addEventListener("click", () => {
  location.href = "promises_all.html";
});
async_await.addEventListener("click", () => {
  location.href = "async_await.html";
});
axios.addEventListener("click", () => {
  location.href = "axios.html";
});
