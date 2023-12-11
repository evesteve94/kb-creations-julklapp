
function getModals() {
    const modals = document.querySelectorAll(".modal");
    const openModalBtns = document.querySelectorAll("[id^='openModalBtn']");
    const closeModalBtns = document.querySelectorAll("[id^='closeModalBtn']");

    modals.forEach((modal, index) => {
        const openModalBtn = openModalBtns[index];
        const closeModalBtn = closeModalBtns[index];

        openModalBtn.addEventListener("click", function () {
            modal.classList.add("modal-showing");
        });

        closeModalBtn.addEventListener("click", function () {
            modal.classList.remove("modal-showing");
            modal.classList.add("modal");
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("modal-showing");
                modal.classList.add("modal");
            }
        });
    });

    window.addEventListener("click", function (event) {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.classList.remove("modal-showing");
                modal.classList.add("modal");
            }
        });
    });
}
