import { App } from './app.po';

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  describe('default screen', () => {
    beforeEach(() => {
      app.navigateTo('/');
    });

    it('should have a title saying TodoList', () => {
      app.getListTitleText().then(title => {
        expect(title).toEqual('TodoList');
      });
    });
  })
});
