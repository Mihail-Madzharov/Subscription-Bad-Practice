import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySoManyComponent } from './why-so-many.component';

describe('WhySoManyComponent', () => {
  let component: WhySoManyComponent;
  let fixture: ComponentFixture<WhySoManyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhySoManyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySoManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
