import { CompromissoAppPage } from './app.po';

describe('compromisso App', function() {
  let page: CompromissoAppPage;

  beforeEach(() => {
    page = new CompromissoAppPage();
  });

  it('deve exibir mensagem dizendo que o aplicativo funciona', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CompromissoAPP - Angular');
  });
});
