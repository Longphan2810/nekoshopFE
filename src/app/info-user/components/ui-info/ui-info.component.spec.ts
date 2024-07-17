import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInfoComponent } from './ui-info.component';

describe('UiInfoComponent', () => {
  let component: UiInfoComponent;
  let fixture: ComponentFixture<UiInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
