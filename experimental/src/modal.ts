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