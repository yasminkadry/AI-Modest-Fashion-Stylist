import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIStylistComponent } from './ai-stylist.component';

describe('AIStylistComponent', () => {
  let component: AIStylistComponent;
  let fixture: ComponentFixture<AIStylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIStylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
