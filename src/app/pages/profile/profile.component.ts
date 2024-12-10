import { Component, inject } from '@angular/core';
import { UserConfigurationStore } from '../../stores/userConfiguration.store';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  userConfigStore = inject(UserConfigurationStore);
}
