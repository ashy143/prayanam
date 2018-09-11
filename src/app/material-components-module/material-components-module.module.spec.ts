import { MaterialComponentsModuleModule } from './material-components-module.module';

describe('MaterialComponentsModuleModule', () => {
  let materialComponentsModuleModule: MaterialComponentsModuleModule;

  beforeEach(() => {
    materialComponentsModuleModule = new MaterialComponentsModuleModule();
  });

  it('should create an instance', () => {
    expect(materialComponentsModuleModule).toBeTruthy();
  });
});
