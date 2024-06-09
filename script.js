const display = document.querySelector("#content");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {

  item.onclick = () => {

    if (item.id == "clear") {
      function animateContent() {
          return new Promise(resolve => {
              gsap.to("#content", {
                  y: -1000,
                  duration: 1,
                  ease: Expo.easeInOut,
                  onComplete: () => {
                      resolve("resolved");
                  }
              });
          });
      }
  
      async function asyncCall() {
          console.log('calling');
          const result = await animateContent();
          console.log(result); // Expected output: "resolved"
          display.innerText = "";
          gsap.to("#content", {
            y: 0,
        });
      }
  
      asyncCall();
  }  

    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }

    else if (display.innerText != "" && item.id == "equal") {
      function animateContent() {
        return new Promise(resolve => {
            gsap.to("#content", {
                y: -1000,
                duration: .5,
                ease: Expo.easeInOut,
                onComplete: () => {
                    resolve("resolved");
                }
            });
        });
    }

    async function asyncCall() {
        console.log('calling');
        const result = await animateContent();
        console.log(result); // Expected output: "resolved"
        display.innerText = eval(display.innerText);
        gsap.to("#content", {
          y: 0,
      });
    }
    asyncCall();
}

    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } 
    
    else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => {

  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

};