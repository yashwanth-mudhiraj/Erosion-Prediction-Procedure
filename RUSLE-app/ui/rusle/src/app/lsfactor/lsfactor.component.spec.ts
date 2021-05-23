import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsfactorComponent } from './lsfactor.component';

describe('LsfactorComponent', () => {
  let component: LsfactorComponent;
  let fixture: ComponentFixture<LsfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
