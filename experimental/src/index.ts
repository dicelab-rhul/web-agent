

import '/src/utils.js'
import {Editor} from './editor'
import {parser} from "./grammar/teleora"

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

