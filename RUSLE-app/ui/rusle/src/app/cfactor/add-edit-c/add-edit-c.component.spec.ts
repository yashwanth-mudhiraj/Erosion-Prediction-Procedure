import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCComponent } from './add-edit-c.component';

describe('AddEditCComponent', () => {
  let component: AddEditCComponent;
  let fixture: ComponentFixture<AddEditCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
