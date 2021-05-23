import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLsComponent } from './show-ls.component';

describe('ShowLsComponent', () => {
  let component: ShowLsComponent;
  let fixture: ComponentFixture<ShowLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
