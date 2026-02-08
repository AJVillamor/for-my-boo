let currentStep = 1;
let noClickCount = 0;

function showNextMessage(nextContainerId) {
  const currentContainer = document.getElementById(
    `invitation-container-${currentStep}`
  );
  currentContainer.classList.add("hidden");

  if (currentStep < 3) {
    currentStep++;
    const nextContainer = document.getElementById(nextContainerId);
    nextContainer.classList.remove("hidden");
  }
}

function showPreviousMessage(previousContainerId) {
  if (currentStep > 1) {
    const currentContainer = document.getElementById(
      `invitation-container-${currentStep}`
    );
    currentContainer.classList.add("hidden");

    currentStep--;
    const previousContainer = document.getElementById(previousContainerId);
    previousContainer.classList.remove("hidden");
  }
}

function confirmAttendance(response) {
  if (response === "no") {
    noClickCount++;

    const yesButton = document.getElementById("yes-btn");
    const scale = 1 + noClickCount * 0.25; // increase size gradually
    yesButton.style.transform = `scale(${scale})`;
    yesButton.style.transition = "transform 0.3s ease";

    return;
  }

  if (response === "yes") {
    alert(
      "Thank you for accepting the invitation! Looking forward to our special day together."
    );
  }
}
