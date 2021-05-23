import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfactorComponent } from './rfactor.component';

describe('RfactorComponent', () => {
  let component: RfactorComponent;
  let fixture: ComponentFixture<RfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
