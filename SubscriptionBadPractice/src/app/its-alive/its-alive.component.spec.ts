import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsAliveComponent } from './its-alive.component';

describe('ItsAliveComponent', () => {
  let component: ItsAliveComponent;
  let fixture: ComponentFixture<ItsAliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsAliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsAliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
