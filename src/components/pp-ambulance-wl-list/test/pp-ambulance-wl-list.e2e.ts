import { newE2EPage } from '@stencil/core/testing';

describe('pp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pp-ambulance-wl-list></pp-ambulance-wl-list>');

    const element = await page.find('pp-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
