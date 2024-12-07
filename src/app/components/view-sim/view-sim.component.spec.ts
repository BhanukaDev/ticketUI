import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSimComponent } from './view-sim.component';

describe('ViewSimComponent', () => {
  let component: ViewSimComponent;
  let fixture: ComponentFixture<ViewSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
