import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbSidebarComponent } from './dumb-sidebar.component';

describe('DumbSidebarComponent', () => {
  let component: DumbSidebarComponent;
  let fixture: ComponentFixture<DumbSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumbSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
