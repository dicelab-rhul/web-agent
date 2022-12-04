import {basicSetup, CodeMirror} from "codemirror"

import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"


$(function(){
    console.log("READY")
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
    let editor = new EditorView({
        extensions: [basicSetup],
        parent: document.getElementById("editor")
    })

    var editortabs = new EditorTabs();
    
    
}); 

const UNTITLED_NAME : string = "Untitled";
const LOCAL_STORAGE_PREFIX : string = "00001_webagent_"

class EditorTabs {

    tab_ids : Array<string>; 
    tab_new_id : string
    tab_active_id : string; 

    editor_tabs_id : string;

    constructor(editor_tabs_id : string = "#editor-tabs", tab_ids : Array<string> = [], fresh : boolean = true) {
        this.tab_ids = tab_ids;
        this.editor_tabs_id = editor_tabs_id;
        this.tab_new_id = this.newEditorTab("+");
        this.tab_active_id = this.tab_new_id;
        if (fresh) { 
            var untitled_id : string = this.newEditorTab(UNTITLED_NAME);
            this.tab_active_id = untitled_id;
        }

        
    }

    activateTab(tab_id : string) {
        // console.log("SET ACTIVE " + tab_id);
        $("#" + this.tab_active_id).children("a").removeClass("active");
        if (tab_id == this.tab_new_id) {
            tab_id = this.newEditorTab(UNTITLED_NAME);
        }
        $("#" + tab_id).children("a").addClass("active");
        this.tab_active_id = tab_id;
    };

    newEditorTab(file_name : string) { 
        var tab_id : string = "editor_tab_" + String(this.tab_ids.length);
        $(this.editor_tabs_id).prepend('<li id=' + tab_id + ' class="nav-item"> <a class="nav-link" href="#"> ' + file_name + ' </a></li>')
        var editortabs = this;
        $("#" + tab_id).on("click", function(){
            editortabs.activateTab(tab_id);
        });
        this.tab_ids.push(tab_id);
        localStorage.setItem(LOCAL_STORAGE_PREFIX + tab_id, "{tab_id : " + tab_id + ", header : " + file_name + ", content : ''}");
        
        console.log(localStorage.getItem(LOCAL_STORAGE_PREFIX + tab_id));
        return tab_id;
    };
};





// parcel index.html