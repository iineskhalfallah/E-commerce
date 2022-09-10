import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JjkItemComponent } from './jjk-item.component';

describe('JjkItemComponent', () => {
  let component: JjkItemComponent;
  let fixture: ComponentFixture<JjkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JjkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JjkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
