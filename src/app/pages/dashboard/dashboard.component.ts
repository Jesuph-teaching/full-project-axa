import { Component, computed, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  navigationTranslations,
  navigationTranslationsKeys,
} from '../../translations/navigation';
import { UserConfigurationStore } from '../../stores/userConfiguration.store';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavbarComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {
  userConfigStore = inject(UserConfigurationStore);

  translations = computed<Record<navigationTranslationsKeys, string>>(() => {
    return Object.keys(navigationTranslations).reduce((acc, key) => {
      acc[key as navigationTranslationsKeys] =
        navigationTranslations[key as navigationTranslationsKeys][
          this.userConfigStore.language()
        ];
      return acc;
    }, {} as Record<navigationTranslationsKeys, string>);
  });
}
