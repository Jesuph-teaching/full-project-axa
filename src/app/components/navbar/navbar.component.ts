import { Component, computed, inject } from '@angular/core';
import { UserConfigurationStore } from '../../stores/userConfiguration.store';
import { RouterLink } from '@angular/router';
import {
  languages,
  navigationTranslations,
  navigationTranslationsKeys,
} from '../../translations/navigation';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  languages = languages;
  translations = computed<Record<navigationTranslationsKeys, string>>(() => {
    return Object.keys(navigationTranslations).reduce((acc, key) => {
      acc[key as navigationTranslationsKeys] =
        navigationTranslations[key as navigationTranslationsKeys][
          this.userConfigStore.language()
        ];
      return acc;
    }, {} as Record<navigationTranslationsKeys, string>);
  });

  userConfigStore = inject(UserConfigurationStore);
}
