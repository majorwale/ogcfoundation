const modalClose = document.querySelectorAll(".team-modal-close");
const teamMemberImgs = document.querySelectorAll(".member-img");
const modals = document.querySelector(".team-modals");

// Modal close
function closeModal(e) {
  modals.classList.remove("activate");
  e.target.closest(".team-member-modal").classList.remove("activate");
}
modalClose.forEach(function (close) {
  close.addEventListener("click", closeModal);
});

// Team Bio View
function viewBio(e) {
  const memberElement = e.target.closest(".member");
  const member = memberElement.dataset.member;
  //   console.log(member);
  if (member) {
    modals.classList.add("activate");
    document
      .getElementById(`team-member-modal-${member}`)
      .classList.add("activate");
  }
}
teamMemberImgs.forEach(function (member) {
  member.addEventListener("click", viewBio);
});
