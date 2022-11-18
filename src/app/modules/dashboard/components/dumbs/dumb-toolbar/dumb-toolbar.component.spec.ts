import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbToolbarComponent } from './dumb-toolbar.component';

describe('DumbToolbarComponent', () => {
  let component: DumbToolbarComponent;
  let fixture: ComponentFixture<DumbToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
