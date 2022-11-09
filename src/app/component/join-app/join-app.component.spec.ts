import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAppComponent } from './join-app.component';

describe('JoinAppComponent', () => {
  let component: JoinAppComponent;
  let fixture: ComponentFixture<JoinAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
