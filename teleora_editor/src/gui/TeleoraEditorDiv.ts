import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

import teleoraGUIData from "./gui.json";

const { teleoraEditorDivData } = teleoraGUIData.teleoraDivData.children;

export class TeleoraEditorDiv {
    private editorDiv: HTMLDivElement;
    private editorView: EditorView;

    public constructor() {
        this.editorDiv = document.createElement("div");

        this.editorDiv.id = teleoraEditorDivData.id;

        this.constructEditor();
    }

    private constructEditor(): void {
        this.editorView = new EditorView({
            extensions: [
                basicSetup,
                javascript() // TODO: Replace this with Teleora.
            ],
            parent: this.editorDiv
        });
    }

    public getDiv(): HTMLDivElement {
        return this.editorDiv;
    }

    public getEditorView(): EditorView {
        return this.editorView;
    }
}
