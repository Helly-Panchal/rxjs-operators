import { Component, OnInit } from '@angular/core';
import { Subject, filter, from, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public userData = [
    { Id: '1', Name: 'Hetvi', Gender: 'Female', Age: '22' },
    { Id: '2', Name: 'Raj', Gender: 'Male', Age: '23' },
    { Id: '3', Name: 'Ravi', Gender: 'Male', Age: '20' },
    { Id: '4', Name: 'Riya', Gender: 'Female', Age: '22' },
    { Id: '5', Name: 'Pranshi', Gender: 'Female', Age: '26' },
    { Id: '6', Name: 'Zeel', Gender: 'Female', Age: '21' },
    { Id: '7', Name: 'Purvil', Gender: 'Male', Age: '22' },
    { Id: '8', Name: 'Krisha', Gender: 'Female', Age: '30' },
    { Id: '9', Name: 'Manan', Gender: 'Male', Age: '19' },
    { Id: '10', Name: 'Paresh', Gender: 'Male', Age: '32' },
  ];

  public observableList: any[] = [];
  public sub$ = new Subject();
  public observable1$ = from(this.userData);

  public ngOnInit(): void {
    this.observable1$.pipe(takeUntil(this.sub$)).subscribe((res: any) => {
      this.observableList.push(res);
    });
  }

  public lengthMoreThanFive(): void {
    this.observableList = [];
    this.observable1$.pipe(filter(member => member.Name.length >= 5)).subscribe((res) => {
      this.observableList.push(res);
    });
  }

  public lengthLessThanFive(): void {
    this.observableList = [];
    this.observable1$.pipe(filter(member => member.Name.length < 5)).subscribe((res) => {
      this.observableList.push(res);
    });
  }

  public filterByGenderMale(): void {
    this.observableList = [];
    this.observable1$.pipe(filter(member => member.Gender === 'Male')).subscribe((res) => {
      this.observableList.push(res);
    });
  }

  public filterByGenderFemale(): void {
    this.observableList = [];
    this.observable1$.pipe(filter(member => member.Gender === 'Female')).subscribe((res) => {
      this.observableList.push(res);
    });
  }

  public clear(): void {
    this.observableList = [];
    this.ngOnInit();
  }
}
