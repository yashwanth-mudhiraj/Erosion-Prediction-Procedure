import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfactorComponent } from './cfactor.component';

describe('CfactorComponent', () => {
  let component: CfactorComponent;
  let fixture: ComponentFixture<CfactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
