const MODAL_HTML = `
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
    var modal = MODAL_HTML.format(modal_id, modal_body); // this is fine :)
    $("body").prepend(modal);
    return $(modal_id);
}

