import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicherLogComponent } from './ficher-log.component';

describe('FicherLogComponent', () => {
  let component: FicherLogComponent;
  let fixture: ComponentFixture<FicherLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicherLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicherLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
