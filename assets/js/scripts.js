function copy(e) {
    let s = "";
    try {
       s = e.innerText.trimEnd();
    } catch (err) {}
    navigator.clipboard.writeText(s);
    // console.log("copied", s)
} 