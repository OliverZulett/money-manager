import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSidebarComponent } from './smart-sidebar.component';

describe('SmartSidebarComponent', () => {
  let component: SmartSidebarComponent;
  let fixture: ComponentFixture<SmartSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
