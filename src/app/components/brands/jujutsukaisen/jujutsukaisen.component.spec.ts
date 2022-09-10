import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JujutsukaisenComponent } from './jujutsukaisen.component';

describe('JujutsukaisenComponent', () => {
  let component: JujutsukaisenComponent;
  let fixture: ComponentFixture<JujutsukaisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JujutsukaisenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JujutsukaisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
