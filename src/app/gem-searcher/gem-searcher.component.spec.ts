import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemSearcherComponent } from './gem-searcher.component';

describe('GemSearcherComponent', () => {
  let component: GemSearcherComponent;
  let fixture: ComponentFixture<GemSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
