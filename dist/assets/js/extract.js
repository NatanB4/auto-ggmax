function extractBearer() {
  return new Promise((resolve, reject) => {
    chrome.cookies.get(
      { url: "https://ggmax.com.br/*", name: "auth._token.local" },
      function (cookie) {
        resolve(cookie);
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const { value } = await extractBearer();
  console.log(value.replace("Bearer%20", ""));
});

document.querySelector("#file").addEventListener("change", function (e) {
  if (e.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
    };
    reader.readAsText(e.target.files[0]);
  }
});
