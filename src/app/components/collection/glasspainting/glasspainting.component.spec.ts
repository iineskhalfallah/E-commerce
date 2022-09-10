import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlasspaintingComponent } from './glasspainting.component';

describe('GlasspaintingComponent', () => {
  let component: GlasspaintingComponent;
  let fixture: ComponentFixture<GlasspaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlasspaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlasspaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
