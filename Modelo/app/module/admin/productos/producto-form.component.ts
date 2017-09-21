import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../../service/producto.service';
import { AlertService } from '../../../service/alert.service';
import { Producto } from '../../../domain/producto';
import { StoreService } from '../../../service/store.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-producto-form.component',
    templateUrl: './producto-form.component.html'
})
export class ProductoFormComponent implements OnInit {

    form: FormGroup;

    @Input() isEdit: boolean;
    @Input() producto: Producto = new Producto();
    previewImagen: any;
    imagen: any;

    constructor(public activeModal: NgbActiveModal,
        public changeRef: ChangeDetectorRef,
        private fb: FormBuilder,
        private alertService: AlertService,
        private productoService: ProductoService,
        private storeService: StoreService,
        private sanitizer: DomSanitizer) {

    }

    ngOnInit(): void {
        this.form = this.fb.group({
            'nombre': [this.producto != null ? this.producto.nombre : null, Validators.required],
            'descripcion': [this.producto != null ? this.producto.descripcion : null, Validators.required],
            'precio': [this.producto != null ? this.producto.precio : null, Validators.required]
        });
    }

    handleSubmit(value: Producto) {

        if (this.isEdit) {
            this.submitUpdateForm(value);
        } else {
            this.submitSaveForm(value);
        }
    }

    submitSaveForm(value: Producto) {
        this.save(value);
    }

    save(producto: Producto) {
        producto.imagen = this.imagen;

        this.productoService.saveProducto(producto)
            .then(data => {
                this.handleResponseSuccess('guardo');
            })
            .catch(cause => {
                this.handleResponseError(cause, 'guardar');
            });
    }

    submitUpdateForm(value: Producto) {
        value.id = this.producto.id;
        this.update(value);
    }

    update(producto: Producto) {
        producto.imagen = this.imagen;

        this.productoService.updateProducto(producto)
            .then(data => {
                this.handleResponseSuccess('modifico');
            })
            .catch(cause => {
                this.handleResponseError(cause, 'modificar');
            });
    }

    clean() {
        this.form.reset();
    }

    handleResponseSuccess(accion: string) {
        this.clean();
        this.activeModal.close();
        this.alertService.success('Se ' + accion + ' exitosamente');
    }

    handleResponseError(cause, accion: string) {
        const errorMessage = JSON.parse(cause._body).errorDescription;
        this.alertService.error('Se produjo un error al ' + accion + ': ' + errorMessage);
    }

    public actualizarImagen(event) {
        let previews = document.getElementsByName('previewImagen');
        let previewNormal = document.getElementById('previewImagenNormal');

        let e1 = (event.srcElement || event.target);
        let file = e1.files[0];

        let reader = new FileReader();

        /*reader.onloadstart = function (e: any) {
            console.log('onloadstart');
        }
    
        reader.onload = (e: any) => {
            console.log('onload');
        }*/

        reader.onloadend = (e: any) => {
            //            console.log('onloadend');

            let imagenBytes = e.target.result;
            if (imagenBytes.indexOf('data:image/png;base64,') >= 0) {
                imagenBytes = imagenBytes.substring('data:image/png;base64,'.length);
            }
            this.imagen = imagenBytes;

            var i;
            for (i = 0; i < previews.length; i++) {
                previews[i].setAttribute('src', e.target.result);
            }
        };

        if (file) {
            previewNormal.setAttribute('height', '');
            previewNormal.setAttribute('width', '');

            reader.readAsDataURL(file);
        } else {
            previewNormal.setAttribute('height', '40');
            previewNormal.setAttribute('width', '40');

            var i;
            for (i = 0; i < previews.length; i++) {
                previews[i].setAttribute('src', 'assets/img/noimage.png');
            }
        }
    }

    public getProductImage() {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + this.previewImagen);
    }

    public eliminarImagen(producto: Producto) {
        producto.imagen = '';
        let imagen = document.getElementById('imagen');
        imagen.setAttribute('src', 'assets/img/noimage.png');
    }
}
