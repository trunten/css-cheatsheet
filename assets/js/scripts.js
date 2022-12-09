function copy(e) {
    let s = "";
    try {
       s = e.innerText.trimEnd();
    } catch (err) {}
    navigator.clipboard.writeText(s);
    // console.log("copied", s)
    
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 