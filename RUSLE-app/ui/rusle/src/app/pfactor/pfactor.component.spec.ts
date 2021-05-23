import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfactorComponent } from './pfactor.component';

describe('PfactorComponent', () => {
  let component: PfactorComponent;
  let fixture: ComponentFixture<PfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
