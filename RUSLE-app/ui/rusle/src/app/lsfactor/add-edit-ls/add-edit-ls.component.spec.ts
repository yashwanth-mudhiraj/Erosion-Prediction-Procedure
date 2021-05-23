import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLsComponent } from './add-edit-ls.component';

describe('AddEditLsComponent', () => {
  let component: AddEditLsComponent;
  let fixture: ComponentFixture<AddEditLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
