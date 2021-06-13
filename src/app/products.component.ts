import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent {
    productName = 'A ';
    isDisabled = true;
    products = ['A Book','A Tree'];

    constructor() {
        setTimeout(() => {
            this.isDisabled = false;
        }, 3000);
    }

    addProduct(form) {
        if (form.valid) {
            this.products.push(form.value.productName);
        }
    }

    onRemoveProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
    }
}