import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonslayerComponent } from './demonslayer.component';

describe('DemonslayerComponent', () => {
  let component: DemonslayerComponent;
  let fixture: ComponentFixture<DemonslayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonslayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonslayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
