const container = document.getElementById("scrollContainer");
let cardWidth = 1550; // width including gap
const visibleWidth = container.clientWidth;
const totalScrollWidth = container.scrollWidth;
const maxScrollLeft = totalScrollWidth - visibleWidth;

function moveRight(device) {
    if(device==="mobile") {
    cardWidth = 630; // Adjust card width for mobile
  }
    const scrollContainer = document.getElementById('scrollContainer');
    const currentScroll = scrollContainer.scrollLeft;

    console.log("Current Scroll:", currentScroll); // Debugging
    console.log("Max Scroll Left:", maxScrollLeft); // Debugging

    // Scroll by the width of a single card
    if (currentScroll >= maxScrollLeft) {
        // Loop back to the start
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        // Scroll to the right by cardWidth
        scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
}

function moveLeft(device) {
  console.log("Device:==========", device); // Debugging
  
  if(device==="mobile") {
    cardWidth = 630; // Adjust card width for mobile
  }

    const scrollContainer = document.getElementById('scrollContainer');
    const currentScroll = scrollContainer.scrollLeft;

    // Scroll by the width of a single card
    if (currentScroll <= 0) {
        // Loop back to the end
        scrollContainer.scrollTo({ left: scrollContainer.scrollWidth - scrollContainer.offsetWidth, behavior: "smooth" });
    } else {
        // Scroll to the left by cardWidth
        scrollContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
}
function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    const mainContent = document.getElementById("mainContent");

    console.log("Drawer toggled"); // Debugging

    if (drawer.classList.contains("open")) {
        drawer.classList.remove("open");
        mainContent.style.marginTop = "0"; // Reset margin
    } else {
        drawer.classList.add("open");
        mainContent.style.marginTop = "300px"; // Push content down
    }
}