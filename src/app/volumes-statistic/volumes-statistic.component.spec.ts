import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesStatisticComponent } from './volumes-statistic.component';

describe('VolumesStatisticComponent', () => {
  let component: VolumesStatisticComponent;
  let fixture: ComponentFixture<VolumesStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumesStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumesStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
