import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { List } from './list';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodosProvider } from '../../providers/todos/todos';

describe('List', () => {
  let de: DebugElement;
  let comp: List;
  let fixture: ComponentFixture<List>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [List],
      imports: [
        IonicModule.forRoot(List)
      ],
      providers: [
        NavController,
        TodosProvider,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('ion-title'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should be titled TodoList', () => {
    fixture.detectChanges();
    const title = de.nativeElement as HTMLElement;
    expect(title.textContent).toBe('TodoList');
  });

});
