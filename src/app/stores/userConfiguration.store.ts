import { computed } from '@angular/core';
import { UserConfigurationI } from './userConfiguration.model';
import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
const initial_value: UserConfigurationI = {
  firstName: 'John',
  lastName: 'John',
  language: 'en',
  theme: 'light',
};

export const UserConfigurationStore = signalStore(
  { providedIn: 'root' },
  withState(initial_value),
  withComputed(({ firstName, lastName }) => ({
    fullName: computed(() => `${firstName()} ${lastName()}`),
  })),
  withMethods((store) => ({
    updateState(state: keyof UserConfigurationI, event: Event) {
      // validation of the state
      patchState(store, () => ({
        [state]:
          state === 'theme'
            ? (event.target as HTMLInputElement).checked
              ? 'light'
              : 'dark'
            : (event.target as HTMLInputElement).value,
      }));
    },
  })),
  withHooks({
    onInit(store) {
      watchState(store, () => {
        document.documentElement.setAttribute('data-theme', store.theme());
      });
    },
  })
);
