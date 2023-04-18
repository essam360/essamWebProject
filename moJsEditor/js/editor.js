//on load
window.addEventListener('load', ()=>{
    setTimeout(() => {
        document.getElementById("console").innerHTML ='';
       try {
        new Function(editor.getValue())(); 
       } catch (error) {
           
        console.error("Error: "+error);
       }
    }, 500);
}, false )

//globale log array
var consoleMsgs = [];

//set up ace
var editor = ace.edit("editor");
let editorLib={
    init()
    {
        //config

        //theme
        editor.setTheme("ace/theme/dracula");

        //set lang
        editor.session.setMode("ace/mode/javascript");

        //set option
        editor.setOptions({
            fontSize:'15px',
            enableBasicAutocompletion: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion:   true,
            enableSnippets: true,
        });


    }
};

/// run init config function
editorLib.init();

//select theme
var themeSelector = document.getElementById('theme');
themeSelector.onchange = ()=>{
editor.setTheme("ace/theme/"+themeSelector.value);    
}

//select font size
var fontSizeSelector = document.getElementById('fontSize');
fontSizeSelector.onchange = ()=>{
    editor.setOptions({
        fontSize: fontSizeSelector.value,
    });
}

//////////////// exe code
editor.on("change", function(e){
    setTimeout(() => {
        document.getElementById("console").innerHTML ='';
       try {
        new Function(editor.getValue())(); 
       } catch (error) {
           
        console.error("Error: "+error);
       }
    }, 500);
});
