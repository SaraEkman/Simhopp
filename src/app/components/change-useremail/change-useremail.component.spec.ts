import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUseremailComponent } from './change-useremail.component';

describe('ChangeUseremailComponent', () => {
  let component: ChangeUseremailComponent;
  let fixture: ComponentFixture<ChangeUseremailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUseremailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeUseremailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
