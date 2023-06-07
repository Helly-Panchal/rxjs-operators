import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatWithComponent } from './concat-with.component';

describe('ConcatWithComponent', () => {
  let component: ConcatWithComponent;
  let fixture: ComponentFixture<ConcatWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
