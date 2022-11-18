import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartToolbarComponent } from './smart-toolbar.component';

describe('SmartToolbarComponent', () => {
  let component: SmartToolbarComponent;
  let fixture: ComponentFixture<SmartToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
