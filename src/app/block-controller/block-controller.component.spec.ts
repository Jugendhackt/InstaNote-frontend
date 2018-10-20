import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockControllerComponent } from './block-controller.component';

describe('BlockControllerComponent', () => {
  let component: BlockControllerComponent;
  let fixture: ComponentFixture<BlockControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
