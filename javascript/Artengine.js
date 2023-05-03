
function opentoggle(item) {

    let toggle = document.getElementById(item);
    if (toggle.className === "togglebox_down") {
        toggle.classList.add('active');
        console.log('feur')
        console.log(toggle.classList)
    } else {
        toggle.className = "togglebox_down"
        console.log('quoi?')
    }
}




