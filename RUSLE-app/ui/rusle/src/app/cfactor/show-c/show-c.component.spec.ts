import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCComponent } from './show-c.component';

describe('ShowCComponent', () => {
  let component: ShowCComponent;
  let fixture: ComponentFixture<ShowCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
