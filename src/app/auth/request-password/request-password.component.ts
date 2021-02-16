/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { NbRequestPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-request-password',
  styleUrls: ['./request-password.component.scss'],
  templateUrl: './request-password.component.html',
})

export class RequestPasswordComponent extends NbRequestPasswordComponent {
}
