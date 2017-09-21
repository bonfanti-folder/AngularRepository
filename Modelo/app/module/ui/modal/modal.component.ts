import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

    @ViewChild('staticModal') public modal: ModalDirective;

    @Input() backdrop = 'static';
    @Input() small = false;
    @Input() title = '';
    @Output() outModal = new EventEmitter<ModalDirective>();

    ngOnInit() {
        this.outModal.emit(this.modal);
    }

}

