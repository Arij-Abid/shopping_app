import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContinueComponent } from './btn-continue.component';

describe('BtnContinueComponent', () => {
  let component: BtnContinueComponent;
  let fixture: ComponentFixture<BtnContinueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnContinueComponent]
    });
    fixture = TestBed.createComponent(BtnContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
