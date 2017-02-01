'use strict';

const helpers = require('../helpers');

function InvoiceMessages(harvest) {
  this.harvest = harvest;
  this.client = harvest.client;
}

InvoiceMessages.prototype.messagesByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('getting all message by invoice requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages';
  this.harvest.client('GET', url, {}, cb);
};

InvoiceMessages.prototype.getByInvoice = function(options, cb) {
  if (!helpers.has(options, ['invoice_id', 'id'])) {
    return cb(new Error('getting an invoice message requires an id for both invoice and the message'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
  this.harvest.client('GET', url, {}, cb);
};

InvoiceMessages.prototype.create = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('creating an invoice message requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages';
  this.harvest.client('POST', url, options, cb);
};

InvoiceMessages.prototype.delete = function(options, cb) {
  if (!helpers.has(options, ['invoice_id', 'id'])) {
    return cb(new Error('deleting an invoice message requires an id for both invoice and the message'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/' + options.id;
  this.harvest.client('DELETE', url, {}, cb);
};

InvoiceMessages.prototype.markSent = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as sent requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/mark_as_sent';
  delete options.invoice_id;
  this.harvest.client('POST', url, options, cb);
};

InvoiceMessages.prototype.markClosed = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as closed requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/mark_as_closed';
  delete options.invoice_id;
  this.harvest.client('POST', url, options, cb);
};

InvoiceMessages.prototype.markOpen = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as open requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/re_open';

  delete options.invoice_id;
  this.harvest.client('POST', url, options, cb);

};

InvoiceMessages.prototype.markDraft = function(options, cb) {
  if (!helpers.has(options, ['invoice_id'])) {
    return cb(new Error('marking an invoice message as draft requires an id'));
  }

  let url = '/invoices/' + options.invoice_id + '/messages/mark_as_draft';
  this.harvest.client('POST', url, {}, cb);
};

module.exports = InvoiceMessages;