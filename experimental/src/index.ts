// TODO: there is a lot to do here:
// - Refactor the code, so that the JQuery dependency is removed.
// - Replace `var` with `const` and `let` whenever possible, and remove global variables.
// - Refactor the methods that are too long.
// - Fix the types.

import './utils.js'
import {Editor} from './editor.js'

$(function(){

    // BUTTONS
    $("#btn-stop").hide()
    $("#btn-run").on("click", function(){
        $("#btn-stop").show()
        $("#btn-run").hide()
        // run the program
    });
    $("#btn-stop").on("click", function(){
        $("#btn-run").show()
        $("#btn-stop").hide()
        // stop the program
    });

    //code editor!
    var editor = new Editor();

    window.onbeforeunload = function() {
        editor.updateLocalStorage(editor.active_tab_id);
        return ''
    }
});
