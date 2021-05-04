import { formatCurrency } from '@angular/common';
import { AbstractControl } from '@angular/forms';

export function epostaValidator(form: AbstractControl): { [hata: string]: any } | null {
  form.get('eposta2')?.setErrors(null);
  if (form.get('eposta')?.value && form.get('eposta').value !== form.get('eposta2')?.value) {
    form.get('eposta2').setErrors({ "eposta": "Eposta İle Aynı Değil" });

    return { "hata": "Eposta Alanları eşit değildir" };
  }
  return null;
}
