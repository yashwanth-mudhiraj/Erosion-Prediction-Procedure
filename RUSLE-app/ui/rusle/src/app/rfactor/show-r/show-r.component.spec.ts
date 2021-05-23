import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRComponent } from './show-r.component';

describe('ShowRComponent', () => {
  let component: ShowRComponent;
  let fixture: ComponentFixture<ShowRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
