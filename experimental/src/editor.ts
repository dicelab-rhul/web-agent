

import {basicSetup} from "codemirror"
import {EditorState, Compartment} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"

import {createNewModal, Modal} from './modal'; 

const UNTITLED_NAME : string = "Untitled";
const LOCAL_STORAGE_PREFIX : string = "00001_webagent_"
const EDITOR_TABS_ELEMENT_ID : string = "#editor-tabs";

const SOURCE_FILE_EXTENSION : string = ".tel";

const MODAL_NEW_FILE_ID : string = "modal_new_file";
const MODAL_RECOVER_ID : string = "modal_recover";

export class Editor {

    tabs : Map<string, EditorFile>;
    active_tab_id : string | null;
    new_tab_id : string;
    editor_view : EditorView;
    
    newFileModal : NewFileModal;
    recoverModal : RecoverModal;

    constructor() {
        //localStorage.clear() // TODO: REMOVE THIS IN PRODUCTION
        this.tabs = new Map<string, EditorFile>();
        var new_file = new EditorFile("+", "");
        this.newEditorTab(new_file, false);

        this.new_tab_id = new_file.tab_id;
        this.active_tab_id = null; 
        
        this.editor_view = this.initialiseEditorView();

        this.newFileModal = new NewFileModal(this);
        this.recoverModal = new RecoverModal(this);
    }

    initialiseEditorView() {
        var editor_view : EditorView = new EditorView({
            extensions: [
                basicSetup
            ],        
            parent: document.getElementById("editor")!
        })
        //$("#editor").on("click", function() { console.log("EDITING!")} )
        return editor_view;
    }

    updateEditorContent(tab_id : string) {
        var content : string = this.tabs.get(tab_id)!.content;
        // TODO: apparently there are various ways of doing this...? not sure what has the best performance...
        this.editor_view.dispatch({changes: {
            from: 0,
            to: this.editor_view.state.doc.length,
            insert: content
        }})
    }
    
    updateLocalStorage(tab_id : string | null) {
        if (tab_id !== null && tab_id !== this.new_tab_id) {
            var value : string = JSON.stringify(this.tabs.get(tab_id));
            localStorage.setItem(LOCAL_STORAGE_PREFIX + tab_id, value); 
            console.log("LOCAL STORAGE UPDATE", localStorage.getItem(LOCAL_STORAGE_PREFIX + tab_id));
        }
    }

    updateFileContent(tab_id : string | null) { 
        if (tab_id !== null) {
            var content : string = this.editor_view.state.doc.toString();
            this.tabs.get(tab_id)!.content = content;
        }
    }
   
    activateTab(tab_id : string) {
        if (tab_id === this.new_tab_id) {
            this.newFileModal.show()
        } else if (tab_id !== this.active_tab_id) {
            // update old active tab
            if (this.active_tab_id !== null) {
                $("#" + this.active_tab_id).children("a").removeClass("active");
                this.updateFileContent(this.active_tab_id);
            }
            // update new active tab
            $("#" + tab_id).children("a").addClass("active");
            this.active_tab_id = tab_id;
            this.updateEditorContent(tab_id);
        }
    }

    newEditorTab(editor_file : EditorFile, save : boolean = true) { 

        var file_name : string = editor_file.file_name;
       
        var tab_id : string = "editor_tab_" + String(this.tabs.size);
        editor_file.tab_id = tab_id;

        $(EDITOR_TABS_ELEMENT_ID).prepend(`
        <li id=${tab_id} class="nav-item"> 
            <a class="nav-link" href="#">${file_name}</a>
        </li>`)

        // this is horrific :) sue me.
        var editor = this;
        $("#" + tab_id).on("click", function(){
            editor.activateTab(tab_id);
        });
        // close button
        /*if (closable) {
            var close_button_html : string = `
            <button id="btn-stop", type="button" class="close_button">
                <i class="bi bi-x"></i> 
            </button>`;
            var close_button = $("#" + tab_id).append(close_button_html)
            //close_button.on("click", function(){
            //   editortabs.closeTab(tab_id);
            //});
        }*/
        this.tabs.set(tab_id, editor_file);
        if (save) {
            this.updateLocalStorage(tab_id);
        }
    };
};

class EditorFile {

    tab_id : string;
    file_name : string; 
    file_extension : string;
    content : string;

    constructor(file_name : string, content : string) {
        this.tab_id = "";           // unique ID (file id in localStorage)
        this.file_name = file_name; // this is used if the file is download to disk!
        this.content = content;     // file content
        this.file_extension = "";   // TODO: set this properly!
    }

    rename(file_name : string) { 
        this.file_name = file_name;
        //this.save();
    }

    save() {
        var data = JSON.stringify(this)
        localStorage.setItem(LOCAL_STORAGE_PREFIX + this.tab_id, data);
        console.log("SAVE FILE", this.tab_id);
    }

    load() { 
        var string_data = localStorage.getItem(LOCAL_STORAGE_PREFIX + this.tab_id);
        if (string_data !== null) {
            var data = JSON.parse(string_data);
            // TODO: do smoething with this data.
        }
        // error? 
    }
}


class NewFileModal extends Modal {

    constructor(editor : Editor) {
        super(MODAL_NEW_FILE_ID)
        const UPLOAD_ID : string = `${MODAL_NEW_FILE_ID}_upload`
        const NEW_ID : string = `${MODAL_NEW_FILE_ID}_new"`
        const BUTTON_CREATE_ID : string = `${MODAL_NEW_FILE_ID}_btn_create`
        const MODAL_BODY : string = `
            <h5> Create new file:</h5> 
            <input type="text" class="form-control" id="${NEW_ID}" placeholder="${UNTITLED_NAME}${SOURCE_FILE_EXTENSION}">

            <h5> Upload new file:</h5> 
            <input type="file" class="form-control" id="${UPLOAD_ID}" placeholder="${UNTITLED_NAME}${SOURCE_FILE_EXTENSION}">

            <div class="mt-2">
                <button id="${BUTTON_CREATE_ID}", type="button" class="btn btn-success w3-bar-item p-10">Create</button>
            </div>`
        createNewModal(MODAL_NEW_FILE_ID, MODAL_BODY)
        // TODO: refactor this majorly!
        $(`#${BUTTON_CREATE_ID}`).on("click", function() {
            // get modal data
            var modal = $(`#${MODAL_NEW_FILE_ID}`);
            var form_control = modal.find(".form-control");
            console.log(form_control);
            // TODO: cast below to correct types?
            var new_file_name : string = form_control?.get(0)?.value;
            var upload_file_name = form_control?.get(1)?.value;
            var upload_file = form_control.get(1)?.files[0]!;

            if (new_file_name.length === 0) { // set the file name to the upload file if none was given
                var path : Array<string> = upload_file_name.split("\\");
                new_file_name = path[path.length - 1].split(".")[0];
            }
            if (new_file_name.length > 0) { // create a new file/upload one
                var editor_file = new EditorFile(new_file_name, "");
                if (upload_file_name.length > 0) { // upload a file
                    var reader = new FileReader();
                    reader.readAsText(upload_file);
                    reader.onload = function(event) {  // this is the closure that will create the file/tab
                        console.log(event.target?.result);
                        editor_file.content = event.target?.result?.toString()!; // set file content
                        editor.newEditorTab(editor_file, true); // create a tab
                        editor.activateTab(editor_file.tab_id);
                        console.log(editor_file);
                    }
                } else { // create a new file
                    editor.newEditorTab(editor_file, true); // create a tab
                    editor.activateTab(editor_file.tab_id);
                }
            }
            modal.modal('hide'); // close the modal after creating the file/tab
        })
    }

    clear_data() {
        var form_control = this.get().find(".form-control");
        form_control.get(0)!.value = ""
        form_control.get(1)!.value = ""
    }
}

class RecoverModal extends Modal {

    constructor(editor : Editor) {
        super(MODAL_RECOVER_ID)
        const BUTTON_FRESH_ID : string = `${MODAL_RECOVER_ID}_btn_fresh`
        const BUTTON_RECOVER_ID : string = `${MODAL_RECOVER_ID}_btn_recover`
        const MODAL_BODY : string = `
            <h5> Session Recovered </h5>
            <div class="mt-3">
                <button id="${BUTTON_RECOVER_ID}", type="button" class="btn btn-success p-10">Recover</button>
                <button id="${BUTTON_FRESH_ID}", type="button" class="btn btn-success p-10">Start Fresh</button>
            </div>`
        createNewModal(MODAL_RECOVER_ID, MODAL_BODY) 
        var modal = this;
        $(`#${BUTTON_RECOVER_ID}`).on("click", function() { modal.recover(editor) } );
        $(`#${BUTTON_FRESH_ID}`).on("click", function() { modal.fresh(editor) } );

        // check local storage, we might need to show this...
        
        if (localStorage.length > 0) {
            this.show()
        }
    }

    fresh(editor : Editor) {// ok ignore local storage
        console.log(this);
        this.hide();
    }

    recover(editor : Editor) {  // recover files from local storage
        let editor_file : EditorFile | null = null;
        for (var i=0; i < localStorage.length; i++) {
            var data : string = localStorage.getItem(localStorage.key(i)!)!;
            editor_file = JSON.parse(data);
            console.log(editor_file);
            editor.newEditorTab(editor_file!, true);
        }
        editor.activateTab(editor_file!.tab_id);
        this.hide();
    }
    clear_data() {}
}

