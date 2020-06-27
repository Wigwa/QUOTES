import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quotes.DetailComponent } from './quotes.detail.component';

describe('Quotes.DetailComponent', () => {
  let component: Quotes.DetailComponent;
  let fixture: ComponentFixture<Quotes.DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quotes.DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quotes.DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
