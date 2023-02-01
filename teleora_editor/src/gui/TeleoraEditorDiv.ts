import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript"

export class TeleoraEditorDiv {
    private editorDiv: HTMLDivElement;
    private editorView: EditorView;

    public constructor() {
        this.editorDiv = document.createElement("div");

        this.editorDiv.id = "teleora_editor_div";

        this.constructEditor();
    }

    private constructEditor(): void {
        this.editorView = new EditorView({
            extensions: [
                basicSetup,
                javascript()
            ],
            parent: this.editorDiv
        });
    }

    public getDiv(): HTMLDivElement {
        return this.editorDiv;
    }
}
