import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorCodes'
})
export class ErrorCodesPipe implements PipeTransform {

  private errorCodes = [
    '4','5','6','7','10','11','12','13','15','16','17','18','19','20','21','26','27','37','38','39','41','42','43','44','45','46','47','48','49','50','51','52','54','55','56','57','58','59','61','62','63','64','1000','1001','1002','1003','1004','1005','1006','1008','1013','1015','1016','1018','1019','1020','1021','1022','1023','1024','1025','1026','1027','1029','1030','1031'
  ]

  private errorMessagesEN = [
    'Service timed out',
    'Client timed out',
    'Unknown language pair',
    'Unsupported input format.',
    'Pending Acknowledgement',
    'System not ready',
    'Empty Translation Result.',
    'Timed-out waiting for translation to complete.',
    'Invalid request parameters. Verify data with the documentation and try again.',
    'Invalid sync parameters. Verify data with the documentation and try again.',
    'The filter for the requested format is unavailable at this time.',
    '{0} parameter is missing or is empty.',
    '{0} must be between {1} and {2} (was {3})',
    '{0} parameter is invalid.',
    'Input characters number is greater than the maximum allowed for translation request.',
    'Xmt translation failed',
    'Internal Service Error',
    'Failed to filter document',
    'Failed to output document',
    'Invalid BCM/JSON',
    'Language detection failed',
    'Invalid requestId {0}',
    'Unknown status for requestId {0}',
    'Translation not found for requestId {0}',
    'Language pair {0} does not exist.',
    'No subscription for source language {0} target language {1}',
    '{0} language is not code 3 format or auto. (was {1})',
    '{0} language is not code 3 format. (was {1})',
    'Source language cannot be detected',
    'Language pair for source {0} and target {1} does not exist',
    'The request was rejected because its size ({0}) exceeds the configured maximum ({1})',
    'The field input exceeds its maximum permitted size of {0} bytes.',
    'Unable to generate the access token. Verify your credentials and try again.',
    'Invalid access token. The Token has expired.',
    'Invalid access token.',
    'Invalid or expired access token.',
    'Problem accessing content',
    'Invalid XML detected',
    '{0} parameter size must be between {1} and {2}',
    'Translation cancelled',
    'Cannot cancel translation, status is already: {0}',
    'File has copy protection',
    'Failed to {0} {1}',
    '{0} with id {1} already exists',
    '{0} with id {1} does not exist',
    'No account was found',
    '{0} with email {1} already exists',
    'Role: {0} does not exist',
    'Email field cannot be updated',
    'Action: {0} does not exist',
    '{0} is required',
    'Cannot create api credentials with name {0} for account {1}',
    'Api credentials with name <{0}> already exists',
    'user {0} not found',
    'Error generating report. One of the following parameters must be empty: {0}, {1}',
    'Cannot regenerate api credentials secret for clientId: {0} for account {1}',
    'Parameter should be a positive integer: {0}',
    'Maximum page size exceeded. Maximum page size is: {0}',
    'Term already exists: {0}',
    'Term not found: {0}',
    '{0} with name: {1} already exists',
    'Domain wildcard {0} already exists',
    'Invalid domain wildcard {0}',
    'Forbidden to translate on detected source language {0} and given target {1}',
    '{0} parameter cannot be provided for source auto',
    'Please provide just one operation between({0})',

  ]

  transform(code: string): string {
    const result = this.errorCodes.indexOf(code);
    if (result == -1) {
      // en caso de no encontrar coincidencia con los idiomas aqui almacenados
      return 'Error desconocido';
    } else {
      // si encuentra coincidencia
       return this.errorMessagesEN[result];
    }
  }

}
