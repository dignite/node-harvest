import Company from './company';

const harvest = {
  request: () => {
    console.log('Request Made');
  }
};

/**
 * Dummy test
 */
describe('Company test', () => {
  let instance;
  let request;
  let id = 1000;

  beforeEach(() => {
    instance = new Company(harvest);
    request = spyOn(instance.harvest, 'request');
  });

  it('Company is instantiable', () => {
    expect(instance).toBeInstanceOf(Company);
  });

  it('should have a get method that calls the request method', () => {
    instance.get();
    expect(request).toBeCalledWith('GET', '/v2/company');
  });
});
