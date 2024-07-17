import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiadminComponent } from './uiadmin.component';

describe('UiadminComponent', () => {
  let component: UiadminComponent;
  let fixture: ComponentFixture<UiadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
