let theme;
let firstLoad = true;
let audioPlaying = false;

function getCurrentTheme() {
    return document
        .cookie
        ?.split(";")
        .find((row) => row.trim().startsWith("theme="))
        ?.split("=")[1];
}

function hasUserHiddenThemeToggleMsg() {
    const cookie = document.cookie;
    const showThemeToggleMsg = 
        cookie
        ?.split(";")
        .find(row => row.trim().startsWith("showThemeToggleMsg"))
        ?.split("=")[1];

    return showThemeToggleMsg === "false";
}

function initTheme() {
    let cookieTheme = getCurrentTheme();
    toggleTheme(cookieTheme ? cookieTheme : "light");
}

function initPage() {
    initTheme();
}

function dontShowToggleMsg() {
    console.log("hide")
    document.cookie = `showThemeToggleMsg=false`;
    let suitYourEyes = document.getElementById('suitYourEyes');
    suitYourEyes.style.display = "none";
}

function toggleTheme(newTheme = null) {
    // Toggles between the dark and light themes
    var suitYourEyes = document.getElementById('suitYourEyes');
    var closeThemeToggleBtn = document.getElementById('close-toggle-msg-btn');
    var firstPage = document.getElementsByClassName('firstPage')[0];
    var timeline = document.getElementById('timeline');
    var github = document.getElementById('github');
    var linkedIn = document.getElementById('linkedIn');
    var facebook = document.getElementById('facebook');
    var email = document.getElementById('email');
    var footer = document.getElementsByClassName('footer')[0];
    var themeIndicator = document.getElementsByClassName('themeIndicator')[0];

    let targetTheme;

    if (newTheme) {
        // if the theme to change to is specified in the param
        targetTheme = newTheme;
    } else {
        targetTheme  = getCurrentTheme() == "dark"
            ? "light"
            : "dark";
    }

    if(targetTheme == 'light'){
        suitYourEyes.style.backgroundColor = "rgba(238, 238, 238, 1)";
        suitYourEyes.style.color = "rgba(3, 0, 8, 0.9)";
        closeThemeToggleBtn.style.color = "rgba(3, 0, 8, 0.9)";
        closeThemeToggleBtn.style.borderColor = "rgba(3, 0, 8, 0.9)";
        closeThemeToggleBtn.style.backgroundColor = "transparent";
        suitYourEyes.innerHTML = `
            <button
             id="close-toggle-msg-btn"
             onclick="dontShowToggleMsg()"
             style="color:${closeThemeToggleBtn.style.color};border-color:${closeThemeToggleBtn.style.borderColor};background-color:${closeThemeToggleBtn.style.backgroundColor}"
            >x</button> switch to a darker theme >`;
        themeIndicator.src = "res/moon.png";
        document.body.style.backgroundColor = "#f2f1ef";
        firstPage.style.color = "rgba(3, 0, 8, 0.9)"; 
        timeline.src = "res/tl-icon-dark.png";
        github.src = "res/githubBlack.png";
        linkedIn.src = "res/linkedInBlack.png";
        facebook.src = "res/facebookBlack.png";
        email.src = "res/emailBlack.png";
        footer.style.backgroundColor = "rgba(238, 238, 238, 1)";
        footer.style.color = "rgba(3, 0, 8, 0.9)";
    } else {
        suitYourEyes.style.backgroundColor = "rgba(3, 0, 8, 0.2)";
        suitYourEyes.style.color = "#f2f1ef";
        closeThemeToggleBtn.style.color = "#f2f1ef";
        closeThemeToggleBtn.style.borderColor = "#f2f1ef";
        closeThemeToggleBtn.style.backgroundColor = "transparent";
        suitYourEyes.innerHTML = `
            <button
             id="close-toggle-msg-btn"
             onclick="dontShowToggleMsg()"
             style="color:${closeThemeToggleBtn.style.color};border-color:${closeThemeToggleBtn.style.borderColor};background-color:${closeThemeToggleBtn.style.backgroundColor}"
            >x</button> switch to a lighter theme >`;
        themeIndicator.src = "res/sun.png";
        document.body.style.backgroundColor = "rgba(36, 37, 42, 1)";
        firstPage.style.color = "#f2f1ef"; 
        timeline.src = "res/tl-icon-light.png";
        github.src = "res/github.png";
        linkedIn.src = "res/linkedIn.png";
        facebook.src = "res/facebook.png";
        email.src = "res/email.png";
        footer.style.backgroundColor = "rgba(10, 10, 10, 0.4)";
        footer.style.color = "#f2f1ef";
    }

    let cookie = `theme=${targetTheme};`;
    document.cookie = cookie;
    
    suitYourEyes.style.display = hasUserHiddenThemeToggleMsg() ? "none": "inline-block";
}

function playAudio() {
    if(!audioPlaying) {
        let audio = new Audio('res\\audio\\imagine.mp3');
        audio.play();
        audioPlaying = true;
    }
}