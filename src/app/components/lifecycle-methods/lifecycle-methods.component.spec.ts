import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleMethodsComponent } from './lifecycle-methods.component';

describe('LifecycleMethodsComponent', () => {
  let component: LifecycleMethodsComponent;
  let fixture: ComponentFixture<LifecycleMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecycleMethodsComponent]
    });
    fixture = TestBed.createComponent(LifecycleMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
