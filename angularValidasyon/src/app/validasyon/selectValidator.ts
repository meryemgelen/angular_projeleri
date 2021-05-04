import { AbstractControl } from '@angular/forms';

export function selectValidator(control: AbstractControl): { [hata: string]: any } | null {
  if (control.value === '0') {
    return { "hata": "bir seçim yapmalısınız." };
  }
  return null;
}
