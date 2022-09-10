import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnyComponent } from './kny.component';

describe('KnyComponent', () => {
  let component: KnyComponent;
  let fixture: ComponentFixture<KnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
