const dropDownEffect = () => {
    const dataProjectsDropdown = document.querySelector('[data-projects-dropdown]');
    const caret = dataProjectsDropdown.querySelector('i');

    dataProjectsDropdown.addEventListener('click', () => {
        caret.classList.toggle(`fa-caret-down`);
        caret.classList.toggle(`fa-caret-up`);
    })
}

const navEffect = () => {
    const aside = document.querySelector('aside');
    document.querySelector('.openNav').addEventListener('click', () => {
        if (aside.style.marginLeft === "-200px") {
            aside.style.marginLeft = "0";
        } else {
            aside.style.marginLeft = "-200px";
        }
    });
    const mq = window.matchMedia('(max-width: 850px)')

    function checkMediaWidthAndDoTasks(x) {
        if (x.matches) { aside.style.marginLeft = "-200px"; } else { aside.style.marginLeft = "0px"; }
    }
    checkMediaWidthAndDoTasks(mq);
    mq.addListener(() => {
        checkMediaWidthAndDoTasks(mq);
    })
}

export { dropDownEffect, navEffect };