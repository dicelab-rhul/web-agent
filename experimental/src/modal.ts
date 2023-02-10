// TODO: there is a lot to do here:
// - Fix the errors (e.g., non-existent properties).
// - Refactor the code, so that the JQuery dependency is removed.
// - Replace `var` with `const` and `let` whenever possible, and remove global variables.
// - Add visibility modifiers to all class members.
// - 1 class per file.
// - Refactor the methods that are too long.
// - Fix the types.
// - Remove all instances of parser-generated code, and replace them with proper nodes.

const MODAL_HTML : string = `
<div class="modal fade" id="{}" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <!--- Filled by query -->
                {}
            </div>
        </div>
    </div>
</div>`

export function createNewModal(modal_id, modal_body) {
    // add the modal to the document body
    var modal = MODAL_HTML.format(modal_id, modal_body);
    $("body").prepend(modal);
    return $(modal_id);
}

export abstract class Modal {

    modal_id : string;

    constructor(modal_id : string) {
        this.modal_id = modal_id
    }

    get() { return $(`#${this.modal_id}`); }
    show() { this.get().modal('show'); }
    hide() { this.get().modal('hide'); this.clear_data() }

    abstract clear_data(); // clears any form data that might be present
}
