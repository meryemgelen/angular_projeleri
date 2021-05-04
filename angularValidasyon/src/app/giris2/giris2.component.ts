import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { epostaValidator } from '../validasyon/epostaValidator';
import { selectValidator } from '../validasyon/selectValidator';

@Component({
  selector: 'app-giris2',
  templateUrl: './giris2.component.html',
  styleUrls: ['./giris2.component.scss']
})
export class Giris2Component implements OnInit {
  girisForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.girisForm = this.fb.group({
      adi: '',
      eposta: '',
      eposta2: '',
      programlamaDili: ['0', selectValidator],
      adresler: this.fb.array([])
    }, {
      validators: epostaValidator
    });
    window.eval('epostaYapistirKapat()');
  }
  get adi() {
    return this.girisForm.get('adi');
  }
  get eposta() {
    return this.girisForm.get('eposta');
  }
  get eposta2() {
    return this.girisForm.get('eposta2');
  }
  get programlamaDili() {
    return this.girisForm.get('programlamaDili');
  }
  get adresler(): FormArray {
    return this.girisForm.get('adresler') as FormArray;
  }
  adresEkle() {
    this.adresler.push(this.fb.control(''));
  }
  adresSil(i: number) {
    this.adresler.removeAt(i);
  }

}
