let theme;
let msgShown = 0;
let randomSpecifier = Math.random() * 200;

function randomTheme(){
    theme = randomSpecifier >= 100 ? 'dark' : 'light';
    toggleTheme();
}

function setTheme(flag){
    theme = flag;
    var suitYourEyes = document.getElementById('suitYourEyes');
    setTimeout( () => {
        suitYourEyes.style.display = "none";
        msgShown++;
    }, 5000);
}

function showMsg(){
    if(msgShown <= 1){
        var suitYourEyes = document.getElementById('suitYourEyes');
        suitYourEyes.style.display = "inline-block";
        setTimeout( () => {
            suitYourEyes.style.display = "none";
            msgShown++;
        }, 5000);
    }
}

function toggleTheme(){
    var suitYourEyes = document.getElementById('suitYourEyes');
    var firstPage = document.getElementsByClassName('firstPage')[0];
    var secondPage = document.getElementsByClassName('secondPage')[0];
    var projectsHeader = document.getElementById('projectsHeader');
    var spanElement = document.getElementsByClassName('spanElement');
    var groceryDesk = document.getElementById('groceryDesk');
    var sortFiles = document.getElementById('sortFiles');
    var yifyRss = document.getElementById('yifyRss');
    var twitterQotd = document.getElementById('twitterQotd');
    var chatterIo = document.getElementById('chatterIo');
    var batteryNotifier = document.getElementById('batteryNotifier');
    var github = document.getElementById('github');
    var linkedIn = document.getElementById('linkedIn');
    var facebook = document.getElementById('facebook');
    var email = document.getElementById('email');
    var footer = document.getElementsByClassName('footer')[0];
    var themeIndicator = document.getElementsByClassName('themeIndicator')[0];
    var bottom = document.getElementsByClassName("bottom")[0];
    var sideLeft = document.getElementsByClassName('sideLeft')[0];
    var sideRight = document.getElementsByClassName('sideRight')[0];
    var moreProjectsLink = document.getElementById('moreProjectsLink');

        /* 
         * I couldn't find anything more reliable(or working) 
         * to access/manipulate pseudo-elements.
         *
         * Apparently you either insert a stylesheet rule or 
         * extend the HTMLElement to do the following.
         *
         * I tried inserting stylesheet rules but for some reason
         * it didn't work either.
         * 
         * Source:
         * http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
         *
         */

    var UID = {
            _current: 0,
            getNew: function(){
                this._current++;
                return this._current;
            }
        };

        HTMLElement.prototype.pseudoStyle = function(element,prop,value){
            var _this = this;
            var _sheetId = "pseudoStyles";
            var _head = document.head || document.getElementsByTagName('head')[0];
            var _sheet = document.getElementById(_sheetId) || document.createElement('style');
            _sheet.id = _sheetId;
            var className = "pseudoStyle" + UID.getNew();

            _this.className +=  " "+className; 

            _sheet.innerHTML += "\n."+className+":"+element+"{"+prop+":"+value+"}";
            _head.appendChild(_sheet);
            return this;
        };

    if(theme == 'dark'){

        // For changing pseudo elements like :after
        bottom.pseudoStyle("after", "border-top", "0.1em solid rgba(3, 0, 8, 0.9)");
        bottom.pseudoStyle("after", "border-right", "0.1em solid rgba(3, 0, 8, 0.9)");

        sideLeft.pseudoStyle("after", "border-top", "0.1em solid rgba(3, 0, 8, 0.9)");
        sideLeft.pseudoStyle("after", "border-right", "0.1em solid rgba(3, 0, 8, 0.9)");
        sideRight.pseudoStyle("after", "border-top", "0.1em solid rgba(3, 0, 8, 0.9)");
        sideRight.pseudoStyle("after", "border-left", "0.1em solid rgba(3, 0, 8, 0.9)");

        suitYourEyes.style.backgroundColor = "rgba(238, 238, 238, 1)";
        suitYourEyes.style.color = "rgba(3, 0, 8, 0.9)";
        themeIndicator.src = "res/moon.png";
        document.body.style.backgroundColor = "#f2f1ef";
        firstPage.style.color = "rgba(3, 0, 8, 0.9)"; 
        secondPage.style.color = "rgba(3, 0, 8, 0.9)";
        projectsHeader.style.backgroundColor = "rgba(242, 241, 239, 0.9)";
        projectsHeader.style.color = "rgba(3, 0, 8, 0.9)";
        groceryDesk.style.backgroundColor = "#f2f1ef";
        groceryDesk.style.color = "rgba(3, 0, 8, 0.9)";
        sortFiles.style.backgroundColor = "#f2f1ef";
        sortFiles.style.color = "rgba(3, 0, 8, 0.9)";
        yifyRss.style.backgroundColor = "#f2f1ef";
        yifyRss.style.color = "rgba(3, 0, 8, 0.9)";
        twitterQotd.style.backgroundColor = "#f2f1ef";
        twitterQotd.style.color = "rgba(3, 0, 8, 0.9)";
        chatterIo.style.backgroundColor = "#f2f1ef";
        chatterIo.style.color = "rgba(3, 0, 8, 0.9)";
        batteryNotifier.style.backgroundColor = "#f2f1ef";
        batteryNotifier.style.color = "rgba(3, 0, 8, 0.9)";
        github.src = "res/githubBlack.png";
        linkedIn.src = "res/linkedInBlack.png";
        facebook.src = "res/facebookBlack.png";
        email.src = "res/emailBlack.png";
        moreProjectsLink.style.color = "rgba(3, 0, 8, 0.9)";
        footer.style.backgroundColor = "rgba(238, 238, 238, 1)";
        footer.style.color = "rgba(3, 0, 8, 0.9)";

        for(i = spanElement.length; i-- ;){
            spanElement[i].style.backgroundColor = "#f2f1ef";
            spanElement[i].style.color = "rgba(3, 0, 8, 0.9)";
        }

        setTheme('light');
    }

    else if(theme == 'light'){

        // For changing pseudo elements like :after
        bottom.pseudoStyle("after", "border-top", "0.1em solid #f2f1ef");
        bottom.pseudoStyle("after", "border-right", "0.1em solid #f2f1ef");

        sideLeft.pseudoStyle("after", "border-top", "0.1em solid #f2f1ef");
        sideLeft.pseudoStyle("after", "border-right", "0.1em solid #f2f1ef");
        sideRight.pseudoStyle("after", "border-top", "0.1em solid #f2f1ef");
        sideRight.pseudoStyle("after", "border-left", "0.1em solid #f2f1ef");

        suitYourEyes.style.backgroundColor = "rgba(36, 37, 42, 0.3)";
        suitYourEyes.style.color = "#f2f1ef";
        themeIndicator.src = "res/sun.png";
        document.body.style.backgroundColor = "rgb(3, 0, 8)";
        firstPage.style.color = "#f2f1ef"; 
        secondPage.style.color = "#f2f1ef";
        projectsHeader.style.backgroundColor = "rgba(3, 0, 8, 0.9)";
        projectsHeader.style.color = "#f2f1ef";
        groceryDesk.style.backgroundColor = "rgb(3, 0, 8)";
        groceryDesk.style.color = "#f2f1ef";
        sortFiles.style.backgroundColor = "rgb(3, 0, 8)";
        sortFiles.style.color = "#f2f1ef";
        yifyRss.style.backgroundColor = "rgb(3, 0, 8)";
        yifyRss.style.color = "#f2f1ef";
        twitterQotd.style.backgroundColor = "rgb(3, 0, 8)";
        twitterQotd.style.color = "#f2f1ef";
        chatterIo.style.backgroundColor = "rgb(3, 0, 8)";
        chatterIo.style.color = "#f2f1ef";
        batteryNotifier.style.backgroundColor = "rgb(3, 0, 8)";
        batteryNotifier.style.color = "#f2f1ef";
        github.src = "res/github.png";
        linkedIn.src = "res/linkedIn.png";
        facebook.src = "res/facebook.png";
        email.src = "res/email.png";
        moreProjectsLink.style.color = "#f2f1ef";
        footer.style.backgroundColor = "rgba(36, 37, 42, 0.2)";
        footer.style.color = "#f2f1ef";

        for(i = spanElement.length; i-- ;){
            spanElement[i].style.backgroundColor = "rgb(3, 0, 8)";
            spanElement[i].style.color = "#f2f1ef";
        }

        setTheme('dark');
    }
}