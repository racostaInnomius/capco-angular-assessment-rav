import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import data from '../_files/sample_data.json';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {
  public rowForm = new FormControl('');
  public colForm = new FormControl('');
  row: number[];
  col: number[];
  public sampleData: {}[] = data;
  public data: {}[];
  constructor() {}

  onSubmit() {
    this.cleanArray();
    this.addValuesArr(this.rowForm.value, 'row');
    this.addValuesArr(this.colForm.value, 'col');
    this.data = this.sampleData.filter((item, index) => index < this.rowForm.value);
    this.cleanForm();
  }

  ngOnInit(): void {

  }

  addValuesArr(value: number, type: string) {
    for (let i = 0; i < value; i++) {
      if (type === 'row') {
        this.row.push(i);
      } else {
        this.col.push(i);
      }
    }
  }

  cleanForm() {
    this.rowForm = new FormControl('');
    this.colForm = new FormControl('');
  }

  cleanArray() {
    this.row = [];
    this.col = [];
  }

  updatePagination(value: number) {
    const ini = (value - 1) * 5;
    const last = value * 5;
    this.data = this.data.slice(ini, last);
  }

  showData(value: any){
    alert('This is your id: ' + value);
  }
}
