import { element, by, ElementFinder } from 'protractor';

export class ProductOrderComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-product-order div table .btn-danger'));
  title = element.all(by.css('jhi-product-order div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class ProductOrderUpdatePage {
  pageTitle = element(by.id('jhi-product-order-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  placedDateInput = element(by.id('field_placedDate'));
  statusSelect = element(by.id('field_status'));
  codeInput = element(by.id('field_code'));
  invoiceIdInput = element(by.id('field_invoiceId'));
  customerInput = element(by.id('field_customer'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setPlacedDateInput(placedDate) {
    await this.placedDateInput.sendKeys(placedDate);
  }

  async getPlacedDateInput() {
    return await this.placedDateInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return await this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption(timeout?: number) {
    await this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setCodeInput(code) {
    await this.codeInput.sendKeys(code);
  }

  async getCodeInput() {
    return await this.codeInput.getAttribute('value');
  }

  async setInvoiceIdInput(invoiceId) {
    await this.invoiceIdInput.sendKeys(invoiceId);
  }

  async getInvoiceIdInput() {
    return await this.invoiceIdInput.getAttribute('value');
  }

  async setCustomerInput(customer) {
    await this.customerInput.sendKeys(customer);
  }

  async getCustomerInput() {
    return await this.customerInput.getAttribute('value');
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class ProductOrderDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-productOrder-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-productOrder'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
