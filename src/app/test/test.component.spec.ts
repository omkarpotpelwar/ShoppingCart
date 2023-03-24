import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { TestComponent } from './test.component';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check my name', ()=> {
   let de = fixture.debugElement.query(By.css('h1'))
   let el:HTMLElement = de.nativeElement;
   expect(el.innerText).toBe('Joydev')

  })
});
