import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsitesComponent } from './subsites.component';

describe('SubsitesComponent', () => {
  let component: SubsitesComponent;
  let fixture: ComponentFixture<SubsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
