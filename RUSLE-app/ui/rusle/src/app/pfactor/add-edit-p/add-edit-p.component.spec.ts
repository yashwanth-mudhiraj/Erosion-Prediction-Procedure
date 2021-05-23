import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPComponent } from './add-edit-p.component';

describe('AddEditPComponent', () => {
  let component: AddEditPComponent;
  let fixture: ComponentFixture<AddEditPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
