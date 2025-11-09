import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedInformationComponent } from './fixed-information.component';

describe('FixedInformationComponent', () => {
  let component: FixedInformationComponent;
  let fixture: ComponentFixture<FixedInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
