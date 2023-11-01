const quickView = document.getElementById("quickView");
const quickViewBtnClick = (name = "", mrp = "") => {
    quickView.classList.remove("hidden");
    if (name != "" && mrp != "") {
        document.getElementsByClassName("orderHeading")[0].innerHTML = name;
        document.getElementsByClassName("orderMRP")[0].innerHTML = mrp;
    }
};

const closeQuickView = () => {
    quickView.classList.add("hidden");
};
