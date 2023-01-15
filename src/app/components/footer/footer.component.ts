import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  downloadSportAdmin() {
    window.open('https://support.sportadmin.se/support/solutions/articles/48000565561-ladda-ner-sportadmins-medlemsapp');
  }
  supportMember() {
    window.open('https://sportadmin.se/form/form.asp?ID=%7B9C1F87E3-2DCE-4AE7-A8DE-7249C480E80D%7D');
  }
}
